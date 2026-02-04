import Image from 'next/image'

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center">
            {/* Фоновое изображение */}
            <div className="fixed top-0 left-0 z-[-1] inset-0">
                <Image
                    src="/images/hero/background.jpg"
                    alt="Здесь была главная картинка... интересно, она вернётся?.."
                    fill
                    priority
                    className="object-cover"
                    quality={100}
                />
                {/* Тонировка */}
                <div className="absolute inset-0 bg-black/50"/>
            </div>

            {/* Контент */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <h1 className="text-white font-bold tracking-wide text-balance">
                    <span className="block text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 md:mb-4">
                        ШКОЛА ВЕРХОВОЙ ЕЗДЫ
                    </span>
                </h1>
                <p className="text-white sm:text-base md:text-lg lg:text-xl mt-8 md:mt-12 font-normal tracking-wide">
                    Профессиональное обучение для взрослых и детей.<br />
                    <br />
                    Индивидуальный подход к каждому всаднику: от первых шагов до уверенного галопа.
                </p>
            </div>
        </section>
    )
}
