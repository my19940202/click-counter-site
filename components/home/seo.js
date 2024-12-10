import { TEXT_CONF, SEO_TEXT } from '@/lib/i18n';

export default function Seo({ params }) {
    const { type = 'star', lang = 'en' } = params;

    return (
        <>
            <section
                className="relative z-10 flex flex-col items-start md:items-center py-10 md:py-20 overflow-hidden"
            >
                <div className="w-full max-w-3xl mb-8 p-8 rounded-lg bg-[#202020] text-[#f7f7f7]">
                    <h3 className="text-2xl font-bold mb-6 ">
                        this is title
                    </h3>
                    <p className="text-lg ">
                        this is description
                    </p>
                </div>
                <div className="w-full max-w-3xl mb-8 p-8 rounded-lg bg-[#202020] text-[#f7f7f7]">
                    <h3 className="text-2xl font-bold mb-6 ">
                        this is title
                    </h3>
                    <p className="text-lg ">
                        this is description
                    </p>
                </div>
            </section>
        </>
    );
}
