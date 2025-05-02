import { useState } from 'react';
import { FaTelegramPlane, FaEnvelope, FaFileAlt, FaShieldAlt } from 'react-icons/fa';
import { MdOutlineCookie } from 'react-icons/md';
import PrivacyModal from '../ui/PrivacyModal';
import { Modal } from '../ui/Modal';
import UserAgreementModal from '../ui/UserAgreementModal'; // Импортируем компонент модального окна для Пользовательского соглашения
import CookiePolicyModal from '../ui/CookiePolicyModal'; // Импортируем компонент модального окна для Политики использования cookie

export const Footer = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false); // Для модального окна политики конфиденциальности
  const [isUserAgreementModalOpen, setIsUserAgreementModalOpen] = useState(false); // Для модального окна пользовательского соглашения
  const [isCookiePolicyModalOpen, setIsCookiePolicyModalOpen] = useState(false); // Для модального окна политики использования cookie

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--primary-color)] py-12 text-white">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-bold">BotHubster</h3>
              <p className="mb-4 text-blue-100">
                Создание эффективных ботов для вашего бизнеса, повышающих эффективность,
                автоматизирующих процессы и улучшающих взаимодействие с клиентами.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold">Разделы</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/#features" className="text-blue-100 transition-colors hover:text-white">
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="/#process" className="text-blue-100 transition-colors hover:text-white">
                    Как мы работаем
                  </a>
                </li>
                <li>
                  <a href="/#advantages" className="text-blue-100 transition-colors hover:text-white">
                    Преимущества
                  </a>
                </li>
                <li>
                  <a href="/#examples" className="text-blue-100 transition-colors hover:text-white">
                    Примеры
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="text-blue-100 transition-colors hover:text-white">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="text-blue-100 transition-colors hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setIsPrivacyModalOpen(true)} // Открытие модального окна с политикой конфиденциальности
                    className="text-blue-100 transition-colors hover:text-white"
                  >
                    <FaShieldAlt className="mb-0.5 mr-1 inline-block" />
                    Политика конфиденциальности
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsUserAgreementModalOpen(true)} // Открытие модального окна с пользовательским соглашением
                    className="text-blue-100 transition-colors hover:text-white"
                  >
                    <FaFileAlt className="mb-0.5 mr-1 inline-block" />
                    Пользовательское соглашение
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsCookiePolicyModalOpen(true)} // Открытие модального окна с политикой использования cookie
                    className="text-blue-100 transition-colors hover:text-white"
                  >
                    <MdOutlineCookie className="mb-0.5 mr-1 inline-block" />
                    Политика использования cookie
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold">Контакты</h3>
              <div className="mb-6 space-y-2">
                <a
                  href="https://t.me/b2b_max"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-100 transition-colors hover:text-white"
                >
                  <FaTelegramPlane className="mr-2" /> @b2b_max
                </a>
                <a
                  href="mailto:info@telegrambot.com"
                  className="flex items-center text-blue-100 transition-colors hover:text-white"
                >
                  <FaEnvelope className="mr-2" /> info@telegrambot.com
                </a>
              </div>

              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="btn rounded-full border-2 border-white bg-transparent py-2 text-sm hover:bg-white hover:text-[var(--primary-color)]"
              >
                Заказать бота
              </button>
            </div>
          </div>

          <div className="mt-12 border-t border-blue-400 pt-8 text-center text-sm text-blue-200">
            <p>© {currentYear} BotHubster. Все права защищены.</p>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      <Modal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        title="Готовы запустить бота?"
      >
        <div className="text-center">
          <p className="mb-4 text-gray-600">Пишите в Telegram — обсудим задачу и предложим решение под ваш бизнес. Это легко!</p>
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

      {/* Privacy Modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)} // Закрытие модального окна
      />

      {/* User Agreement Modal */}
      <UserAgreementModal
        isOpen={isUserAgreementModalOpen}
        onClose={() => setIsUserAgreementModalOpen(false)} // Закрытие модального окна
      />

      {/* Cookie Policy Modal */}
      <CookiePolicyModal
        isOpen={isCookiePolicyModalOpen}
        onClose={() => setIsCookiePolicyModalOpen(false)} // Закрытие модального окна
      />
    </footer>
  );
};
