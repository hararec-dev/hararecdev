import type { Metadata, Viewport } from 'next';
import './globals.css'; // Assuming globals.css will be populated later
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://hararecdev.com'), // Required for resolving relative paths in openGraph images
  title: 'Hararec Dev',
  description: 'Transforma tu negocio con Apps Móviles y Web 100% a tu medida',
  authors: [{ name: 'Hararec Dev' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hararecdev.com/',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [ // For web app manifest icons, though 'manifest' field is preferred
      { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/favicon/web-app-manifest-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', url: '/favicon/web-app-manifest-512x512.png' },
    ]
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://hararecdev.com/',
    title: 'Hararec Dev',
    description: 'Transforma tu negocio con Apps Móviles y Web 100% a tu medida',
    images: [
      {
        url: '/images/logo_light.png', // Assuming this is the correct path in /public
        width: 1650,
        height: 1650,
        alt: 'Hararec Dev Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hararec_dev',
    creator: '@hararec_dev',
    title: 'Hararec Dev',
    description: 'Transforma tu negocio con Apps Móviles y Web 100% a tu medida',
    images: ['/images/logo_light.png'], // Assuming this is the correct path in /public
  },
};

export const viewport: Viewport = {
  themeColor: '#8B008B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RE13HNW1GD"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RE13HNW1GD');
            `,
          }}
        />
      </body>
    </html>
  )
}
