import Image from 'next/image'

export function Directions() {
    return (
        <section id="directions" className="py-18 bg-[#F8F5E8]">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Заголовок секции */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-8 md:mb-12">
                    А я смогу?
                </h2>

                {/* Подзаголовок */}
                <p className="text-center text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16 md:mb-20">
                    <span className="font-semibold">Безусловно!</span>
                    <br />
                    Даже если Вы никогда не сидели в седле, а лошадь видели только на картинке.
                    Физическая форма и возраст не имеют значения. Выберите формат, который подходит именно вам:
                </p>

                {/* Направление 1: Гимнастика на лошади (фото слева, текст справа) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 md:mb-24">
                    <div className="space-y-4 lg:order-3">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                            Гимнастика на лошади
                        </h3>
                        <div className="space-y-3 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                Идеальный вход в конный мир. Комплекс упражнений направлен на развитие баланса и
                                координации. Это бережная нагрузка, которая &quot;оживляет&quot; тело, укрепляет
                                мышцы без вреда для суставов и учит доверять животному.
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-4/3 overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/directions/PHOTO_4.jpeg"
                            alt="Гимнастика на лошади"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Направление 2: Верховая езда (текст слева, фото справа) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 md:mb-24">
                    <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                            Верховая езда
                        </h3>
                        <div className="space-y-3 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                Классические тренировки, где вы учитесь управлять лошадью самостоятельно.
                                Мы обучаем с нуля, ставим правильную посадку, а опытных всадников готовим
                                к соревнованиям.
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-4/3 overflow-hidden rounded-lg shadow-lg lg:order-2">
                        <Image
                            src="/images/directions/PHOTO_5.jpeg"
                            alt="Верховая езда"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Направление 3: Вольтижировка (фото слева, текст справа) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 md:mb-24">
                    <div className="space-y-4 lg:order-3">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                            Вольтижировка
                        </h3>
                        <div className="space-y-3 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                Акробатика на движущейся лошади. Интенсивный тренинг для развития силы, ловкости
                                и выносливости. Отличная альтернатива фитнес-залу для тех, кто хочет укрепить
                                мышечный корсет и развить чувство равновесия.
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-4/3 overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/directions/PHOTO_6.jpeg"
                            alt="Вольтижировка"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
