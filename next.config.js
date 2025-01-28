/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
});

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.clickcounter.online',
            },
        ],
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
};

module.exports = withMDX(nextConfig);