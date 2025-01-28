import { defaultLocale } from "@/lib/i18n";
import Content from '@/posts/privacy-policy.mdx'

export default async function Home({ params }) {
    const langName = params.lang || defaultLocale;
    return (
        <div className="max-w-[1280px] mx-auto text-lg text-left pb-4">
            <Content />
        </div>
    );
}
