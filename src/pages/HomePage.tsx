import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

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
import { ContactForm } from "../components/ui/ContactForm";

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased">
      <Helmet>
        <title>Создание Telegram-ботов под ключ — Bothubster</title>
        <meta
          name="description"
          content="Разрабатываем Telegram-ботов для бизнеса: автоматизация, заявки, поддержка, рассылки, оплата — всё в одном решении. Лучше, чем конструкторы."
        />
        <link rel="canonical" href="https://www.bothubster.ru/" />
        <meta property="og:title" content="Создание Telegram-ботов под ключ — Bothubster" />
        <meta property="og:description" content="Telegram-боты под задачи вашего бизнеса: от консультаций до оплат. Готовые решения и поддержка." />
        <meta property="og:url" content="https://www.bothubster.ru/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bothubster.ru/og-image.webp" />
      </Helmet>

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
        <ContactForm />
      </main>

      <Footer />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Готовы запустить бота?"
      >
        <div className="text-center">
          <p className="mb-4">
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

      <CookieBanner />
    </div>
  );
};
