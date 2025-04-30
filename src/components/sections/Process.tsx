import { motion } from 'framer-motion';
import { FaComments, FaCode, FaRocket, FaTools } from 'react-icons/fa';
import girlLight from '../../images/girl_light.webp'; 

const steps = [
  {
    title: 'Обсуждение целей',
    icon: <FaComments />,
    description: 'Мы определяем, какие задачи должен решать бот, изучаем ваш бизнес-процесс и целевую аудиторию.'
  },
  {
    title: 'Разработка бота',
    icon: <FaCode />,
    description: 'Наши специалисты создают бота с учетом всех ваших требований, интегрируют необходимые сервисы и настраивают логику работы.'
  },
  {
    title: 'Тестирование и запуск',
    icon: <FaRocket />,
    description: 'Мы проводим тщательное тестирование бота, устраняем возможные ошибки и запускаем его в рабочем режиме.'
  },
  {
    title: 'Поддержка и обновления',
    icon: <FaTools />,
    description: 'Мы обеспечиваем техническую поддержку, мониторим работу бота и вносим изменения по мере необходимости.'
  }
];

export const Process = () => {
  return (
    <section id="process" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
                      {/* Вставляем картинку */}
                      <div className="mb-12 text-center">
            <img 
              src={girlLight}  // Используем импортированную картинку
              alt="Девочка с идеей"
              className="mx-auto"  // Выравнивание по центру
              style={{ maxWidth: '25%', height: 'auto' }}  // Ограничение размеров
            />
          </div>
          <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
            Как мы создаем ботов
          </h2>

          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {steps.map((step, index) => (
                <motion.div
                  key={`step-${step.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative flex rounded-xl bg-[var(--bg-secondary)] p-6 shadow-sm transition-all hover:shadow-md md:p-8">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary-color)] text-xl text-white">
                      {index + 1}
                    </div>
                    <div>
                      <div className="mb-4 flex items-center">
                        <div className="mr-3 text-2xl text-[var(--primary-color)]">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-[var(--text-secondary)]">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
