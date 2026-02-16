import React from "react"
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700", "800"],
    display: 'swap',
    variable: '--font-sans'  // создаёт CSS-переменную
});

export const metadata: Metadata = {
    title: 'Клуб любителей верховой езды',
    description: 'Профессиональное обучение верховой езде для взрослых и детей',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
        <body className={`${montserrat.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        </body>
        </html>
    )
}
