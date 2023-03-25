/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: false,
    },
    domains: ["http://localhost:3000"],
};

module.exports = nextConfig;
