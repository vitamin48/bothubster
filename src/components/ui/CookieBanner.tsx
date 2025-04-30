import { useEffect, useState } from 'react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookieAccepted');
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm rounded-lg bg-gray-800 p-4 text-white shadow-lg">
      <p className="text-sm">
        Мы используем <a href="/cookie" className="underline hover:text-blue-300">cookie</a> для персонализации сервисов и удобства пользователей. Вы можете запретить сохранение cookie в настройках своего браузера.
      </p>
      <button
        onClick={handleAccept}
        className="mt-3 w-full rounded bg-white px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
      >
        Хорошо
      </button>
    </div>
  );
};
