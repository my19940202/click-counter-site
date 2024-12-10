"use client";
// 这个页面简化成 点击画图全屏 点击列表跳转的，不要搞复杂交互

const startDate = new Date(+new Date() + 1000 * 60 * 60);
export default function Hero({ params }) {

    return (
        <>
            <section className="relative z-10 py-10">
                <div className="flex flex-col items-center">
                    <h1>this is Hero</h1>
                </div>
            </section>
        </>
    );
}
