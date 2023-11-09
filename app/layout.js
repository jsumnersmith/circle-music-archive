import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Circle of Hope Music Archive',
  description: 'An archive of music created or used by Circle of Hope.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-warm-gray-50`}>
        <header className="flex w-[96%] max-w-7xl mx-auto pt-10 pb-4">
          <Link href="/" className="flex items-center gap-3"><Image src="/coh.png" width={75} height={51}/><h1 className="text-2xl md:text-5xl tracking-tight font-bold">Music Table Archive</h1></Link>
        </header>
        <main className="min-h-screen w-[96%] max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
