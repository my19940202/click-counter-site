'use client'

import { useState } from "react";
import Display from "./Display";
import Increase from "./Increase";
import { CountContext } from "./CountContext";

export default function Home({ params }) {
    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={{count, setCount}}>
            <div className="max-w-[1280px] mx-auto">
                <Increase />
                <Display />
            </div>
        </CountContext.Provider>
    );
}
