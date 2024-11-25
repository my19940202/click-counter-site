import { TEXT_CONF, SEO_TEXT } from '@/lib/i18n';

export default function Seo({ params }) {
    const { type = 'star', lang = 'en' } = params;

    return (
        <>
            <section
                className="relative z-10 flex flex-col items-start md:items-center py-10 md:py-20 overflow-hidden"
            >
                <h2 className="mt-5 font-bold text-5xl md:text-5xl">
                    this is seo area
                </h2>
            </section>
        </>
    );
}
