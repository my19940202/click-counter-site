"use client";

import { FaListUl } from "react-icons/fa";
import { FaSquare, FaSquareShareNodes, FaCircleMinus as MinusIcon, FaCirclePlus as PlusIcon } from "react-icons/fa6";
import { MdOutlineAddToPhotos as IoMdAdd } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { useState } from "react";
import "./hero.css";

const isMobile = typeof window !== 'undefined' ? /Mobi|Android/i.test(window.navigator.userAgent) : false;
const maxGridItems = isMobile ? 2 : 3;


export default function Hero({ params }) {
    // TODO: 这边的响应式布局 没有处理好 需要关注下
    // 记录top bar不同的配置状态
    const [activeMap, setActiveMap] = useState({
        list: '',
        square: '',
        share: '',
        sound: '',
        vibrate: ''
    });
    // Add new state for grid items
    const [gridItems, setGridItems] = useState([1]);

    const handleClick = (type) => {
        setActiveMap({
            ...activeMap,
            [type]: activeMap[type] ? '' : 'text-[#4ade80]'
        });
    }

    // Add new handler for adding grid items
    const handleAddItem = () => {
        setGridItems([...gridItems, gridItems.length + 1]);
    }

    // Define buttons configuration
    const topBarButtons = [
        {
            type: 'list',
            icon: FaListUl,
            position: 'left'
        },
        {
            type: 'square',
            icon: FaSquare,
            position: 'left'
        },
        {
            type: 'share',
            icon: FaSquareShareNodes,
            position: 'right'
        },
        {
            type: 'sound',
            icon: AiFillSound,
            position: 'right'
        },
        {
            type: 'vibrate',
            icon: BsPhoneVibrateFill,
            position: 'right'
        }
    ];

    return (
        <section className="pt-5 max-w-[1280px] min-h-[500px]">
            {/* top bar */}
            <div className="mb-3 flex items-center justify-between">
                <div className="w-20 md:pl-0 flex items-center justify-between">
                    {topBarButtons
                        .filter(btn => btn.position === 'left')
                        .map(btn => (
                            <button
                                key={btn.type}
                                className={`w-8 h-8 text-gray-600 ${activeMap[btn.type]}`}
                                onClick={() => handleClick(btn.type)}
                            >
                                <btn.icon size="24" />
                            </button>
                        ))}
                </div>
                <div className="w-28 md:pr-0 flex items-center justify-between">
                    {topBarButtons
                        .filter(btn => btn.position === 'right')
                        .map(btn => (
                            <button
                                key={btn.type}
                                className={`w-8 h-8 text-gray-600 ${activeMap[btn.type]}`}
                                onClick={() => handleClick(btn.type)}
                            >
                                <btn.icon size="24" />
                            </button>
                        ))}
                </div>
            </div>

            {/* 内容区域 */}
            <div className={`grid gap-4 grid-cols-${gridItems.length >= 3 ? maxGridItems : gridItems.length}`}>
                {gridItems.map((item, index) => (

                    <div key={index} className={`bg-[#202020] text-[#f7f7f7] rounded-lg shadow-lg border-2 border-[#202020]
                            transition-colors duration-300 text-center
                            hover:border-solid hover:border-2 hover:border-sky-500`}>
                        <div className="text-2xl text-green-400 mb-4">title</div>
                        <div className="count-title text-green-400 mb-4">{item}</div>
                        <div className="flex justify-between border-t border-[#4b5563]">
                            <button className="flex-1 text-white p-2 hover:bg-gray-600 active:bg-gray-600">
                                <MinusIcon size="24" className="m-auto" />
                            </button>
                            <button className="flex-1 text-white p-2 hover:bg-gray-600 border-l border-[#4b5563]">
                                <PlusIcon size="24" className="m-auto" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center mt-4">
                <button
                    className="btn btn-wide bg-[#4ade80] hover:btn-outline"
                    onClick={handleAddItem}
                >
                    <IoMdAdd size="24" /> add new counter
                </button>
            </div>

        </section>
    );
}
