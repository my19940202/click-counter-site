
// https://www.nextjs.cn/docs/basic-features/data-fetching#getstaticpaths-static-generation
// 这个页面可以作为blog页面 用来讲解click counter怎么使用
import Hero from "@/components/home/hero";
import List from "@/components/home/list";
import Seo from "@/components/home/seo";
import { PURE_COLOR_TEXT, ANAMATION_TEXT, TOOLS_TEXT } from "@/lib/color";

export async function getStaticPaths() {
    // build时自动生成对应的页面提前 server渲染好 对SEO友好
    const typeList = [
        'about', 'how to use'
    ];
    const langs = ['zh', 'en'];
    let paths = langs.flatMap(lang =>
        typeList.map(category => ({ params: { lang, category } }))
    );
    return {
        paths,
        fallback: false
    };
}

const Detail = ({ params }) => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <Seo params={params} />
        </div>
    );
};

export default Detail;
