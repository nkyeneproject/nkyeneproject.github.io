import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/nkyeneproject.github.io",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
