import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const BOT_TOKEN = "YOUR_BOT_TOKEN"; // ⚠️ Заменить
  const CHAT_ID = "YOUR_CHAT_ID";     // ⚠️ Заменить

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      } else {
        throw new Error("Ошибка при отправке");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-12" id="contact">
      <div className="container mx-auto max-w-xl px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-[var(--primary-color)]">Связаться с нами</h2>

        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-xl shadow">
          <input
            name="name"
            type="text"
            placeholder="Ваше имя"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-3 outline-none"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Телефон"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-3 outline-none"
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Опишите задачу"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-3 outline-none resize-none"
          />

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
