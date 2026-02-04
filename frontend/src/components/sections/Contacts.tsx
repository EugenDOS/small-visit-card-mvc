'use client'

import { useState } from 'react'
import Image from "next/image";

export function Contacts() {
    const [language, setLanguage] = useState('Русский')

    const languages = [
        { code: 'ru', name: 'Русский' },
        { code: 'en', name: 'English' },
        { code: 'de', name: 'Deutsch' },
    ]

    return (
        <section id="contacts" className="py-16 md:py-24 bg-[#6B4546]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Заголовок секции */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                    Контакты
                </h2>

                {/* Контейнер карты и контактных блоков */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Яндекс карта */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A7608775f27a588c72952b456c6621686ade4b444574d44a84d273102d64117eb&amp;source=constructor"
                            width="100%"
                            height="475"
                            loading="lazy"
                            title="Карта местоположения"
                            className="w-full"
                        />
                    </div>

                    {/* Блок с адресом */}
                    <div className="flex flex-col gap-5">
                        {/* Блок Адрес */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-start gap-4 transition-colors">
                            <div className="shrink-0">
                                <Image
                                    src={"images/contacts/map-point-icon.svg"}
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="brightness-0 invert"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">Адрес</h3>
                                <p className="text-[#B3A1A1] text-base leading-relaxed">
                                    КСК &quot;Свирель&quot;
                                </p>
                                <p className="text-white text-base leading-relaxed">
                                    м. Физтех, ул. Вельяминовская, 72
                                </p>
                            </div>
                        </div>

                        {/* Блок Telegram */}
                        <a
                            href="#"
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-start gap-4 hover:bg-white/15 transition-colors"
                        >
                            <div className="shrink-0 ">
                                <Image
                                    src={"images/social-networks/telegram-minimal-white-icon.svg"}
                                    alt=""
                                    width="40"
                                    height="40"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">Telegram-бот</h3>
                                <p className="text-[#B3A1A1] text-base leading-relaxed">
                                    Для записи, вопросов и отзывов
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
