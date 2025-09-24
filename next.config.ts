import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "",
  output: "export",  // <=== enables static exports
  distDir: "out",        // generate static files here
  reactStrictMode: true,
};

export default nextConfig;
