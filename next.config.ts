import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React strict mode for catching potential issues
  reactStrictMode: true,
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
