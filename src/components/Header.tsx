export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-gray-800 dark:bg-gray-900/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="text-xl font-bold text-blue-700 dark:text-blue-300"
        >
          Zeynep Ece
        </a>

        <nav aria-label="Ana navigasyon">
          <ul className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <li>
              <a
                href="#hero"
                className="text-gray-700 transition hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300"
              >
                Ana Sayfa
              </a>
            </li>
            <li>
              <a
                href="#projeler"
                className="text-gray-700 transition hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300"
              >
                Projeler
              </a>
            </li>
            <li>
              <a
                href="#iletisim"
                className="text-gray-700 transition hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300"
              >
                İletişim
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}