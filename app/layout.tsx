import type { Metadata } from 'next'
import { inter, yellowtail } from '@/app/fonts'
import './globals.css'

export const metadata: Metadata = {
  title:
    'Gradielicious - Infinitely random, ultra-performant animated gradients',
  description: 'Infinitely random, hyper-performant animated gradients',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${yellowtail.variable}`}>
        {children}
      </body>
    </html>
  )
}
