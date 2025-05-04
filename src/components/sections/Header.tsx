import { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from '../ui/Modal';

interface HeaderProps {
  openOrderModal: () => void;
}

export const Header = ({ openOrderModal }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href="/" className="text-2xl font-bold text-[var(--primary-color)]">
          BotHubster
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center space-x-6">
            <a href="/#features" className="transition-smooth hover:text-[var(--primary-color)]">
              Возможности
            </a>
            <a href="/#process" className="transition-smooth hover:text-[var(--primary-color)]">
              Как мы работаем
            </a>
            <a href="/#examples" className="transition-smooth hover:text-[var(--primary-color)]">
              Примеры
            </a>
            <a href="/#pricing" className="transition-smooth hover:text-[var(--primary-color)]">
              Тарифы
            </a>
            <a href="/#faq" className="transition-smooth hover:text-[var(--primary-color)]">
              FAQ
            </a>
            <a href="/#contact" className="transition-smooth hover:text-[var(--primary-color)]">
              Обратная связь
            </a>
          </nav>
          <button
            className="btn btn-primary"
            onClick={openOrderModal}
          >
            Заказать бота
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="container mx-auto space-y-4 bg-white px-4 pb-6">
            <nav className="flex flex-col space-y-4">
              <a
                href="/#features"
                className="transition-smooth hover:text-[var(--primary-color)]"
                onClick={() => setIsOpen(false)}
              >
                Возможности
              </a>
              <a
                href="/#process"
                className="transition-smooth hover:text-[var(--primary-color)]"
                onClick={() => setIsOpen(false)}
              >
                Как мы работаем
              </a>
              <a
                href="/#examples"
                className="transition-smooth hover:text-[var(--primary-color)]"
                onClick={() => setIsOpen(false)}
              >
                Примеры
              </a>
              <a
                href="/#pricing"
                className="transition-smooth hover:text-[var(--primary-color)]"
                onClick={() => setIsOpen(false)}
              >
                Тарифы
              </a>
              <a
                href="/#faq"
                className="transition-smooth hover:text-[var(--primary-color)]"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <a
                href="/#contact"
                className="transition-smooth hover:text-[var(--primary-color)]"
                onClick={() => setIsOpen(false)}
              >
                Обратная связь
              </a>
            </nav>
            <button
              className="btn btn-primary w-full"
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => {
                  openOrderModal();
                }, 300);
              }}
            >
              Заказать бота
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};
