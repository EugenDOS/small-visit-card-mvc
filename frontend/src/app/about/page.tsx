import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#F8F5E8]">
            {/* Hero секция */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-8">
                        О клубе верховой езды
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                Наш клуб верховой езды создан для тех, кто мечтает познакомиться с миром лошадей
                                или хочет улучшить свои навыки верховой езды.
                            </p>
                            <p>
                                Мы предлагаем индивидуальный подход к каждому ученику, независимо от возраста
                                и уровня подготовки. Наши опытные тренеры помогут вам освоить верховую езду,
                                гимнастику на лошади или вольтижировку в комфортной и безопасной обстановке.
                            </p>
                            <p>
                                Занятия проходят на специально обученных лошадях, которые подбираются
                                индивидуально под каждого всадника.
                            </p>
                        </div>

                        <div className="relative aspect-4/3 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/images/directions/PHOTO_5.jpeg"
                                alt="О клубе"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center">
                            Наши преимущества
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl mb-4">🏆</div>
                                <h3 className="text-xl font-bold text-black mb-2">Опытные тренеры</h3>
                                <p className="text-gray-600">
                                    Стаж наших тренеров — более 20 лет
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🐴</div>
                                <h3 className="text-xl font-bold text-black mb-2">Обученные лошади</h3>
                                <p className="text-gray-600">
                                    Специально подготовленные животные для безопасных занятий
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">👥</div>
                                <h3 className="text-xl font-bold text-black mb-2">Индивидуальный подход</h3>
                                <p className="text-gray-600">
                                    Все тренировки проводятся индивидуально
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/#contacts"
                            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Записаться на тренировку
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
