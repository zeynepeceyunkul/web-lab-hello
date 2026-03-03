function App() {
  return (
    <>
      {/* Skip link (a11y) */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="site-header">
        <nav className="site-nav" aria-label="Ana navigasyon">
          <ul className="nav-list">
            <li><a className="nav-link" href="#hakkimda">Hakkımda</a></li>
            <li><a className="nav-link" href="#projeler">Projeler</a></li>
            <li><a className="nav-link" href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="site-main">
        <h1 className="page-title">Zeynep Ece Yünkül - Kişisel Portföy</h1>

        <section id="hakkimda" className="section">
          <h2 className="section-title">Hakkımda</h2>

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
        </section>

        <section id="projeler" className="section">
          <h2 className="section-title">Projelerim</h2>

          <div className="projects-grid">
            <article className="project-card">
              <h3>Mindful Habits</h3>
              <p>Günlük alışkanlık takip ve motivasyon uygulaması.</p>
              <p><strong>Teknolojiler:</strong> React, Tailwind CSS, Firebase</p>
              <p>
                <a
                  href="https://github.com/zeynepeceyunkul/mindful-habits"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </p>
            </article>

            <article className="project-card">
              <h3>Scalable URL Shortener</h3>
              <p>Kısa link üretimi ve yönlendirme mantığı üzerine backend projesi.</p>
              <p><strong>Teknolojiler:</strong> Node.js, TypeScript</p>
              <p>
                <a
                  href="https://github.com/zeynepeceyunkul/scalable-url-shortener"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </p>
            </article>
          </div>
        </section>

        <section id="iletisim" className="section">
          <h2 className="section-title">İletişim</h2>

          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                  defaultValue=""
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Zeynep Ece Yünkül. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App