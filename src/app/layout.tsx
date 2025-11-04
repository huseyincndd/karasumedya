import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Karasu Medya - Dijital Pazarlama ve Reklam Ajansı',
  description: 'Sosyal medya yönetimi, içerik üretimi, grafik tasarım ve organizasyon hizmetleri ile markanızı güçlendirin.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17691452295"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17691452295');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <CustomCursor />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
