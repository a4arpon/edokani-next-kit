import type { NextConfig } from "next"
import withRspack from "next-rspack"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
        protocol: "https",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "rosybrown-eel-620472.hostingersite.com",
        protocol: "https",
      },
    ],
  },
}

export default withRspack(nextConfig)
