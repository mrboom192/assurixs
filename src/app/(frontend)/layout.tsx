import './globals.css'
import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { draftMode } from 'next/headers'

import { getServerSideURL } from '@/utilities/getURL'
import { Header } from '@/components/Header'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { Footer } from '@/components/Footer'
import { Providers } from '@/providers'
import { AdminBar } from '@/components/AdminBar'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
      </head>
      <body>
        <Providers>
          <Header isAdminBarEnabled={isEnabled} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
