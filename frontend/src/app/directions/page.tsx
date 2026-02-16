import DirectionCard from '@/components/ui/DirectionCard';
import { directions } from '@/data/directions';
import Link from 'next/link';

export default function DirectionsPage() {
    return (
        <main className="min-h-screen bg-[#F8F5E8]">
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-8 md:mb-12">
                        Направления обучения
                    </h1>

                    <p className="text-center text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16 md:mb-20">
                        <span className="font-semibold">Безусловно!</span>
                        <br />
                        Даже если Вы никогда не сидели в седле, а лошадь видели только на картинке.
                        Физическая форма и возраст не имеют значения. Выберите формат, который подходит именно вам:
                    </p>

                    {directions.map((direction, index) => (
                        <DirectionCard
                            key={direction.id}
                            title={direction.title}
                            description={direction.description}
                            additionalInfo={direction.additionalInfo}
                            image={direction.image}
                            imagePosition={index % 2 === 0 ? 'left' : 'right'}
                        />
                    ))}

                    <div className="mt-12 text-center">
                        <Link
                            href="/#pricing"
                            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Посмотреть цены
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
