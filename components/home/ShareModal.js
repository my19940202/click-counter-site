"use client";

import { useState } from "react";

export default function ShareModal({ lang, shareModalRef, data }) {
    const [shareInfo, setShareInfo] = useState({
        user: '',
        name: '',
        desc: ''
    })
    const [shareId, setShareId] = useState(0);
    const handleXssInput = (text, type) => {
        const sanitizedText = text
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')

        setShareInfo({
            ...shareInfo,
            [type]: sanitizedText
        });
    }

    const handleShareSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        fetch('/api/share', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...shareInfo, data })
        })
            .then(response => response.json())
            .then(res => {
                let successId = res && res.data && res.data[0] && res.data[0].id;
                if (successId) {
                    setShareId(successId)
                }
            })
            .catch(error => console.error('Error:', error));
    };

    let shareUrl = `https://clickcounter.online/${lang}/share/${shareId}`

    return (
        <dialog ref={shareModalRef} className="modal">
            <div className="modal-box">
                {
                    shareId === 0 ? <>
                        <h3 className="font-bold text-lg">add share info</h3>
                        <div className="py-4">
                            <label class="input input-bordered flex items-center gap-2 mb-4">
                                <span className="w-[100px]">creator</span>
                                <input
                                    type="text"
                                    value={shareInfo.user}
                                    className="grow"
                                    placeholder="please input share username"
                                    onChange={(e) => handleXssInput(e.target.value, 'user')}
                                />
                            </label>
                            <label class="input input-bordered flex items-center gap-2 mb-4">
                                <span className="w-[100px]">title</span>
                                <input
                                    type="text"
                                    value={shareInfo.name}
                                    className="grow"
                                    placeholder="please input share title"
                                    onChange={(e) => handleXssInput(e.target.value, 'name')}
                                />
                            </label>
                            <label class="input input-bordered flex items-center gap-2">
                                <span className="w-[100px]">description</span>
                                <input
                                    type="text"
                                    value={shareInfo.desc}
                                    className="grow"
                                    placeholder="please input share username"
                                    onChange={(e) => handleXssInput(e.target.value, 'desc')}
                                />
                            </label>
                        </div>
                        <div className="modal-action">
                            <form method="dialog" className="flex gap-2">
                                <button className="btn">取消</button>
                                <button className="btn btn-active btn-primary" onClick={e => handleShareSubmit(e)}>确认</button>
                            </form>
                        </div>
                    </> : (
                        <>
                            <div role="alert" className="alert">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="stroke-info h-6 w-6 shrink-0">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>
                                    share url
                                    <a className="link link-success ml-2" href={shareUrl} target="_blank">
                                        {shareUrl}
                                    </a>
                                </span>
                            </div>
                            <div className="modal-action">
                                <form method="dialog" className="flex gap-2">
                                    <button className="btn">ok</button>
                                </form>
                            </div>
                        </>
                    )
                }
            </div>
        </dialog>
    );
}