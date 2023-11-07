import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Circle of Hope Music Archive',
  description: 'An archive of music created or used by Circle of Hope.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex w-3/4 mx-auto py-10">
          <Link href="/"><h1 className="text-4xl font-bold">Circle of Hope Music Archive</h1></Link>
        </header>
        <main className="min-h-screen w-3/4 mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
