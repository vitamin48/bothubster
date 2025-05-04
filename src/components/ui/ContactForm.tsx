import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [isAgreed, setIsAgreed] = useState(false);
  const [consentError, setConsentError] = useState(false); // 👉 новая переменная

  const BOT_TOKEN = "7499263148:AAFB5_DmzJ6HckBBzl0P6iGR1haPfT3SGZE"; // 🔁 замени на свой
  const CHAT_ID = "128592002";     // 🔁 замени на свой

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAgreed) {
      setConsentError(true);
      return;
    }

    setConsentError(false); // убираем ошибку, если галочка уже поставлена
    setStatus("sending");

    const text = `
📩 Новая заявка с сайта:

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
💬 Комментарий: ${formData.message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", message: "" });
        setIsAgreed(false);
      } else {
        throw new Error("Ошибка при отправке");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-12">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-[var(--primary-color)]">
          Связаться с нами
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm font-semibold text-gray-700">
                Ваше имя
              </label>
              <input
                name="name"
                type="text"
                placeholder="Ваше имя"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 p-3 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 text-sm font-semibold text-gray-700">
                Телефон
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="Телефон, e-mail, @никTelegram"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 p-3 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm font-semibold text-gray-700">
              Описание задачи
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Опишите задачу, дайте комментарий..."
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-3 outline-none resize-none"
            />
          </div>

          <div className="flex items-start gap-2 text-sm text-gray-700">
            <input
              id="consent"
              type="checkbox"
              checked={isAgreed}
              onChange={() => {
                setIsAgreed(!isAgreed);
                setConsentError(false); // убираем ошибку при клике
              }}
              className="mt-1 accent-[var(--primary-color)]"
            />
            <label htmlFor="consent">
              Я даю согласие на обработку своих персональных данных и принимаю{" "}
              <a href="/privacy" className="text-[var(--primary-color)] underline hover:opacity-80" target="_blank">
                Политику конфиденциальности
              </a> сайта.
            </label>
          </div>

          {consentError && (
            <p className="text-red-600 text-sm -mt-3">
              ❗ Необходимо согласиться с политикой конфиденциальности
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded bg-[var(--primary-color)] p-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" ? "Отправка..." : "Отправить"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-sm mt-2">✅ Заявка успешно отправлена!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm mt-2">⚠️ Ошибка при отправке. Попробуйте позже.</p>
          )}
        </form>
      </div>
    </section>
  );
};
