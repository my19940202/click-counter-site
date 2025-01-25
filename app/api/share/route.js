import { NextResponse } from 'next/server'

// 模拟数据
let redeemList = [
    {
        idx: 0,
        code: '111122203330',
        time: new Date().toISOString().split('T')[0],
        status: 'fail'
    }
];
export async function GET() {
    return NextResponse.json({ success: true, data: [1, 2, 3] })
}
