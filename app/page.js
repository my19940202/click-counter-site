// 这个页面对应了 http://localhost:3000

import { defaultLocale, getDictionary } from "@/lib/i18n";
import Hero from "@/components/home/hero";
import Seo from "@/components/home/seo";
import List from "@/components/home/list";

export default async function Home({ params }) {
    const langName = params.lang || defaultLocale;

    return (
        <div className="max-w-[1280px] mx-auto">
            <Hero params={params} />
            <List lang={langName} />
            <Seo params={params} />
        </div>
    );
}
