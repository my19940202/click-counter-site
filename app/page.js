// 这个页面对应了 http://localhost:3000

import { defaultLocale } from "@/lib/i18n";
import Hero from "@/components/home/hero";
import Seo from "@/components/home/seo";

export default async function Home({ params }) {
    return (
        <div className="max-w-[1280px] mx-auto">
            <Hero params={params} />
            <Seo params={params} />
        </div>
    );
}
