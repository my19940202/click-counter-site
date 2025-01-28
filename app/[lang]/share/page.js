import { defaultLocale } from "@/lib/i18n";
import { supabase } from '@/lib/dbInit';
import { NextResponse } from "next/server";

export default async function Page({ params }) {
    const lang = params.lang || defaultLocale;

    // 在服务器端直接获取数据
    const { data: shareData, error } = await supabase
        .from('click-counter')
        .select('id, user, name, created_at')

    if (error) {
        NextResponse.json({ success: false, data: [111] })
    }

    return (
        <div className="max-w-[1000px] mx-auto text-lg text-center pb-4">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shareData.map((item, index) => (
                            <tr key={item.id || index}>
                                <th>{index + 1}</th>
                                <td>{item.user}</td>
                                <td className="max-w-[200px] truncate">{item.name}</td>
                                <td>{item.created_at.replace('T', ' ')}</td>
                                <td>
                                    <a href={`/${lang}/share/${item.id}`} className="btn btn-sm btn-success">view detail</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}