"use client";

import { FaListUl } from "react-icons/fa";
import { FaSquare, FaSquareShareNodes, FaCircleMinus as MinusIcon, FaCirclePlus as PlusIcon } from "react-icons/fa6";
import { MdOutlineAddToPhotos as IoMdAdd, MdDeleteForever as DeleteIcon } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GrPowerReset as FaReset } from "react-icons/gr";
import { AiFillSound } from "react-icons/ai";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import "./hero.css";

const defaultActiveMap = {
    list: '',
    square: '',
    share: '',
    sound: '',
    vibrate: ''
}

const defaultGridItems = [{
    value: 0, name: 'untitled', index: 0
}]

export default function Hero({ params }) {
    // TODO: 这边的响应式布局 没有处理好 需要关注下
    // 记录top bar不同的配置状态
    const [activeMap, setActiveMap] = useState(() => {
        const storedMap = localStorage.getItem('activeMap');
        return storedMap ? JSON.parse(storedMap) : defaultActiveMap;
    });
    // Add new state for grid items
    const [gridItems, setGridItems] = useState(() => {
        const storedItems = localStorage.getItem('gridItems');
        return storedItems ? JSON.parse(storedItems) : defaultGridItems;
    });

    // 记录activeMap
    useEffect(() => {
        localStorage.setItem('activeMap', JSON.stringify(activeMap));
    }, [activeMap]);

    // 记录gridItems
    useEffect(() => {
        localStorage.setItem('gridItems', JSON.stringify(gridItems));
    }, [gridItems]);


    const handleClick = (type) => {
        setActiveMap({
            ...activeMap,
            [type]: activeMap[type] ? '' : 'text-[#4ade80]'
        });
    }

    // Add new handler for adding grid items
    const handleAddItem = () => {
        const newIndex = gridItems.length + 1;
        setGridItems([...gridItems, {
            value: 0, name: 'untitled ' + newIndex, index: newIndex
        }]);
    }

    const handleDeleteItem = (index) => {
        setGridItems(gridItems.filter((_, i) => i !== index));
    }

    const handleChangeValue = (index, change) => {
        setGridItems(gridItems.map((item, i) => i === index ? { ...item, value: item.value + change } : item));
    }

    // Add new handler for editing item name
    const handleEditItem = (index) => {
        document.getElementById('edit_modal').showModal();
        // Store current editing index
        setEditingIndex(index);
        setEditingName(gridItems[index].name);
    }

    // Add new state for editing
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingName, setEditingName] = useState('');

    // Add handler for saving edited name
    const handleSaveEdit = () => {
        if (editingIndex !== null) {
            setGridItems(gridItems.map((item, i) =>
                i === editingIndex ? { ...item, name: editingName } : item
            ));
            document.getElementById('edit_modal').close();
        }
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

    const handleReset = (index) => {
        setGridItems(gridItems.map((item, i) => i === index ? { ...item, value: 0 } : item));
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
                                className={`w-8 h-8 ${activeMap[btn.type] || 'text-gray-600'}`}
                                onClick={() => handleClick(btn.type)}
                            >
                                <btn.icon size="24" />
                            </button>
                        ))}
                </div>
            </div>

            {/* 内容区域 */}
            <div className={`grid gap-4 grid-cols-1 md:grid-cols-3`}>
                {gridItems.map((item, index) => (
                    <div key={index} className="counter-card">
                        <div className="counter-title text-2xl text-green-400 p-2 m-auto w-[80%]">
                            <span>{item.name}</span>
                            <FaEdit size="16"
                                className="cursor-pointer edit-icon inline opacity-0 ml-2"
                                onClick={() => handleEditItem(index)}
                            />
                        </div>
                        <div className="count-title text-green-400 mb-4 py-5">{item.value}</div>
                        <div className="flex justify-between border-t border-[#4b5563]">
                            <button
                                className={`flex-1 text-white p-2 hover:bg-gray-600 active:bg-gray-600 ${item.value === 0 ? 'btn-disabled' : ''}`}
                                onClick={() => handleChangeValue(index, -1)}
                                disabled={item.value === 0}>
                                <MinusIcon size="24" className="m-auto" />
                            </button>
                            <button className="flex-1 text-white p-2 hover:bg-gray-600 border-l border-[#4b5563]"
                                onClick={() => handleChangeValue(index, 1)}>
                                <PlusIcon size="24" className="m-auto" />
                            </button>
                        </div>
                        <div className="tooltip absolute cursor-pointer top-[5px]  hidden right-[5px]  delete-icon" data-tip="delete counter">
                            <DeleteIcon size="24" onClick={() => handleDeleteItem(index)} />
                        </div>
                        <div className="tooltip absolute cursor-pointer top-[5px] right-[35px] hidden reset-icon" data-tip="reset counter">
                            <FaReset size="24" onClick={() => handleReset(index)} />
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

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="edit_modal" className="modal">
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
                            <button className="btn" onClick={handleSaveEdit}>Save</button>
                            <button className="btn">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </section>
    );
}
