import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#F8F5E8] flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
                    Страница не найдена
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    К сожалению, страница, которую вы ищете, не существует или была перемещена.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                    Вернуться на главную
                </Link>
            </div>
        </main>
    );
}
