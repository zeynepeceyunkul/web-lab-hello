export default function HeroSection() {
  return (
    <section id="hero" className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Ara Checkpoint #1
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            React + TypeScript Portföy ve Proje Listesi
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
            Responsive portföy sayfası, JSON’dan yüklenen proje listesi,
            filtreleme, sıralama ve controlled iletişim formu içeren bütünleşik
            bir uygulama.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
              React
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
              TypeScript
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
              Tailwind
            </span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=700&auto=format&fit=crop"
            alt="Profil görseli"
            className="h-72 w-72 rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}