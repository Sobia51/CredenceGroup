import { Fragment } from 'react';
import A from '../components/A';
import { sx } from '../lib/sx';
import { useAccommodation } from '../hooks/useAccommodation';
import '../styles/base.css';
import '../styles/accommodation.css';

export default function Accommodation({ defaultView = 'map', showSectorSwitcher = true }) {
  const {
    area, cap, clearFilters, closeQuote, clusters, extras, extrasLabel, isGrid, isMap, monthly, onArea, onCap, onQLocation, onRoom, onTerm, onType, onWorkers, openQuote, qLocation, quoteNote, quoteOpen, resultCount, room, rooms, roomsNeeded, sectorNote, sectors, selected, showGrid, showMap, sitesMatching, submitLabel, submitQuote, suggestedConfig, tabGrid, tabMap, term, type, workers, workersLabel
  } = useAccommodation({ defaultView, showSectorSwitcher });

  return (
    <>
<div style={{ background: "var(--color-bg)" }}>

<header style={{ position: "sticky", top: "0", zIndex: "60", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "14px 40px", background: "rgba(9,12,20,.82)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(212,175,55,.16)" }}>
  <A href="/" style={{ display: "flex", alignItems: "baseline", gap: "10px", color: "var(--color-text)" }}>
    <span style={{ fontFamily: "var(--font-heading)", fontSize: "17px", fontWeight: "500", letterSpacing: ".14em", color: "var(--color-accent)" }}>CREDENCE</span>
    <span style={{ fontSize: "10px", letterSpacing: ".24em", color: "var(--color-neutral-400)", textTransform: "uppercase" }}>Workforce accommodation</span>
  </A>
  <nav style={{ display: "flex", gap: "24px", fontSize: "12.5px", letterSpacing: ".04em", color: "var(--color-neutral-300)" }}>
    <A href="#portfolio">Portfolio</A>
    <A href="#detail">Facility detail</A>
    <A href="/">Group site</A>
    <A href="/deposit-claims">Deposit claims</A>
  </nav>
  <div style={{ display: "flex", gap: "8px" }}>
    <A className="btn btn-ghost" href="tel:+97145756773" style={{ fontSize: "12.5px" }}>Call</A>
    <button className="btn btn-primary" type="button" style={{ fontSize: "12.5px" }} onClick={openQuote}>Request quote</button>
  </div>
</header>

<section style={{ position: "relative" }}>
  <div className="pin">
    <img src="/assets/lounge-night.jpg" alt="Accommodation block at dusk in Dubai" style={{ objectPosition: "center 45%" }} />
    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(9,12,20,.78) 0%,rgba(9,12,20,.42) 38%,rgba(9,12,20,.89) 100%)" }}></div>
    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(9,12,20,.87) 0%,rgba(9,12,20,.55) 50%,rgba(9,12,20,.12) 100%)" }}></div>
  </div>
  <div className="over" style={{ minHeight: "124vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 40px 72px", boxSizing: "border-box" }}>
    <div style={{ maxWidth: "1080px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
        <span className="hero-rule" style={{ width: "56px", height: "1px", background: "var(--color-accent)", animationDelay: ".1s" }}></span>
        <span className="hero-in" style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)", animationDelay: ".22s" }}>Credence Property Management L.L.C · Dubai</span>
      </div>
      <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(32px,4vw,56px)", lineHeight: "1.06", letterSpacing: "-.025em", margin: "0 0 24px", textWrap: "balance" }}><span className="hero-in" style={{ display: "block", animationDelay: ".36s" }}>Workforce accommodation,</span><span className="hero-in" style={{ display: "block", color: "var(--color-accent)", animationDelay: ".54s" }}>MOHRE-compliant, at scale.</span></h1>
      <p className="hero-in" style={{ fontSize: "16.5px", lineHeight: "1.65", color: "var(--color-neutral-300)", maxWidth: "60ch", margin: "0 0 34px", animationDelay: ".74s" }}>25 camp sites across Dubai's industrial and commercial hubs. 3,350+ rooms, 25,000+ individuals housed, one accountable operator for hygiene, catering, transport and compliance.</p>
      <div className="hero-in" style={{ display: "flex", gap: "12px", flexWrap: "wrap", animationDelay: ".9s" }}>
        <button className="btn btn-primary" type="button" onClick={openQuote}>Request a custom quote</button>
        <A className="btn btn-ghost" href="#portfolio">Explore the portfolio</A>
      </div>
    </div>
    <div className="hero-in" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "56px", animationDelay: "1.04s" }}>
      {(sectors || []).map((s, $index) => (<Fragment key={$index}>
        <button type="button" onClick={s.onClick} style={sx(s.style)}>{s.label}</button>
      </Fragment>))}
    </div>
    <div className="hero-in" style={{ fontSize: "13.5px", lineHeight: "1.6", color: "var(--color-neutral-400)", marginTop: "18px", maxWidth: "70ch", animationDelay: "1.16s" }}>{sectorNote}</div>
  </div>
</section>

<section id="portfolio" style={{ position: "relative", zIndex: "2", background: "var(--color-bg)", padding: "100px 40px 110px" }}>
  <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "32px", flexWrap: "wrap", marginBottom: "40px" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{ width: "56px", height: "1px", background: "var(--color-accent)" }}></span>
          <span style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)" }}>Portfolio explorer</span>
        </div>
        <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(28px,3.2vw,46px)", lineHeight: "1.05", letterSpacing: "-.02em", margin: "0" }}>Where our camps are</h2>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", border: "1px solid rgba(212,175,55,.28)", borderRadius: "999px", padding: "4px" }}>
        <button type="button" onClick={showMap} style={sx(tabMap)}>Map view</button>
        <button type="button" onClick={showGrid} style={sx(tabGrid)}>Grid view</button>
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "18px", borderTop: "1px solid rgba(212,175,55,.2)", borderBottom: "1px solid rgba(212,175,55,.2)", padding: "22px 0", marginBottom: "36px" }}>
      <div className="field" style={{ margin: "0" }}><label htmlFor="f-area">Location area</label>
        <select className="input" id="f-area" value={area} onChange={onArea}>
          <option>All areas</option>
          <option>Sonapur / Muhaisnah</option>
          <option>Jebel Ali Industrial Area</option>
          <option>Dubai Investments Park</option>
          <option>Al Quoz</option>
          <option>Al Qusais</option>
          <option>Ras Al Khor</option>
        </select>
      </div>
      <div className="field" style={{ margin: "0" }}><label htmlFor="f-cap">Minimum capacity</label>
        <select className="input" id="f-cap" value={cap} onChange={onCap}>
          <option>Any capacity</option>
          <option>50+ workers</option>
          <option>500+ workers</option>
          <option>1,500+ workers</option>
          <option>3,000+ workers</option>
        </select>
      </div>
      <div className="field" style={{ margin: "0" }}><label htmlFor="f-type">Facility type</label>
        <select className="input" id="f-type" value={type} onChange={onType}>
          <option>All types</option>
          <option>Labour camp</option>
          <option>Staff accommodation</option>
          <option>Supervisor block</option>
        </select>
      </div>
      <div className="field" style={{ margin: "0" }}><label htmlFor="f-room">Room configuration</label>
        <select className="input" id="f-room" value={room} onChange={onRoom}>
          <option>Any configuration</option>
          <option>4-bed</option>
          <option>6-bed</option>
          <option>8-bed</option>
          <option>Supervisor suite</option>
        </select>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
        <div><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "30px", fontWeight: "500", lineHeight: "1", color: "var(--color-accent)" }}>{resultCount}</div><div style={{ fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginTop: "6px" }}>Sites matched</div></div>
        <button className="btn btn-ghost" type="button" style={{ fontSize: "12.5px" }} onClick={clearFilters}>Clear</button>
      </div>
    </div>

    {(isMap) ? (<>
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.55fr) minmax(0,1fr)", gap: "22px", alignItems: "stretch" }}>
      <div style={{ position: "relative", border: "1px solid rgba(212,175,55,.24)", borderRadius: "var(--radius-md,8px)", overflow: "hidden", background: "#0c1120", minHeight: "560px" }}>
        <iframe src="/dubai-map.html" title="Credence camp locations across Dubai" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", border: "0" }}></iframe>
        <div style={{ position: "absolute", left: "16px", top: "16px", zIndex: "5", pointerEvents: "none", fontSize: "10px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-neutral-400)", background: "rgba(9,12,20,.68)", padding: "7px 11px", border: "1px solid rgba(212,175,55,.22)", borderRadius: "6px" }}>Dubai industrial &amp; commercial hubs</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", border: "1px solid rgba(212,175,55,.2)", borderRadius: "var(--radius-md,8px)", padding: "8px 20px 20px", maxHeight: "560px", overflow: "auto" }}>
        <div style={{ fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-500)", padding: "14px 0 6px" }}>Location clusters</div>
        {(clusters || []).map((c, $index) => (<Fragment key={$index}>
          <button type="button" onClick={c.onClick} onMouseEnter={c.onHover} style={sx(c.style)}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "14px", marginBottom: "6px" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "16.5px" }}>{c.name}</span>
              <span className="num" style={{ fontSize: "13px", color: "var(--color-accent)" }}>{c.bedsLabel}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", fontSize: "12.5px", color: "var(--color-neutral-500)" }}>
              <span>{c.area}</span>
              <span className="num">{c.capacityLabel} cap</span>
            </div>
          </button>
        </Fragment>))}
      </div>
    </div>
    </>) : null}

    {(isGrid) ? (<>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "22px" }}>
      {(clusters || []).map((c, $index) => (<Fragment key={$index}>
        <article style={{ border: "1px solid rgba(212,175,55,.2)", borderRadius: "var(--radius-md,8px)", overflow: "hidden", background: "var(--color-neutral-900)" }}>
          <div style={{ height: "170px", overflow: "hidden", position: "relative", background: "#141a28" }}>
            <div style={sx(c.photoStyle)}></div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(9,12,20,.2),rgba(9,12,20,.79))" }}></div>
            <span style={{ position: "absolute", left: "16px", bottom: "14px", fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent-300)" }}>{c.area}</span>
          </div>
          <div style={{ padding: "22px 22px 24px" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "21px", letterSpacing: "-.01em", margin: "0 0 14px" }}>{c.name}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
              <span className="tag tag-outline">{c.type}</span>
              <span className="tag tag-outline">{c.roomsLabel}</span>
              <span className="tag tag-accent">{c.bedsLabel}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(212,175,55,.16)", paddingTop: "16px" }}>
              <span className="num" style={{ fontSize: "13.5px", color: "var(--color-neutral-300)" }}>{c.capacityLabel} workers</span>
              <button className="btn btn-ghost" type="button" style={{ fontSize: "12.5px" }} onClick={c.onClick}>View facility</button>
            </div>
          </div>
        </article>
      </Fragment>))}
    </div>
    </>) : null}
  </div>
</section>

<section id="detail" style={{ position: "relative", zIndex: "2", background: "var(--color-section)", borderTop: "1px solid rgba(212,175,55,.2)", borderBottom: "1px solid rgba(212,175,55,.2)", padding: "100px 40px 110px" }}>
  <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "32px", flexWrap: "wrap", marginBottom: "44px" }}>
      <div>
        <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)", marginBottom: "18px" }}>Facility detail · {selected.area}</div>
        <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(28px,3.4vw,48px)", lineHeight: "1.04", letterSpacing: "-.02em", margin: "0 0 12px" }}>{selected.name}</h2>
        <div style={{ fontSize: "14.5px", color: "var(--color-neutral-400)" }}>{selected.type} · {selected.roomsLabel} · {selected.capacityLabel} worker capacity</div>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button className="btn btn-primary" type="button" onClick={openQuote}>Quote for this site</button>
        <A className="btn btn-ghost" href="https://wa.me/97145756773">WhatsApp</A>
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)", gap: "16px", marginBottom: "56px" }}>
      <div style={{ position: "relative", border: "1px solid rgba(212,175,55,.22)", borderRadius: "var(--radius-md,8px)", overflow: "hidden", height: "560px" }}>
        <div style={sx(selected.heroStyle)}></div>
        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(9,12,20,.15),rgba(9,12,20,.66))" }}></div>
        <div style={{ position: "absolute", left: "22px", bottom: "22px", display: "flex", alignItems: "center", gap: "12px", border: "1px solid rgba(212,175,55,.5)", borderRadius: "999px", padding: "9px 16px", background: "rgba(9,12,20,.56)", backdropFilter: "blur(6px)" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-accent)", boxShadow: "0 0 0 4px rgba(212,175,55,.2)" }}></span>
          <span style={{ fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--color-accent-200)" }}>360° virtual tour · start walkthrough</span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateRows: "repeat(3,176px)", gap: "16px" }}>
        <div style={{ position: "relative", border: "1px solid rgba(212,175,55,.18)", borderRadius: "var(--radius-md,8px)", overflow: "hidden", background: "#141a28" }}>
          <div style={{ position: "absolute", inset: "0", backgroundImage: "url(https://royal-uae-portals.lovable.app/assets/prop-1-BvTtaELf.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: ".65" }}></div>
          <span style={{ position: "absolute", left: "14px", bottom: "12px", fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-200)" }}>Room layouts</span>
        </div>
        <div style={{ position: "relative", border: "1px solid rgba(212,175,55,.18)", borderRadius: "var(--radius-md,8px)", overflow: "hidden", background: "#141a28" }}>
          <div style={{ position: "absolute", inset: "0", backgroundImage: "url(https://royal-uae-portals.lovable.app/assets/prop-3-eX8QR1wO.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: ".65" }}></div>
          <span style={{ position: "absolute", left: "14px", bottom: "12px", fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-200)" }}>Dining hall &amp; kitchen</span>
        </div>
        <div style={{ position: "relative", border: "1px solid rgba(212,175,55,.18)", borderRadius: "var(--radius-md,8px)", overflow: "hidden", background: "#141a28" }}>
          <div style={{ position: "absolute", inset: "0", backgroundImage: "url(https://royal-uae-portals.lovable.app/assets/prop-2-D57UhuvN.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: ".65" }}></div>
          <span style={{ position: "absolute", left: "14px", bottom: "12px", fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-200)" }}>Recreation &amp; washrooms</span>
        </div>
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.25fr)", gap: "64px", alignItems: "start" }}>
      <div>
        <div style={{ fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "24px" }}>Amenities &amp; compliance</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: "1px", background: "rgba(212,175,55,.16)", borderTop: "1px solid rgba(212,175,55,.16)", borderBottom: "1px solid rgba(212,175,55,.16)" }}>
          <div style={{ background: "var(--color-section)", padding: "18px 16px", fontSize: "14px", display: "flex", gap: "10px" }}><span style={{ color: "var(--color-accent)" }}>✓</span>Central AC &amp; climate control</div>
          <div style={{ background: "var(--color-section)", padding: "18px 16px", fontSize: "14px", display: "flex", gap: "10px" }}><span style={{ color: "var(--color-accent)" }}>✓</span>24/7 security &amp; CCTV</div>
          <div style={{ background: "var(--color-section)", padding: "18px 16px", fontSize: "14px", display: "flex", gap: "10px" }}><span style={{ color: "var(--color-accent)" }}>✓</span>On-site catering &amp; kitchens</div>
          <div style={{ background: "var(--color-section)", padding: "18px 16px", fontSize: "14px", display: "flex", gap: "10px" }}><span style={{ color: "var(--color-accent)" }}>✓</span>Laundry services</div>
          <div style={{ background: "var(--color-section)", padding: "18px 16px", fontSize: "14px", display: "flex", gap: "10px" }}><span style={{ color: "var(--color-accent)" }}>✓</span>Wi-Fi coverage throughout</div>
          <div style={{ background: "var(--color-section)", padding: "18px 16px", fontSize: "14px", display: "flex", gap: "10px" }}><span style={{ color: "var(--color-accent)" }}>✓</span>Medical first-aid room</div>
          <div style={{ background: "var(--color-section)", padding: "18px 16px", fontSize: "14px", display: "flex", gap: "10px" }}><span style={{ color: "var(--color-accent)" }}>✓</span>Prayer rooms</div>
          <div style={{ background: "var(--color-section)", padding: "18px 16px", fontSize: "14px", display: "flex", gap: "10px" }}><span style={{ color: "var(--color-accent)" }}>✓</span>Civil defence certified</div>
          <div style={{ background: "var(--color-section)", padding: "18px 16px", fontSize: "14px", display: "flex", gap: "10px" }}><span style={{ color: "var(--color-accent)" }}>✓</span>MOHRE standards met</div>
        </div>
        <p style={{ fontSize: "13.5px", lineHeight: "1.65", color: "var(--color-neutral-500)", margin: "22px 0 0" }}>Every site is inspected against Ministry of Human Resources &amp; Emiratisation accommodation standards and Dubai Civil Defence fire and life safety requirements.</p>
      </div>
      <div>
        <div style={{ fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "24px" }}>Room configurations</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "16px" }}>
          {(rooms || []).map((r, $index) => (<Fragment key={$index}>
            <div style={sx(r.style)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "20px" }}>{r.name}</span>
                <span className="num" style={{ fontSize: "12.5px", color: "var(--color-accent-300)" }}>{r.area}</span>
              </div>
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "18px" }}>
                {(r.beds || []).map((b, $index) => (<Fragment key={$index}>
                  <span style={sx(b.style)}></span>
                </Fragment>))}
              </div>
              <div style={{ fontSize: "13px", lineHeight: "1.6", color: "var(--color-neutral-400)" }}>{r.note}</div>
              <div className="num" style={{ fontSize: "12.5px", color: "var(--color-neutral-500)", marginTop: "14px" }}>{r.count} units on site</div>
            </div>
          </Fragment>))}
        </div>
      </div>
    </div>
  </div>
</section>

<section style={{ position: "relative", zIndex: "2", background: "var(--color-bg)", padding: "100px 40px 120px" }}>
  <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "72px", alignItems: "center" }}>
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
        <span style={{ width: "56px", height: "1px", background: "var(--color-accent)" }}></span>
        <span style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)" }}>Conversion desk</span>
      </div>
      <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(28px,3.4vw,48px)", lineHeight: "1.05", letterSpacing: "-.02em", margin: "0 0 20px", maxWidth: "22ch" }}>Tell us the headcount. We'll size the camp.</h2>
      <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--color-neutral-400)", maxWidth: "54ch", margin: "0 0 30px" }}>The capacity calculator turns a worker count, location preference and contract length into a room breakdown and an indicative monthly figure before an account manager picks it up.</p>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button className="btn btn-primary" type="button" onClick={openQuote}>Open the calculator</button>
        <A className="btn btn-ghost" href="https://wa.me/97145756773">WhatsApp the desk</A>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(212,175,55,.18)", border: "1px solid rgba(212,175,55,.18)", borderRadius: "var(--radius-md,8px)", overflow: "hidden" }}>
      <div style={{ background: "var(--color-bg)", padding: "28px 24px" }}><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "34px", fontWeight: "500", color: "var(--color-accent)", lineHeight: "1" }}>25</div><div style={{ fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginTop: "8px" }}>Camp sites</div></div>
      <div style={{ background: "var(--color-bg)", padding: "28px 24px" }}><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "34px", fontWeight: "500", color: "var(--color-accent)", lineHeight: "1" }}>3,350+</div><div style={{ fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginTop: "8px" }}>Rooms</div></div>
      <div style={{ background: "var(--color-bg)", padding: "28px 24px" }}><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "34px", fontWeight: "500", color: "var(--color-accent)", lineHeight: "1" }}>25,000+</div><div style={{ fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginTop: "8px" }}>Individuals housed</div></div>
      <div style={{ background: "var(--color-bg)", padding: "28px 24px" }}><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "34px", fontWeight: "500", color: "var(--color-accent)", lineHeight: "1" }}>24h</div><div style={{ fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginTop: "8px" }}>Quote turnaround</div></div>
    </div>
  </div>
</section>

{(quoteOpen) ? (<>
<div style={{ position: "fixed", inset: "0", zIndex: "90", display: "flex", justifyContent: "flex-end" }}>
  <div onClick={closeQuote} style={{ position: "absolute", inset: "0", background: "rgba(7,10,17,.74)", backdropFilter: "blur(3px)" }}></div>
  <aside style={{ position: "relative", width: "min(520px,100%)", height: "100%", overflow: "auto", background: "#0c1120", borderLeft: "1px solid rgba(212,175,55,.32)", padding: "32px 34px 44px", boxSizing: "border-box", boxShadow: "-30px 0 80px rgba(0,0,0,.6)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", marginBottom: "28px" }}>
      <div>
        <div style={{ fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-accent-300)", marginBottom: "12px" }}>Capacity calculator</div>
        <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "26px", letterSpacing: "-.02em", margin: "0" }}>Request a custom quote</h2>
      </div>
      <button className="btn btn-ghost" type="button" onClick={closeQuote} style={{ fontSize: "12.5px" }}>Close</button>
    </div>

    <div className="field" style={{ marginBottom: "20px" }}>
      <label htmlFor="q-workers">Workers / beds required — <span className="num" style={{ color: "var(--color-accent)" }}>{workersLabel}</span></label>
      <input type="range" id="q-workers" min="50" max="5000" step="50" value={workers} onChange={onWorkers} style={{ width: "100%", accentColor: "var(--color-accent)" }} />
    </div>

    <div className="field" style={{ marginBottom: "20px" }}>
      <label htmlFor="q-loc">Preferred Dubai location</label>
      <select className="input" id="q-loc" value={qLocation} onChange={onQLocation}>
        <option>No preference — best availability</option>
        <option>Sonapur / Muhaisnah</option>
        <option>Jebel Ali Industrial Area</option>
        <option>Dubai Investments Park</option>
        <option>Al Quoz</option>
        <option>Al Qusais</option>
        <option>Ras Al Khor</option>
      </select>
    </div>

    <div className="field" style={{ marginBottom: "22px" }}>
      <label htmlFor="q-term">Contract duration</label>
      <select className="input" id="q-term" value={term} onChange={onTerm}>
        <option>Long-term (12 months+)</option>
        <option>Project-based (3–11 months)</option>
        <option>Short-term (under 3 months)</option>
      </select>
    </div>

    <div style={{ fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "14px" }}>Additional services</div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "9px", marginBottom: "28px" }}>
      {(extras || []).map((x, $index) => (<Fragment key={$index}>
        <button type="button" onClick={x.onClick} style={sx(x.style)}>{x.label}</button>
      </Fragment>))}
    </div>

    <div style={{ border: "1px solid rgba(212,175,55,.32)", borderRadius: "var(--radius-md,8px)", padding: "24px", background: "rgba(212,175,55,.05)", marginBottom: "24px" }}>
      <div style={{ fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-accent-300)", marginBottom: "18px" }}>Indicative estimate</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><span style={{ color: "var(--color-neutral-400)" }}>Rooms required</span><span className="num">{roomsNeeded}</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><span style={{ color: "var(--color-neutral-400)" }}>Suggested configuration</span><span className="num">{suggestedConfig}</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><span style={{ color: "var(--color-neutral-400)" }}>Sites matching</span><span className="num">{sitesMatching}</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><span style={{ color: "var(--color-neutral-400)" }}>Services included</span><span className="num">{extrasLabel}</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: "1px solid rgba(212,175,55,.24)", paddingTop: "14px", marginTop: "4px" }}>
          <span style={{ fontSize: "13px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-neutral-400)" }}>Indicative monthly</span>
          <span className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "26px", color: "var(--color-accent)" }}>{monthly}</span>
        </div>
      </div>
      <p style={{ fontSize: "11.5px", lineHeight: "1.55", color: "var(--color-neutral-500)", margin: "16px 0 0" }}>Indicative only, based on published bed rates. A dedicated account manager confirms pricing after a site walkthrough.</p>
    </div>

    <div className="field" style={{ marginBottom: "14px" }}><label htmlFor="q-company">Company</label><input className="input" id="q-company" placeholder="Your company name" /></div>
    <div className="field" style={{ marginBottom: "20px" }}><label htmlFor="q-email">Work email</label><input className="input" id="q-email" placeholder="you@company.ae" /></div>
    <button className="btn btn-primary btn-block" type="button" onClick={submitQuote}>{submitLabel}</button>
    <div style={{ fontSize: "12.5px", color: "var(--color-accent-300)", minHeight: "20px", marginTop: "12px" }}>{quoteNote}</div>
  </aside>
</div>
</>) : null}

</div>
    </>
  );
}
