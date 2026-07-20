import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/convections",
        destination: "/conventions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
