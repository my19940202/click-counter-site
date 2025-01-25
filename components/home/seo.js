import { getDictionary } from '@/lib/i18n';

export default function Seo({ params }) {
    const { lang = 'en' } = params;
    const { Feature } = getDictionary(lang);

    return (
        <div className="max-w-[900px] mx-auto">
            <section
                className="relative z-10 pt-5 max-w-[1280px]"
            >
                <div className="w-full mb-8 p-8 rounded-lg bg-[#202020] text-[#f7f7f7]">
                    <h3 className="text-2xl font-bold mb-6" >
                        {Feature.description.title}
                    </h3>
                    <div
                        className="text-lg"
                        dangerouslySetInnerHTML={{ __html: Feature.description.content }}
                    />
                </div>
                <div className="w-full mb-8 p-8 rounded-lg bg-[#202020] text-[#f7f7f7]">
                    <h3 className="text-2xl font-bold mb-6 ">
                        {Feature.usage.title}
                    </h3>
                    <div
                        className="text-lg"
                        dangerouslySetInnerHTML={{ __html: Feature.usage.content }}
                    />
                </div>

                <div className="w-full mb-8 p-8 rounded-lg bg-[#202020] text-[#f7f7f7]">
                    <h3 className="text-2xl font-bold mb-6 ">
                        {Feature.situation.title}
                    </h3>
                    <div
                        className="text-lg"
                        dangerouslySetInnerHTML={{ __html: Feature.situation.content }}
                    />
                </div>
            </section>
        </div>
    );
}
