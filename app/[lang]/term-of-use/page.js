import { defaultLocale } from "@/lib/i18n";
import Content from '@/posts/term-of-use.mdx'

export default async function Home({ params }) {
    const langName = params.lang || defaultLocale;
    return (
        <div className="max-w-[800px] mx-auto text-lg text-left pb-4">
            <Content />
        </div>
    );
}
