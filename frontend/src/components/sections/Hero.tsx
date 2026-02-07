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
                    <span className="block text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 md:mb-4">
                        КЛУБ ЛЮБИТЕЛЕЙ ВЕРХОВОЙ ЕЗДЫ
                    </span>
                </h1>
                <p className="text-white sm:text-base md:text-lg lg:text-xl mt-8 md:mt-12 font-normal tracking-wide">
                    Профессиональное обучение для взрослых и детей.<br/>
                    Индивидуальный подход к каждому всаднику: от первых шагов до уверенного галопа.<br/>
                    <br/>
                    Мы находимся по адресу: м. Физтех, ул. Вельяминовская, 72 (КСК &quot;Свирель&quot;).
                </p>

                {/* Кнопка с эффектом жидкого стекла, сразу ведущего в TG-бота */}
                <a
                    href="#"
                    className="
                        inline-block mt-10 md:mt-14
                        px-8 py-4 md:px-10 md:py-5
                        text-white font-semibold text-base md:text-lg
                        tracking-wide uppercase
                        backdrop-blur-md bg-white/10
                        border border-white/20
                        rounded-full
                        shadow-lg shadow-black/30
                        transition-all duration-300 ease-out
                        hover:bg-white/20 hover:border-white/40 hover:scale-105
                        active:scale-95
                    "
                >
                    Записаться
                </a>
            </div>
        </section>
    )
}
