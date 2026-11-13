import type { RefObject } from 'react';
import A from './A';

const HERO_IMG = 'https://royal-uae-portals.lovable.app/assets/hero-dubai-Dx3vmr_1.jpg';
const STATS: [string, string][] = [['25', 'Camp sites'], ['3,350+', 'Rooms'], ['25,000+', 'Individuals housed'], ['2020', 'Established']];

function Sky() {
  return (
    <div className="hero-sky" aria-hidden="true">
      <div className="cloud cloud-c"></div>
      <div className="cloud cloud-b"></div>
      <div className="cloud cloud-a"></div>
      <div className="cloud cloud-d"></div>
      <div className="hero-sweep"></div>
    </div>
  );
}

function Eyebrow({ center = false }: { center?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: center ? "center" : "flex-start", gap: "14px", marginBottom: "28px" }}>
      <span className="hero-rule" style={{ width: "56px", height: "1px", background: center ? "linear-gradient(90deg,transparent,var(--color-accent))" : "var(--color-accent)", animationDelay: ".1s" }}></span>
      <span className="hero-in" style={{ fontSize: "11px", letterSpacing: ".26em", textTransform: "uppercase", color: "var(--color-accent-300)", animationDelay: ".22s" }}>Credence Group of Companies · Dubai, UAE</span>
      {center && <span className="hero-rule" style={{ width: "56px", height: "1px", background: "linear-gradient(90deg,var(--color-accent),transparent)", animationDelay: ".1s", transformOrigin: "right center" }}></span>}
    </div>
  );
}

function Headline({ size, center = false }: { size: string; center?: boolean }) {
  return (
    <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: size, lineHeight: ".98", letterSpacing: "-.035em", margin: center ? "0 auto 30px" : "0 0 30px", textWrap: "balance" }}>
      <span className="hero-in" style={{ display: "block", animationDelay: ".36s" }}>Built on credence.</span>
      <span className="hero-in hero-gold" style={{ display: "block", animationDelay: ".54s" }}>Driven by care.</span>
    </h1>
  );
}

function Taglines() {
  return (
    <>
      <p className="hero-in" style={{ fontSize: "14px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-300)", margin: "0 0 12px", animationDelay: ".74s" }}>Your trust, our credence — building futures together</p>
      <p className="hero-in" style={{ fontSize: "13px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--color-accent-300)", margin: "0 0 40px", animationDelay: ".84s" }}>Accommodation · Maintenance · Cleaning · Brokerage · Workspace</p>
    </>
  );
}

function Ctas({ center = false }: { center?: boolean }) {
  return (
    <div className="hero-in" style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: center ? "center" : "flex-start", animationDelay: ".9s" }}>
      <A className="btn btn-primary" href="#companies">Explore the companies</A>
      <A className="btn btn-ghost" href="#who">Who we are</A>
    </div>
  );
}

/* A — Refined current: same photograph and sky, tighter type, a stat strip and scroll cue. */
function HeroA({ sectionRef }: { sectionRef: RefObject<HTMLElement> }) {
  return (
    <section id="top" ref={sectionRef} style={{ position: "relative" }}>
      <div className="pin">
        <img className="hero-photo" src={HERO_IMG} alt="Dubai skyline at night with the Burj Khalifa" />
        <Sky />
        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(6,10,22,.62) 0%,rgba(6,10,22,.22) 36%,rgba(6,10,22,.92) 100%)" }}></div>
        <div style={{ position: "absolute", inset: "0", background: "radial-gradient(120% 80% at 0% 100%,rgba(6,10,22,.7),transparent 60%)" }}></div>
      </div>
      <div className="over" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "120px 40px 0", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto" }}>
          <div style={{ maxWidth: "1000px" }}>
            <Eyebrow />
            <Headline size="clamp(44px,6.6vw,96px)" />
            <Taglines />
            <Ctas />
          </div>
          <div className="hero-stats hero-in" style={{ animationDelay: "1.05s" }}>
            {STATS.map(([n, l]) => (
              <div key={l} className="hero-stat">
                <div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "30px", fontWeight: "500", letterSpacing: "-.02em", lineHeight: "1", color: "var(--color-accent)" }}>{n}</div>
                <div style={{ fontSize: "10.5px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-neutral-400)", marginTop: "10px" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <a className="scroll-cue" href="#who" aria-label="Scroll to content"><span>Scroll</span><i></i></a>
      </div>
    </section>
  );
}

export default HeroA;
