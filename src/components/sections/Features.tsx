import { motion } from 'framer-motion';
import robotRocket from '../../images/robot_rocket.webp'; 
import {
  FaShoppingCart,
  FaCommentDots,
  FaAddressBook,
  FaCreditCard,
  FaPercentage,
  FaComments,
  FaQuestionCircle,
  FaFileAlt,
  FaTrophy
} from 'react-icons/fa';

const features = [
  { id: 'sell', icon: <FaShoppingCart />, text: 'Продают за Вас' },
  { id: 'consult', icon: <FaCommentDots />, text: 'Консультируют по продуктам и услугам' },
  { id: 'collect', icon: <FaAddressBook />, text: 'Собирают контактные данные' },
  { id: 'payments', icon: <FaCreditCard />, text: 'Осуществляют прием платежей' },
  { id: 'notify', icon: <FaPercentage />, text: 'Уведомляют об акциях, скидках' },
  { id: 'feedback', icon: <FaComments />, text: 'Собирают отзывы и обратную связь' },
  { id: 'faq', icon: <FaQuestionCircle />, text: 'Отвечают на частые вопросы' },
  { id: 'distribute', icon: <FaFileAlt />, text: 'Рассылают материалы' },
  { id: 'contests', icon: <FaTrophy />, text: 'Проводят викторины, конкурсы' }
];

export const Features = () => {
  return (
    <section id="features" className="section bg-[var(--bg-secondary)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
            {/* Вставляем картинку */}
            <div className="mb-12 text-center">
            <img 
              src={robotRocket}  // Используем импортированную картинку
              alt="Робот-ракета"
              className="mx-auto"  // Выравнивание по центру
              style={{ maxWidth: '25%', height: 'auto' }}  // Ограничение размеров
            />
          </div>
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Возможности наших ботов
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: features.findIndex(f => f.id === feature.id) * 0.1 }}
                className="flex items-center rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary-color)]/10 text-3xl text-[var(--primary-color)]">
                  {feature.icon}
                </div>
                <p className="font-medium">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
