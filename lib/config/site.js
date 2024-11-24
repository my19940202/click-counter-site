const baseSiteConfig = {
    name: "screensaver.top | online screensaver tool",
    description: `
        Online screensaver tool to show screensaver in browser.
        Use as a light source, or to screen testing and cleaning, to maintain focus.
    `,
    url: "https://www.screensaver.top",
    ogImage: "https://636c-cloud1-5g5eyjtze161c202-1319072486.tcb.qcloud.la/static/screensaver/logo.png",
    metadataBase: "/",
    keywords: [
        "online screensaver",
        "white screensaver",
        "blue screensaver",
        "multicolored line animation screensaver",
        "starry sky animation screensaver",
        "explosion animation screensaver",
    ],
    authors: [
        {
            name: "xishengbo",
            url: "https://www.screensaver.top/",
        },
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/logo.png",
        apple: "/logo.png",
    },
};

export const SiteConfig = {
    ...baseSiteConfig,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: baseSiteConfig.url,
        title: baseSiteConfig.name,
        description: baseSiteConfig.description,
        siteName: baseSiteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: baseSiteConfig.name,
        description: baseSiteConfig.description,
        images: [`${baseSiteConfig.url}/preview.jpg`],
        creator: baseSiteConfig.creator,
    },
};
