import './Tomorrow.css'

/* Reusable "Read more ——" link — matches Figma style */
function ReadMore({ href = '#' }) {
  return (
    <a href={href} className="read-more">
      Read more <span className="read-more__line" aria-hidden="true" />
    </a>
  )
}

/* Circular image placeholder — Figma uses real photos in circles */
function CircleImg({ bg, label, size = 280 }) {
  return (
    <div
      className="circle-img"
      style={{ width: size, height: size, background: bg }}
      aria-label={label}
    >
      <svg viewBox="0 0 200 200" fill="none" className="circle-img__svg">
        {/* Simple person silhouette so it reads as a photo placeholder */}
        <circle cx="100" cy="72" r="34" fill="rgba(255,255,255,0.35)" />
        <ellipse cx="100" cy="160" rx="55" ry="48" fill="rgba(255,255,255,0.28)" />
      </svg>
    </div>
  )
}

export default function Tomorrow() {
  return (
    <section className="tmr">
      <div className="container">

        {/* ── Block 1 ──────────────────────────────────────────────────
            Figma: pink/magenta border card LEFT  |  circular photo RIGHT
            Red triangle on top-right of photo.
        ──────────────────────────────────────────────────────────────── */}
        <div className="tmr__block tmr__block--a">

          {/* Left: bordered text card */}
          <div className="tmr__card">
            <h2 className="tmr__card-heading">
              Growth should<br />
              <span className="tmr__card-heading-em">start today</span>
            </h2>
            <p className="tmr__card-body">
              We are a team of strategists, designers, communicators and
              researchers. Together, we believe that progress only happens
              when you refuse to play things safe.
            </p>
            <ReadMore />
          </div>

          {/* Right: circle image + red triangle accent */}
          <div className="tmr__photo-wrap tmr__photo-wrap--a">
            {/* Red triangle — top right of image, matches Figma */}
            <div className="tmr__tri tmr__tri--a" aria-hidden="true" />
            <CircleImg bg="#b5a090" label="Team at a strategy meeting" size={300} />
          </div>
        </div>

        {/* ── Block 2 ──────────────────────────────────────────────────
            Figma: circular photo LEFT (2 red triangles)  |  text RIGHT
        ──────────────────────────────────────────────────────────────── */}
        <div className="tmr__block tmr__block--b">

          {/* Left: circle image + TWO red triangles */}
          <div className="tmr__photo-wrap tmr__photo-wrap--b">
            <div className="tmr__tri tmr__tri--b1" aria-hidden="true" />
            <div className="tmr__tri tmr__tri--b2" aria-hidden="true" />
            <CircleImg bg="#8a9e8a" label="Person focused on work" size={310} />
          </div>

          {/* Right: text */}
          <div className="tmr__text-b">
            <h2 className="tmr__text-b-heading">
              Discover how we can<br />
              <span className="tmr__text-b-em">accelerate</span> your growth
            </h2>
            <p className="tmr__text-b-body">
              We add a layer of bold insights and action that allows
              changemakers to accelerate their progress in areas such as brand,
              design, digital platforms and social reach.
            </p>
            <ReadMore />
          </div>
        </div>

      </div>
    </section>
  )
}
