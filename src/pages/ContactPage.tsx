import { useState, type FormEvent } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const offices = [
  {
    city: 'Barcelona',
    lines: ['Avenida Gran Vía de les Corts, 000', '08000'],
  },
  {
    city: 'Madrid',
    lines: ['Paseo de la Castellana, 000', '28000'],
  },
  {
    city: 'London',
    lines: ['Brick Lane ST, 000', 'E2 7EB'],
  },
]

const fields = [
  { name: 'nombre', label: 'Nombre', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'empresa', label: 'Empresa', type: 'text' },
  { name: 'proyecto', label: 'Háblanos de tu proyecto', type: 'text' },
]

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <div className="page">
      <Header page="contact" />
      <main>
        <section className="works-hero">
          <h1 className="works-title">
            <span>Con</span>
            <span>—tact</span>
          </h1>
        </section>
        <section className="contact-body">
          <div className="contact-visit">
            <h2>Visit us</h2>
            <div className="contact-cities">
              {offices.map((office) => (
          <address key={office.city}>
            <p>{office.city}</p>
            <p>
              {office.lines[0]}
              <br />
              {office.lines[1]}
            </p>
          </address>
              ))}
            </div>
          </div>
          <div className="contact-talk">
            <h2>Let’s talk</h2>
            <form className="contact-form" onSubmit={onSubmit}>
              {fields.map((field) => (
                <input
                  key={field.name}
                  className="contact-field"
                  name={field.name}
                  type={field.type}
                  placeholder={field.label}
                  aria-label={field.label}
                  required
                  autoComplete={field.name === 'email' ? 'email' : 'off'}
                />
              ))}
              <button className="contact-submit" type="submit">
                Enviar mensaje
              </button>
              {sent ? <p className="contact-sent">Mensaje enviado.</p> : null}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
