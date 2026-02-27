import type { Metadata, Viewport } from 'next'
import "./globals.css";

import type { ProductDefinition } from './types'

import cloud from './cloud/config'

const products: Record<string, ProductDefinition> = {
  cloud,
}

const product = products[process.env.PRODUCT as string]
const { config } = product

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  openGraph: {
    title: config.title,
    description: config.description,
    type: 'website',
  },
  twitter: {
    title: config.title,
    description: config.description,
    card: 'summary_large_image',
  },
  icons: {
    apple: "/webclip.png",
  },
  other: {
    "theme-color": "#111827",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
