'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from "next/image";
import { usePathname } from 'next/navigation'

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const pathname = usePathname()

    /* Набор ссылок в панели навигации */
    const menuItems = [
        { label: 'ГЛАВНАЯ', href: '/', type: 'page' },
        { label: 'О КЛУБЕ', href: '/about', type: 'page' },
        { label: 'НАПРАВЛЕНИЯ', href: '/directions', type: 'page' },
        { label: 'ТРЕНЕРЫ', href: '/coaches', type: 'page' },
        { label: 'ЛОКАЦИЯ', href: '/#location', type: 'section' },
        { label: 'ГАЛЕРЕЯ', href: '/#gallery', type: 'section' },
        { label: 'ЦЕНЫ', href: '/#pricing', type: 'section' },
        { label: 'ОТЗЫВЫ', href: '/#reviews', type: 'section' },
        { label: 'FAQ', href: '/#faq', type: 'section' },
        { label: 'КОНТАКТЫ', href: '/#contacts', type: 'section' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems
                .filter(item => item.type === 'section')
                .map(item => item.href.substring(2)) // убираем "/#"

            let foundSection = false

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId)
                if (section) {
                    const rect = section.getBoundingClientRect()
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(`/#${sectionId}`)
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

    // Функция для определения активности ссылки
    const isActive = (item: typeof menuItems[0]) => {
        if (item.type === 'page') {
            return pathname === item.href
        } else {
            return activeSection === item.href
        }
    }

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
                    <nav className="hidden lg:flex items-center gap-4 xl:gap-6 overflow-x-auto">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-white text-xs xl:text-sm font-medium tracking-wide hover:opacity-80 transition-all pb-1 whitespace-nowrap ${
                                    isActive(item) ? 'border-b-2 border-white opacity-70' : ''
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
                                    isActive(item) ? 'opacity-70 underline' : ''
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
