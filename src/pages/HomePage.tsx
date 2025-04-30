import { useState } from 'react';
import { Header } from '../components/sections/Header';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Features } from '../components/sections/Features';
import { Process } from '../components/sections/Process';
import { Carousel } from '../components/sections/Carousel';
import { Example } from '../components/sections/Example';
import { Pricing } from '../components/sections/Pricing';
import { FAQ } from '../components/sections/FAQ';
import { Footer } from '../components/sections/Footer';
import { Modal } from '../components/ui/Modal';
import { CookieBanner } from '../components/ui/CookieBanner';

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased">
      <Header openOrderModal={() => setIsModalOpen(true)} />
      <main>
        <Hero />
        <About />
        <Features />
        <Process />
        <Carousel />
        <Example />
        <Pricing />
        <FAQ />
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

      <CookieBanner />
    </div>
  );
};
