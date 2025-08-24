import { type NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
  // Enable Turbopack for development
  experimental: {
    turbo: {
      rules: {
        // Configure custom file handling if needed
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
    // Enable other experimental features
    optimizePackageImports: ["@chakra-ui/react", "react-icons"],
  },
  // Performance optimizations
  images: {
    formats: ["image/webp", "image/avif"],
  },
  // Enable bundle analyzer in development
  ...(process.env.ANALYZE === "true" && {
    bundlePagesRouterDependencies: true,
  }),
};

module.exports = nextConfig;
