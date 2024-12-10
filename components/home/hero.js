
// 这个页面简化成 点击画图全屏 点击列表跳转的，不要搞复杂交互
import { FaListUl } from "react-icons/fa";
import { FaSquare, FaSquareShareNodes } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
import { BsPhoneVibrateFill } from "react-icons/bs";

export default function Hero({ params }) {
    // TODO: 这边的响应式布局 没有处理好 需要关注下
    return (
        <>
            <section className="relative z-10 py-10 max-w-[1280px]">
                {/* top bar */}
                <div class="mb-3 flex items-center justify-between relative">
                    <div class="w-20 md:pl-0 flex items-center justify-between">
                        <button class="w-8 h-8">
                            <FaListUl size="24" />
                        </button>
                        <button class="w-8 h-8">
                            <FaSquare size="24" />
                        </button>
                    </div>
                    <div class="w-28 md:pr-0 flex items-center justify-between">
                        <button class="w-8 h-8">
                            <FaSquareShareNodes size="24" />
                        </button>
                        <button class="w-8 h-8">
                            <AiFillSound size="24" />
                        </button>
                        <button class="w-8 h-8">
                            <BsPhoneVibrateFill size="24" />
                        </button>
                    </div>
                </div>

                {/* content bar */}
                <div className="w-full">
                    {/* TODO: 需要把卡片组件样式搞定 */}
                    <div className="w-full h-10">
                        <div class="bg-[#202020] text-[#f7f7f7] rounded-lg shadow-lg p-6 w-64 text-center">
                            <h2 class="text-white text-lg font-semibold mb-4">Unnamed Counter</h2>
                            <div class="text-6xl text-green-400 mb-4">7</div>
                            <div class="flex justify-between">
                                <button class="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600">
                                    -
                                </button>
                                <button class="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600">
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
