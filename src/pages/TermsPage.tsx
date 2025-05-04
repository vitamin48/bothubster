import { useState } from 'react';
import { Header } from '../components/sections/Header';
import { Footer } from '../components/sections/Footer';
import { Modal } from '../components/ui/Modal';
import termsIMG from '../images/girl_robot_terms.webp';

export const TermsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased">
      <Header openOrderModal={() => setIsModalOpen(true)} />

      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8 bg-white rounded-xl shadow-md border border-gray-200">
          <div className="mt-8 mb-4 flex justify-center">
            <img
              src={termsIMG}
              alt="Девушка-робот условия использования"
              className="w-1/2 max-w-xs h-auto rounded-lg shadow-sm"
            />
          </div>

          <h1 className="mb-6 text-3xl font-bold text-[var(--primary-color)] text-center">
            Пользовательское соглашение
          </h1>

          <p className="mb-4 text-lg text-gray-800">
            Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между Пользователем и индивидуальным предпринимателем Скрипкиной Татьяной Геннадьевной (ИНН 322700524438, ОГРН 324320000003361), являющимся правообладателем сервиса BotHubster, расположенного в сети Интернет (далее — Сервис).
          </p>
          <p className="mb-4 text-lg text-gray-800">
            Используя Сервис, Пользователь подтверждает своё согласие с условиями настоящего Соглашения. Если вы не согласны с условиями — пожалуйста, не используйте Сервис.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">1. Общие положения</h2>
          <p className="mb-4 text-lg text-gray-800">
            1.1. Сервис BotHubster предоставляет пользователям возможность создавать Telegram-ботов различной сложности, в зависимости от выбранного тарифа.
            <br />
            1.2. Доступ к Сервису осуществляется через веб-интерфейс, а взаимодействие с конечным продуктом — через платформу Telegram.
            <br />
            1.3. Настоящее Соглашение может быть изменено в любое время. Актуальная версия всегда доступна пользователю на этой странице.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">2. Регистрация и доступ</h2>
          <p className="mb-4 text-lg text-gray-800">
            2.1. Для доступа к функционалу Сервиса пользователь должен пройти регистрацию и предоставить необходимую информацию.
            <br />
            2.2. Пользователь обязуется предоставлять достоверную информацию и поддерживать её актуальность.
            <br />
            2.3. Администрация имеет право ограничить или приостановить доступ пользователя в случае нарушения условий настоящего Соглашения.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">3. Тарифы и условия оплаты</h2>
          <p className="mb-4 text-lg text-gray-800">
            3.1. Сервис предоставляет следующие тарифные планы:
            <br />
            <br />
            <strong>Старт</strong> — бесплатный тариф с базовым функционалом.
            <br />
            <strong>Бизнес</strong> — платный тариф, стоимостью 490 руб./мес.
            <br />
            <strong>Премиум</strong> — платный тариф, стоимостью 790 руб./мес.
            <br />
            <br />
            3.2. Подробное описание условий каждого тарифа опубликовано на сайте Сервиса.
            <br />
            3.3. Все оплаты осуществляются в формате постоплаты — пользователь оплачивает подписку или разработку, после чего услуга считается оказанной и принятой.
            <br />
            3.4. Возврат денежных средств за оказанные услуги не предусмотрен, за исключением случаев, прямо предусмотренных законодательством РФ.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">4. Права и обязанности сторон</h2>
          <p className="mb-4 text-lg text-gray-800">
            <strong>Пользователь обязуется:</strong>
            <br />
            — не использовать Сервис в незаконных целях;
            <br />
            — не размещать материалы, нарушающие авторские права третьих лиц;
            <br />
            — соблюдать требования Telegram API и правил мессенджера.
            <br />
            <br />
            <strong>Администрация Сервиса обязуется:</strong>
            <br />
            — предоставлять доступ к сервису в пределах оплаченного тарифа;
            <br />
            — обеспечивать работоспособность сервиса и предоставленных ботов, за исключением форс-мажорных ситуаций;
            <br />
            — обеспечивать техническую поддержку пользователям.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">5. Интеллектуальная собственность</h2>
          <p className="mb-4 text-lg text-gray-800">
            5.1. Все права на Сервис, включая программное обеспечение, дизайн и структуру, принадлежат ИП Скрипкиной Т.Г.
            <br />
            5.2. Пользователь получает ограниченное право на использование бота, созданного с помощью Сервиса, в рамках выбранного тарифа.
            <br />
            5.3. Пользователь несёт ответственность за контент, размещённый в своих ботах.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">6. Ограничение ответственности</h2>
          <p className="mb-4 text-lg text-gray-800">
            6.1. Сервис предоставляется "как есть", без гарантий постоянной доступности и без гарантий получения конкретных результатов.
            <br />
            6.2. Администрация не несёт ответственности за убытки, понесённые в результате использования или невозможности использования Сервиса.
            <br />
            6.3. Пользователь самостоятельно несёт ответственность за соблюдение законодательства при использовании бота.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">7. Поддержка и связь</h2>
          <p className="mb-4 text-lg text-gray-800">
            По всем вопросам, связанным с работой Сервиса, Пользователь может обращаться:
            <br />
            <br />
            Email: <a href="mailto:bothubster@gmail.com" className="text-[var(--primary-color)] hover:underline">bothubster@gmail.com</a>
            <br />
            Telegram: <a href="https://t.me/b2b_max" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:underline">@b2b_max</a>
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">8. Заключительные положения</h2>
          <p className="mb-8 text-lg text-gray-800">
            8.1. Настоящее Соглашение регулируется законодательством Российской Федерации.
            <br />
            8.2. Все споры и разногласия решаются путём переговоров. При невозможности урегулирования спора — в судебном порядке по месту регистрации ИП.
            <br />
            8.3. Использование Сервиса означает согласие с условиями настоящего Соглашения.
          </p>
          <p className="mb-4 text-lg text-gray-800">
          Редакция от 04.05.2025
          </p>
        </div>
      </main>

      <Footer />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Готовы запустить бота?"
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
    </div>
  );
};
