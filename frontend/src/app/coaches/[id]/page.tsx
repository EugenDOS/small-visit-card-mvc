import Image from 'next/image';
import Link from 'next/link';
import { coaches } from '@/data/coaches';
import { notFound } from 'next/navigation';

const contactIcons = {
    tg: '/images/social-networks/telegram-basic-icon.svg',
    inst: '/images/social-networks/instagram-icon.svg',
} as const;

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function CoachDetailPage({ params }: PageProps) {
    const { id } = await params;
    const coachId = parseInt(id);
    const coach = coaches.find((c) => c.id === coachId);

    if (!coach) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#F8F5E8]">
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/coaches"
                        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
                    >
                        ← Назад к списку тренеров
                    </Link>

                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                        <div className="flex flex-col items-center text-center mb-8">
                            {/* Фото тренера */}
                            <div className="mb-6 relative">
                                <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                                    <Image
                                        src={coach.image || "/images/basic-coach-avatar.jpg"}
                                        alt={coach.name}
                                        width={300}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Имя тренера */}
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {coach.name}
                            </h1>

                            {/* Описание */}
                            <p className="text-gray-700 text-lg leading-relaxed mb-3 max-w-2xl">
                                {coach.description}
                            </p>

                            {/* Стаж работы */}
                            <p className="text-gray-700 text-lg leading-relaxed mb-3">
                                {coach.experience}
                            </p>

                            {/* Дополнительная информация */}
                            {coach.additionalInfo && (
                                <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-2xl">
                                    {coach.additionalInfo}
                                </p>
                            )}

                            {/* Личные контакты */}
                            {coach.contacts && coach.contacts.length > 0 && (
                                <div className="flex flex-col items-center gap-4 mt-6">
                                    <h3 className="text-xl font-bold text-gray-900">Контакты тренера:</h3>
                                    <div className="flex gap-4">
                                        {coach.contacts.map((contact, index) => (
                                            <a
                                                key={index}
                                                href={contact.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title={contact.tag}
                                                className="hover:opacity-75 transition-opacity"
                                            >
                                                <Image
                                                    src={contactIcons[contact.code]}
                                                    alt={contact.tag}
                                                    width={40}
                                                    height={40}
                                                />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="border-t border-gray-200 pt-8 mt-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                                Направления обучения
                            </h2>
                            <ul className="text-gray-700 text-base md:text-lg leading-relaxed space-y-2 max-w-2xl mx-auto">
                                <li>• Верховая езда</li>
                                <li>• Гимнастика на лошади</li>
                                <li>• Вольтижировка</li>
                            </ul>
                        </div>

                        <div className="mt-8 text-center">
                            <Link
                                href="/#contacts"
                                className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Записаться на тренировку
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

// Генерация статических параметров для всех тренеров
export async function generateStaticParams() {
    return coaches.map((coach) => ({
        id: coach.id.toString(),
    }));
}
