"use client";

import { FaListUl } from "react-icons/fa";
import { FaSquare, FaSquareShareNodes, FaCircleMinus as MinusIcon, FaCirclePlus as PlusIcon } from "react-icons/fa6";
import { MdOutlineAddToPhotos as IoMdAdd, MdDeleteForever as DeleteIcon } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GrPowerReset as FaReset } from "react-icons/gr";
import { AiFillSound } from "react-icons/ai";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import "./hero.css";
import { getDictionary } from '@/lib/i18n';

const defaultActiveMap = {
    list: '',
    square: '',
    share: '',
    sound: 'text-[#4ade80]',
    vibrate: 'text-[#4ade80]'
}

const isMobile = () => {
    if (typeof window === 'undefined') return false; // 处理SSR场景
    const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
};

const defaultGridItems = [{
    value: 0, name: 'untitled', id: '0-0'
}]

// Define buttons configuration
const topBarButtons = [
    // {
    //     type: 'list',
    //     icon: FaListUl,
    //     position: 'left'
    // },
    {
        type: 'square',
        icon: FaSquare,
        position: 'left'
    },
    // {
    //     type: 'share',
    //     icon: FaSquareShareNodes,
    //     position: 'right'
    // },
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
].filter(ele => isMobile() ? true : ele.type !== 'vibrate');

export default function Hero({ params }) {
    const editModalRef = useRef(null);
    const generateId = 0;
    const { lang = 'en' } = params;
    const seoText = getDictionary(lang);

    const [activeMap, setActiveMap] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedMap = window.localStorage.getItem('activeMap');
            return storedMap ? JSON.parse(storedMap) : defaultActiveMap;
        }
        return defaultActiveMap;
    });
    // add grid items
    const [gridItems, setGridItems] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedItems = window.localStorage.getItem('gridItems');
            return storedItems ? JSON.parse(storedItems) : defaultGridItems;
        }
        return defaultGridItems;
    });

    // update activeMap
    useEffect(() => {
        window.localStorage.setItem('activeMap', JSON.stringify(activeMap));
    }, [activeMap]);

    // update gridItems
    useEffect(() => {
        window.localStorage.setItem('gridItems', JSON.stringify(gridItems));
    }, [gridItems]);

    const handleActiveMapClick = (type) => {
        setActiveMap({
            ...activeMap,
            [type]: activeMap[type] ? '' : 'text-[#4ade80]'
        });
    }

    // 添加新的网格项处理函数
    const handleAddItem = () => {
        setGridItems([...gridItems, {
            value: 0,
            name: 'untitled ' + (gridItems.length + 1),
            id: generateId + '-' + gridItems.length
        }]);
    }

    const handleDeleteItem = (id) => {
        setGridItems(gridItems.filter(item => item.id !== id));
    }

    const handleChangeValue = (id, change) => {
        // 播放点击音效 参考 https://pomofocus.io/ 的按钮点击声音
        if (activeMap.sound) {
            const minus = new Audio('https://pomofocus.io/audios/general/button.wav');
            const add = new Audio('https://clickcounter.io/audio/click-click.mp3');
            change === 1 ? add.play() : minus.play();
        }

        // 振动50毫秒
        if (activeMap.vibrate && typeof window !== 'undefined' && 'vibrate' in window.navigator) {
            window.navigator.vibrate(50);
        }

        setGridItems(gridItems.map(item => item.id === id ? { ...item, value: item.value + change } : item));
    }

    // update counter name
    const handleEditItem = (id) => {
        editModalRef.current.showModal();
        setEditingId(id);
        setEditingName(gridItems.find(item => item.id === id).name);
    }

    // Add new state for editing
    const [editingId, setEditingId] = useState(null);
    const [editingName, setEditingName] = useState('');

    // Add handler for saving edited name
    const handleSaveEdit = () => {
        if (editingId !== null) {
            setGridItems(gridItems.map(item =>
                item.id === editingId ? { ...item, name: editingName } : item
            ));
            editModalRef.current.close();
        }
    }

    const handleReset = (id) => {
        setGridItems(gridItems.map(item => item.id === id ? { ...item, value: 0 } : item));
    }

    const handleShare = () => {
        setTimeout(() => {
            alert(seoText.Hero.comingSoon)
        }, 500)
        fetch('/api/share')
            .then(response => response.json())
            .catch(error => console.error('Error', error));
    }

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
                                className={`w-8 h-8 ${activeMap[btn.type] || 'text-gray-600'}`}
                                onClick={() => handleActiveMapClick(btn.type)}
                            >
                                <btn.icon size="24" />
                            </button>
                        ))}
                </div>
                <div className="w-20 md:pr-0 flex items-center justify-between">
                    {topBarButtons
                        .filter(btn => btn.position === 'right')
                        .map(btn => (
                            <button
                                key={btn.type}
                                className={`w-8 h-8 ${activeMap[btn.type] || 'text-gray-600'}`}
                                onClick={() => handleActiveMapClick(btn.type)}
                            >
                                <btn.icon size="24" />
                            </button>
                        ))}
                </div>
            </div>

            {/* counter area 123列的逻辑 时而时而不生效。。。 */}
            <div className={`grid gap-4 grid-cols-1 md:grid-cols-3`}>
                {gridItems.map((item) => (
                    <div key={item.id} className="counter-card">
                        <div className="counter-title text-2xl text-green-600 p-2 m-auto w-[80%]"
                            onClick={() => handleEditItem(item.id)}
                        >
                            <span>{item.name}</span>
                            <FaEdit size="16" className="cursor-pointer edit-icon inline opacity-0 ml-2" />
                        </div>
                        <div className="count-title text-green-600 mb-4 py-5">
                            {item.value}
                        </div>
                        <div className="flex justify-between border-t border-[#4b5563]">
                            <button
                                className={`flex-1 text-white p-2 hover:bg-gray-600 active:bg-gray-600 ${item.value === 0 ? 'btn-disabled' : ''}`}
                                onClick={() => handleChangeValue(item.id, -1)}
                                disabled={item.value === 0}>
                                <MinusIcon size="24" className="m-auto" />
                            </button>
                            <button className="flex-1 text-white p-2 hover:bg-gray-600 border-l border-[#4b5563]"
                                onClick={() => handleChangeValue(item.id, 1)}>
                                <PlusIcon size="24" className="m-auto" />
                            </button>
                        </div>
                        <div className="hover-btn right-[5px] delete-icon" data-tip={seoText.Hero.tooltip.delete}>
                            <DeleteIcon size="24" onClick={() => handleDeleteItem(item.id)} />
                        </div>
                        <div className="hover-btn right-[35px] reset-icon" data-tip={seoText.Hero.tooltip.reset}>
                            <FaReset size="24" onClick={() => handleReset(item.id)} />
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
            <div className="w-full flex justify-center mt-4">
                <button
                    className="btn btn-wide bg-gray-600"
                    onClick={handleShare}
                >
                    <FaSquareShareNodes size="24" /> share counter
                </button>
            </div>
            <div>
                <p className="text-lg text-center py-4">
                    {seoText.Hero.remind}
                </p>
            </div>
            {/* edit counter dialog */}
            <dialog ref={editModalRef} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Counter Name</h3>
                    <div className="py-4">
                        <input
                            type="text"
                            value={editingName}
                            onChange={(e) => setEditingName(e.target.value)}
                            className="input input-bordered w-full"
                            placeholder="Enter counter name"
                        />
                    </div>
                    <div className="modal-action">
                        <form method="dialog" className="flex gap-2">
                            <button className="btn">Cancel</button>
                            <button className="btn" onClick={handleSaveEdit}>Save</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </section >
    );
}
