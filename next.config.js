/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    distDir: 'build',
    assetPrefix: 'https://osminogr.github.io/kop-site/',
  };

module.exports = nextConfig
