import { supabase } from "@/lib/dbInit";
import '../../../../components/home/hero.css'
import { GrCircleInformation as Info } from "react-icons/gr";
import { MdOutlineDateRange as DateIcon } from "react-icons/md";

export default async function Home({ params }) {
    const id = params.id;
    // 在服务器端直接获取数据
    const { data: shareData, error } = await supabase
        .from('click-counter')
        .select('user, name, created_at, desc, data')
        // Filters
        .eq('id', id)

    const { data: gridItems = [], user, name, created_at, desc } = shareData[0] || {};

    return (
        <div className="max-w-[1000px] mx-auto">
            <h1 className="text-center mb-2">{name}</h1>
            <div role="alert" className="alert mb-2">
                <><Info /> {user}</>
            </div>
            <div role="alert" className="alert mb-2">
                <><DateIcon /> {created_at}</>
                {desc && <><Info /> {desc} </>}
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 py-4">
                {
                    gridItems.map(item => {
                        return (
                            <div className='counter-card' >
                                <div className="counter-title text-2xl text-green-600 p-2 m-auto w-[80%] whitespace-nowrap overflow-hidden text-ellipsis">
                                    <span data-type="edit">{item.name}</span>
                                </div>
                                <div className="count-title text-green-600 mb-4 py-5">
                                    {item.value}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
}
