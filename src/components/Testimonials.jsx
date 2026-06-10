import './Testimonials.css'

/*
  Figma layout:
  - White bg
  - Centered heading: "What our customer says About Us"
    with a yellow/orange underline under "About Us"
  - Large mint-green rounded card, centre, with:
      big opening " top-left
      big closing " bottom-right
      paragraph quote text
  - ~7 circular portrait photos scattered around the card
    (top-left, mid-left, bottom-left, top-right, mid-right, large bottom-right)

  Original copy: different quote, different name
*/
const PHOTOS = [
  { id: 'q1', initials: 'MR', bg: '#b0a898', size: 72,  pos: { top: '0%',   left: '2%'  } },
  { id: 'q2', initials: 'AJ', bg: '#d4a87c', size: 56,  pos: { top: '32%',  left: '0%'  } },
  { id: 'q3', initials: 'SK', bg: '#8ab4a8', size: 64,  pos: { bottom: '8%',left: '4%'  } },
  { id: 'q4', initials: 'PW', bg: '#a8b4c4', size: 60,  pos: { top: '0%',   right: '8%' } },
  { id: 'q5', initials: 'DF', bg: '#c4a8a0', size: 58,  pos: { top: '35%',  right: '0%' } },
  { id: 'q6', initials: 'NL', bg: '#a0b8a0', size: 130, pos: { bottom: '0%',right: '2%' } },
]

export default function Testimonials() {
  return (
    <section className="testi">
      <div className="container">

        {/* Heading — centred, yellow underline on last two words */}
        <h2 className="testi__heading">
          What our clients
          <br />
          <span className="testi__heading-ul">are saying</span>
        </h2>

        {/* Main layout: photos + quote card */}
        <div className="testi__stage">

          {/* Scattered circular photos */}
          {PHOTOS.map(p => (
            <div
              key={p.id}
              className="testi__photo"
              style={{
                ...p.pos,
                width:  p.size,
                height: p.size,
                background: p.bg,
              }}
              aria-hidden="true"
            >
              {p.initials}
            </div>
          ))}

          {/* Quote card — mint green, big quotation marks */}
          <div className="testi__card">
            <span className="testi__card-open" aria-hidden="true">"</span>

            <blockquote className="testi__quote">
              Working with this team completely changed how we approach our brand.
              They delivered ahead of schedule and the results were outstanding —
              our engagement doubled within the first month of launch.
              The team brought technical excellence paired with genuine creative vision.
            </blockquote>

            <span className="testi__card-close" aria-hidden="true">"</span>
          </div>

        </div>
      </div>
    </section>
  )
}
