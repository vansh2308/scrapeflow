/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["pupeteer-core", "@sparticuz/chromium"],
    }
};

export default nextConfig;
