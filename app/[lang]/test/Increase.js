'use client'

import { useContext, useCallback, useId } from "react";
import { CountContext } from "./CountContext";

export default function Increase() {
    // 使用 useContext 获取 count 值
    const {count, setCount} = useContext(CountContext);

    // 生成一个唯一的id
    const id = useId();
    
    const handleClick = useCallback(() => {
        console.log(id, 'useId unique id');
        setCount(count + 1);
    }, [count]);

    const handleClick2 = useCallback(() => {
        setCount(count + 1);
    });


    return (
        <div className="mt-10">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" 
                    onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}
