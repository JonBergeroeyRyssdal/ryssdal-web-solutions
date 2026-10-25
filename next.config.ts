import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return ["/nb", "/en", "/es"].map((source) => ({
      source,
      destination: "/",
      permanent: true,
    }));
  },
};

export default nextConfig;
