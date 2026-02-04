'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const [bottomOffset, setBottomOffset] = useState(32) // 32px = 8 * 4 (bottom-8 в Tailwind)

    useEffect(() => {
        const toggleVisibility = () => {
            const isModalOpen = document.body.style.overflow === 'hidden'
            const scrollPosition = window.scrollY // текущая позиция скролла
            const windowHeight = window.innerHeight // высота видимой области
            const documentHeight = document.documentElement.scrollHeight // полная высота страницы
            // сколько пикселей осталось до самого низа
            const distanceFromBottom = documentHeight - (scrollPosition + windowHeight)

            // определяем, мобильное ли устройство (меньше 768px - как 'md' в Tailwind)
            const isMobile = window.innerWidth < 768

            // Показываем/скрываем кнопку
            if (scrollPosition > 300 && !isModalOpen) {
                setIsVisible(true)

                // На мобильных двигаем кнопку вверх при приближении к footer
                if (isMobile && distanceFromBottom < 100) {
                    // Вычисляем, насколько нужно поднять кнопку
                    const extraOffset = 50 - distanceFromBottom
                    setBottomOffset(32 + extraOffset) // поднимаем выше
                } else {
                    setBottomOffset(32) // возвращаем на стандартное место
                }
            } else {
                setIsVisible(false)
                setBottomOffset(32) // сбрасываем при скрытии
            }
        }

        // Добавляем слушатель не только на скролл, но и на ресайз (поворот экрана)
        window.addEventListener('scroll', toggleVisibility)
        window.addEventListener('resize', toggleVisibility)

        const observer = new MutationObserver(toggleVisibility)
        observer.observe(document.body, { attributes: true, attributeFilter: ['style'] })

        // Вызываем один раз сразу, чтобы проверить состояние при загрузке
        toggleVisibility()

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
            window.removeEventListener('resize', toggleVisibility)
            observer.disconnect()
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#6B4546] text-white shadow-lg hover:bg-[#5a3a3b] transition-all duration-300 hover:scale-110"
                    style={{ bottom: `${bottomOffset}px` }}
                    aria-label="Наверх"
                >
                    <ChevronUp className="w-6 h-6" />
                </button>
            )}
        </>
    )
}
