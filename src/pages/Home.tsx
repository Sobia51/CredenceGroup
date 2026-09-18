import A from '../components/A';
import '../styles/base.css';
import '../styles/home.css';

export default function Home() {

  return (
    <>
<div style={{ background: "var(--color-bg)" }}>

<header style={{ position: "sticky", top: "0", zIndex: "50", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "14px 40px", background: "rgba(9,12,20,.8)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(212,175,55,.16)" }}>
  <A href="#top" style={{ display: "flex", alignItems: "baseline", gap: "10px", color: "var(--color-text)" }}>
    <span style={{ fontFamily: "var(--font-heading)", fontSize: "17px", fontWeight: "500", letterSpacing: ".14em", color: "var(--color-accent)" }}>CREDENCE</span>
    <span style={{ fontSize: "10px", letterSpacing: ".24em", color: "var(--color-neutral-400)", textTransform: "uppercase" }}>Group · UAE</span>
  </A>
  <nav style={{ display: "flex", gap: "26px", fontSize: "12.5px", letterSpacing: ".04em", color: "var(--color-neutral-300)" }}>
    <A href="#who">Who we are</A>
    <A href="#operate">Services</A>
    <A href="#facilities">Facilities</A>
    <A href="#locations">Locations</A>
    <A href="/accommodation" style={{ color: "var(--color-accent-300)" }}>Accommodation</A>
    <A href="#companies">Companies</A>
    <A href="#testimonials">Testimonials</A>
    <A href="/deposit-claims" style={{ color: "var(--color-accent-300)" }}>Deposit claims</A>
  </nav>
  <A className="btn btn-primary" href="#contact" style={{ fontSize: "12.5px" }}>Contact</A>
</header>

<section id="top" style={{ position: "relative" }}>
  <div className="pin">
    <img src="https://royal-uae-portals.lovable.app/assets/hero-dubai-Dx3vmr_1.jpg" alt="Dubai skyline at night with the Burj Khalifa" />
    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(9,12,20,.58) 0%,rgba(9,12,20,.28) 38%,rgba(9,12,20,.88) 100%)" }}></div>
  </div>
  <div className="over" style={{ minHeight: "100vh", display: "flex", alignItems: "flex-end", padding: "96px 40px 88px", boxSizing: "border-box" }}>
    <div style={{ maxWidth: "1100px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "26px" }}>
        <span className="hero-rule" style={{ width: "56px", height: "1px", background: "var(--color-accent)", animationDelay: ".1s" }}></span>
        <span className="hero-in" style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)", animationDelay: ".22s" }}>Credence Group of Companies · Dubai, UAE</span>
      </div>
      <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(40px,6.2vw,86px)", lineHeight: "1", letterSpacing: "-.03em", margin: "0 0 28px", textWrap: "balance" }}><span className="hero-in" style={{ display: "block", animationDelay: ".36s" }}>Built on credence.</span><span className="hero-in" style={{ display: "block", color: "var(--color-accent)", animationDelay: ".54s" }}>Driven by care.</span></h1>
      <p className="hero-in" style={{ fontSize: "15px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--color-neutral-300)", margin: "0 0 12px", animationDelay: ".74s" }}>Your trust, our credence — building futures together</p>
      <p className="hero-in" style={{ fontSize: "14px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-accent-300)", textShadow: "0 1px 12px rgba(9,12,20,.84)", margin: "0 0 36px", animationDelay: ".84s" }}>Accommodation · Maintenance · Cleaning · Brokerage · Workspace</p>
      <div className="hero-in" style={{ display: "flex", gap: "12px", flexWrap: "wrap", animationDelay: ".9s" }}>
        <A className="btn btn-primary" href="#companies">Explore the companies</A>
        <A className="btn btn-ghost" href="#who">Who we are</A>
      </div>
    </div>
  </div>
</section>

<section id="who" style={{ position: "relative" }}>
  <div className="pin">
    <img src="https://royal-uae-portals.lovable.app/assets/prop-3-eX8QR1wO.jpg" alt="" style={{ opacity: ".35" }} />
    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(9,12,20,.89) 0%,rgba(9,12,20,.74) 50%,rgba(9,12,20,.9) 100%)" }}></div>
  </div>
  <div className="over" style={{ padding: "120px 40px", boxSizing: "border-box" }}>
    <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.15fr)", gap: "72px", alignItems: "start" }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)", marginBottom: "20px" }}>Who we are</div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(32px,3.6vw,52px)", lineHeight: "1.05", letterSpacing: "-.02em", margin: "0" }}>Our vision, mission and values</h2>
        </div>
        <p style={{ fontSize: "17px", lineHeight: "1.65", color: "var(--color-neutral-300)", margin: "0", maxWidth: "60ch" }}>Credence Group of Companies is a consortium of enterprises offering various services within UAE business sectors. Since our initiation in March 2020 we have believed in raising existing market standards, across real estate, property management, facilities management and financial investment services.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1px", background: "rgba(212,175,55,.18)", marginTop: "80px", borderTop: "1px solid rgba(212,175,55,.18)", borderBottom: "1px solid rgba(212,175,55,.18)" }}>
        <div style={{ background: "var(--color-bg)", padding: "34px 28px 40px" }}>
          <div className="num" style={{ fontSize: "11px", letterSpacing: ".2em", color: "var(--color-accent)", marginBottom: "26px" }}>01</div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "19px", margin: "0 0 12px", letterSpacing: "-.01em" }}>Credibility assured always</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0" }}>A credible, reliable business partner delivering sustainable and consistent results.</p>
        </div>
        <div style={{ background: "var(--color-bg)", padding: "34px 28px 40px" }}>
          <div className="num" style={{ fontSize: "11px", letterSpacing: ".2em", color: "var(--color-accent)", marginBottom: "26px" }}>02</div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "19px", margin: "0 0 12px", letterSpacing: "-.01em" }}>Through trust we deliver</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0" }}>Relationships built on mutual respect and full transparency with every client.</p>
        </div>
        <div style={{ background: "var(--color-bg)", padding: "34px 28px 40px" }}>
          <div className="num" style={{ fontSize: "11px", letterSpacing: ".2em", color: "var(--color-accent)", marginBottom: "26px" }}>03</div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "19px", margin: "0 0 12px", letterSpacing: "-.01em" }}>Passion for our work</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0" }}>We aim to surpass existing standards and exceed expectations in every service.</p>
        </div>
        <div style={{ background: "var(--color-bg)", padding: "34px 28px 40px" }}>
          <div className="num" style={{ fontSize: "11px", letterSpacing: ".2em", color: "var(--color-accent)", marginBottom: "26px" }}>04</div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "19px", margin: "0 0 12px", letterSpacing: "-.01em" }}>One big reliable team</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0" }}>Founders and team with more than three decades in business, finance and investment.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section style={{ position: "relative" }}>
  <div className="pin">
    <img src="/assets/lounge-night.jpg" alt="Lounge overlooking the Dubai skyline at dusk" style={{ objectPosition: "center 42%" }} />
    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(9,12,20,.84) 0%,rgba(9,12,20,.45) 42%,rgba(9,12,20,.86) 100%)" }}></div>
    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(9,12,20,.82) 0%,rgba(9,12,20,.5) 45%,rgba(9,12,20,.1) 100%)" }}></div>
  </div>
  <div className="over" style={{ minHeight: "150vh", display: "flex", alignItems: "center", padding: "80px 40px", boxSizing: "border-box" }}>
    <div style={{ width: "100%", maxWidth: "1280px", margin: "0 auto" }}>
      <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)", marginBottom: "24px" }}>Our mission</div>
      <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(30px,4vw,58px)", lineHeight: "1.04", letterSpacing: "-.02em", margin: "0 0 22px", maxWidth: "20ch" }}>Surpassing standards, exceeding expectations</h2>
      <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--color-neutral-300)", maxWidth: "62ch", margin: "0 0 56px" }}>Over three decades of combined experience in business management, corporate finance and investment services — delivering accommodation, facilities and property solutions across the UAE.</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "64px" }}>
        <div><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(40px,5vw,68px)", fontWeight: "500", lineHeight: "1", letterSpacing: "-.03em", color: "var(--color-accent)" }}>25</div><div style={{ fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-400)", marginTop: "10px" }}>Camp sites</div></div>
        <div><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(40px,5vw,68px)", fontWeight: "500", lineHeight: "1", letterSpacing: "-.03em", color: "var(--color-accent)" }}>3,350+</div><div style={{ fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-400)", marginTop: "10px" }}>Rooms</div></div>
        <div><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(40px,5vw,68px)", fontWeight: "500", lineHeight: "1", letterSpacing: "-.03em", color: "var(--color-accent)" }}>25,000+</div><div style={{ fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-400)", marginTop: "10px" }}>Individuals housed</div></div>
      </div>
    </div>
  </div>
</section>

<section className="light-band" id="operate" style={{ position: "relative", zIndex: "2", background: "transparent" }}>
  <div className="pin">
    <img src="https://royal-uae-portals.lovable.app/assets/prop-3-eX8QR1wO.jpg" alt="" />
    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(9,12,20,.86) 0%,rgba(9,12,20,.5) 12%,rgba(247,244,236,.82) 30%,rgba(247,244,236,.9) 62%,rgba(9,12,20,.55) 88%,rgba(9,12,20,.86) 100%)" }}></div>
  </div>
  <div className="over" style={{ padding: "150px 40px 170px", boxSizing: "border-box" }}>
  <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}><span style={{ width: "56px", height: "1px", background: "var(--color-accent)" }}></span><span style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)" }}>What we operate</span></div>
  <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(32px,3.6vw,52px)", lineHeight: "1.05", letterSpacing: "-.02em", margin: "0 0 20px", maxWidth: "22ch" }}>Accommodation, property and workspace solutions</h2>
  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--color-neutral-400)", maxWidth: "70ch", margin: "0 0 64px" }}>From labour camps and staff accommodation to brokerage in Dubai's prime districts and ready-to-use offices — one group, one accountable point of contact.</p>

  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "26px" }}>
    <article style={{ border: "1px solid rgba(23,21,15,.16)", borderRadius: "var(--radius-md,8px)", overflow: "hidden", background: "rgba(236,230,216,.9)", backdropFilter: "blur(6px)", boxShadow: "0 6px 24px rgba(9,12,20,.16)" }}>
      <div style={{ height: "230px", overflow: "hidden" }}><img src="https://royal-uae-portals.lovable.app/assets/prop-1-BvTtaELf.jpg" alt="Staff accommodation across the UAE" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
      <div style={{ padding: "26px 24px 28px" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "14px" }}><span className="tag tag-accent">Accommodation</span><span style={{ fontSize: "11.5px", color: "var(--color-neutral-400)" }}>Across the UAE</span></div>
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "24px", letterSpacing: "-.01em", margin: "0 0 16px" }}>Staff Accommodation</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "22px" }}><span className="tag tag-outline">25 sites</span><span className="tag tag-outline">25,000+</span><span className="tag tag-outline">All inclusive</span></div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(23,21,15,.12)", paddingTop: "18px" }}>
          <span className="num" style={{ fontSize: "14px", color: "var(--color-neutral-300)" }}>3,350+ rooms</span>
          <A className="btn btn-ghost" href="/accommodation" style={{ fontSize: "12.5px" }}>View buildings</A>
        </div>
      </div>
    </article>
    <article style={{ border: "1px solid rgba(23,21,15,.16)", borderRadius: "var(--radius-md,8px)", overflow: "hidden", background: "rgba(236,230,216,.9)", backdropFilter: "blur(6px)", boxShadow: "0 6px 24px rgba(9,12,20,.16)" }}>
      <div style={{ height: "230px", overflow: "hidden" }}><img src="https://royal-uae-portals.lovable.app/assets/prop-2-D57UhuvN.jpg" alt="Commercial property brokerage" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
      <div style={{ padding: "26px 24px 28px" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "14px" }}><span className="tag tag-accent">Brokerage</span><span style={{ fontSize: "11.5px", color: "var(--color-neutral-400)" }}>Downtown · Marina · Business Bay · Palm · JBR</span></div>
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "24px", letterSpacing: "-.01em", margin: "0 0 16px" }}>Commercial Property</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "22px" }}><span className="tag tag-outline">Prime areas</span><span className="tag tag-outline">Off-plan</span><span className="tag tag-outline">Ready units</span></div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(23,21,15,.12)", paddingTop: "18px" }}>
          <span style={{ fontSize: "14px", color: "var(--color-neutral-300)" }}>Buy · Sell · Lease · Rent</span>
          <A className="btn btn-ghost" href="#contact" style={{ fontSize: "12.5px" }}>Enquire</A>
        </div>
      </div>
    </article>
    <article style={{ border: "1px solid rgba(23,21,15,.16)", borderRadius: "var(--radius-md,8px)", overflow: "hidden", background: "rgba(236,230,216,.9)", backdropFilter: "blur(6px)", boxShadow: "0 6px 24px rgba(9,12,20,.16)" }}>
      <div style={{ height: "230px", overflow: "hidden" }}><img src="https://royal-uae-portals.lovable.app/assets/prop-3-eX8QR1wO.jpg" alt="Serviced offices in Al Karama" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
      <div style={{ padding: "26px 24px 28px" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "14px" }}><span className="tag tag-accent">Workspace</span><span style={{ fontSize: "11.5px", color: "var(--color-neutral-400)" }}>Al Karama, Dubai</span></div>
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "24px", letterSpacing: "-.01em", margin: "0 0 16px" }}>Serviced Offices</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "22px" }}><span className="tag tag-outline">Meeting rooms</span><span className="tag tag-outline">Reception</span><span className="tag tag-outline">Fibre internet</span></div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(23,21,15,.12)", paddingTop: "18px" }}>
          <span style={{ fontSize: "14px", color: "var(--color-neutral-300)" }}>Short &amp; long term</span>
          <A className="btn btn-ghost" href="#contact" style={{ fontSize: "12.5px" }}>Enquire</A>
        </div>
      </div>
    </article>
  </div>
  </div>
  </div>
</section>

<section id="companies" style={{ position: "relative", padding: "120px 40px 130px", background: "var(--color-section)", borderTop: "1px solid rgba(212,175,55,.2)", borderBottom: "1px solid rgba(212,175,55,.2)", overflow: "hidden" }}>
  <div style={{ position: "absolute", inset: "0", pointerEvents: "none", backgroundImage: "url(assets/dubai-night.jpg)", backgroundSize: "cover", backgroundPosition: "center 40%", opacity: ".14" }}></div>
  <div style={{ position: "absolute", inset: "0", pointerEvents: "none", background: "radial-gradient(120% 70% at 12% 0%,rgba(212,175,55,.14),transparent 62%),linear-gradient(180deg,rgba(16,23,40,.86),rgba(16,23,40,.96))" }}></div>
  <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto" }}>
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "40px", flexWrap: "wrap", marginBottom: "56px" }}>
      <div style={{ maxWidth: "60ch" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
          <span style={{ width: "56px", height: "1px", background: "var(--color-accent)" }}></span>
          <span style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)" }}>The group</span>
        </div>
        <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(34px,4.4vw,64px)", lineHeight: "1.02", letterSpacing: "-.03em", margin: "0 0 18px" }}>Five companies,<br /><span style={{ color: "var(--color-accent)" }}>one group.</span></h2>
        <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--color-neutral-300)", margin: "0" }}>Accommodation, maintenance, cleaning, brokerage and workspace — each licensed in its own right, all answerable to one group.</p>
      </div>
      <div style={{ display: "flex", gap: "1px", background: "rgba(212,175,55,.2)", border: "1px solid rgba(212,175,55,.2)", borderRadius: "var(--radius-md,8px)", overflow: "hidden" }}>
        <div style={{ background: "rgba(16,23,40,.75)", padding: "20px 26px" }}><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "30px", fontWeight: "500", lineHeight: "1", color: "var(--color-accent)" }}>5</div><div style={{ fontSize: "10px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginTop: "8px" }}>Licences</div></div>
        <div style={{ background: "rgba(16,23,40,.75)", padding: "20px 26px" }}><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "30px", fontWeight: "500", lineHeight: "1", color: "var(--color-accent)" }}>2020</div><div style={{ fontSize: "10px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginTop: "8px" }}>Founded</div></div>
        <div style={{ background: "rgba(16,23,40,.75)", padding: "20px 26px" }}><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "30px", fontWeight: "500", lineHeight: "1", color: "var(--color-accent)" }}>200+</div><div style={{ fontSize: "10px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginTop: "8px" }}>Staff</div></div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" }}>
      <A className="hv-home-1" href="/accommodation" style={{ position: "relative", display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid rgba(212,175,55,.24)", borderRadius: "var(--radius-md,8px)", padding: "36px 34px 30px", color: "var(--color-text)", background: "linear-gradient(160deg,rgba(212,175,55,.06),rgba(10,10,11,0) 58%)", transition: "border-color .25s,transform .25s,background .25s", gridColumn: "span 2" }}>
        <span className="ghost-num" aria-hidden="true">01</span>
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "12px", marginBottom: "26px" }}>
          <span className="num" style={{ fontSize: "11px", letterSpacing: ".2em", color: "var(--color-accent)" }}>01</span>
          <span style={{ flex: "1", height: "1px", background: "linear-gradient(90deg,rgba(212,175,55,.5),transparent)" }}></span>
          <span style={{ fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)" }}>Accommodation</span>
        </div>
        <h3 style={{ position: "relative", fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "30px", lineHeight: "1.15", letterSpacing: "-.015em", margin: "0 0 8px", maxWidth: "20ch" }}>Credence Property Management L.L.C</h3>
        <div style={{ position: "relative", fontSize: "13px", color: "var(--color-accent-300)", marginBottom: "16px" }}>Staff accommodation &amp; labour camps</div>
        <p style={{ position: "relative", fontSize: "14.5px", lineHeight: "1.62", color: "var(--color-neutral-300)", margin: "0 0 26px", maxWidth: "58ch" }}>Specialists in staff accommodation and labour camp management across the UAE — operating 25 camp sites with over 3,350 rooms and facilitating more than 25,000 individuals with all-inclusive accommodation solutions.</p>
        <div style={{ position: "relative", marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", borderTop: "1px solid rgba(212,175,55,.16)", paddingTop: "16px" }}>
          <span style={{ fontSize: "11px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--color-neutral-400)" }}>Leasing · Sub-Leasing · Management</span>
          <span style={{ fontSize: "12.5px", color: "var(--color-accent-300)" }}>View buildings →</span>
        </div>
      </A>
      <A className="hv-home-2" href="#facilities" style={{ position: "relative", display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid rgba(212,175,55,.24)", borderRadius: "var(--radius-md,8px)", padding: "32px 30px 28px", color: "var(--color-text)", background: "linear-gradient(160deg,rgba(212,175,55,.06),rgba(10,10,11,0) 58%)", transition: "border-color .25s,transform .25s,background .25s" }}>
        <span className="ghost-num" aria-hidden="true">02</span>
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
          <span className="num" style={{ fontSize: "11px", letterSpacing: ".2em", color: "var(--color-accent)" }}>02</span>
          <span style={{ flex: "1", height: "1px", background: "linear-gradient(90deg,rgba(212,175,55,.5),transparent)" }}></span>
          <span style={{ fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)" }}>Maintenance</span>
        </div>
        <h3 style={{ position: "relative", fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "22px", lineHeight: "1.15", letterSpacing: "-.015em", margin: "0 0 8px", maxWidth: "none" }}>Credence Building Maintenance L.L.C</h3>
        <div style={{ position: "relative", fontSize: "13px", color: "var(--color-accent-300)", marginBottom: "16px" }}>Building maintenance &amp; MEP services</div>
        <p style={{ position: "relative", fontSize: "14.5px", lineHeight: "1.62", color: "var(--color-neutral-300)", margin: "0 0 26px", maxWidth: "none" }}>Building maintenance for commercial properties, with in-house expertise in energy management, HVAC, civil defence compliance and DEWA, delivered by over 200 skilled professional staff.</p>
        <div style={{ position: "relative", marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", borderTop: "1px solid rgba(212,175,55,.16)", paddingTop: "16px" }}>
          <span style={{ fontSize: "11px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--color-neutral-400)" }}>HVAC · Civil Defence · DEWA</span>
          <span style={{ fontSize: "12.5px", color: "var(--color-accent-300)" }}>See services →</span>
        </div>
      </A>
      <A className="hv-home-3" href="#contact" style={{ position: "relative", display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid rgba(212,175,55,.24)", borderRadius: "var(--radius-md,8px)", padding: "32px 30px 28px", color: "var(--color-text)", background: "linear-gradient(160deg,rgba(212,175,55,.06),rgba(10,10,11,0) 58%)", transition: "border-color .25s,transform .25s,background .25s" }}>
        <span className="ghost-num" aria-hidden="true">03</span>
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
          <span className="num" style={{ fontSize: "11px", letterSpacing: ".2em", color: "var(--color-accent)" }}>03</span>
          <span style={{ flex: "1", height: "1px", background: "linear-gradient(90deg,rgba(212,175,55,.5),transparent)" }}></span>
          <span style={{ fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)" }}>Brokerage</span>
        </div>
        <h3 style={{ position: "relative", fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "22px", lineHeight: "1.15", letterSpacing: "-.015em", margin: "0 0 8px", maxWidth: "none" }}>Credence Real Estate Brokers</h3>
        <div style={{ position: "relative", fontSize: "13px", color: "var(--color-accent-300)", marginBottom: "16px" }}>Buying, selling, leasing and renting</div>
        <p style={{ position: "relative", fontSize: "14.5px", lineHeight: "1.62", color: "var(--color-neutral-300)", margin: "0 0 26px", maxWidth: "none" }}>Brokerage covering commercial property in all prime locations including Downtown Dubai, Dubai Marina, Business Bay, Palm Jumeirah and JBR, led by a knowledgeable, professional and experienced team of brokers.</p>
        <div style={{ position: "relative", marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", borderTop: "1px solid rgba(212,175,55,.16)", paddingTop: "16px" }}>
          <span style={{ fontSize: "11px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--color-neutral-400)" }}>Real Estate Brokerage · Dubai</span>
          <span style={{ fontSize: "12.5px", color: "var(--color-accent-300)" }}>Enquire →</span>
        </div>
      </A>
      <A className="hv-home-4" href="#contact" style={{ position: "relative", display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid rgba(212,175,55,.24)", borderRadius: "var(--radius-md,8px)", padding: "32px 30px 28px", color: "var(--color-text)", background: "linear-gradient(160deg,rgba(212,175,55,.06),rgba(10,10,11,0) 58%)", transition: "border-color .25s,transform .25s,background .25s" }}>
        <span className="ghost-num" aria-hidden="true">04</span>
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
          <span className="num" style={{ fontSize: "11px", letterSpacing: ".2em", color: "var(--color-accent)" }}>04</span>
          <span style={{ flex: "1", height: "1px", background: "linear-gradient(90deg,rgba(212,175,55,.5),transparent)" }}></span>
          <span style={{ fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)" }}>Workspace</span>
        </div>
        <h3 style={{ position: "relative", fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "22px", lineHeight: "1.15", letterSpacing: "-.015em", margin: "0 0 8px", maxWidth: "none" }}>Credence Business Center L.L.C</h3>
        <div style={{ position: "relative", fontSize: "13px", color: "var(--color-accent-300)", marginBottom: "16px" }}>Ready-to-use offices, short or long term</div>
        <p style={{ position: "relative", fontSize: "14.5px", lineHeight: "1.62", color: "var(--color-neutral-300)", margin: "0 0 26px", maxWidth: "none" }}>Fully serviced office spaces that cut the cost of leasing, furnishing and maintaining traditional offices — ideal for startups, freelancers and remote teams.</p>
        <div style={{ position: "relative", marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", borderTop: "1px solid rgba(212,175,55,.16)", paddingTop: "16px" }}>
          <span style={{ fontSize: "11px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--color-neutral-400)" }}>Serviced Offices · Al Karama, Dubai</span>
          <span style={{ fontSize: "12.5px", color: "var(--color-accent-300)" }}>Enquire →</span>
        </div>
      </A>
      <A className="hv-home-5" href="#facilities" style={{ position: "relative", display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid rgba(212,175,55,.24)", borderRadius: "var(--radius-md,8px)", padding: "32px 30px 28px", color: "var(--color-text)", background: "linear-gradient(160deg,rgba(212,175,55,.06),rgba(10,10,11,0) 58%)", transition: "border-color .25s,transform .25s,background .25s" }}>
        <span className="ghost-num" aria-hidden="true">05</span>
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
          <span className="num" style={{ fontSize: "11px", letterSpacing: ".2em", color: "var(--color-accent)" }}>05</span>
          <span style={{ flex: "1", height: "1px", background: "linear-gradient(90deg,rgba(212,175,55,.5),transparent)" }}></span>
          <span style={{ fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)" }}>Cleaning</span>
        </div>
        <h3 style={{ position: "relative", fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "22px", lineHeight: "1.15", letterSpacing: "-.015em", margin: "0 0 8px", maxWidth: "none" }}>Credence Building Cleaning Services L.L.C</h3>
        <div style={{ position: "relative", fontSize: "13px", color: "var(--color-accent-300)", marginBottom: "16px" }}>Commercial cleaning &amp; specialised treatments</div>
        <p style={{ position: "relative", fontSize: "14.5px", lineHeight: "1.62", color: "var(--color-neutral-300)", margin: "0 0 26px", maxWidth: "none" }}>Daily, weekly or customised cleaning schedules for commercial buildings — deep cleaning, floor polishing, carpet care and hygiene control in high-traffic areas, delivered by cleaners trained in safety and modern methods.</p>
        <div style={{ position: "relative", marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", borderTop: "1px solid rgba(212,175,55,.16)", paddingTop: "16px" }}>
          <span style={{ fontSize: "11px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--color-neutral-400)" }}>Cleaning · Hygiene · Deep Treatments</span>
          <span style={{ fontSize: "12.5px", color: "var(--color-accent-300)" }}>See services →</span>
        </div>
      </A>
    </div>
  </div>
</section>

<section id="facilities" style={{ position: "relative" }}>
  <div className="pin">
    <img src="https://royal-uae-portals.lovable.app/assets/prop-2-D57UhuvN.jpg" alt="" style={{ opacity: ".32" }} />
    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(9,12,20,.9) 0%,rgba(9,12,20,.76) 50%,rgba(9,12,20,.9) 100%)" }}></div>
  </div>
  <div className="over" style={{ padding: "20px 40px 120px", boxSizing: "border-box" }}>
    <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,.85fr) minmax(0,1.15fr)", gap: "72px", alignItems: "start" }}>
      <div style={{ position: "sticky", top: "96px" }}>
        <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)", marginBottom: "20px" }}>Facilities management</div>
        <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(30px,3.2vw,46px)", lineHeight: "1.06", letterSpacing: "-.02em", margin: "0 0 22px" }}>Maintenance and cleaning delivered by 200+ skilled professionals</h2>
        <p style={{ fontSize: "15.5px", lineHeight: "1.65", color: "var(--color-neutral-400)", margin: "0 0 32px" }}>Advanced tools and machines, trained teams and flexible schedules keeping commercial buildings safe, clean and efficient.</p>
        <div style={{ border: "1px solid rgba(212,175,55,.4)", borderRadius: "var(--radius-md,8px)", padding: "24px", background: "rgba(9,12,20,.56)" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "18px", margin: "0 0 8px" }}>Request a quote</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0 0 18px" }}>Tell us about your building or workforce and our team will scope the right package.</p>
          <A className="btn btn-primary" href="#contact">Talk to us →</A>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ borderTop: "1px solid rgba(212,175,55,.18)", padding: "26px 0", display: "grid", gridTemplateColumns: "44px 1fr", gap: "20px" }}>
          <span className="num" style={{ fontSize: "11px", letterSpacing: ".18em", color: "var(--color-accent)", paddingTop: "5px" }}>01</span>
          <div><h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "20px", margin: "0 0 8px" }}>Building cleaning services</h3><p style={{ fontSize: "14.5px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0" }}>Daily, weekly or customised cleaning schedules for commercial buildings.</p></div>
        </div>
        <div style={{ borderTop: "1px solid rgba(212,175,55,.18)", padding: "26px 0", display: "grid", gridTemplateColumns: "44px 1fr", gap: "20px" }}>
          <span className="num" style={{ fontSize: "11px", letterSpacing: ".18em", color: "var(--color-accent)", paddingTop: "5px" }}>02</span>
          <div><h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "20px", margin: "0 0 8px" }}>HVAC &amp; energy management</h3><p style={{ fontSize: "14.5px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0" }}>In-house expertise in energy management and HVAC solutions across every property type.</p></div>
        </div>
        <div style={{ borderTop: "1px solid rgba(212,175,55,.18)", padding: "26px 0", display: "grid", gridTemplateColumns: "44px 1fr", gap: "20px" }}>
          <span className="num" style={{ fontSize: "11px", letterSpacing: ".18em", color: "var(--color-accent)", paddingTop: "5px" }}>03</span>
          <div><h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "20px", margin: "0 0 8px" }}>Civil defence compliance</h3><p style={{ fontSize: "14.5px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0" }}>Fire and life safety systems maintained and inspected to Dubai Civil Defence requirements.</p></div>
        </div>
        <div style={{ borderTop: "1px solid rgba(212,175,55,.18)", padding: "26px 0", display: "grid", gridTemplateColumns: "44px 1fr", gap: "20px" }}>
          <span className="num" style={{ fontSize: "11px", letterSpacing: ".18em", color: "var(--color-accent)", paddingTop: "5px" }}>04</span>
          <div><h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "20px", margin: "0 0 8px" }}>DEWA connections &amp; utilities</h3><p style={{ fontSize: "14.5px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0" }}>DEWA applications, transfers, metering and consumption monitoring handled on the client's behalf.</p></div>
        </div>
        <div style={{ borderTop: "1px solid rgba(212,175,55,.18)", padding: "26px 0", display: "grid", gridTemplateColumns: "44px 1fr", gap: "20px" }}>
          <span className="num" style={{ fontSize: "11px", letterSpacing: ".18em", color: "var(--color-accent)", paddingTop: "5px" }}>05</span>
          <div><h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "20px", margin: "0 0 8px" }}>AC servicing &amp; chiller maintenance</h3><p style={{ fontSize: "14.5px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0" }}>Planned and reactive air-conditioning servicing, duct cleaning and chiller upkeep across every site.</p></div>
        </div>
        <div style={{ borderTop: "1px solid rgba(212,175,55,.18)", padding: "26px 0", display: "grid", gridTemplateColumns: "44px 1fr", gap: "20px" }}>
          <span className="num" style={{ fontSize: "11px", letterSpacing: ".18em", color: "var(--color-accent)", paddingTop: "5px" }}>06</span>
          <div><h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "20px", margin: "0 0 8px" }}>Safety &amp; hygiene</h3><p style={{ fontSize: "14.5px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0" }}>Professional cleaners trained in safety, hygiene and modern cleaning methods.</p></div>
        </div>
        <div style={{ borderTop: "1px solid rgba(212,175,55,.18)", borderBottom: "1px solid rgba(212,175,55,.18)", padding: "26px 0", display: "grid", gridTemplateColumns: "44px 1fr", gap: "20px" }}>
          <span className="num" style={{ fontSize: "11px", letterSpacing: ".18em", color: "var(--color-accent)", paddingTop: "5px" }}>07</span>
          <div><h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "20px", margin: "0 0 8px" }}>Specialised treatments</h3><p style={{ fontSize: "14.5px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0" }}>Deep cleaning, floor polishing, carpet care and hygiene control in high-traffic areas.</p></div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", paddingTop: "40px" }}>
          <div><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "38px", fontWeight: "500", lineHeight: "1", color: "var(--color-accent)" }}>5</div><div style={{ fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-400)", marginTop: "8px" }}>Companies</div></div>
          <div><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "38px", fontWeight: "500", lineHeight: "1", color: "var(--color-accent)" }}>2020</div><div style={{ fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-400)", marginTop: "8px" }}>Established</div></div>
          <div><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "38px", fontWeight: "500", lineHeight: "1", color: "var(--color-accent)" }}>200+</div><div style={{ fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-400)", marginTop: "8px" }}>Skilled staff</div></div>
          <div><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "38px", fontWeight: "500", lineHeight: "1", color: "var(--color-accent)" }}>25,000+</div><div style={{ fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-400)", marginTop: "8px" }}>Individuals housed</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="locations" style={{ position: "relative", zIndex: "2", background: "var(--color-bg)", padding: "100px 40px 110px", borderTop: "1px solid rgba(212,175,55,.14)" }}>
  <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "32px", flexWrap: "wrap", marginBottom: "40px" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{ width: "56px", height: "1px", background: "var(--color-accent)" }}></span>
          <span style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)" }}>Locations</span>
        </div>
        <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(28px,3.4vw,48px)", lineHeight: "1.05", letterSpacing: "-.02em", margin: "0 0 16px", maxWidth: "24ch" }}>25 camp sites across Dubai's industrial hubs</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--color-neutral-400)", maxWidth: "62ch", margin: "0" }}>Browse the buildings on the map, check bed availability and get an indicative quote for your headcount.</p>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <A className="btn btn-primary" href="/accommodation">Explore all buildings</A>
        <A className="btn btn-ghost" href="/accommodation">Get a quote</A>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr)", gap: "22px", alignItems: "stretch" }}>
      <div style={{ position: "relative", border: "1px solid rgba(212,175,55,.24)", borderRadius: "var(--radius-md,8px)", overflow: "hidden", background: "#0c1120", minHeight: "440px" }}>
        <iframe src="/dubai-map.html" title="Credence camp locations across Dubai" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", border: "0" }}></iframe>
        <div style={{ position: "absolute", left: "16px", top: "16px", zIndex: "5", pointerEvents: "none", fontSize: "10px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-neutral-400)", background: "rgba(9,12,20,.68)", padding: "7px 11px", border: "1px solid rgba(212,175,55,.22)", borderRadius: "6px" }}>Dubai industrial &amp; commercial hubs</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", border: "1px solid rgba(212,175,55,.2)", borderRadius: "var(--radius-md,8px)", padding: "6px 22px 20px", maxHeight: "440px", overflow: "auto" }}>
        <div style={{ fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-500)", padding: "16px 0 4px" }}>Buildings</div>
        <A className="hv-home-6" href="/accommodation" style={{ display: "block", borderTop: "1px solid rgba(212,175,55,.14)", padding: "16px 0", color: "var(--color-text)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "14px", marginBottom: "6px" }}><span style={{ fontFamily: "var(--font-heading)", fontSize: "16.5px" }}>Jebel Ali Camp 3</span><span className="num" style={{ fontSize: "13px", color: "var(--color-accent)" }}>640 beds free</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", fontSize: "12.5px", color: "var(--color-neutral-500)" }}><span>Jebel Ali Industrial Area</span><span className="num">4,800 cap</span></div>
        </A>
        <A className="hv-home-7" href="/accommodation" style={{ display: "block", borderTop: "1px solid rgba(212,175,55,.14)", padding: "16px 0", color: "var(--color-text)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "14px", marginBottom: "6px" }}><span style={{ fontFamily: "var(--font-heading)", fontSize: "16.5px" }}>Sonapur Camp 1</span><span className="num" style={{ fontSize: "13px", color: "var(--color-accent)" }}>180 beds free</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", fontSize: "12.5px", color: "var(--color-neutral-500)" }}><span>Sonapur / Muhaisnah</span><span className="num">3,200 cap</span></div>
        </A>
        <A className="hv-home-8" href="/accommodation" style={{ display: "block", borderTop: "1px solid rgba(212,175,55,.14)", padding: "16px 0", color: "var(--color-text)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "14px", marginBottom: "6px" }}><span style={{ fontFamily: "var(--font-heading)", fontSize: "16.5px" }}>DIP Residences</span><span className="num" style={{ fontSize: "13px", color: "var(--color-accent)" }}>310 beds free</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", fontSize: "12.5px", color: "var(--color-neutral-500)" }}><span>Dubai Investments Park</span><span className="num">2,400 cap</span></div>
        </A>
        <A className="hv-home-9" href="/accommodation" style={{ display: "block", borderTop: "1px solid rgba(212,175,55,.14)", padding: "16px 0", color: "var(--color-text)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "14px", marginBottom: "6px" }}><span style={{ fontFamily: "var(--font-heading)", fontSize: "16.5px" }}>Ras Al Khor Lodge</span><span className="num" style={{ fontSize: "13px", color: "var(--color-accent)" }}>120 beds free</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", fontSize: "12.5px", color: "var(--color-neutral-500)" }}><span>Ras Al Khor</span><span className="num">900 cap</span></div>
        </A>
        <A className="hv-home-10" href="/accommodation" style={{ display: "block", borderTop: "1px solid rgba(212,175,55,.14)", padding: "16px 0", color: "var(--color-text)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "14px", marginBottom: "6px" }}><span style={{ fontFamily: "var(--font-heading)", fontSize: "16.5px" }}>Al Quoz Block 4</span><span className="num" style={{ fontSize: "13px", color: "var(--color-accent)" }}>64 beds free</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", fontSize: "12.5px", color: "var(--color-neutral-500)" }}><span>Al Quoz</span><span className="num">520 cap</span></div>
        </A>
        <A className="hv-home-11" href="/accommodation" style={{ display: "block", borderTop: "1px solid rgba(212,175,55,.14)", borderBottom: "1px solid rgba(212,175,55,.14)", padding: "16px 0", color: "var(--color-text)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "14px", marginBottom: "6px" }}><span style={{ fontFamily: "var(--font-heading)", fontSize: "16.5px" }}>Al Qusais Camp 2</span><span className="num" style={{ fontSize: "13px", color: "var(--color-neutral-500)" }}>At capacity</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", fontSize: "12.5px", color: "var(--color-neutral-500)" }}><span>Al Qusais</span><span className="num">1,900 cap</span></div>
        </A>
        <A href="/accommodation" style={{ fontSize: "13px", letterSpacing: ".14em", textTransform: "uppercase", paddingTop: "18px" }}>All 25 sites →</A>
      </div>
    </div>
  </div>
</section>

<section style={{ position: "relative" }}>
  <div className="pin">
    <img src="/assets/dubai-night.jpg" alt="Downtown Dubai at night with the Burj Khalifa and the fountains" style={{ objectPosition: "center 45%" }} />
    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(9,12,20,.87) 0%,rgba(9,12,20,.52) 50%,rgba(9,12,20,.87) 100%)" }}></div>
  </div>
  <div className="over" style={{ minHeight: "150vh", display: "flex", alignItems: "center", padding: "80px 40px", boxSizing: "border-box" }}>
    <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
      <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)", marginBottom: "26px" }}>Through trust we deliver</div>
      <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(36px,5.6vw,80px)", lineHeight: "1", letterSpacing: "-.03em", margin: "0 0 26px", maxWidth: "14ch" }}>Building futures together</h2>
      <p style={{ fontSize: "17px", lineHeight: "1.65", color: "var(--color-neutral-300)", maxWidth: "60ch", margin: "0" }}>Our vision is to be a credible services provider by gaining trust and delivering possibilities for customers — with credibility, passion, mutual respect and one big reliable team.</p>
    </div>
  </div>
</section>



<section id="testimonials" style={{ position: "relative", zIndex: "2", background: "var(--color-bg)", padding: "110px 40px 120px" }}><div style={{ maxWidth: "1280px", margin: "0 auto" }}>
  <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)", marginBottom: "20px" }}>Testimonials</div>
  <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(32px,3.6vw,52px)", lineHeight: "1.05", letterSpacing: "-.02em", margin: "0 0 18px" }}>What our clients say</h2>
  <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--color-neutral-400)", maxWidth: "66ch", margin: "0 0 56px" }}>Contractors, security firms and facilities operators across the UAE rely on Credence Group for compliant, well-run accommodation and property services.</p>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "22px" }}>
    <blockquote style={{ margin: "0", borderLeft: "2px solid var(--color-accent)", padding: "6px 0 6px 22px" }}>
      <p style={{ fontSize: "15.5px", lineHeight: "1.7", color: "var(--color-neutral-200)", margin: "0 0 20px" }}>The accommodation facilities provided have been consistently clean, safe, and well-maintained. The management team is responsive and ensures our workers' needs are met promptly.</p>
      <footer style={{ fontSize: "13px", color: "var(--color-neutral-400)" }}><span style={{ display: "block", fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "6px" }}>Client</span>Al Jaber Security Company LLC, Abu Dhabi</footer>
    </blockquote>
    <blockquote style={{ margin: "0", borderLeft: "2px solid var(--color-accent)", padding: "6px 0 6px 22px" }}>
      <p style={{ fontSize: "15.5px", lineHeight: "1.7", color: "var(--color-neutral-200)", margin: "0 0 20px" }}>Our workers feel comfortable and respected here. The accommodation is well-maintained, and the management genuinely cares about their wellbeing. This partnership has had a positive impact on workforce morale.</p>
      <footer style={{ fontSize: "13px", color: "var(--color-neutral-400)" }}><span style={{ display: "block", fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "6px" }}>Client</span>Belhasa Driving School</footer>
    </blockquote>
    <blockquote style={{ margin: "0", borderLeft: "2px solid var(--color-accent)", padding: "6px 0 6px 22px" }}>
      <p style={{ fontSize: "15.5px", lineHeight: "1.7", color: "var(--color-neutral-200)", margin: "0 0 20px" }}>Their accommodation solutions have significantly streamlined our workforce logistics. The facilities are well-managed, compliant, and consistently maintained. We value their professionalism and attention to detail.</p>
      <footer style={{ fontSize: "13px", color: "var(--color-neutral-400)" }}><span style={{ display: "block", fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "6px" }}>Client</span>Asia Prime</footer>
    </blockquote>
    <blockquote style={{ margin: "0", borderLeft: "2px solid var(--color-accent)", padding: "6px 0 6px 22px" }}>
      <p style={{ fontSize: "15.5px", lineHeight: "1.7", color: "var(--color-neutral-200)", margin: "0 0 20px" }}>Excellent facilities and excellent service. Our team is very satisfied.</p>
      <footer style={{ fontSize: "13px", color: "var(--color-neutral-400)" }}><span style={{ display: "block", fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "6px" }}>Client</span>Khansaheb Facilities Management</footer>
    </blockquote>
  </div>
  </div>
</section>

<section id="contact" style={{ position: "relative" }}>
  <div className="pin">
    <img src="https://royal-uae-portals.lovable.app/assets/hero-dubai-Dx3vmr_1.jpg" alt="Dubai skyline" />
    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(9,12,20,.89) 0%,rgba(9,12,20,.64) 40%,rgba(9,12,20,.91) 100%)" }}></div>
  </div>
  <div className="over" style={{ padding: "120px 40px 60px", boxSizing: "border-box" }}>
    <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,.9fr)", gap: "72px", alignItems: "start" }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)", marginBottom: "20px" }}>Get in touch</div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(34px,4.4vw,64px)", lineHeight: "1.02", letterSpacing: "-.03em", margin: "0 0 22px" }}>Let's work together</h2>
          <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--color-neutral-300)", maxWidth: "56ch", margin: "0 0 32px" }}>Tell us what you need — accommodation, maintenance, a property or an office — and the group will route you to the right desk within one business day.</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <A className="btn btn-primary" href="mailto:info@credence-group.ae">Email the group</A>
            <A className="btn btn-ghost" href="tel:+97145756773">+971 4 575 6773</A>
          </div>
        </div>
        <form style={{ border: "1px solid rgba(212,175,55,.3)", borderRadius: "var(--radius-md,8px)", padding: "28px", background: "rgba(9,12,20,.68)", backdropFilter: "blur(8px)" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "19px", margin: "0 0 20px" }}>Register your interest</h3>
          <div className="field" style={{ marginBottom: "14px" }}><label htmlFor="c-name">Name</label><input className="input" id="c-name" placeholder="Your name" /></div>
          <div className="field" style={{ marginBottom: "14px" }}><label htmlFor="c-email">Email</label><input className="input" id="c-email" placeholder="you@company.ae" /></div>
          <div className="field" style={{ marginBottom: "18px" }}>
            <label htmlFor="c-need">I need…</label>
            <select className="input" id="c-need">
              <option>Staff accommodation</option>
              <option>Facilities management</option>
              <option>Real estate brokerage</option>
              <option>Business center / office</option>
            </select>
          </div>
          <button className="btn btn-primary btn-block" type="button">Submit</button>
          <p style={{ fontSize: "11.5px", lineHeight: "1.55", color: "var(--color-neutral-500)", margin: "16px 0 0" }}>By submitting you agree to be contacted by Credence Group of Companies regarding our UAE accommodation, facilities, real estate and business center services.</p>
        </form>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.2fr) repeat(2,minmax(0,1fr))", gap: "48px", marginTop: "100px", paddingTop: "40px", borderTop: "1px solid rgba(212,175,55,.22)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: "15px", letterSpacing: ".14em", marginBottom: "14px", color: "var(--color-accent)" }}>CREDENCE GROUP</div>
          <p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0", maxWidth: "44ch" }}>A consortium of enterprises serving UAE business sectors since March 2020 — property management, facilities management, real estate brokerage and serviced offices.</p>
        </div>
        <div>
          <div style={{ fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "16px" }}>Companies</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px", fontSize: "13.5px" }}>
            <A href="#companies">Credence Building Cleaning Services L.L.C</A>
            <A href="#companies">Credence Building Maintenance L.L.C</A>
            <A href="#companies">Credence Business Center L.L.C</A>
            <A href="#companies">Credence Property Management L.L.C</A>
            <A href="#companies">Credence Real Estate Brokers</A>
          </div>
        </div>
        <div>
          <div style={{ fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "16px" }}>Get in touch</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px", fontSize: "13.5px", color: "var(--color-neutral-400)" }}>
            <span>5th Floor, Boulevard Plaza, Tower 2, Downtown, Dubai, UAE</span>
            <A href="tel:+97145756773">+971 4 575 6773</A>
            <A href="mailto:info@credence-group.ae">info@credence-group.ae</A>
          </div>
        </div>
      </div>
      <div style={{ fontSize: "11.5px", color: "var(--color-neutral-500)", marginTop: "44px" }}>© 2026 Credence Group of Companies. All rights reserved.</div>
    </div>
  </div>
</section>

</div>
    </>
  );
}
