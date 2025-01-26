import { defaultLocale } from "@/lib/i18n";

export default async function Home({ params }) {
    const langName = params.lang || defaultLocale;
    return (
        <div className="max-w-[1280px] mx-auto">
            this is share page
        </div>
    );
}
