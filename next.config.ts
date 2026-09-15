import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/programs/ielts-booking",
        destination: "/ielts-booking",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
