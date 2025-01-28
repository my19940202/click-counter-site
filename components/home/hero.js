"use client";

import { FaSquare, FaSquareShareNodes } from "react-icons/fa6";
import { MdOutlineAddToPhotos as IoMdAdd } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { LuDownload } from "react-icons/lu";
import { useState, useEffect, useRef } from "react";
import TopBar from './TopBar';
import CounterCard from './CounterCard';
import EditModal from './EditModal';
import ShareModal from './ShareModal';
import { getDictionary } from '@/lib/i18n';
import './hero.css'

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

// Add new function to export CSV
const handleExportCSV = (data = []) => {
    // Create CSV content
    const headers = ['Name', 'Value'];
    const rows = data.map(item => [item.name, item.value]);
    const csvContent = [
        headers.join(','),
        ...rows.map(row => row.join(','))
    ].join('\n');

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    const date = new Date().toISOString().slice(0, 10);
    link.setAttribute('download', `counters_${date}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

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
    const shareModalRef = useRef(null);
    const generateId = 0;
    const { lang = 'en' } = params;
    const seoText = getDictionary(lang);

    const [activeCounterId, setActiveCounterId] = useState(0)
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

        setGridItems(gridItems.map(item => {
            const isTarget = item.id === id
            const newValue = item.value + change;
            return isTarget ? { ...item, value: newValue <= 0 ? 0 : newValue } : item
        }));
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
        shareModalRef.current.showModal();
    }

    const handleDownload = () => handleExportCSV(gridItems);

    // Add gridItems as dependency to get latest state
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === '+' || e.key === '=') {
                handleChangeValue(activeCounterId, 1)
            } else if (e.key === '-' || e.key === '_') {
                handleChangeValue(activeCounterId, -1)
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [gridItems, activeCounterId]);
    // 如果不加activeCounterId，会因为闭包还是上一次的结果 无法实时更新

    return (
        <section className="pt-5 max-w-[1280px] min-h-[500px]">
            <TopBar
                activeMap={activeMap}
                handleActiveMapClick={handleActiveMapClick}
                topBarButtons={topBarButtons}
            />

            <div className={`grid gap-4 grid-cols-1 md:grid-cols-3`}>
                {gridItems.map((item) => (
                    <CounterCard
                        key={item.id}
                        item={item}
                        active={activeCounterId === item.id}
                        handleEditItem={handleEditItem}
                        handleChangeValue={handleChangeValue}
                        handleDeleteItem={handleDeleteItem}
                        handleReset={handleReset}
                        handleDefault={setActiveCounterId}
                        tooltipText={seoText.Hero.tooltip}
                    />
                ))}
            </div>

            {/* Add and Share buttons */}
            <div className="w-full flex justify-center mt-4">
                <button
                    className="btn btn-wide bg-[#4ade80] hover:btn-outline"
                    onClick={handleAddItem}
                >
                    <IoMdAdd size="24" /> {seoText.Hero.add}
                </button>
            </div>
            <div className="w-full flex justify-center mt-4">
                <button
                    className="btn bg-gray-600"
                    onClick={handleShare}
                >
                    <FaSquareShareNodes size="24" /> {seoText.Hero.share}
                </button>
                <button
                    className="btn bg-gray-600 ml-4"
                    onClick={handleDownload}
                >
                    <LuDownload size="24" /> {seoText.Hero.download}
                </button>
            </div>

            <div>
                <p className="text-lg text-center py-4"
                    dangerouslySetInnerHTML={{ __html: seoText.Hero.remind }}>
                </p>
            </div>

            <EditModal
                text={seoText.Dialog}
                editModalRef={editModalRef}
                editingName={editingName}
                setEditingName={setEditingName}
                handleSaveEdit={handleSaveEdit}
            />
            <ShareModal
                data={gridItems}
                text={seoText.Dialog}
                lang
                shareModalRef={shareModalRef}
            />
        </section>
    );
}