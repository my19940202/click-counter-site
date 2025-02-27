"use client";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import { SiBuymeacoffee } from "react-icons/si";
import ThemeToggle from "./themeToggle";
import LangSwitch from "./langSwitch";
import { usePathname } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";
import { NavLinksList } from "@/lib/navLinksList";

export default function Navbar() {
    const pathname = usePathname();
    const [langName, setLangName] = useState(defaultLocale);
    const [linkList, setLinkList] = useState([]);

    useEffect(() => {
        const fetchLinksList = async () => {
            if (pathname === "/") {
                setLangName(defaultLocale);
            } else {
                setLangName(pathname.split("/")[1]);
            }
            setLinkList(NavLinksList[`LINK_${langName.toUpperCase()}`] || []);
        };
        fetchLinksList();
    }, [pathname, langName]);

    return (
        <header className="w-full z-50 bg-base-100 p-5 py-2 md:mb-5 shadow-md">
            <div className="max-w-[1280px] flex justify-between items-center mx-auto">
                <a
                    aria-label="click counter online"
                    className="flex items-center w-1/2 md:w-1/5"
                    title="click counter"
                    href={`/${langName}`}
                >
                    <Image
                        width={200}
                        height={200}
                        src={"/logo.png"}
                        className="transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10 cursor-pointer"
                        alt="click counter online logo"
                    ></Image>
                    <h1 className="ml-3 font-bold leading-5 cursor-pointer">click counter</h1>
                </a>

                <ul className="w-3/5 px-5 font-medium hidden md:flex flex-nowrap items-center justify-around">
                    {linkList.map((link, index) => {
                        return (
                            <li key={index} className="group py-3 text-center">
                                <a
                                    aria-label={link.name}
                                    className="group relative"
                                    title={link.name}
                                    href={`/${langName}${link.url}`}
                                >
                                    {link.name}
                                    <div className="absolute left-[50%] group-hover:left-0 w-0 group-hover:w-full h-[3px] transition-all duration-300 bg-base-content/90"></div>
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="md:w-1/5 flex items-center justify-end gap-2">
                    <div>
                        <a title={'click counter online on X'} href='https://x.com/xbb89783293' target='_blank'>
                            <FaSquareTwitter size={30} />
                        </a>
                    </div>
                    <ThemeToggle />
                    <LangSwitch />
                    <details className="flex md:hidden dropdown dropdown-end">
                        <summary className="btn btn-ghost p-0">
                            <MdMenu size={18} />
                        </summary>
                        <ul className="menu dropdown-content z-[100] p-2 shadow bg-base-100 opacity-100 rounded-box w-52">
                            {linkList.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            aria-label={link.name}
                                            title={link.name}
                                            href={`/${langName}${link.url}`}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </details>
                </div>
            </div>
        </header>
    );
}
