const baseSiteConfig = {
    name: "clickcounter.online | online click counter tool",
    description: `
        Online click counter tool to show.
    `,
    url: "https://www.clickcounter.online",
    ogImage: "https://636c-cloud1-5g5eyjtze161c202-1319072486.tcb.qcloud.la/static/screensaver/logo.png",
    metadataBase: "/",
    keywords: [
        "online screensaver"
    ],
    authors: [
        {
            name: "xishengbo",
            url: "https://www.clickcounter.online/",
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
