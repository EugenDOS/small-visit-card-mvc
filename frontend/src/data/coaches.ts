export interface Coach {
    id: number;
    name: string;
    description: string;
    experience: string;
    additionalInfo?: string;
    contacts?: {
        code: 'tg' | 'inst';
        tag: string;
        url: string;
    }[];
    image?: string;
}

export const coaches: Coach[] = [
    {
        id: 1,
        name: 'Людмила Капоркина',
        description: 'Тренер по верховой езде и вольтижировке для взрослых.',
        experience: 'Стаж работы 20 лет.',
        contacts: [
            { code: 'tg', tag: '@abcd', url: '' },
            { code: 'inst', tag: '@abcd', url: ''},
        ],
        image: '/images/coaches/PHOTO_7.jpeg',
    },
    {
        id: 2,
        name: 'Вера Попова',
        description: 'Тренер по верховой езде для детей и взрослых.',
        experience: 'Стаж работы 20 лет.',
        additionalInfo: 'Веду занятия на русском и немецком языках.',
        image: '/images/coaches/PHOTO_8.jpeg',
    },
];
