/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nwuievvpcjrmecujwfox.supabase.co',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'joiasbotanicas.com.br',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'hotmart.com',
        port: '',
        pathname: '**',
      }
    ],
  },
};

export default nextConfig;
