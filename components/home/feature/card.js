'use client';
import React, { useState } from 'react';
export default function FeatureCard({ featureItem = {} }) {
    const [tiltStyle, setTiltStyle] = useState({});

    return (
        <div
            className='w-full min-h-48 p-5 border-2 border-base-content rounded-xl flex flex-col items-center gap-2 transition-all duration-300 shadow-none hover:shadow-2xl hover:scale-105 bg-base-100'
        >
            {featureItem.icon && React.createElement(featureItem.icon, { className: 'text-3xl' })}
            <h2 className='text-xl font-bold text-center'>{featureItem.title}</h2>
            <p className='text-center'>{featureItem.description}</p>
        </div>
    );
}
