"use client";
import { FaEdit } from "react-icons/fa";
import { GrPowerReset as FaReset } from "react-icons/gr";
import { MdDeleteForever as DeleteIcon } from "react-icons/md";
import { FaCircleMinus as MinusIcon, FaCirclePlus as PlusIcon } from "react-icons/fa6";

export default function CounterCard({
    item,
    active,
    handleEditItem,
    handleChangeValue,
    handleDeleteItem,
    handleReset,
    handleDefault,
    tooltipText
}) {
    const handleClick = (e) => {
        handleDefault(item.id)
        const target = e.target.closest('[data-type]');
        if (!target) return;

        const type = target.dataset.type;
        switch (type) {
            case 'edit':
                handleEditItem(item.id);
                break;
            case 'decrement':
                if (item.value > 0) handleChangeValue(item.id, -1);
                break;
            case 'increment':
                handleChangeValue(item.id, 1);
                break;
            case 'delete':
                handleDeleteItem(item.id);
                break;
            case 'reset':
                handleReset(item.id);
                break;
            default:
                break;
        }
    };
    const activeClass = active ? 'active' : '';

    return (
        <div className={`counter-card ${activeClass}`} onClick={handleClick}>
            <div className="counter-title text-2xl text-green-600 p-2 m-auto w-[80%] whitespace-nowrap overflow-hidden text-ellipsis">
                <span data-type="edit">{item.name}</span>
                <FaEdit size="16" data-type="edit" className="cursor-pointer edit-icon inline opacity-0 ml-2" />
            </div>
            <div className="count-title text-green-600 mb-4 py-5">
                {item.value}
            </div>
            <div className="flex justify-between border-t border-[#4b5563]">
                <button
                    data-type="decrement"
                    className={`flex-1 text-white p-2 hover:bg-gray-600 active:bg-gray-600 ${item.value === 0 ? 'btn-disabled' : ''}`}
                    disabled={item.value === 0}>
                    <MinusIcon size="24" className="m-auto" />
                </button>
                <button
                    data-type="increment"
                    className="flex-1 text-white p-2 hover:bg-gray-600 border-l border-[#4b5563]">
                    <PlusIcon size="24" className="m-auto" />
                </button>
            </div>
            <div className="hover-btn right-[5px] delete-icon" data-tip={tooltipText.delete}>
                <DeleteIcon size="24" data-type="delete" />
            </div>
            <div className="hover-btn right-[35px] reset-icon" data-tip={tooltipText.reset}>
                <FaReset size="24" data-type="reset" />
            </div>
        </div>
    );
}