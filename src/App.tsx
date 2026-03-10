import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import UIKit from "./pages/UIKit";

function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 rounded-full bg-gray-200 p-2 text-gray-800 shadow-lg transition-transform hover:scale-110 dark:bg-gray-700 dark:text-gray-200"
      aria-label="Tema değiştir"
      type="button"
    >
      <span className="dark:hidden">☾</span>
      <span className="hidden dark:inline">☀</span>
    </button>
  );
}

export default function App() {
  const [page, setPage] = useState<"portfolio" | "uikit">("portfolio");

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <ThemeToggle />

      <div className="fixed bottom-4 left-4 z-50 flex gap-2">
        <Button size="sm" variant="secondary" onClick={() => setPage("portfolio")}>
          Portfolio
        </Button>
        <Button size="sm" variant="primary" onClick={() => setPage("uikit")}>
          UI Kit
        </Button>
      </div>

      {page === "uikit" ? (
        <UIKit />
      ) : (
        <>
          <a
            href="#main-content"
            className="sr-only z-50 bg-blue-800 p-2 text-white focus:not-sr-only focus:absolute focus:top-0 focus:left-0"
          >
            Ana içeriğe atla
          </a>

          <header className="sticky top-0 z-40 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row">
              <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                Zeynep Ece
              </h1>

              <nav aria-label="Ana navigasyon">
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <a
                      href="#hakkimda"
                      className="rounded-md px-3 py-1 text-gray-700 transition-colors hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                      Hakkımda
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projeler"
                      className="rounded-md px-3 py-1 text-gray-700 transition-colors hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                      Projeler
                    </a>
                  </li>
                  <li>
                    <a
                      href="#iletisim"
                      className="rounded-md px-3 py-1 text-gray-700 transition-colors hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                      İletişim
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <main id="main-content">
            <section id="hakkimda" className="px-4 py-16">
              <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-start">
                <figure className="shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
                    alt="Profil fotoğrafı"
                    className="h-40 w-40 rounded-full object-cover shadow-lg"
                  />
                </figure>

                <div>
                  <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-left">
                    Hakkımda
                  </h2>

                  <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                    Yazılım mühendisliği öğrencisiyim. React, Tailwind ve modern web
                    teknolojileriyle kullanıcı dostu arayüzler geliştiriyorum.
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    <li className="rounded-full bg-blue-800 px-3 py-1 text-sm text-white">
                      React
                    </li>
                    <li className="rounded-full bg-blue-800 px-3 py-1 text-sm text-white">
                      TypeScript
                    </li>
                    <li className="rounded-full bg-blue-800 px-3 py-1 text-sm text-white">
                      Tailwind
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="projeler" className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
              <div className="mx-auto max-w-6xl">
                <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">
                  Projelerim
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card
                    variant="elevated"
                    title="Task Planner"
                    image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop"
                    imageAlt="Task planner uygulaması görseli"
                    footer={<Button size="sm">Detay</Button>}
                  >
                    Görev ve plan yönetimi için geliştirdiğim bir uygulama.
                  </Card>

                  <Card
                    variant="outlined"
                    title="Mindful Habits"
                    image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
                    imageAlt="Habit tracker uygulaması görseli"
                    footer={<Button size="sm" variant="secondary">Detay</Button>}
                  >
                    Günlük alışkanlık takibi yapan responsive web uygulaması.
                  </Card>

                  <Card
                    variant="filled"
                    title="UniTrack"
                    image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                    imageAlt="Öğrenci takip uygulaması görseli"
                    footer={<Button size="sm" variant="ghost">Detay</Button>}
                  >
                    Üniversite öğrencileri için ders, sınav ve ödev takibi uygulaması.
                  </Card>
                </div>
              </div>
            </section>

            <section id="iletisim" className="px-4 py-16">
              <div className="mx-auto max-w-lg">
                <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
                  İletişim
                </h2>

                <form className="space-y-4">
                  <Input id="name" label="Ad Soyad" required />
                  <Input id="email" label="E-posta" type="email" required />

                  <div className="space-y-1">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                    />
                  </div>

                  <Button variant="primary" size="lg" type="submit">
                    Gönder
                  </Button>
                </form>
              </div>
            </section>
          </main>

          <footer className="border-t border-gray-200 bg-gray-100 px-4 py-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
            <p>&copy; 2025 Zeynep Ece. Tüm hakları saklıdır.</p>
          </footer>
        </>
      )}
    </div>
  );
}