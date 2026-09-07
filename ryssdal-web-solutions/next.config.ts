import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/nb", permanent: true }];
  },
};

export default nextConfig;
