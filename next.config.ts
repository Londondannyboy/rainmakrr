import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/executive-assistant-recruitment-agency",
        destination: "/ea-recruitment-agency",
        permanent: true,
      },
      {
        source: "/esg-recruitment-agency",
        destination: "/sustainability-recruitment-agency",
        permanent: true,
      },
      {
        source: "/private-markets-recruitment-agency",
        destination: "/private-equity-recruitment-agency",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
