import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React strict mode for catching potential issues
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    domains: [], // Domains if external images are used
    // remotePatterns are for more control
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Will be specified for production!
      },
    ],
  },

  // Optional compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
