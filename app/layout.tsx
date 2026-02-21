import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Provisent - Skill Development Program',
  description: 'Provisent offers world-class online courses in programming, business, design, and more. Learn from industry experts with certification programs. Enroll now with flexible pricing plans.',
  keywords: 'online courses, programming, business training, digital marketing, data science, UI/UX design, professional development',
  authors: [{ name: 'Provisent' }],
  openGraph: {
    title: 'Provisent - Skill Development Program',
    description: 'Join 50,000+ students learning professional skills with Provisent',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Provisent',
    description: 'Professional online courses and certification programs',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },

}

import WhatsappFloat from '@/components/whatsapp-float'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_playfairDisplay.variable} ${_inter.variable} font-inter antialiased bg-neutral-950 text-neutral-50`}>
        {children}
        <WhatsappFloat />
        <Analytics />

</body>
    </html>
  )
}
