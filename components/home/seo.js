import { TEXT_CONF, SEO_TEXT } from '@/lib/i18n';

export default function Seo({ params }) {
    const { type = 'star', lang = 'en' } = params;

    return (
        <>
            <section
                className="relative z-10 flex flex-col items-start md:items-center py-10 md:py-20 overflow-hidden"
            >
                <h2 className="mt-5 font-bold text-5xl md:text-5xl">
                    {TEXT_CONF.seo[lang]}
                </h2>
                {
                    (SEO_TEXT[lang][type] || SEO_TEXT[lang]['white']).map(({ title, description }) => (
                        <div key={title} className="w-full max-w-3xl mb-8 p-8 rounded-lg shadow-xl">
                            <h3 className="text-2xl font-bold mb-6">
                                {title}
                            </h3>
                            <p className="text-lg">
                                {description}
                            </p>
                        </div>
                    ))
                }
            </section>
        </>
    );
}
