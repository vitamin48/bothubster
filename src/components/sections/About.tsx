import { motion } from 'framer-motion';
import { FaRobot, FaHeadset, FaUserTie, FaShoppingBag, FaChartLine } from 'react-icons/fa';

export const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">Кто такие боты?</h2>

          <div className="space-y-8">
            <div className="rounded-xl bg-[var(--bg-secondary)] p-6 shadow-sm">
              <p className="text-lg font-medium leading-relaxed">
                <strong>Telegram-боты — это автоматизация, удобство и выгода.</strong> Они работают 24/7, принимают заявки, разгружают службу поддержки, отвечают на вопросы, продают, продвигают и даже развлекают. Бот может заменить администратора, менеджера, продавца и маркетолога, сокращая расходы и увеличивая прибыль. Хотите усилить бизнес? Мы создадим бота, который сделает это для Вас!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div className="flex flex-col items-center rounded-lg p-4 transition-all hover:bg-[var(--bg-secondary)] hover:shadow-sm">
                <FaUserTie className="mb-3 text-4xl text-[var(--primary-color)]" />
                <span className="text-center font-medium">Заменяет администратора</span>
              </div>

              <div className="flex flex-col items-center rounded-lg p-4 transition-all hover:bg-[var(--bg-secondary)] hover:shadow-sm">
                <FaHeadset className="mb-3 text-4xl text-[var(--primary-color)]" />
                <span className="text-center font-medium">Разгружает поддержку</span>
              </div>

              <div className="flex flex-col items-center rounded-lg p-4 transition-all hover:bg-[var(--bg-secondary)] hover:shadow-sm">
                <FaShoppingBag className="mb-3 text-4xl text-[var(--primary-color)]" />
                <span className="text-center font-medium">Продает за вас</span>
              </div>

              <div className="flex flex-col items-center rounded-lg p-4 transition-all hover:bg-[var(--bg-secondary)] hover:shadow-sm">
                <FaRobot className="mb-3 text-4xl text-[var(--primary-color)]" />
                <span className="text-center font-medium">Работает круглосуточно</span>
              </div>

              <div className="flex flex-col items-center rounded-lg p-4 transition-all hover:bg-[var(--bg-secondary)] hover:shadow-sm">
                <FaChartLine className="mb-3 text-4xl text-[var(--primary-color)]" />
                <span className="text-center font-medium">Увеличивает прибыль</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
