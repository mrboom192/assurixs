import { withPayload } from '@payloadcms/next/withPayload'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.__NEXT_PRIVATE_ORIGIN || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Your app domain
      ...[NEXT_PUBLIC_SERVER_URL].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
      {
        protocol: 'https',
        hostname: 'www.assurixs.com',
      },
      {
        protocol: 'https',
        hostname: 'assurixs.com',
      },
      {
        protocol: 'https',
        hostname: 'd38ioqr075zk70.cloudfront.net',
      },
    ],
  },

  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  reactStrictMode: true,
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
