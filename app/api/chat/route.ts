import {
    Message as VercelChatMessage,
    StreamingTextResponse,
    createStreamDataTransformer
} from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { HttpResponseOutputParser } from 'langchain/output_parsers';
import { RunnableSequence } from '@langchain/core/runnables';
import { formatDocumentsAsString } from 'langchain/util/document';
import { getServerSession } from "next-auth";
import { authOptions } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// For storing patient inputs
let patientInputs: string[] = [];
console.log(patientInputs)

/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
    return `${message.role}: ${message.content}`;
};

// Template to guide the chatbot
const TEMPLATE = `You are a medical assistant. Ask the user questions based on their previous responses to gather symptoms and relevant information for HPO (Human Phenotype Ontology) processing.
If a symptom or information matches an HPO term, note it down.
Continue asking follow-up questions based on the user's responses.
If you reach a point where enough information is gathered, politely let the user know. 

Current conversation: {chat_history}

user: {question}
assistant:`;

// Fetch HPO terms based on user input
async function fetchHPOTerms(input: string) {
    try {
        // const response = await fetch(`https://hpo.jax.org/api/hpo/search/?q=${encodeURIComponent(input)}`);
        const response = await fetch(`https://ontology.jax.org/api/hp/search?q=${encodeURIComponent(input)}`);
        const data = await response.json();
        if (data.terms && data.terms.length > 0) {
            return data.terms.map((term: any) => term.name);
        }
    } catch (error) {
        console.error("Failed to fetch HPO terms:", error);
    }
    return [];
}

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        const { messages } = await req.json();

        const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
        const currentMessageContent = messages[messages.length - 1].content;

        // Fetch HPO terms based on current message content
        const hpoTerms = await fetchHPOTerms(currentMessageContent);
        if (hpoTerms.length > 0) {
            patientInputs = [...patientInputs, ...hpoTerms];
        }

        const prompt = PromptTemplate.fromTemplate(TEMPLATE);

        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY!,
            model: 'gpt-4o-mini',
            temperature: 0.4,
            streaming: true,
            verbose: true,
        });

        const parser = new HttpResponseOutputParser();

        const chain = RunnableSequence.from([
            {
                question: (input) => input.question,
                chat_history: (input) => input.chat_history,
                context: () => JSON.stringify(patientInputs),
            },
            prompt,
            model,
            parser,
        ]);

        const stream = await chain.stream({
            chat_history: formattedPreviousMessages.join('\n'),
            question: currentMessageContent,
        });

        return new StreamingTextResponse(
            stream.pipeThrough(createStreamDataTransformer()),
        );
    } catch (e: any) {
        console.error("Error:", e.message);
        return Response.json({ error: e.message }, { status: e.status ?? 500 });
    }
}
