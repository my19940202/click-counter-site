import { NextResponse } from 'next/server'

export async function GET(request) {
    return new NextResponse(JSON.stringify({
        success: true,
        data: 'this is click counter test api'
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET'
        }
    });
}