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
    const { name, user, data, desc } = await request.json();
    const { data: insertedData, error } = await supabase
        .from('click-counter')
        .insert([{
            name,
            user,
            data,
            desc,
            created_at: getFormatedTime()
        }])
        .select('id');

    if (error) {
        return NextResponse.json({ success: false, error: error.message });
    }

    return NextResponse.json({
        success: true,
        data: insertedData
    });
}