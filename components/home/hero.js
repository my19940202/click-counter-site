
// 这个页面简化成 点击画图全屏 点击列表跳转的，不要搞复杂交互
import { FaListUl } from "react-icons/fa";
import { FaSquare, FaSquareShareNodes } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
import { BsPhoneVibrateFill } from "react-icons/bs";

export default function Hero({ params }) {
    // TODO: 这边的响应式布局 没有处理好 需要关注下
    return (
        <>
            <section className="relative z-10 pt-5 max-w-[1280px]">
                {/* top bar */}
                <div className="mb-3 flex items-center justify-between relative">
                    <div className="w-20 md:pl-0 flex items-center justify-between">
                        <button className="w-8 h-8 text-gray-600 hover:text-[#4ade80]">
                            <FaListUl size="24" />
                        </button>
                        <button className="w-8 h-8 text-gray-600 hover:text-[#4ade80]">
                            <FaSquare size="24" />
                        </button>
                    </div>
                    <div className="w-28 md:pr-0 flex items-center justify-between">
                        <button className="w-8 h-8 text-gray-600 hover:text-[#4ade80]">
                            <FaSquareShareNodes size="24" />
                        </button>
                        <button className="w-8 h-8 text-gray-600 hover:text-[#4ade80]">
                            <AiFillSound size="24" />
                        </button>
                        <button className="w-8 h-8 text-gray-600 hover:text-[#4ade80]">
                            <BsPhoneVibrateFill size="24" />
                        </button>
                    </div>
                </div>

                {/* content bar */}
                <div className="mb-3 py-5">
                    <div className="w-full h-10">
                        <div className="bg-[#202020] text-[#f7f7f7] rounded-lg shadow-lg p-6 w-64 text-center">
                            <h2 className="text-white text-lg font-semibold mb-4">Unnamed Counter</h2>
                            <div className="text-6xl text-green-400 mb-4">7</div>
                            <div className="flex justify-between">
                                <button className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600">
                                    -
                                </button>
                                <button className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
