import viewProject from '../assets/view-project.svg'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { works, worksIntro } from '../data/works'

export function WorksPage() {
  return (
    <div className="page">
      <Header page="projects" />
      <main>
        <section className="works-hero">
          <h1 className="works-title">
            <span>Pro</span>
            <span>—jects</span>
          </h1>
        </section>
        <p className="works-intro">{worksIntro}</p>
        <section className="works-grid" aria-label="Projects">
          {works.map((work, index) => (
            <article
              key={work.image}
              className={`work-card work-card-${work.width === 1232 ? 'full' : work.width === 808 ? 'wide' : 'narrow'}`}
            >
              <img
                src={work.image}
                alt=""
                style={
                  work.imageHeight
                    ? { height: work.imageHeight, top: work.imageTop }
                    : undefined
                }
              />
              <div className="work-card-shade" />
              <div className="work-card-overlay" />
              <div className="work-card-copy">
                <p>CLIENT</p>
                <p>Project name or type</p>
              </div>
              <img className="work-card-cursor" src={viewProject} alt="" width={162} height={162} />
              <span className="visually-hidden">Proyecto {index + 1}</span>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
