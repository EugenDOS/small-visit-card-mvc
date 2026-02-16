import CoachCard from '@/components/ui/CoachCard';
import { coaches } from '@/data/coaches';
import Link from 'next/link';

export default function CoachesPage() {
    return (
        <main className="min-h-screen bg-[#F8F5E8]">
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
                        Наши тренеры
                    </h1>

                    <p className="text-center text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
                        Наши опытные тренеры помогут вам освоить верховую езду и найти общий язык с лошадьми.
                        У каждого из них более 20 лет опыта работы.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-16 max-w-5xl mx-auto">
                        {coaches.map((coach) => (
                            <CoachCard
                                key={coach.id}
                                id={coach.id}
                                name={coach.name}
                                description={coach.description}
                                experience={coach.experience}
                                image={coach.image}
                                showLink={true}
                            />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
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
