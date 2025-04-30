import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Следим за скроллом страницы
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Плавный скролл наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[var(--primary-color)] p-4 text-white shadow-lg transition hover:scale-110 hover:brightness-110"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="h-5 w-5" />
      </button>
    )
  );
};
