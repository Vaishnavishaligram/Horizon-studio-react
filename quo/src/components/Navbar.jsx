import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav__inner">
        {/* Brand name — matches Figma "Elementum" style wordmark */}
        <a href="#" className="nav__brand">Horizons</a>

        {/* Desktop links — Figma shows: Services | Contact | FAQs */}
        <nav className="nav__links" aria-label="Primary">
          <a href="#services" className="nav__link">Services</a>
          <a href="#contact"  className="nav__link">Contact</a>
          <a href="#faq"      className="nav__link">FAQs</a>
        </nav>

        {/* Hamburger — Figma shows ≡ icon far right */}
        <button
          className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`nav__drawer ${open ? 'nav__drawer--open' : ''}`}>
        <a href="#services" className="nav__drawer-link" onClick={() => setOpen(false)}>Services</a>
        <a href="#contact"  className="nav__drawer-link" onClick={() => setOpen(false)}>Contact</a>
        <a href="#faq"      className="nav__drawer-link" onClick={() => setOpen(false)}>FAQs</a>
      </div>
    </header>
  )
}
