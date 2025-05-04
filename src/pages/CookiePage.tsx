import { useState } from 'react';
import { Header } from '../components/sections/Header';
import { Footer } from '../components/sections/Footer';
import { Modal } from '../components/ui/Modal';
import cookieIMG from '../images/girl_robot_cookie.webp';

export const CookiePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased">
      <Header openOrderModal={() => setIsModalOpen(true)} />

      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8 bg-white rounded-xl shadow-md border border-gray-200">
          
          {/* Картинка над заголовком, центрирована и уменьшена */}
          <div className="mt-8 mb-4 flex justify-center">
            <img
              src={cookieIMG}
              alt="Девушка-робот с печеньем"
              className="w-1/2 max-w-xs h-auto rounded-lg shadow-sm"
            />
          </div>

          <h1 className="mb-6 text-3xl font-bold text-[var(--primary-color)] text-center">
            Политика использования cookie
          </h1>

          <p className="mb-4 text-lg text-gray-800">
            Мы используем cookie-файлы для улучшения работы сайта, персонализации контента, а также для анализа трафика. Cookie помогают нам понять, какие разделы сайта наиболее интересны пользователям, и повысить удобство взаимодействия.
          </p>
          <p className="mb-4 text-lg text-gray-800">
            Вы можете отключить сохранение cookie в настройках вашего браузера. Однако в этом случае некоторые функции сайта могут быть недоступны.
          </p>
          <p className="mb-8 text-lg text-gray-800">
            Продолжая пользоваться сайтом, вы соглашаетесь с нашей политикой использования cookie.
          </p>
        </div>
      </main>

      <Footer />

      {/* Модальное окно */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Готовы запустить бота?"
      >
        <div className="text-center">
          <p className="mb-4">Пишите в Telegram — обсудим задачу и предложим решение под ваш бизнес. Это легко!</p>
          <a
            href="https://t.me/b2b_max"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xl font-semibold text-[var(--primary-color)] hover:underline"
          >
            @b2b_max
          </a>
        </div>
      </Modal>
    </div>
  );
};
