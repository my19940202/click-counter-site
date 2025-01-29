import { defaultLocale, getDictionary } from "@/lib/i18n";
import { supabase } from '@/lib/dbInit';
import { NextResponse } from "next/server";
import { LuExternalLink } from "react-icons/lu";

export default async function Page({ params }) {
    const lang = params.lang || defaultLocale;
    const { ShareDialog } = getDictionary(lang);

    // 在服务器端直接获取数据
    const { data: shareData, error } = await supabase
        .from('click-counter')
        .select('id, user, name, created_at, desc')

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
                            <th>{ShareDialog.label.user}</th>
                            <th>{ShareDialog.label.title}</th>
                            <th>{ShareDialog.label.desc}</th>
                            <th>{ShareDialog.label.time}</th>
                            <th>{ShareDialog.label.operation}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shareData.map((item, index) => (
                            <tr key={item.id || index}>
                                <th>{index + 1}</th>
                                <td>{item.user}</td>
                                <td className="max-w-[200px] truncate">{item.name}</td>
                                <td className="max-w-[200px] truncate">{item.desc}</td>
                                <td>{item.created_at.replace('T', ' ')}</td>
                                <td>
                                    <a href={`/${lang}/share/${item.id}`} className="btn btn-sm btn-success px-4">
                                        <LuExternalLink size={18} />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}