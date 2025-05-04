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

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">1. Для чего мы используем cookies?</h2>
          <p className="mb-4 text-lg text-gray-800">
            Мы используем следующие типы cookies:
            <ul className="list-disc list-inside ml-4">
              <li><strong>Необходимые cookies</strong> — для функционирования сайта.</li>
              <li><strong>Аналитические cookies</strong> — для анализа посещаемости и улучшения сайта.</li>
              <li><strong>Функциональные cookies</strong> — для запоминания ваших предпочтений.</li>
              <li><strong>Рекламные cookies</strong> — для показа релевантной рекламы.</li>
            </ul>
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">2. Управление cookies</h2>
          <p className="mb-4 text-lg text-gray-800">
            Вы можете управлять cookies в настройках вашего браузера. Если вы не хотите, чтобы cookies сохранялись, вы можете отключить их, но это может повлиять на работу некоторых функций сайта.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">3. Согласие на использование cookies</h2>
          <p className="mb-4 text-lg text-gray-800">
            Используя наш сайт, вы соглашаетесь на использование cookies. Если вы не согласны, вы можете изменить настройки cookies или покинуть сайт.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">4. Изменения в Политике</h2>
          <p className="mb-4 text-lg text-gray-800">
            Мы можем обновлять Политику использования cookies. Все изменения будут опубликованы на этой странице.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">5. Контакты</h2>
          <p className="mb-4 text-lg text-gray-800">
            Если у вас есть вопросы, вы можете связаться с нами по email: bothubster@gmail.com или через Телеграм: @b2b_max.
          </p>
          <p className="mb-4 text-lg text-gray-800">
          Редакция от 04.05.2025
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
