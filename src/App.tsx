import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CookiePage } from './pages/CookiePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ScrollToTopButton } from './components/ui/ScrollToTopButton';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cookie" element={<CookiePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>

      {/* Кнопка вверх */}
      <ScrollToTopButton />
    </>
  );
}

export default App;
