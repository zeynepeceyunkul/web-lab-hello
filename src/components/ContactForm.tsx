import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
import Input from "./Input";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormValues): FormErrors {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Ad soyad zorunludur.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "E-posta zorunludur.";
    } else if (!values.email.includes("@")) {
      nextErrors.email = "Geçerli bir e-posta girin.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Mesaj alanı zorunludur.";
    } else if (values.message.trim().length < 10) {
      nextErrors.message = "Mesaj en az 10 karakter olmalıdır.";
    }

    return nextErrors;
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitted(true);
    setForm(initialValues);
  }

  return (
    <section
      id="iletisim"
      className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          İletişim
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Controlled form yapısı ile çalışan iletişim formu.
        </p>

        {submitted && (
          <div className="mt-6">
            <Alert variant="success" title="Başarılı">
              Mesajınız başarıyla gönderildi.
            </Alert>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <Input
            id="name"
            name="name"
            label="Ad Soyad"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Adınızı girin"
          />

          <Input
            id="email"
            name="email"
            type="email"
            label="E-posta"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="ornek@mail.com"
          />

          <div className="space-y-1">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Mesajınız
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`w-full rounded-lg border px-3 py-2 transition-colors focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-gray-100
              ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500 dark:border-gray-600"
              }`}
              placeholder="Mesajınızı yazın"
            />

            {errors.message && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <Button type="submit" size="lg">
            Gönder
          </Button>
        </form>
      </div>
    </section>
  );
}