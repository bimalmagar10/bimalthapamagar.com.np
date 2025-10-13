import { type NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
  transpilePackages: ["next-mdx-remote"],
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/webp", "image/avif"],
    domains: ["i.scdn.co"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  ...(process.env.ANALYZE === "true" && {
    bundlePagesRouterDependencies: true,
  }),
};

module.exports = nextConfig;
