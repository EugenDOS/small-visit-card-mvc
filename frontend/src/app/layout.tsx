import React from "react"
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
  variable: '--font-sans'  // создаёт CSS-переменную
});

export const metadata: Metadata = {
    title: 'Школа верховой езды',
    description: 'КСК "Свирель" — Школа верховой езды',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
            <body className={`${montserrat.variable} font-sans antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}