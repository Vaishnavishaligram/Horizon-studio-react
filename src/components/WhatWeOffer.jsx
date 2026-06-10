import './WhatWeOffer.css'

/*
  Figma layout for each row:
  [small muted label]   [Large serif service name]        [→]
  ────────────────────────────────────────────────────────────

  Original copy replacing Figma text:
  Figma label: "Office of multiple interest content" → our: "Cross-channel brand strategy"
  Figma title: "Colaborative & partnership"          → our: "Creative direction & strategy"

  Figma label: "The hanger US Air force digital experimental" → our: "Integrated digital campaigns"
  Figma title: "We talk about our weight"                    → our: "Brand voice & storytelling"

  Figma label: "Delta faucet content, social, digital"  → our: "Platform-native content systems"
  Figma title: "Piloting digital confidence"             → our: "Digital growth & innovation"
*/
const ROWS = [
  {
    id:    1,
    label: 'Cross-channel brand strategy',
    title: 'Creative direction & strategy',
  },
  {
    id:    2,
    label: 'Integrated digital campaigns',
    title: 'Brand voice & storytelling',
  },
  {
    id:    3,
    label: 'Platform-native content systems',
    title: 'Digital growth & innovation',
  },
]

function ArrowIcon() {
  return (
    <svg
      className="offer-row__arrow"
      viewBox="0 0 32 16"
      fill="none"
      aria-hidden="true"
    >
      <line x1="0" y1="8" x2="26" y2="8" stroke="currentColor" strokeWidth="1.5" />
      <polyline points="20,2 28,8 20,14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

export default function WhatWeOffer() {
  return (
    <section className="offer" id="services">
      <div className="container">

        {/* Heading — Figma: large left-aligned serif, yellow underline on "can" */}
        <h2 className="offer__heading">
          What we{' '}
          <span className="offer__heading-hl">can</span><br />
          offer you!
        </h2>

        {/* Decorative curved red line — matches Figma top-right of section */}
        <svg className="offer__curve" viewBox="0 0 220 160" fill="none" aria-hidden="true">
          <path
            d="M200 10 C160 10, 80 60, 80 100 C80 140, 40 155, 10 150"
            stroke="var(--red)" strokeWidth="1.8" fill="none" strokeLinecap="round"
          />
        </svg>

        {/* Rows */}
        <div className="offer__list">
          {ROWS.map((row, idx) => (
            <a href="#" key={row.id} className="offer-row" aria-label={row.title}>
              {/* Left: small muted label */}
              <span className="offer-row__label">{row.label}</span>

              {/* Centre: large service title */}
              <span className="offer-row__title">{row.title}</span>

              {/* Right: arrow */}
              <ArrowIcon />
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
