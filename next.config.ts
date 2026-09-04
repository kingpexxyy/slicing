import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // local images from public/ need no remotePatterns
    remotePatterns: [],
    // serve modern formats automatically
    formats: ["image/avif", "image/webp"],
  },
  // strip console.* in production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
