/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in ./out (run `npm run build`).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
