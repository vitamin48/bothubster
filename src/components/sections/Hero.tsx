import { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from '../ui/Modal';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--primary-color)] to-[#4dabf7] py-20 lg:py-28">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            Создавайте мощных<br className="hidden sm:inline" /> ботов для Telegram
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-lg text-white/90 md:text-xl"
          >
            Раньше для бизнеса делали сайты, теперь - ботов.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              className="btn bg-white text-lg font-semibold text-[var(--primary-color)] hover:bg-white/90"
              onClick={() => setIsModalOpen(true)}
            >
              Начать создание бота
            </button>
          </motion.div>
        </div>
      </div>

      {/* Background decoration elements */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      {/* Order Modal */}
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
    </section>
  );
};
