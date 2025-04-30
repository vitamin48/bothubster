import { useState } from 'react';
import { Header } from '../components/sections/Header';
import { Footer } from '../components/sections/Footer';
import { Modal } from '../components/ui/Modal';

export const TermsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased">
      <Header openOrderModal={() => setIsModalOpen(true)} />

      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h1 className="mb-6 mt-8 text-3xl font-bold text-[var(--primary-color)]">
            Пользовательское соглашение
          </h1>

          <p className="mb-4 text-lg text-gray-800">
            Настоящее Пользовательское соглашение регулирует условия использования сервиса BotHubster, предоставляющего услуги по разработке и настройке Telegram-ботов.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">1. Общие положения</h2>
          <p className="mb-4 text-lg text-gray-800">
            Используя сайт и сервисы BotHubster, вы соглашаетесь с условиями настоящего соглашения. Если вы не согласны с условиями — пожалуйста, не используйте сайт и услуги.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">2. Услуги</h2>
          <p className="mb-4 text-lg text-gray-800">
            Мы предоставляем услуги по созданию, настройке и поддержке Telegram-ботов. Все работы выполняются по предварительному согласованию с заказчиком.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">3. Обязанности пользователя</h2>
          <ul className="mb-4 list-disc pl-5 text-lg text-gray-800 space-y-2">
            <li>Предоставлять точную информацию для настройки бота.</li>
            <li>Не использовать ботов для противоправной или вредоносной деятельности.</li>
            <li>Своевременно оплачивать услуги, если они платные.</li>
          </ul>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">4. Ограничение ответственности</h2>
          <p className="mb-4 text-lg text-gray-800">
            Мы не несем ответственности за последствия использования созданных ботов, включая возможные блокировки Telegram или убытки, вызванные техническими сбоями.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">5. Изменения соглашения</h2>
          <p className="mb-8 text-lg text-gray-800">
            Мы вправе изменять условия данного соглашения без предварительного уведомления. Актуальная версия всегда доступна на этой странице.
          </p>
        </div>
      </main>

      <Footer />

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
