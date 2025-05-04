import { useState } from 'react';
import { FaTelegramPlane, FaEnvelope, FaFileAlt, FaShieldAlt } from 'react-icons/fa';
import { MdOutlineCookie } from 'react-icons/md';
import { Modal } from '../ui/Modal';

export const Footer = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
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
                  <a href="/#contact" className="text-blue-100 transition-colors hover:text-white">
                    Обратная связь
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-blue-100 transition-colors hover:text-white"
                  >
                    <FaShieldAlt className="mb-0.5 mr-1 inline-block" />
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-blue-100 transition-colors hover:text-white"
                  >
                    <FaFileAlt className="mb-0.5 mr-1 inline-block" />
                    Пользовательское соглашение
                  </a>
                </li>
                <li>
                  <a
                    href="/cookie"
                    className="text-blue-100 transition-colors hover:text-white"
                  >
                    <MdOutlineCookie className="mb-0.5 mr-1 inline-block" />
                    Политика использования cookie
                  </a>
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
                  href="mailto:bothubster@gmail.com"
                  className="flex items-center text-blue-100 transition-colors hover:text-white"
                >
                  <FaEnvelope className="mr-2" /> bothubster@gmail.com
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
          <p className="mb-4 text-gray-600">
            Пишите в Telegram — обсудим задачу и предложим решение под ваш бизнес. Это легко!
          </p>
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
    </footer>
  );
};
