"use client";
// 只显示出纯色和动画list
import { defaultLocale } from "@/lib/i18n";
import { TEXT_CONF } from '@/lib/i18n';
import { PURE_COLOR_LIST, PURE_COLOR_TEXT, ANAMATION_TEXT, TOOLS_TEXT } from "@/lib/color";
import Link from 'next/link'

export default function List({ lang }) {
    const langName = lang || defaultLocale;
    return (
        <>
            <section className="relative z-10 py-10">
                <div className="flex flex-col items-center">
                    <h2 className="mt-5 font-bold text-5xl md:text-5xl">
                        {TEXT_CONF.list_animation_title[langName]}
                    </h2>
                    <div className="flex space-x-2 mt-4">
                        {
                            ANAMATION_TEXT.map((text, idx) =>
                                <a key={idx}
                                    className="overflow-hidden text-center leading-10 font-bold"
                                    href={`/${langName}/detail/${text}`}>
                                    <img
                                        className="w-20 h-11 cursor-pointer rounded"
                                        src={`/${text}.gif`}
                                        alt={text}
                                    />
                                    <p>{text} screen</p>
                                </a>
                            )
                        }
                    </div>
                    <h2 className="mt-5 font-bold text-5xl md:text-5xl">
                        {TEXT_CONF.list_color_title[langName]}
                    </h2>
                    <div className="flex space-x-2 mt-4">
                        {
                            PURE_COLOR_LIST.map((bgColor, idx) =>
                                <a key={idx}
                                    className="overflow-hidden text-center leading-10"
                                    href={`/${langName}/detail/${PURE_COLOR_TEXT[idx]}`}>
                                    <div style={{ backgroundColor: bgColor }} className="w-20 h-11 cursor-pointer rounded shadow hover:shadow-lg">
                                    </div>
                                    <p>{PURE_COLOR_TEXT[idx]} screen</p>
                                </a>
                            )
                        }
                    </div>
                    <h2 className="mt-5 font-bold text-5xl md:text-5xl">
                        {TEXT_CONF.list_tools_title[langName]}
                    </h2>
                    <div className="flex space-x-2 mt-4">
                        {
                            TOOLS_TEXT.map((text, idx) =>
                                <a key={idx}
                                    className="overflow-hidden text-center leading-10 font-bold"
                                    href={`/${langName}/detail/${text}`}>
                                    <img
                                        className="w-20 h-11 cursor-pointer rounded"
                                        src={`/${text}.jpg`}
                                        alt={text}
                                    />
                                    <p>{text}</p>
                                </a>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
