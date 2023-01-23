/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env:{
    apiURL: 'http://127.0.0.1:4000/'
  }
}

module.exports = nextConfig
