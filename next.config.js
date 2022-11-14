/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.openweathermap.org/data/2.5/:path*'
            }
        ]
    }
}

module.exports = nextConfig
