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
      <body className={`${inter.className} bg-gray-100`}>
        <header className="flex w-3/4 mx-auto py-10">
          <Link href="/" className="flex gap-3"><Image src="/coh.png" width={75} height={75}/><h1 className="text-4xl font-bold">Music Table Archive</h1></Link>
        </header>
        <main className="min-h-screen w-3/4 mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
