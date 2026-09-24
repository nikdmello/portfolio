import type { Metadata } from 'next'
import { Playfair_Display, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SkipLink from '@/components/SkipLink'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display'
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nikdmello.com'),
  title: 'Nikhil D\'Mello | Software Engineer',
  description: 'Nikhil D\'Mello is a software engineer based in Dubai, working across backend systems, AWS, cloud infrastructure, and product engineering.',
  keywords: [
    'Nikhil D\'Mello',
    'software engineer',
    'backend engineer',
    'distributed systems',
    'AWS',
    'portfolio'
  ],
  authors: [{ name: 'Nikhil D\'Mello', url: 'https://nikdmello.com' }],
  creator: 'Nikhil D\'Mello',
  alternates: {
    canonical: 'https://nikdmello.com'
  },
  openGraph: {
    title: 'Nikhil D\'Mello | Software Engineer',
    description: 'Nikhil D\'Mello is a software engineer based in Dubai, working across backend systems, AWS, cloud infrastructure, and product engineering.',
    url: 'https://nikdmello.com',
    siteName: 'Nikhil D\'Mello',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Nikhil D\'Mello | Software Engineer',
    description: 'Nikhil D\'Mello is a software engineer based in Dubai, working across backend systems, AWS, cloud infrastructure, and product engineering.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfairDisplay.variable} ${roboto.variable}`}
      style={{ background: '#0b0b0b' }}
    >
      <body suppressHydrationWarning>
        <div>
          <SkipLink />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
