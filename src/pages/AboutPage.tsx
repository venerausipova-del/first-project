import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { aboutLead, team } from '../data/about'

export function AboutPage() {
  return (
    <div className="page">
      <Header page="about" />
      <main>
        <section className="works-hero">
          <h1 className="works-title about-page-title">
            <span>Abo</span>
            <span>—ut</span>
          </h1>
        </section>
        <div className="works-intro">
          {aboutLead.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <section className="team" aria-label="Equipo">
          {team.map((person) => (
            <article className="person" key={person.name}>
              <div className="person-photos">
                {person.photos.map((photo) => (
                  <img key={photo} src={photo} alt="" width={240} height={240} />
                ))}
              </div>
              <div className="person-copy">
                <p>{person.role}</p>
                <p>{person.name}</p>
                <p>— Linkedin</p>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
