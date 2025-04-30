import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Modal } from '../ui/Modal';

const pricingPlans = [
  {
    name: 'Старт',
    description: 'Простой одноуровневый бот без вложенных меню. Подойдет для справочников, FAQ или простых инструкций.',
    price: 'Бесплатно',
    features: [
      { name: 'Максимум подписчиков', value: '20' },
      { name: 'Уровней вложенности меню', value: '1' },
      { name: 'Количество менеджеров', value: '1' },
      { name: 'Доступ к БД', value: 'Нет', negative: true },
      { name: 'Рассылка', value: 'Нет', negative: true },
      { name: 'Чат с подписчиками', value: 'Да' },
      { name: 'Прием платежей', value: 'Нет', negative: true },
      { name: 'Интеграции', value: 'Нет', negative: true },
      { name: 'Сервер (хостинг)', value: 'Бесплатно 3 месяца' },
      { name: 'Разработка', value: 'Бесплатно' },
      { name: 'Доработка', value: 'Бесплатно 2 раза' },
      { name: 'Стоимость подписки', value: 'Бесплатно' }
    ],
    highlight: 'Идеально чтобы попробовать.'
  },
  {
    name: 'Бизнес',
    description: 'Функциональный бот, практически не ограничен лимитами. Подойдет для тех, кто перерос стартовый тариф и понимает, какую пользу приносит бот бизнесу.',
    price: '490 руб./месяц',
    features: [
      { name: 'Максимум подписчиков', value: '500' },
      { name: 'Уровней вложенности меню', value: '5' },
      { name: 'Количество менеджеров', value: '3' },
      { name: 'Доступ к БД', value: 'Да' },
      { name: 'Рассылка', value: 'Да' },
      { name: 'Чат с подписчиками', value: 'Да' },
      { name: 'Прием платежей', value: 'Нет', negative: true },
      { name: 'Интеграции', value: 'Нет', negative: true },
      { name: 'Сервер (хостинг)', value: 'Бесплатно' },
      { name: 'Разработка', value: '~ 1000 руб.' },
      { name: 'Доработка', value: 'Бесплатно 3 раза в месяц' },
      { name: 'Стоимость подписки', value: '490 руб./месяц' }
    ],
    highlight: 'Прекрасный выбор, если не нужны внешние интеграции.'
  },
  {
    name: 'Премиум',
    description: 'Флагманский Бот, функциональность которого ограничена лишь творческой фантазией и возможностью мессенджера Telegram. Максимальные лимиты.',
    price: '790 руб./месяц',
    features: [
      { name: 'Максимум подписчиков', value: 'Не ограничено' },
      { name: 'Уровней вложенности меню', value: 'Не ограничено' },
      { name: 'Количество менеджеров', value: 'Не ограничено' },
      { name: 'Доступ к БД', value: 'Да' },
      { name: 'Рассылка', value: 'Да' },
      { name: 'Чат с подписчиками', value: 'Да' },
      { name: 'Прием платежей', value: 'Да' },
      { name: 'Интеграции', value: 'Да' },
      { name: 'Сервер (хостинг)', value: 'Бесплатно' },
      { name: 'Разработка', value: '~ 3000 руб.' },
      { name: 'Доработка', value: 'Бесплатно' },
      { name: 'Стоимость подписки', value: '790 руб./месяц' }
    ],
    highlight: 'Подойдет для бывалых работяг, которым не нужно объяснять что это и для чего.'
  }
];

export const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="pricing" className="section bg-[var(--bg-secondary)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">Тарифы</h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={`plan-${plan.name}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex flex-col space-y-4 bg-gradient-to-b from-[var(--primary-color)]/5 to-white p-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-[var(--primary-color)]">{plan.price}</span>
                  </div>
                </div>

                <div className="flex-grow space-y-4 p-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={`${plan.name}-feature-${i}`} className="flex items-start">
                        <div className="mr-3 pt-1 text-sm">
                          {feature.negative ? (
                            <FaTimes className="text-red-500" />
                          ) : (
                            <FaCheck className="text-green-500" />
                          )}
                        </div>
                        <div>
                          <span className="text-gray-600">{feature.name}:</span>{' '}
                          <span className="font-medium">{feature.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <p className="mb-4 italic text-gray-600">{plan.highlight}</p>
                  <button
                    className={`
                      w-full px-4 py-2 rounded-lg font-semibold transition-all duration-300 
                      ${
                        plan.name === 'Старт'
                          ? 'bg-gray-400 text-white hover:bg-gray-500'
                          : plan.name === 'Премиум'
                          ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white animate-glow hover:brightness-110 shadow-lg'
                          : 'btn btn-primary'
                      }
                    `}
                    onClick={() => setIsModalOpen(true)}
                  >
                    Заказать бота
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Order Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Отличный выбор!"
      >
        <div className="text-center">
          <p className="mb-4">Пишите в Telegram — обсудим задачу и предложим решение под ваш бизнес. Это легко!</p>
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
    </section>
  );
};
