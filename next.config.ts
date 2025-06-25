import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vlt6otqx2w.ufs.sh",
        pathname: "/**", // Allow all paths from the domain
      },
      {
        protocol: "https",
        hostname: "cdn.splainer.in",
        pathname: "/**", // Allow all paths from the domain
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
