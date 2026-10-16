import { useRef, useState } from 'react'
import viewProject from '../assets/view-project.svg'
import { projects } from '../data/home'
import { Arrow } from './Arrow'

export function ProjectCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [dot, setDot] = useState(0)

  function sync() {
    const scroller = scrollerRef.current
    if (!scroller) return
    const max = scroller.scrollWidth - scroller.clientWidth
    setAtStart(scroller.scrollLeft <= 2)
    setAtEnd(max <= 2 || scroller.scrollLeft >= max - 2)
    setDot(max <= 2 ? 0 : Math.round((scroller.scrollLeft / max) * 2))
  }

  function scrollToCard(direction: 1 | -1) {
    const scroller = scrollerRef.current
    if (!scroller) return
    const cards = [...scroller.querySelectorAll<HTMLElement>('[data-card]')]
    const current = cards.findIndex((card) => card.offsetLeft >= scroller.scrollLeft - 8)
    const base = current < 0 ? 0 : current
    const next = Math.min(cards.length - 1, Math.max(0, base + direction))
    scroller.scrollTo({ left: cards[next].offsetLeft, behavior: 'smooth' })
  }

  function scrollToDot(nextDot: number) {
    const scroller = scrollerRef.current
    if (!scroller) return
    const max = scroller.scrollWidth - scroller.clientWidth
    scroller.scrollTo({ left: (nextDot / 2) * max, behavior: 'smooth' })
  }

  return (
    <section className="projects" aria-labelledby="projects-title">
      <div className="projects-head">
        <div>
          <p className="kicker">01.</p>
          <h2 id="projects-title" className="display display-projects">
            Last
            <br />
            projects
          </h2>
        </div>
        <div className="carousel-controls">
          <button
            type="button"
            className="icon-button"
            aria-label="Proyecto anterior"
            disabled={atStart}
            onClick={() => scrollToCard(-1)}
          >
            <Arrow direction="left" />
          </button>
          <button
            type="button"
            className="icon-button"
            aria-label="Proyecto siguiente"
            disabled={atEnd}
            onClick={() => scrollToCard(1)}
          >
            <Arrow />
          </button>
        </div>
      </div>
      <div className="carousel" ref={scrollerRef} onScroll={sync}>
        <div className="carousel-track">
          {projects.map((project, index) => (
            <article
              key={project.image}
              className="project-card"
              data-card
              style={{ width: project.width }}
            >
              <img className="project-card-image" src={project.image} alt="" />
              <div className="project-card-shade" />
              <div className="project-card-overlay" />
              <div className="project-card-copy">
                <p>CLIENT</p>
                <p>Project name or type</p>
              </div>
              <img
                className="project-card-cursor"
                src={viewProject}
                alt=""
                width={162}
                height={162}
              />
              <span className="visually-hidden">Proyecto {index + 1}</span>
            </article>
          ))}
        </div>
      </div>
      <div className="pager" role="tablist" aria-label="Páginas de proyectos">
        {[0, 1, 2].map((item) => (
          <button
            key={item}
            type="button"
            className="pager-dot"
            role="tab"
            aria-selected={dot === item}
            aria-label={`Página ${item + 1}`}
            onClick={() => scrollToDot(item)}
          />
        ))}
      </div>
    </section>
  )
}
