import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.virtualxcellence.com",
        pathname: "/greenwatt/**",
      },
    ],
  },
};

export default nextConfig;
