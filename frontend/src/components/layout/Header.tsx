'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from "next/image";
import {FAQ} from "@/components/sections/FAQ";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    /* Набор ссылок в панели навигации */
    const menuItems = [
        { label: 'НАПРАВЛЕНИЯ', href: '#directions' }, // Секция "Где проходят тренировки"
        { label: 'ТРЕНЕРЫ', href: '#coaches' },        // Секция "А я смогу?"
        { label: 'ЛОКАЦИЯ', href: '#location' },       // Секция с тренерами
        { label: 'ГАЛЕРЕЯ', href: '#gallery' },        // Секция с фото
        { label: 'ЦЕНЫ', href: '#pricing' },           // Секция "Услуги и цены"
        { label: 'ОТЗЫВЫ', href: '#reviews' },         // Секция с отзывами
        { label: 'FAQ', href: '#faq' },                // Секция FAQ
        { label: 'КОНТАКТЫ', href: '#contacts' },      // Футер
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

            // Если ни одна секция не активна (например, в Hero), убираем подсветку
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
            <div className="mx-auto max-w-7xl ">
                <div className="flex items-center justify-between gap-x-10 h-20 md:h-24">
                    {/* Кликабельный логотип (возвращает в корень сайта) */}
                    <Link href="/" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
                        <Image
                            src="/images/header/logo.png"
                            width={300}
                            height={60}
                            alt="Главная"
                            title="Главная"
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
                        className="lg:hidden text-white p-2"
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
