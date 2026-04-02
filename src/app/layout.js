import { Syne } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
})

export const metadata = {
  title: 'Vanessa Kasun — Full Stack Developer',
  description: 'Full Stack Developer specializing in WordPress, React, and modern web technologies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${syne.variable} ${dmSans.variable} bg-background text-foreground antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}