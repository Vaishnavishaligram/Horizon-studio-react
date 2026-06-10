import './Hero.css'

/* 
  Figma: scattered circular portrait photos below the headline.
  We use placeholder coloured circles with initials since no real photos.
  Positions match the approximate Figma scatter layout.
*/
const PEOPLE = [
  { id: 'p1', initials: 'AK', bg: '#c9a87c', size: 110, style: { left: '2%',  bottom: '8%'  } },
  { id: 'p2', initials: 'LM', bg: '#8aaecc', size: 90,  style: { left: '14%', bottom: '22%' } },
  { id: 'p3', initials: 'TR', bg: '#b5855a', size: 130, style: { left: '26%', bottom: '5%'  } },
  { id: 'p4', initials: 'SP', bg: '#7a9e7e', size: 105, style: { left: '40%', bottom: '18%' } },
  { id: 'p5', initials: 'NV', bg: '#a08ab5', size: 88,  style: { left: '52%', bottom: '28%' } },
  { id: 'p6', initials: 'RC', bg: '#d4856a', size: 120, style: { left: '62%', bottom: '4%'  } },
  { id: 'p7', initials: 'HB', bg: '#6a9ab5', size: 95,  style: { left: '76%', bottom: '14%' } },
  { id: 'p8', initials: 'YW', bg: '#b59a6a', size: 100, style: { right: '1%', bottom: '6%'  } },
]

export default function Hero() {
  return (
    <section className="hero">

      {/* Purple teardrop — top right, matches Figma */}
      <div className="hero__purple-blob" aria-hidden="true" />

      {/* Pink squiggle line — left side, matches Figma */}
      <svg className="hero__squiggle" viewBox="0 0 120 320" fill="none" aria-hidden="true">
        <path
          d="M80 10 C20 60, 110 100, 40 160 C-20 210, 100 260, 50 310"
          stroke="#f5a0b5" strokeWidth="2.5" fill="none" strokeLinecap="round"
        />
      </svg>

      <div className="container hero__inner">
        {/* 
          Headline — Figma: large black serif, 3 lines
          "The thinkers and doers were changing the status Quo with"
          Word "status" has pink highlight box around it.
          We use our own copy but keep EXACT same visual structure.
        */}
        <h1 className="hero__heading">
          The builders and<br />
          makers who are{' '}
          <span className="hero__heading-hl">shaping</span><br />
          the future right now
        </h1>

        {/* Sub paragraph — Figma: small grey text centered below headline */}
        <p className="hero__sub">
          We are a team of strategists, designers, communicators and researchers.
          Together, we believe real progress only happens when you dare to think differently.
        </p>

        {/* 
          Scattered circle photos — Figma shows ~8 circular portrait photos
          arranged loosely below the headline text
        */}
        <div className="hero__photos" aria-label="Our team">
          {PEOPLE.map(p => (
            <div
              key={p.id}
              className="hero__photo"
              style={{
                ...p.style,
                width:  p.size,
                height: p.size,
                background: p.bg,
              }}
              aria-hidden="true"
            >
              {p.initials}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
