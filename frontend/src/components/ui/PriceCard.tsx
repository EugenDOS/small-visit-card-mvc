import React from 'react';

interface PriceCardProps {
    title: string;
    price: string;
    duration: string;
    description?: string | null;
}

function PriceCard({
                       title,
                       price,
                       duration,
                       description,
                   }: PriceCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col items-center text-center space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-black">
                {title}
            </h3>
            <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-black">
                    {price}
                </p>
                <p className="text-base md:text-lg text-gray-600">
                    {duration}
                </p>
            </div>
            {description && (
                <p className="text-sm md:text-base text-gray-600 italic pt-2 border-t border-gray-200">
                    {description}
                </p>
            )}
        </div>
    );
}

export default React.memo(PriceCard);
