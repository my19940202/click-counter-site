import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";


export const TEXT_CONF = {
    fullscreen: {
        zh: '点击全屏',
        en: 'click to fullscreen'
    },
    seo: {
        zh: '使用屏幕保护程序可以做:',
        en: 'Use screensaver for'
    },
    list_color_title: {
        zh: '纯色屏保:',
        en: 'color screensaver'
    },
    list_animation_title: {
        zh: '动画屏保:',
        en: 'animation screensaver'
    },
    list_tools_title: {
        zh: '工具屏保:',
        en: 'tools screensaver'
    }
};

const firstContent = [
    {
        title: "a light source",
        description: `A screensaver serves as a light source and diffuser for product photography,
            enhancing visibility of the goods. For portrait photos, a bright white screen is ideal in moderately lit areas.
            A well-balanced photograph is achieved with softly distributed white light.`
    },
    {
        title: "a reading light",
        description: `A screensaver, which can function as a reading light in certain situations,
        offers illumination precisely when other traditional light sources are not available.
        For instance, during a power outage in the middle of the night or in a dimly - lit room where the main lighting fixtures have failed or are insufficient. In these scenarios,
        the screensaver's unique design and features allow it to step in and provide the necessary brightness that enables users to continue reading comfortably,
        acting as a reliable alternative light source when all else fails.
        `
    }
];

const starScreensaver = {
    en: {
        title: "Effect Introduction",
        description: `This dynamic star screensaver captures the mesmerizing effect of traveling through a star-filled galaxy
            at light speed. With streaks of light rushing past, it mimics the exhilarating sensation of cosmic
            exploration, making your screen come alive. Not only is it visually captivating,
            it but its smooth motion and immersive design help maintain focus and add a touch of excitement to any workspace.`
    },
    zh: {
        title: "效果介绍",
        description: `这个动态星星屏保捕捉了以光速穿过满星星的星系的效果。随着光芒疾速掠过，它模拟了宇宙探索的激动人心的感觉，使屏幕活起来。
            不仅是视觉上引人注目，还因为其流畅的运动和沉浸式设计，帮助保持专注`
    }
}

const countdownScreensaver = {
    en: {
        title: "Effect Introduction",
        description: `A countdown screensaver is a practical tool that helps users complete tasks or set reminders within a specific time frame.
        Ideal for study, work, fitness, and more, it boosts efficiency and enhances time management, making every moment count.`
    },
    zh: {
        title: "效果介绍",
        description: `倒计时屏保是一种实用工具，可帮助用户在指定时间内完成任务或提醒重要事项。适用于学习、工作、健身等多场景，提升效率和时间管理能力，让每一分钟都充分利用。`
    }
}


const lastContent = (placeholder = 'screensaver') => {
    return [
        {
            title: "maintain focus",
            description: `
                Using a ${placeholder} is highly beneficial as it plays a crucial role in helping maintain concentration.
                When we are working or studying, various visual distractions can disrupt our focus.
                By activating a ${placeholder}, these distractions are minimized. It creates a more focused environment,
                allowing us to better engage in our tasks.
            `
        },
        {
            title: "screen testing and cleaning",
            description: `It is useful for cleaning displays, clarifying screen content,
                and testing color accuracy. Additionally, a ${placeholder} aids in checking for dust
                and dead pixels while providing lighting during video calls.`
        },
        {
            title: 'adding fun and personalization',
            description: `
                Screensavers play a significant role in adding fun and personalization.
                They can display various appealing images like beautiful landscapes,
                cute animals or artworks. Users can choose according to their own preferences.
                screensaver.top screensaver is skillfully rendered with the powerful HTML5 canvas technology.
                This advanced approach endows it with remarkable performance characteristics.
                Unlike traditional video - based screensavers, it doesn't rely on video playback mechanisms.
                As a result, it doesn't consume excessive network traffic during its operation, making it an efficient and user - friendly choice.
            `
        }
    ];
};

const lastContentZh = (placeholder = '') => {
    return [
        {
            title: "保持专注",
            description: `
                使用${placeholder}非常有益，因为它在帮助保持注意力方面起着至关重要的作用。
                当我们工作或学习时，各种视觉干扰可能会分散我们的注意力。
                通过使用${placeholder}，这些干扰被最小化。它创造了一个更专注的环境，使我们能够更好地投入到我们的任务中。
            `
        },
        {
            title: "屏幕测试和清洁",
            description: `它对于清洁显示器、澄清屏幕内容和测试颜色准确性非常有用。此外，${placeholder} 还可以帮助检查灰尘和死点，同时在视频通话时提供照明。`
        },
        {
            title: "个性化和趣味性",
            description: `屏幕保护程序在增添乐趣和个性化方面发挥着重要作用。
                它们可以展示各种吸引人的图像，如美丽的风景、可爱的动物或艺术品。用户可以根据自己的喜好进行选择。
                screensaver.top 屏幕保护程序是用强大的 HTML5 画布技术巧妙渲染的。
                这种先进的方法赋予了它出色的性能特点。
                与传统的基于视频的屏幕保护程序不同，它不依赖于视频播放机制。
                因此，在其运行期间不会消耗过多的网络流量，是一种高效且用户友好的选择。 `
        }
    ];
};
const firstContentZh = [
    {
        title: "光源",
        description: "屏幕保护程序可用作产品摄影的光源和漫射器，提高商品的可见度。对于肖像照片，在光线适度的区域，明亮的白色屏幕是理想的选择。通过柔和分布的白光可以获得平衡良好的照片。 "
    },
    {
        title: "阅读灯",
        description: `屏幕保护程序在某些情况下可以充当阅读灯，恰好在其他传统光源不可用的时候提供照明。
        例如，在半夜停电时，或者在主照明设备出现故障或照明不足的昏暗房间里。在这些情况下，屏幕保护程序独特的设计和功能使其能够发挥作用，
        提供必要的亮度，使用户能够舒适地继续阅读，在其他所有光源都失效时，充当可靠的替代光源。 `
    }
];

export const SEO_TEXT = {
    en: {
        default: [
            ...firstContent,
            ...lastContent()
        ],
        white: [
            ...firstContent,
            ...lastContent('white screen')
        ],
        blue: lastContent('blue screen'),
        green: lastContent('green screen'),
        red: lastContent('red screen'),
        black: lastContent('black screen'),
        yellow: lastContent('yellow screen'),
        cyan: lastContent('cyan screen'),
        magenta: lastContent('magenta screen'),
        laser: lastContent('multicolored line animation screen'),
        star: [
            starScreensaver.en,
            ...lastContent('starry sky animation screen')
        ],
        explosion: [lastContent('explosion animation screen')[1]],
        flipclock: lastContent('flipclock screen'),
        countdown: [
            countdownScreensaver.en,
            ...lastContent('countdown screen')
        ]
    },
    zh: {
        default: [
            ...firstContentZh,
            ...lastContentZh()
        ],
        white: [
            ...firstContentZh,
            ...lastContentZh('白色屏保')
        ],
        blue: lastContentZh('蓝色屏保'),
        green: lastContentZh('绿色屏保'),
        red: lastContentZh('红色屏保'),
        black: lastContentZh('黑色屏保'),
        yellow: lastContentZh('黄色屏保'),
        cyan: lastContentZh('青色屏保'),
        magenta: lastContentZh('紫色屏保'),
        laser: lastContentZh('多彩线条动画屏保'),
        star: [
            starScreensaver.zh,
            ...lastContentZh('星空穿越动画屏保')
        ],
        explosion: [lastContentZh('爆炸动画屏保')[1]],
        flipclock: lastContentZh('时钟屏保'),
        countdown: [
            countdownScreensaver.zh,
            ...lastContentZh('倒计时屏保')
        ]
    }
};


export const locales = [
    "",
    "en",
    "en-US",
    "zh",
    "zh-CN",
    "zh-TW",
    "zh-HK",
    "ja",
    "ar",
    "es",
    "ru",
    "fr",
];
export const localeNames = {
    en: "🇺🇸 English",
    zh: "🇨🇳 中文",
    // ja: '🇯🇵 日本語',
    // ar: '🇸🇦 العربية',
    // es: '🇪🇸 Español',
    // ru: '🇷🇺 Русский',
    // fr: '🇫🇷 Français',
};
export const defaultLocale = "en";

// If you wish to automatically redirect users to a URL that matches their browser's language setting,
// you can use the `getLocale` to get the browser's language.
export function getLocale(headers) {
    let languages = new Negotiator({ headers }).languages();

    return match(languages, locales, defaultLocale);
}

const dictionaries = {
    en: () => import("@/locales/en.json").then((module) => module.default),
    zh: () => import("@/locales/zh.json").then((module) => module.default),
    ja: () => import("@/locales/ja.json").then((module) => module.default),
    ar: () => import("@/locales/ar.json").then((module) => module.default),
    es: () => import("@/locales/es.json").then((module) => module.default),
    ru: () => import("@/locales/ru.json").then((module) => module.default),
    fr: () => import("@/locales/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
    if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
        locale = "zh";
    }

    if (!Object.keys(dictionaries).includes(locale)) {
        locale = "en";
    }

    return dictionaries[locale]();
};
