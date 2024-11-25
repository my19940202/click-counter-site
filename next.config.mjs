/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.clickcounter.online',
            },
        ],
    },
};

export default nextConfig;
