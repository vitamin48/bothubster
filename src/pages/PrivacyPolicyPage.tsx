import { useState } from 'react';
import { Header } from '../components/sections/Header';
import { Footer } from '../components/sections/Footer';
import { Modal } from '../components/ui/Modal';
import privacyIMG from '../images/girl_robot_privacy.webp';

export const PrivacyPolicyPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased">
      <Header openOrderModal={() => setIsModalOpen(true)} />

      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8 bg-white rounded-xl shadow-md border border-gray-200">
          
          {/* Картинка над заголовком */}
          <div className="mt-8 mb-4 flex justify-center">
            <img
              src={privacyIMG}
              alt="Девушка-робот конфиденциальность"
              className="w-1/2 max-w-xs h-auto rounded-lg shadow-sm"
            />
          </div>

          <h1 className="mb-6 text-3xl font-bold text-[var(--primary-color)] text-center">
            Политика конфиденциальности
          </h1>

          <p className="mb-4 text-lg text-gray-800">
            Мы в BotHubster уважаем вашу конфиденциальность и стремимся обеспечить безопасность и защиту персональных данных наших пользователей.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">1. Общие положения</h2>
          <p className="mb-4 text-lg text-gray-800">
            1.1. Настоящая Политика конфиденциальности (далее — «Политика») регулирует порядок обработки персональных данных пользователей сайта BotHubster (далее — «Сайт»), принадлежащего ИП Скрипкиной Т.Г. (далее — «Оператор»).
          </p>
          <p className="mb-4 text-lg text-gray-800">
            1.2. Используя Сайт, вы даете согласие на обработку ваших персональных данных в соответствии с настоящей Политикой и Федеральным законом №152-ФЗ «О персональных данных», доступным по ссылке: <a href="http://www.consultant.ru/document/cons_doc_LAW_61801/" target="_blank" rel="noopener noreferrer" className="text-blue-500">152-ФЗ «О персональных данных»</a>.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">2. Какие данные мы собираем</h2>
          <p className="mb-4 text-lg text-gray-800">
            2.1. Оператор может обрабатывать следующие персональные данные:
            <ul className="list-disc list-inside ml-4">
              <li>ФИО (если указывается);</li>
              <li>контактный телефон;</li>
              <li>адрес электронной почты (email);</li>
              <li>данные, которые вы добровольно указываете в форме обратной связи.</li>
            </ul>
          </p>
          <p className="mb-4 text-lg text-gray-800">2.2. Сайт не собирает данные, не относящиеся к целям обработки (раса, религия, политические взгляды и т. д.).</p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">3. Цели обработки данных</h2>
          <p className="mb-4 text-lg text-gray-800">
            3.1. Персональные данные используются для:
            <ul className="list-disc list-inside ml-4">
              <li>связи с пользователем (ответ на заявку, консультация);</li>
              <li>заключения и исполнения договора на оказание услуг;</li>
              <li>информирования о новых услугах и акциях (только с согласия пользователя).</li>
            </ul>
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">4. Условия обработки и передачи данных</h2>
          <p className="mb-4 text-lg text-gray-800">
            4.1. Оператор обязуется не передавать персональные данные третьим лицам, за исключением:
            <ul className="list-disc list-inside ml-4">
              <li>случаев, предусмотренных законодательством РФ;</li>
              <li>партнеров, оказывающих услуги для Оператора — только в рамках договора поручения.</li>
            </ul>
          </p>
          <p className="mb-4 text-lg text-gray-800">4.2. Данные хранятся на защищенных серверах и/или в электронных системах с ограниченным доступом.</p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">5. Срок хранения данных</h2>
          <p className="mb-4 text-lg text-gray-800">
            5.1. Персональные данные удаляются:
            <ul className="list-disc list-inside ml-4">
              <li>после выполнения целей обработки (например, оказание услуги);</li>
              <li>по запросу пользователя (отзыв согласия).</li>
            </ul>
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">6. Права пользователя</h2>
          <p className="mb-4 text-lg text-gray-800">
            6.1. Вы имеете право:
            <ul className="list-disc list-inside ml-4">
              <li>запросить доступ к своим персональным данным;</li>
              <li>потребовать уточнения, блокировки или удаления данных;</li>
              <li>отозвать согласие на обработку, направив запрос на email bothubster@gmail.com.</li>
            </ul>
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">7. Защита данных</h2>
          <p className="mb-4 text-lg text-gray-800">7.1. Оператор принимает технические и организационные меры для защиты данных от утраты, кражи и несанкционированного доступа.</p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">8. Контакты</h2>
          <p className="mb-4 text-lg text-gray-800">
            8.1. По вопросам обработки персональных данных обращайтесь:
            <br />
            Email: bothubster@gmail.com
            <br />
            Телеграм: @b2b_max
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">9. Использование Cookies</h2>
          <p className="mb-4 text-lg text-gray-800">
            9.1. Cookies — это небольшие текстовые файлы, которые сохраняются на устройстве пользователя и позволяют нам улучшать функциональность Сайта, а также персонализировать контент и рекламу.
          </p>
          <p className="mb-4 text-lg text-gray-800">
            9.2. Мы используем Cookies для:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Запоминания ваших предпочтений;</li>
            <li>Анализа посещаемости Сайта и поведения пользователей;</li>
            <li>Персонализации контента и рекламы;</li>
            <li>Улучшения работы Сайта.</li>
          </ul>
          <p className="mb-4 text-lg text-gray-800">
            9.3. Вы можете настроить свой браузер на отключение Cookies, но это может повлиять на функционирование некоторых функций Сайта.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">10. Защита данных</h2>
          <p className="mb-4 text-lg text-gray-800">
            10.1. Мы предпринимаем все необходимые меры для обеспечения безопасности ваших персональных данных, включая использование современных технологий защиты информации. Все данные, которые передаются через наш Сайт, защищены с помощью шифрования.
          </p>
          <p className="mb-4 text-lg text-gray-800">
            10.2. Мы принимаем меры для предотвращения несанкционированного доступа к вашим персональным данным и их утраты, однако не можем гарантировать абсолютную безопасность при передаче данных через интернет.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">11. Изменения в Политике конфиденциальности</h2>
          <p className="mb-4 text-lg text-gray-800">
            11.1. Мы вправе изменять и обновлять настоящую Политику конфиденциальности. Все изменения вступают в силу с момента их опубликования на Сайте. Мы рекомендуем периодически знакомиться с актуальной версией Политики.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold text-[var(--primary-color)]">12. Контакты</h2>
          <p className="mb-4 text-lg text-gray-800">
            12.1. По вопросам обработки персональных данных вы можете обращаться по следующему адресу:
            <br />
            Email: bothubster@gmail.com
            <br />
            Телеграм: @b2b_max
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
