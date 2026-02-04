export function Pricing() {
    const prices = [
        {
            title: 'Верховая езда',
            price: '6 000 ₽',
            duration: '45 мин',
            description: null,
        },
        {
            title: 'Гимнастика на лошади',
            price: '6 000 ₽',
            duration: '45 мин',
            description: null,
        },
        {
            title: 'Вольтижировка',
            price: '6 000 ₽',
            duration: '30 мин',
            description: '30 минут интенсивной вольтижировки по нагрузке заменяют час в зале',
        },
    ]

    return (
        <section id="pricing" className="py-16 md:py-24 bg-[#F8F5E8]">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Заголовок секции */}
                <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-8 md:mb-12">
                    Услуги и цены
                </h2>

                {/* Вводный текст */}
                <p className="text-center text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12 md:mb-16">
                    Все тренировки проводятся индивидуально.
                </p>

                {/* Сетка с ценами */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                    {prices.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col items-center text-center space-y-4"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-black">
                                {item.title}
                            </h3>
                            <div className="space-y-1">
                                <p className="text-3xl md:text-4xl font-bold text-black">
                                    {item.price}
                                </p>
                                <p className="text-base md:text-lg text-gray-600">
                                    {item.duration}
                                </p>
                            </div>
                            {item.description && (
                                <p className="text-sm md:text-base text-gray-600 italic pt-2 border-t border-gray-200">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Блок с информацией об абонементах */}
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">
                        Абонементы
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
                        Действует гибкая система абонементов для регулярных тренировок. Подробности уточняйте у тренера,
                        с которым занимаетесь.
                    </p>
                </div>
            </div>
        </section>
    )
}
