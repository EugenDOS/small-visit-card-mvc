'use client'

import { useState, useEffect } from 'react'
import { X, Download, ChevronLeft, ChevronRight } from 'lucide-react'

export function Gallery() {
    const photos = [
        '/images/gallery/20170921_horse066.jpg',
        '/images/gallery/20170921_horse075.jpg',
        '/images/gallery/20170921_horse079.jpg',
        '/images/gallery/20170921_horse095.jpg',
        '/images/gallery/PHOTO_1.jpg',
        '/images/gallery/PHOTO_2.jpeg',
    ]

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
    const [showControls, setShowControls] = useState(true)
    const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null)

    const openModal = (index: number) => {
        setCurrentPhotoIndex(index)
        setIsModalOpen(true)
        setShowControls(true)
        // eslint-disable-next-line react-hooks/immutability
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setIsModalOpen(false)
        document.body.style.overflow = ''
    }

    const nextPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
        setShowControls(true)
        resetHideTimeout()
    }

    const prevPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
        setShowControls(true)
        resetHideTimeout()
    }

    const downloadPhoto = () => {
        const link = document.createElement('a')
        link.href = photos[currentPhotoIndex]
        link.download = `photo-${currentPhotoIndex + 1}.jpg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const resetHideTimeout = () => {
        if (hideTimeout) {
            clearTimeout(hideTimeout)
        }
        const timeout = setTimeout(() => {
            setShowControls(false)
        }, 3000)
        setHideTimeout(timeout)
    }

    const handleMouseMove = () => {
        setShowControls(true)
        resetHideTimeout()
    }

    useEffect(() => {
        if (isModalOpen) {
            resetHideTimeout()
            return () => {
                if (hideTimeout) {
                    clearTimeout(hideTimeout)
                }
            }
        }
    }, [isModalOpen])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isModalOpen) return
            if (e.key === 'Escape') closeModal()
            if (e.key === 'ArrowLeft') prevPhoto()
            if (e.key === 'ArrowRight') nextPhoto()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isModalOpen])

    return (
        <>
            <section id="gallery" className="py-16 md:py-24 bg-[#F8F5E8]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Заголовок секции */}
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
                        Галерея
                    </h2>

                    {/* Подзаголовок */}
                    <div className="text-center mb-12 md:mb-16">
                        <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed">
                            Хотите красивые кадры на память? Мы с радостью организуем фотосессию с нашими лошадьми ;)
                        </p>
                    </div>

                    {/* Галерея фотографий */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {photos.map((imgSrc, index) => (
                            <div
                                key={index}
                                className="w-full aspect-square overflow-hidden bg-gray-300 cursor-pointer hover:opacity-90 transition-opacity rounded-md"
                                onClick={() => openModal(index)}
                            >
                                <img
                                    src={imgSrc}
                                    alt={`Фотография ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
                    onClick={closeModal}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleMouseMove}
                >
                    <div
                        className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Фото */}
                        <div className="relative bg-white p-2 md:p-4 rounded-lg shadow-2xl max-w-full max-h-full flex items-center justify-center">
                            <img
                                src={photos[currentPhotoIndex]}
                                alt={`Фотография ${currentPhotoIndex + 1}`}
                                className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
                            />
                        </div>

                        {/* Кнопка закрытия */}
                        <button
                            onClick={closeModal}
                            className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-white/70 hover:bg-white/90 flex items-center justify-center transition-all duration-300 ${
                                showControls ? 'opacity-100' : 'opacity-0'
                            }`}
                            aria-label="Закрыть"
                        >
                            <X className="w-6 h-6 text-black" strokeWidth={1.5} />
                        </button>

                        {/* Кнопка скачивания */}
                        <button
                            onClick={downloadPhoto}
                            className={`absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/70 hover:bg-white/90 flex items-center justify-center transition-all duration-200 ${
                                showControls ? 'opacity-100' : 'opacity-0'
                            }`}
                            aria-label="Скачать"
                        >
                            <Download className="w-6 h-6 text-black" strokeWidth={1.5} />
                        </button>

                        {/* Левая стрелка */}
                        <button
                            onClick={prevPhoto}
                            className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 transition-all duration-300 flex items-center justify-center ${
                                showControls ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                                width: '50px',
                                height: '80px',
                                borderTopRightRadius: '40px',
                                borderBottomRightRadius: '40px',
                            }}
                            aria-label="Предыдущее фото"
                        >
                            <ChevronLeft className="w-8 h-8 text-black mr-2" strokeWidth={1.5} />
                        </button>

                        {/* Правая стрелка */}
                        <button
                            onClick={nextPhoto}
                            className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 transition-all duration-300 flex items-center justify-center ${
                                showControls ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                                width: '50px',
                                height: '80px',
                                borderTopLeftRadius: '40px',
                                borderBottomLeftRadius: '40px',
                            }}
                            aria-label="Следующее фото"
                        >
                            <ChevronRight className="w-8 h-8 text-black ml-2" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
