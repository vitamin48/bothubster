import { useState } from 'react';
import { Header } from '../components/sections/Header';
import { Footer } from '../components/sections/Footer';
import { Modal } from '../components/ui/Modal';
import privacyIMG from '../images/girl_robot_privacy.webp';

export const PrivacyPolicyPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased">
      <Header openOrderModal={() => setIsModalOpen(true)} />

      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8 bg-white rounded-xl shadow-md border border-gray-200">
          
          {/* Картинка над заголовком */}
          <div className="mt-8 mb-4 flex justify-center">
            <img
              src={privacyIMG}
              alt="Девушка-робот конфиденциальность"
              className="w-1/2 max-w-xs h-auto rounded-lg shadow-sm"
            />
          </div>

          <h1 className="mb-6 text-3xl font-bold text-[var(--primary-color)] text-center">
            Политика конфиденциальности
          </h1>

          <p className="mb-4 text-lg text-gray-800">
            Мы в BotHubster уважаем вашу конфиденциальность и стремимся обеспечить безопасность и защиту персональных данных наших пользователей.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">Сбор информации</h2>
          <p className="mb-4 text-lg text-gray-800">
            Мы собираем только ту информацию, которая необходима для предоставления наших услуг — создания и настройки Telegram-ботов, а также поддержки клиентов. Это может включать имя, контактные данные (например, Telegram-ник или электронную почту), а также информацию, предоставленную вами добровольно в процессе общения.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">Использование информации</h2>
          <p className="mb-4 text-lg text-gray-800">
            Собранная информация используется исключительно для оказания услуг, связи с вами по вопросам разработки, технической поддержки, улучшения качества сервиса и обработки заказов.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">Хранение и защита</h2>
          <p className="mb-4 text-lg text-gray-800">
            Мы применяем организационные и технические меры для защиты ваших данных от несанкционированного доступа, утраты или раскрытия. Доступ к данным имеют только сотрудники, которым он необходим для выполнения своих обязанностей.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">Передача данных</h2>
          <p className="mb-4 text-lg text-gray-800">
            Мы не передаем ваши данные третьим лицам, за исключением случаев, предусмотренных законодательством или необходимых для исполнения услуг (например, интеграции с Telegram API).
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">Ваши права</h2>
          <p className="mb-4 text-lg text-gray-800">
            Вы имеете право запросить доступ к своим данным, потребовать их исправления или удаления. Для этого свяжитесь с нами по контактам, указанным на сайте.
          </p>

          <p className="mb-8 text-lg text-gray-800">
            Используя наш сайт, вы соглашаетесь с условиями настоящей политики конфиденциальности. Мы оставляем за собой право вносить в нее изменения. Актуальная версия всегда доступна на этой странице.
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
