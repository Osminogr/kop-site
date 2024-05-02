/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/kop-site",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    distDir: 'build'
  };

module.exports = nextConfig
