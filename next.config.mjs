/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'joiasbotanicas.com.br',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
             {
                protocol: 'https',
                hostname: 'hotmart.com',
            },
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            }
        ],
    },
};

export default nextConfig;
