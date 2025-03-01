'use client'

import React, { useRef, useEffect, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import useAIChatStore from '@/app/hooks/useAIChatStore';
import { IoIosClose } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const AIChatModal = () => {
    // const { messages, input, handleInputChange, handleSubmit } = useChat({
    //     api: 'api/chat',
    //     onError: (e) => {
    //         console.log(e);
    //     }
    // });
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    console.log(messages)


    const chatParent = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const domNode = chatParent.current;
        if (domNode) {
            domNode.scrollTop = domNode.scrollHeight;
        }
    }, [messages]);


    return (
        <div className={` bg-gray-100 h-full w-full overflow-x-hidden overflow-y-auto`}>
            <div className={`flex flex-col h-full border `}>
            <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-4">
                {messages.length === 0 ? (
                <div className="text-center text-gray-500 h-full flex justify-center items-center flex-col">
                    <p className="mb-2">Ask Any Question About your Finances:</p>
                    <p className="mb-1">- &quot;What&apos;s my total income?&quot;</p>
                    <p className="mb-1">- &quot;How much should I spend everyday from now to meet my monthly limit?&quot;</p>
                    <p className="mb-1">- &quot;How does my Cashflow looks like?&quot;</p>
                </div>
                ) : (
                <ul ref={chatParent} className="flex flex-col gap-4">
                    {messages.map((m, index) => (
                    <li
                        key={index}
                        className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                        className={`rounded-xl p-2 max-w-xs ${m.role === 'user' ? 'bg-[#299D91] text-white' : 'bg-gray-300 text-black'}`}
                        >
                        {m.content}
                        </div>
                    </li>
                    ))}
                </ul>
                )}
            </div>
            <form onSubmit={handleSubmit} className="p-4 md:mx-60 bg-transparent flex">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    className="flex-grow p-4 border rounded-full mr-2 focus:outline-none"
                    placeholder="Type your message..."
                />
                {/* <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded-lg" > Send </button> */}
            </form>
            </div>
        </div>
    );
};

export default AIChatModal;
