import Image from 'next/image';

interface DirectionCardProps {
    title: string;
    description: string;
    additionalInfo?: string;
    image: string;
    imagePosition?: 'left' | 'right';
}

export default function DirectionCard({
                                          title,
                                          description,
                                          additionalInfo,
                                          image,
                                          imagePosition = 'left',
                                      }: DirectionCardProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 md:mb-24">
            <div className={`space-y-4 ${imagePosition === 'left' ? 'lg:order-3' : ''}`}>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                    {title}
                </h3>
                <div className="space-y-3 text-base md:text-lg text-gray-700 leading-relaxed">
                    <p>{description}</p>
                    {additionalInfo && (
                        <p className="font-bold">{additionalInfo}</p>
                    )}
                </div>
            </div>

            <div className={`relative aspect-4/3 overflow-hidden rounded-lg shadow-lg ${imagePosition === 'right' ? 'lg:order-2' : ''}`}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}
