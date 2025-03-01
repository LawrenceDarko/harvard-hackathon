import { NextRequest, NextResponse } from "next/server"
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {

    const cookieStore = cookies()
    const cookie = cookieStore.delete('token')

    return NextResponse.json({cookie})
}