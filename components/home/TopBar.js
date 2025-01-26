"use client";
import { useState } from "react";

export default function TopBar({ activeMap, handleActiveMapClick, topBarButtons }) {
    return (
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
    );
}