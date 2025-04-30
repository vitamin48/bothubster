import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import girlQuestion from '../../images/girl_question.webp'; 

// Добавим категории для вопросов
const faqCategories = [
  {
    name: "О ботах",
    faqs: [
      {
        id: "what-is-bot",
        question: 'Что делает чат-бот?',
        answer: 'Чат-боты — это автоматизированные программы, способные вести диалог с пользователями, отвечать на вопросы, консультировать по продуктам и услугам, помогать с оформлением заказов и решать другие задачи, что позволяет компаниям оптимизировать процессы обслуживания клиентов, сократить нагрузку на персонал и повысить эффективность работы.'
      },
      {
        id: "who-needs-bot",
        question: 'Кому будет полезен чат-бот?',
        answer: 'Чат-бот будет полезен компаниям, которые хотят автоматизировать рутинные процессы, ускорить общение с клиентами и оптимизировать внутренние задачи. Он поможет снизить нагрузку на сотрудников, сэкономить ресурсы и повысить лояльность аудитории, обеспечивая быстрый и удобный сервис.'
      },
      {
        id: "payments",
        question: 'Можно ли подключить оплату через бота?',
        answer: 'Да, Telegram-боты могут принимать платежи через платежные системы или сервисы.'
      }
    ]
  },
  {
    name: "Разработка и управление",
    faqs: [
      {
        id: "start-requirements",
        question: 'Что нужно для старта разработки?',
        answer: 'Просто свяжитесь с нами, опишите задачу, желаемые функции и сценарии использования. Мы предложим оптимальное решение и приступим к разработке.'
      },
      {
        id: "development-process",
        question: 'Что входит в разработку чат-бота?',
        answer: 'В разработку чат-бота входит полный цикл работ от идеи до запуска. Совместно разрабатываем сценарии общения, адаптируя их под задачи бизнеса, настраиваем интеграции с внешними сервисами (CRM, платежные системы, базы данных и др.), обеспечиваем корректную обработку данных. Перед запуском бот проходит тщательное тестирование, чтобы обеспечить стабильную работу и удобство для пользователей.'
      },
      {
        id: "team-management",
        question: 'Можно ли управлять ботом вместе с командой?',
        answer: 'Да, конечно. В зависимости от тарифа можно назначать админов и менеджеров.'
      },
      {
        id: "administration",
        question: 'Что нужно для администрирования бота?',
        answer: 'Только Telegram на любом устройстве. Все действия происходят внутри приватной группы, где находитесь Вы, бот и другие члены Вашей команды.'
      },
      {
        id: "tech-control",
        question: 'Как технически происходит управление ботом?',
        answer: 'Любое действие пользователя в Вашем боте информируется сообщением внутри приватной группы, где Вы будете состоять. Там же вы сможете отвечать благодаря несложным командам. Полная инструкция будет отправлена после создания бота.'
      }
    ]
  },
  {
    name: "Цены и сравнение",
    faqs: [
      {
        id: "cost",
        question: 'Сколько стоит разработка бота?',
        answer: 'Стоимость зависит от сложности бота, количества интеграций, объема работы и дополнительных функций. Обычно это варьируется от бесплатно для стартового тарифа и до 5000 р. для премиум.'
      },
      {
        id: "time",
        question: 'Сколько времени занимает разработка?',
        answer: 'Простые боты можно запустить за несколько дней, а более сложные проекты с интеграциями и уникальной логикой могут занять несколько недель. Точные сроки определяются после обсуждения Ваших задач.'
      },
      {
        id: "updates",
        question: 'Можно ли доработать бота после запуска?',
        answer: 'Конечно! Мы можем внести изменения, добавить новые функции и интеграции по мере роста Вашего бизнеса согласно тарифам.'
      },
      {
        id: "vs-constructors",
        question: 'Чем кастомный бот лучше конструктора?',
        answer: 'Помимо того, что конструкторы имеют ограниченный функционал, они требуют от Вас освоения внутренних инструментов для их создания. А у нас Вы обсуждаете детали с живым человеком и можете сосредоточиться только на том, что будет делать бот, а не на том, как он это будет делать.'
      },
      {
        id: "vs-other-services",
        question: 'Чем вы лучше других сервисов по созданию ботов?',
        answer: 'Мы стараемся держать высокую планку уровня сервиса при минимальной цене разработки, при этом не используя конструкторы.'
      },
      {
        id: "market-prices",
        question: 'Какие цены у других аналогичных сервисов?',
        answer: 'Наша цена не выше подписок на конструкторы даже с учетом разработки и в разы доступнее заказа в IT-компаниях и на фриланс-биржах.'
      }
    ]
  }
];


const Accordion = ({ question, answer, isOpen, onToggle }: any) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-lg border border-gray-200"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between bg-white p-4 text-left transition-colors hover:bg-gray-50"
        aria-expanded={isOpen}
      >
        <h4 className="text-base font-medium">{question}</h4>
        <FaChevronDown
          className={`text-[var(--primary-color)] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-100 bg-white p-4 text-[var(--text-secondary)]">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItem, setOpenItem] = useState('');

  const toggleItem = (id: any) => {
    setOpenItem(openItem === id ? '' : id);
  };

  return (
    <section id="faq" className="section bg-white">
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
              src={girlQuestion}
              alt="Девушка с вопросом"
              className="mx-auto"
              style={{ maxWidth: '25%', height: 'auto' }}
            />
          </div>

          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Часто задаваемые вопросы
          </h2>

          <div className="mx-auto max-w-5xl">
            {/* Категории вопросов */}
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {faqCategories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(index);
                    setOpenItem('');
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === index
                      ? 'bg-[var(--primary-color)] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {faqCategories[activeCategory].faqs.map((faq) => (
                <Accordion
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItem === faq.id}
                  onToggle={() => toggleItem(faq.id)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

