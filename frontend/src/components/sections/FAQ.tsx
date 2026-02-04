'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function FAQ() {
    interface FAQItem {
        question: string
        answer: string
        coachName: string
    }

    const faqs: FAQItem[] = [
        {
            question: 'Можно ли заниматься, если я никогда не сидел в седле?',
            answer: 'Конечно! Большинство наших учеников начинают с нуля. Мы подбираем программу индивидуально, учитывая ваш уровень подготовки. Первые занятия посвящены базовым навыкам: правильной посадке, общению с лошадью и основам управления.',
            coachName: 'Людмила Капоркина'
        },
        {
            question: 'С какого возраста можно начинать обучение?',
            answer: 'Мы принимаем детей с 6 лет и взрослых любого возраста. Для детей занятия проходят в игровой форме с особым вниманием к безопасности. Для взрослых подбираем программу с учетом физической формы и пожеланий.',
            coachName: 'Вера Попова'
        },
        {
            question: 'Нужна ли специальная экипировка для первого занятия?',
            answer: 'Для первого занятия достаточно удобной спортивной одежды и обуви с небольшим каблуком (ботинки или кроссовки с рельефной подошвой). В дальнейшем рекомендуем приобрести специальные бриджи и сапоги для верховой езды. Шлем предоставляем бесплатно.',
            coachName: 'Людмила Капоркина'
        },
        {
            question: 'Как часто нужно заниматься для достижения результата?',
            answer: 'Оптимальная частота — 2-3 раза в неделю. При таком графике уже через месяц вы уверенно будете чувствовать себя в седле. Регулярность важнее длительности: лучше заниматься чаще, но короткими сессиями.',
            coachName: 'Вера Попова'
        },
        {
            question: 'Это безопасно? Лошадь может сбросить?',
            answer: 'Мы работаем только с обученными, спокойными лошадьми. Все занятия проходят под контролем тренера. На первых этапах используем специальную корду (длинный повод), чтобы полностью контролировать движение лошади. Соблюдение техники безопасности — наш приоритет.',
            coachName: 'Людмила Капоркина'
        },
        {
            question: 'Можно ли заниматься при проблемах со спиной?',
            answer: 'Верховая езда показана при многих заболеваниях позвоночника, но требуется консультация врача. Гимнастика на лошади — это щадящая нагрузка, которая укрепляет мышечный корсет. Мы адаптируем программу под ваши особенности здоровья.',
            coachName: 'Вера Попова'
        }
    ]

    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-16 md:py-24 bg-[#F8F5E8]">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 md:mb-16">
                    Частые вопросы
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
                        >
                            {/* Вопрос */}
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-6 h-6 text-[#6B4546] flex-shrink-0" strokeWidth={2} />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-[#6B4546] flex-shrink-0" strokeWidth={2} />
                                )}
                            </button>

                            {/* Ответ */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                <div className="px-6 pb-5 pt-2 border-t border-gray-200">
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                        <span className="font-bold text-gray-900">{faq.coachName} отвечает:</span> {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
