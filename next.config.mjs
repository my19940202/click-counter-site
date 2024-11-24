/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.screensaver.top',
            },
        ],
    },
};

export default nextConfig;
