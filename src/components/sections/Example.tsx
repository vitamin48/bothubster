import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Example = () => {
  return (
    <section id="examples" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Посмотрите пример бота в действии
          </h2>

          <p className="mb-8 text-lg text-[var(--text-secondary)]">
            Лучше один раз увидеть, чем сто раз услышать! Мы подготовили бот-образец, который демонстрирует возможности и функциональность типового шаблона работы. Переходите по ссылке, чтобы протестировать его в реальном времени и убедиться, как это удобно и эффективно.
          </p>

          <div className="mx-auto max-w-md transform overflow-hidden rounded-xl bg-gradient-to-r from-[var(--primary-color)] to-blue-500 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl md:p-8">
            <div className="mb-4 text-white">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">Демо-бот Telegram</h3>
              <p>Попробуйте в действии прямо сейчас!</p>
            </div>

            <a
              href="https://t.me/BotHubsterDemoBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 font-medium text-[var(--primary-color)] transition-colors hover:bg-blue-50"
            >
              Открыть демо <FaExternalLinkAlt className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-2">
            <div className="rounded-lg border border-gray-100 bg-[var(--bg-secondary)] p-6">
              <h3 className="mb-3 text-xl font-semibold">Что вы увидите в демо:</h3>
              <ul className="ml-5 list-disc space-y-2 text-[var(--text-secondary)]">
                <li>Основные команды и интерфейс бота</li>
                <li>Систему меню и навигации</li>
                <li>Примеры сценариев взаимодействия</li>
                <li>Прием и обработку данных</li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-100 bg-[var(--bg-secondary)] p-6">
              <h3 className="mb-3 text-xl font-semibold">После тестирования:</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                После знакомства с демо-версией, мы готовы обсудить, как адаптировать бота под ваши конкретные задачи и бизнес-процессы.
              </p>
              <p className="text-[var(--text-secondary)]">
                Каждый бот разрабатывается индивидуально, с учетом ваших требований и пожеланий.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
