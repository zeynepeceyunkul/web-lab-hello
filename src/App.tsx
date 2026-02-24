function App() {
  return (
    <>
      {/* Skip link (a11y) */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <h1>Zeynep Ece Yünkül - Kişisel Portföy</h1>

        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img
              src="/profil.jpg"
              alt="Zeynep Ece Yünkül profil fotoğrafı"
              width={180}
              height={180}
            />
            <figcaption>Zeynep Ece Yünkül</figcaption>
          </figure>

          <p>
            Frontend geliştirme ve UI/UX alanında kendimi geliştiriyorum. React ve TypeScript ile
            semantik ve erişilebilir arayüzler üretmeyi hedefliyorum.
          </p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML5 (Semantik)</li>
            <li>CSS</li>
          </ul>
          {/* içerik birazdan */}
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          {/* içerik birazdan */}
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          {/* form birazdan */}
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Zeynep Ece Yünkül. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App