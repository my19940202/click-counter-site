import { NextResponse } from 'next/server'
import { supabase } from '@/lib/dbInit';

function getFormatedTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const formatter = new Intl.DateTimeFormat('en-CA', options);
    return formatter.format(now).replace(',', '');
}

export async function POST(request) {
    // 刘师傅装修小程序里面预留的接口 采集最后的订单数据
    const { bill, user, total } = await request.json();
    const { error } = await supabase
        .from('decorations-bill')
        .insert([{
            bill, user, total,
            created_at: getFormatedTime()
        }]);

    if (error) {
        return NextResponse.json({ success: false, error: error.message });
    }

    return new NextResponse(JSON.stringify({
        success: true,
        data: 'add db success'
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET'
        }
    });
}