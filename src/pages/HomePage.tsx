import dotsSilk from '../assets/dots-silk.mp4'
import { aboutParagraphs, heroCopy, portraits, services } from '../data/home'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ProjectCarousel } from '../components/ProjectCarousel'

export function HomePage() {
  return (
    <div className="page" id="top">
      <Header page="home" />
      <main>
        <section className="hero">
          <p className="hero-copy">
            {heroCopy.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <a className="button-outline" href="/contact">
            Let’s talk
          </a>
        </section>

        <section className="wordmark" aria-label="DOTS">
          <h1 className="visually-hidden">DOTS</h1>
          <div className="wordmark-fill">
            <video autoPlay muted loop playsInline src={dotsSilk} />
          </div>
        </section>

        <ProjectCarousel />

        <section className="services" aria-labelledby="services-title">
          <div className="services-intro">
            <p className="kicker">02.</p>
            <h2 id="services-title" className="display display-services">
              Our
              <br />
              services
            </h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about" aria-labelledby="about-title">
          <div className="about-intro">
            <p className="kicker">03.</p>
            <h2 id="about-title" className="display display-about">
              About
            </h2>
          </div>
          <div className="about-body">
            <div className="about-copy">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="about-photos">
              {portraits.map((portrait, index) => (
                <img key={portrait} src={portrait} alt={`Retrato ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
