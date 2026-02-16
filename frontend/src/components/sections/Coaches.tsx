import Image from 'next/image'
import { coaches } from '@/data/coaches';

const contactIcons = {
    tg: '/images/social-networks/telegram-basic-icon.svg',
    inst: '/images/social-networks/instagram-icon.svg',
} as const

export function Coaches() {
    return (
        <section id="coaches" className="py-16 md:py-24 bg-[#F8F5E8]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Заголовок секции */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                    Тренеры
                </h2>

                {/* Сетка карточек тренеров */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-16 max-w-5xl mx-auto">
                    {coaches.map((coach, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            {/* Круглое фото с тенью */}
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
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {coach.name}
                            </h3>

                            {/* Описание */}
                            <p className="text-gray-600 text-base leading-relaxed mb-2">
                                {coach.description}
                            </p>

                            {/* Стаж работы */}
                            <p className="text-gray-600 text-base leading-relaxed">
                                {coach.experience}
                            </p>

                            {/* Дополнительная информация */}
                            {coach.additionalInfo && (
                                <p className="text-gray-600 text-base leading-relaxed mt-2">
                                    {coach.additionalInfo}
                                </p>
                            )}

                            {/* Личные контакты */}
                            {coach.contacts && coach.contacts.length > 0 && (
                                <div className="flex gap-4 mt-4">
                                    {coach.contacts.map((contact, index) => (
                                        <a
                                            key={index}
                                            href={contact.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={contact.tag}
                                        >
                                            <Image
                                                src={contactIcons[contact.code]}
                                                alt={contact.tag}
                                                width={35}
                                                height={35}
                                            />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
