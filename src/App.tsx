import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CookiePage } from './pages/CookiePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ScrollToTopButton } from './components/ui/ScrollToTopButton';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      {/* Глобальные SEO-мета по умолчанию (для подстраховки) */}
      <Helmet>
        <title>Bothubster — Telegram-боты под ключ</title>
        <meta
          name="description"
          content="Создание мощных Telegram-ботов для бизнеса. Автоматизация заявок, чат с клиентами, рассылки и приём платежей. Всё в Telegram."
        />
        <link rel="canonical" href="https://www.bothubster.ru/" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cookie" element={<CookiePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>

      <ScrollToTopButton />
    </>
  );
}

export default App;
