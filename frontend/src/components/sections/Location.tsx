import { Coffee, Armchair } from 'lucide-react'
import Image from 'next/image'

export function Location() {
    return (
        <section id="location" className="py-16 md:py-24 bg-[#F8F5E8]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-6 md:mb-8">
                        Где проходят тренировки
                    </h2>
                    <p className="text-base text-center md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                        Для занятий мы выбрали КСК «Свирель» — современный комплекс европейского уровня в живописном селе
                        Федоскино (15 км от Москвы). Здесь созданы идеальные условия, чтобы вы чувствовали себя комфортно
                        в любое время года.
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold text-center text-black mb-8 md:mb-12">
                        Почему мы тренируем именно здесь:
                    </h3>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:auto-rows-fr">
                    {/* Large block - Indoor Arena */}
                    <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group h-[400px] md:h-auto md:min-h-[500px]">
                        <Image
                            src="/images/location/indoor-riding-ground-2.webp"
                            alt="Крытый манеж"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                            <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                                Независимость от погоды
                            </h4>
                            <p className="text-sm md:text-base text-white/90 leading-relaxed">
                                Просторный отапливаемый манеж с профессиональным еврогрунтом бережет ноги лошадей и позволяет тренироваться даже в мороз и дождь.
                            </p>
                        </div>
                    </div>

                    {/* Medium block - Outdoor Arena */}
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group h-[300px] md:h-auto md:min-h-[245px]">
                        <Image
                            src="/images/location/outdoor-riding-ground.webp"
                            alt="Открытый плац"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                            <h4 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                                Свежий воздух и природа
                            </h4>
                            <p className="text-sm text-white/90 leading-relaxed">
                                В теплые дни мы выходим на открытые плацы в окружении природы экологически чистого района.
                            </p>
                        </div>
                    </div>


                    {/* Small block - Rest Area */}
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group h-55 md:h-auto md:min-h-61.25 bg-linear-to-br from-[#A0826D] to-[#8B7355]">
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 group-hover:scale-105 transition-transform duration-300">
                            <div className="flex gap-2">
                                <Coffee className="w-14 h-14 text-white/90 mb-3 group-hover:scale-110 transition-transform duration-300" />
                                <Armchair className="w-14 h-14 text-white/90 mb-3 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-white relative z-10 mb-2">
                                Теплые раздевалки с зоной отдыха
                            </h4>
                            <p className="text-sm text-white/80 relative z-10">
                                Комфортные условия для переодевания с уютным местом для расслабления
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom text */}
                <p className="text-center text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-12 md:mt-16">
                    Мы ценим комфорт наших учеников, поэтому проводим обучение там, где спорт гармонично сочетается с качественным отдыхом.
                </p>
            </div>
        </section>
    )
}
