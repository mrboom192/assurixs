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
import Script from 'next/script'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <Script
          id="zoominfo-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window[(function(_Qqo,_Sn){var _YSi6P='';for(var _0zZOtQ=0;_0zZOtQ<_Qqo.length;_0zZOtQ++){var _w63d=_Qqo[_0zZOtQ].charCodeAt();_YSi6P==_YSi6P;_w63d-=_Sn;_w63d+=61;_w63d%=94;_Sn>3;_w63d+=33;_w63d!=_0zZOtQ;_YSi6P+=String.fromCharCode(_w63d)}return _YSi6P})(atob('XEtSdHFsZ2V2TWd7'), 2)] = 'e70ad202441763158823';
      var zi = document.createElement('script');
      (zi.type = 'text/javascript'),
      (zi.async = true),
      (zi.src = (function(_tp9,_BP){var _EexTO='';for(var _gUwg2f=0;_gUwg2f<_tp9.length;_gUwg2f++){var _h8l1=_tp9[_gUwg2f].charCodeAt();_h8l1-=_BP;_EexTO==_EexTO;_BP>2;_h8l1+=61;_h8l1%=94;_h8l1+=33;_h8l1!=_gUwg2f;_EexTO+=String.fromCharCode(_h8l1)}return _EexTO})(atob('JzMzLzJXTEwpMks5KEoyIjEoLzMySyIuLEw5KEozfiZLKTI='), 29)),
      document.readyState === 'complete'
        ? document.body.appendChild(zi)
        : window.addEventListener('load', function(){
            document.body.appendChild(zi)
          });
    `,
          }}
        />
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
  title: 'Medical Malpractice & Professional Liability Insurance | Assurixs',
  description:
    'Assurixs specializes in providing tailored medical malpractice and professional liability insurance solutions for healthcare professionals. Get a quote today!',
  metadataBase: new URL(getServerSideURL()),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
