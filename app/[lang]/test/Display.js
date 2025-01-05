'use client'

import { useContext } from "react";
import { CountContext } from "./CountContext";

export default function Display() {
    // 使用 useContext 获取 count 值
    const {count} = useContext(CountContext);
    
    return (
        <div className="w-40 h-20 p-4 bg-red-500">
            <p>Child Component from context: {count}</p>
        </div>
    );
}
