import { useState } from 'react'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail]   = useState('')
  const [sent,  setSent]    = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email.trim()) { setSent(true); setEmail('') }
  }

  return (
    <section className="nl">

      {/* Purple teardrop — right side, matches Figma */}
      <div className="nl__blob" aria-hidden="true" />

      {/* Red arrow curves — top left, matches Figma */}
      <svg className="nl__arrows" viewBox="0 0 160 120" fill="none" aria-hidden="true">
        <path d="M80 20 C60 40, 40 60, 20 90"  stroke="var(--red)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M110 10 C90 35, 70 55, 55 85"  stroke="var(--red)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        {/* Arrowheads */}
        <path d="M15 84 L20 92 L26 86" stroke="var(--red)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 80 L55 88 L62 82" stroke="var(--red)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="container nl__inner">

        {/* 
          Heading — Figma: enormous centred serif
          Original copy replacing Figma's "Subscribe to our newsletter"
        */}
        <h2 className="nl__heading">
          Stay ahead<br />
          of the curve
        </h2>

        {/* Sub — Figma: small single line of muted text */}
        <p className="nl__sub">
          Get our monthly digest of insights, ideas and industry moves.
        </p>

        {/* 
          CTA — Figma: single dark pill-shaped "Subscribe Now" button
          (no input field visible in Figma — just the button)
          We add an email input for usability, keeping the pill button style
        */}
        {sent ? (
          <p className="nl__thanks">✓ You're on the list — see you in your inbox!</p>
        ) : (
          <form className="nl__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="nl__input"
              required
              aria-label="Email address"
            />
            <button type="submit" className="nl__btn">Subscribe Now</button>
          </form>
        )}

      </div>
    </section>
  )
}
