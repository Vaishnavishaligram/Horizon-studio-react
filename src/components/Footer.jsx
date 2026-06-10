import './Footer.css'

/*
  Figma footer columns (exact structure, original content):
  Col 1: Company       — Home, Studio, Service, Blog
  Col 2: Terms & Policies — Privacy Policy, Terms & Conditions, Explore, Accessibility
  Col 3: Follow Us     — Instagram, LinkedIn, Youtube, Twitter
  Col 4: Terms & Policies (contact block) — address, phone, email

  We keep the same column structure but use our own brand details.
*/
const COLS = [
  {
    title: 'Company',
    links: [
      { label: 'Home',    href: '#' },
      { label: 'Studio',  href: '#' },
      { label: 'Service', href: '#services' },
      { label: 'Blog',    href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy',     href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Explore',            href: '#' },
      { label: 'Accessibility',      href: '#' },
    ],
  },
  {
    title: 'Follow Us',
    links: [
      { label: 'Instagram', href: '#' },
      { label: 'LinkedIn',  href: '#' },
      { label: 'Youtube',   href: '#' },
      { label: 'Twitter',   href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* Top divider — thin line, matches Figma */}
        <hr className="footer__rule" />

        <div className="footer__grid">

          {/* Columns 1–3 */}
          {COLS.map(col => (
            <div key={col.title} className="footer__col">
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__col-list">
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="footer__link">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: contact block — Figma shows address + phone + email */}
          <div className="footer__col footer__col--contact">
            <h4 className="footer__col-title">Get in Touch</h4>
            <address className="footer__address">
              <p>28 Creative Quarter,<br />Mumbai, MH 400001</p>
              <a href="tel:+912245678900" className="footer__link">(022) 4567 8900</a>
              <a href="mailto:hello@horizons.studio" className="footer__link">hello@horizons.studio</a>
            </address>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Horizons Studio. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}
