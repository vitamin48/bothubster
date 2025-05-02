import { Modal } from '../ui/Modal';

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePolicyModal = ({ isOpen, onClose }: CookiePolicyModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Политика использования cookie"
      customClassName="max-w-4xl" // ✅ расширенное модальное окно
    >
      <div className="text-sm text-gray-700 space-y-4 max-h-[65vh] overflow-y-auto px-1">
        <p><strong>1. Введение</strong></p>
        <p>
          1.1. Политика использования cookie (далее — «Политика») регулирует использование файлов cookie на Сайте BotHubster.
        </p>
        <p>
          1.2. Используя Сайт, вы соглашаетесь с использованием cookie в соответствии с условиями данной Политики.
        </p>

        <p><strong>2. Что такое cookie?</strong></p>
        <p>
          2.1. Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении Сайта.
        </p>

        <p><strong>3. Для чего мы используем cookie?</strong></p>
        <p>
          3.1. Мы используем cookie для улучшения работы Сайта, а также для анализа поведения пользователей и персонализации контента.
        </p>
        <p>
          3.2. Мы также используем cookie для управления предпочтениями пользователей и рекламными кампаниями.
        </p>

        <p><strong>4. Какие cookie мы используем?</strong></p>
        <p>
          4.1. На Сайте могут использоваться следующие типы cookie:
          <ul className="list-disc list-inside ml-4">
            <li>Необходимые cookie — для обеспечения функциональности Сайта.</li>
            <li>Аналитические cookie — для анализа поведения пользователей на Сайте.</li>
            <li>Рекламные cookie — для показа релевантных рекламных материалов.</li>
          </ul>
        </p>

        <p><strong>5. Управление cookie</strong></p>
        <p>
          5.1. Вы можете управлять настройками cookie в своем браузере. Вы можете настроить браузер так, чтобы он блокировал все cookie или предупреждал вас о каждом cookie.
        </p>

        <p><strong>6. Заключение</strong></p>
        <p>
          6.1. Использование cookie помогает нам улучшить Сайт и предоставить вам лучший пользовательский опыт.
        </p>
      </div>
    </Modal>
  );
};

export default CookiePolicyModal;
