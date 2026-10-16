import footerMark from '../assets/footer-mark.svg'
import { Arrow } from './Arrow'
import { Logo } from './Logo'

const marqueeRepeats = [0, 1, 2, 3, 4]

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-mark" aria-hidden="true">
        <div className="footer-marquee">
          {marqueeRepeats.map((repeat) => (
            <div className="footer-marquee-item" key={repeat}>
              <img src={footerMark} alt="" width={2573} height={216} />
              <Logo size={48} />
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bar">
        <a className="text-link" href="/contact">
          Let’s talk
          <Arrow />
        </a>
        <div className="footer-social">
          <span>In</span>
          <span>Ig</span>
        </div>
        <p className="footer-year">2024©</p>
      </div>
    </footer>
  )
}
