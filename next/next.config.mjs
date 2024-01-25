/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.resolve.fallback = {
      aws4: false, // suppress mongo aws4 warning that fires each time
    };
    return config;
  },
};

export default nextConfig;
