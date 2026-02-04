'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function Reviews() {
    const reviews = [
        {
            name: 'Екатерина Леонова',
            text: 'Я с детства обожала лошадей, но всегда считала эту мечту несбыточной. И вот мне 49 лет, и я вижу рекламу занятий вольтижировкой с тренером Людмилой Капоркиной. Привлекло именно то, что приглашались все желающие - любого возраста и с любой физподготовкой. Я подумала, а почему бы и нет? Живешь себе, работаешь, отпрашиваешь счета, посуду без конца моешь... А потом - раздал - и переворачиваешь страница. И ты по-другому начинаешь видеть все вокруг. Моя мечта осуществилась! Занимаюсь третий год вольтижировкой и несколько месяцев верховой ездой. Получаю огромное удовольствие от общения с лошадьми и осознания своих, как оказалось, скрытых способностей. Людмила - прекрасный тренер с большим опытом, знаниями и огромным терпением к таким новичкам, как я. Не можешь - научит, не хочешь - заставит! )). Приходите на тренировку, обязательно приходите!'
        },
        {
            name: 'Варя Афонина',
            text: 'Лошади - это моя любовь! Я с раннего детства хотела попробовать себя в верховой езде. Занимаюсь с 2017 года с тренером Людмилой Капоркиной. Она грамотно подбирает лошадей под уровень всадника. Всегда поможет, если что-то не получается. Каждое занятие индивидуальное, к каждому ученику тренер находит свой подход. И пусть не всегда всё получается идеально, я считаю, что в занятиях главное - это общение и единение с этими замечательными животными.'
        },
        {
            name: 'Елена Кулакова',
            text: 'Мне 56 лет. Пару месяцев назад я начала заниматься вольтижировкой и теперь уверена, что начинать можно в любом возрасте: в 30, 50 или 85. То, что я смогла сделать под руководством Людмилы - я вообще не ожидала, что мне это тело способно на такое. А Тайфуну отдельное спасибо - это просто замечательный конь!'
        },
        {
            name: 'Катя Прудникова',
            text: 'Подруга подарила сертификат на пробную поездку на коне. Мне так понравилось, что я решила начать учиться верховой езде. Потом и паренек увлекся, теперь это наше совместное хобби. Это дорогой интересный мир, от которого уже никогда не сможешь отказаться. Верховая езда и вольтижировка - мои любимые занятия, я жду каждого занятия с нетерпением. Можно начинать в любом возрасте, это не страшно. Это помогло мне стать увереннее в себе, раскрепоститься внутренне, укрепить мышцы без нагрузки на суставы. Мой тренер Людмила профессионал своего дела, объясняет, поддерживает, направляет. Спасибо, Людмила!!'
        }
    ]

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setIsModalOpen(false)
        document.body.style.overflow = ''
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isModalOpen) return
            if (e.key === 'Escape') closeModal()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isModalOpen])

    return (
        <>
            <section id="reviews" className="py-16 md:py-24 bg-[#F8F5E8]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Заголовок секции */}
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 md:mb-30 text-gray-900">
                        Отзывы
                    </h2>

                    {/* Сетка отзывов */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                        {reviews.map((review, index) => (
                            <div key={index} className="flex flex-col">
                                {/* Имя автора отзыва */}
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                                    {review.name}
                                </h3>

                                {/* Текст отзыва */}
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                                    {review.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Кнопка для открытия всех отзывов */}
                    <div className="flex justify-center mt-12 md:mt-16">
                        <button
                            onClick={openModal}
                            className="bg-[#6B4546] hover:bg-[#5a3839] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 text-base md:text-lg"
                        >
                            Читать ещё отзывы
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-4xl w-full mx-4 max-h-[90vh] bg-[#F8F5E8] rounded-lg shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Заголовок модального окна */}
                        <div className="sticky top-0 bg-[#F8F5E8] border-b border-gray-300 px-6 py-4 flex justify-between items-center z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Все отзывы
                            </h3>
                            <button
                                onClick={closeModal}
                                className="w-10 h-10 rounded-full bg-[#6B4546] hover:bg-[#5a3839] flex items-center justify-center transition-colors duration-300"
                                aria-label="Закрыть"
                            >
                                <X className="w-5 h-5 text-white" strokeWidth={2} />
                            </button>
                        </div>

                        {/* Контент с прокруткой */}
                        <div
                            className="px-6 py-6 overflow-y-auto space-y-8"
                            style={{
                                maxHeight: 'calc(90vh - 80px)',
                                scrollbarWidth: 'thin',
                                scrollbarColor: '#6B4546 #e5dcc8'
                            }}
                        >
                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md p-6"
                                >
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                                        {review.name}
                                    </h4>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        {review.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Стили для webkit браузеров (Chrome, Safari) */}
            <style jsx>{`
                div::-webkit-scrollbar {
                    width: 8px;
                }
                div::-webkit-scrollbar-track {
                    background: #e5dcc8;
                    border-radius: 4px;
                }
                div::-webkit-scrollbar-thumb {
                    background: #6B4546;
                    border-radius: 4px;
                }
                div::-webkit-scrollbar-thumb:hover {
                    background: #5a3839;
                }
            `}</style>
        </>
    )
}
