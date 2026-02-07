'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from "next/image";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    /* Набор ссылок в панели навигации */
    const menuItems = [
        { label: 'НАПРАВЛЕНИЯ', href: '#directions' },
        { label: 'ТРЕНЕРЫ', href: '#coaches' },
        { label: 'ЛОКАЦИЯ', href: '#location' },
        { label: 'ГАЛЕРЕЯ', href: '#gallery' },
        { label: 'ЦЕНЫ', href: '#pricing' },
        { label: 'ОТЗЫВЫ', href: '#reviews' },
        { label: 'FAQ', href: '#faq' },
        { label: 'КОНТАКТЫ', href: '#contacts' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems.map(item => item.href.substring(1))
            let foundSection = false

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId)
                if (section) {
                    const rect = section.getBoundingClientRect()
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(`#${sectionId}`)
                        foundSection = true
                        break
                    }
                }
            }

            if (!foundSection) {
                setActiveSection('')
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#6B4546] shadow-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between gap-x-4 sm:gap-x-10 h-20 md:h-24">
                    {/* Кликабельный логотип (возвращает в корень сайта) */}
                    <Link href="/" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity flex-shrink-0">
                        <Image
                            src="/images/header/logo-2.png"
                            width={160}
                            height={40}
                            alt="Главная"
                            title="Главная"
                            className="w-35 h-auto sm:w-40 md:w-50"
                        />
                    </Link>

                    {/* Навигационная панель для ПК */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-white text-sm xl:text-base font-medium tracking-wide hover:opacity-80 transition-all pb-1 ${
                                    activeSection === item.href ? 'border-b-2 border-white opacity-70' : ''
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Кнопка-гамбургер для мобильной навигационной панели */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-white p-2 flex-shrink-0"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Мобильная навигационная панель */}
            {mobileMenuOpen && (
                <nav className="lg:hidden bg-[#6B4546] border-t border-white/20">
                    <div className="px-4 py-4 space-y-3">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block text-white text-base font-medium tracking-wide py-2 hover:opacity-80 transition-opacity ${
                                    activeSection === item.href ? 'opacity-70 underline' : ''
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    )
}
