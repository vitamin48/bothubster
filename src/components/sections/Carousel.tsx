import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import robotRocket from "../../images/robot_rocket.webp";
import robotMail from "../../images/robot_mail.webp";
import robotGirlBoy from "../../images/girl_robot_boy.webp";
import robotGirlConstr from "../../images/robot_girl_constr.webp";
import girlRobotTlg from "../../images/girl_robot_tlg.webp";

const slides = [
  {
    title: "Уникальный алгоритм управления",
    content:
      "Не нужно устанавливать дополнительные приложения. Всё управление внутри Telegram. Удобный и интуитивный интерфейс через любимый мессенджер!",
    image: girlRobotTlg,
  },
  {
    title: "Лучше и дешевле, чем конструкторы",
    content:
      "Программирование даёт гибкость и мощность. Уникальная логика, интеграции с API, отсутствие лимитов — всё под ваш контроль.",
    image: robotGirlConstr,
  },
  {
    title: "Рассылка",
    content:
      "Соберите базу подписчиков и информируйте их через Telegram. Ваши сообщения точно будут замечены.",
    image: robotMail,
  },
  {
    title: "Делегируйте администрирование ботом",
    content:
      "Достаточно добавить менеджеров в админ-группу в Telegram, чтобы разделить задачи.",
    image: robotGirlBoy,
  },
];

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const clearAutoAdvance = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
    clearAutoAdvance(); // Останавливаем автоперелистывание
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    clearAutoAdvance(); // Останавливаем автоперелистывание
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? handlePrev() : handleNext();
    }
  };

  const handleIndicatorClick = (i: number) => {
    setIndex(i);
    clearAutoAdvance(); // Останавливаем автоперелистывание
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearTimeout(timeoutRef.current!);
  }, [index]);

  return (
    <section
      id="advantages"
      className="section bg-[var(--bg-secondary)] py-12"
    >
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
          Преимущества
        </h2>

        <div className="mx-auto max-w-6xl">
          <div
            className="relative flex flex-col items-center overflow-hidden rounded-xl bg-white p-6 shadow-sm md:flex-row md:p-10"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[index].title}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex w-full flex-col items-center md:flex-row"
              >
                {/* Картинка */}
                <div className="mb-6 w-full max-w-xs flex-shrink-0 md:mb-0 md:mr-10 md:w-1/3">
                  <img
                    src={slides[index].image}
                    alt={slides[index].title}
                    className="mx-auto h-auto w-full max-w-[250px]"
                  />
                </div>

                {/* Текст */}
                <div className="w-full text-center md:w-2/3 md:text-left">
                  <h3 className="mb-4 text-xl font-bold text-[var(--primary-color)] md:text-2xl">
                    {slides[index].title}
                  </h3>
                  <p className="text-gray-700">{slides[index].content}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Стрелки и индикаторы в одной строке */}
          <div className="mt-4 flex items-center justify-center space-x-4">
            <button
              onClick={handlePrev}
              className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-[var(--primary-color)] hover:text-white"
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>

            {/* Индикаторы */}
            <div className="flex space-x-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleIndicatorClick(i)} // Останавливаем автоперелистывание
                  className={`h-2 w-6 rounded-full transition-all ${
                    i === index ? "bg-[var(--primary-color)]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-[var(--primary-color)] hover:text-white"
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
