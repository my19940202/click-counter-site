import React from "react";

export default function CustomHead() {
    return (
        <>
            <meta name="baidu-site-verification" content="codeva-pzhXJBf6Zw" />
            <script
                async
                src='https://www.googletagmanager.com/gtag/js?id=G-NHD32BFRGN'
            ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-NHD32BFRGN');
                    `,
                }}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            const theme = localStorage.getItem('theme') || 'dracula';
                            document.documentElement.setAttribute('data-theme', theme);
                        })();
                    `
                }}
            />
        </>
    );
}
