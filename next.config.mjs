/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: isGithubPages ? "export" : undefined,

  basePath: isGithubPages
    ? "/portfolio-sriom-sharan"
    : "",

  assetPrefix: isGithubPages
    ? "/portfolio-sriom-sharan/"
    : undefined,
   env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages
      ? "/portfolio-sriom-sharan"
      : "",
  images: {
    unoptimized: isGithubPages,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
