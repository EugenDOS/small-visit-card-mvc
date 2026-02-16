import Image from 'next/image';
import Link from 'next/link';

interface CoachCardProps {
    id: number;
    name: string;
    description: string;
    experience: string;
    image?: string;
    showLink?: boolean;
}

const contactIcons = {
    tg: '/images/social-networks/telegram-basic-icon.svg',
    inst: '/images/social-networks/instagram-icon.svg',
} as const;

export default function CoachCard({
                                      id,
                                      name,
                                      description,
                                      experience,
                                      image,
                                      showLink = false,
                                  }: CoachCardProps) {
    const content = (
        <div className="flex flex-col items-center text-center">
            {/* Круглое фото с тенью */}
            <div className="mb-6 relative">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                    <Image
                        src={image || "/images/basic-coach-avatar.jpg"}
                        alt={name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Имя тренера */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {name}
            </h3>

            {/* Описание */}
            <p className="text-gray-600 text-base leading-relaxed mb-2">
                {description}
            </p>

            {/* Стаж работы */}
            <p className="text-gray-600 text-base leading-relaxed">
                {experience}
            </p>

            {showLink && (
                <Link
                    href={`/coaches/${id}`}
                    className="mt-4 text-blue-600 hover:text-blue-800 underline"
                >
                    Подробнее →
                </Link>
            )}
        </div>
    );

    return content;
}
