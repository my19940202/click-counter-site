"use client";
import { FaEdit } from "react-icons/fa";
import { GrPowerReset as FaReset } from "react-icons/gr";
import { MdDeleteForever as DeleteIcon } from "react-icons/md";
import { FaCircleMinus as MinusIcon, FaCirclePlus as PlusIcon } from "react-icons/fa6";

export default function CounterCard({
    item,
    handleEditItem,
    handleChangeValue,
    handleDeleteItem,
    handleReset,
    seoText
}) {
    return (
        <div className="counter-card">
            <div className="counter-title text-2xl text-green-600 p-2 m-auto w-[80%]"
                onClick={() => handleEditItem(item.id)}>
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
    );
}