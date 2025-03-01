// app/api/get-token/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET as string;

export async function GET(req: NextRequest) {
    try {
        const token = await getToken({ req, secret });
        // console.log('Token:', token?.accessToken);
        return NextResponse.json(token);
    } catch (error: any) {
        console.error('Error in get-token API:', error);
        return NextResponse.json({ status: false, msg: error.message || 'An error occurred' }, { status: 500 });
    }
}