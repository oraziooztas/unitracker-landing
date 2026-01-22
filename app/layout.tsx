import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UniTracker - Non perdere mai più una scadenza universitaria',
  description: 'Traccia esami, CFU e media ponderata in un\'unica dashboard. Basta Excel. UniTracker ti aiuta a organizzare la tua carriera universitaria.',
  keywords: ['università', 'esami', 'CFU', 'studenti', 'tracker', 'media ponderata', 'scadenze'],
  authors: [{ name: 'UniTracker' }],
  openGraph: {
    title: 'UniTracker - Non perdere mai più una scadenza universitaria',
    description: 'Traccia esami, CFU e media ponderata in un\'unica dashboard. Basta Excel.',
    url: 'https://unitracker.vercel.app',
    siteName: 'UniTracker',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UniTracker - Non perdere mai più una scadenza universitaria',
    description: 'Traccia esami, CFU e media ponderata in un\'unica dashboard. Basta Excel.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
