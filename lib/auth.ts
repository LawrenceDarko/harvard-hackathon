import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
        name: 'Credentials',
        credentials: {
            email: { label: 'Email', type: 'email' },
            password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials, req) {
            try {
                const { email, password } = credentials as any;
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                });
        
                // Check if the response is OK
                if (!res.ok) {
                    throw new Error(`Error: ${res.status} ${res.statusText}`);
                }
        
                // Check if the response is valid JSON
                const contentType = res.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const user = await res.json();
        
                    if (user.success) {
                        return user;
                    } else {
                        throw new Error(user.message || "Authentication failed");
                    }
                } else {
                    throw new Error("Invalid response from server");
                }
        
            } catch (error: any) {
                console.error("Authorize Error:", error);
                throw new Error(`testing: ${error.message}` || "Something went wrong during authentication");
            }
        },        
        }),
    ],
    callbacks: {
        async jwt({ token, user }: { token: any; user: any }) {
        if (user) {
            token.accessToken = user.token;
            // token.userId = user.data?._id;
        }
        return {...token, ...user};
        },
        async session({ session, token }: { session: any; token: any }) {
            session.user = token as any;
            return session;
        },
    },
    pages: {
        signIn: '/auth/login',
        // signOut: '/auth/login',
        // error: '/auth/error',
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
};