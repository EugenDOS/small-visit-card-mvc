import Image from 'next/image'

export function TextDivider() {
    return (
        <section id="text-divider" className="py-5 md:py-5 bg-[#F8F5E8]">
            <div className="items-center mx-auto max-w-6xl sm:px-6 lg:px-8">
                <Image
                    src="/images/text-divider/divider-7.svg"
                    alt="Текстовый разделитель"
                    width="1090"
                    height="0"
                />
            </div>
        </section>
    )
}