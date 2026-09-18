import { Fragment } from 'react';
import A from '../components/A';
import { sx } from '../lib/sx';
import { useDepositClaims } from '../hooks/useDepositClaims';
import '../styles/base.css';
import '../styles/deposit-claims.css';

export default function DepositClaims({ refundDays: refundDaysProp = 30, startInPortal = false }) {
  const {
    advance, advanceLabel, amount, amountLabel, amountNote, atClaim, atStatus, atVerify, backToVerify, chipClaim, chipStatus, chipVerify, claimRef, contract, isPortal, isService, onAmount, onContract, portalHeading, refundDays, releaseLabel, reset, sessionRef, showPortal, showService, stages, submitClaim, tabPortalStyle, tabServiceStyle, verify, verifyNote
  } = useDepositClaims({ refundDays: refundDaysProp, startInPortal });

  return (
    <>
<div style={{ background: "var(--color-bg)" }}>

<header style={{ position: "sticky", top: "0", zIndex: "50", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "14px 40px", background: "rgba(9,12,20,.8)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(212,175,55,.16)" }}>
  <A href="/" style={{ display: "flex", alignItems: "baseline", gap: "10px", color: "var(--color-text)" }}>
    <span style={{ fontFamily: "var(--font-heading)", fontSize: "17px", fontWeight: "500", letterSpacing: ".14em", color: "var(--color-accent)" }}>CREDENCE</span>
    <span style={{ fontSize: "10px", letterSpacing: ".24em", color: "var(--color-neutral-400)", textTransform: "uppercase" }}>Deposit claims</span>
  </A>
  <div style={{ display: "flex", alignItems: "center", gap: "8px", border: "1px solid rgba(212,175,55,.28)", borderRadius: "999px", padding: "4px" }}>
    <button type="button" onClick={showService} style={sx(tabServiceStyle)}>Service</button>
    <button type="button" onClick={showPortal} style={sx(tabPortalStyle)}>Client portal</button>
  </div>
  <A className="btn btn-ghost" href="/" style={{ fontSize: "12.5px" }}>← Group site</A>
</header>

{(isService) ? (<>
<div>
  <section style={{ position: "relative" }}>
    <div className="pin">
      <img src="/assets/lounge-night.jpg" alt="Lounge overlooking the Dubai skyline at dusk" style={{ objectPosition: "center 45%" }} />
      <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(9,12,20,.78) 0%,rgba(9,12,20,.4) 40%,rgba(9,12,20,.89) 100%)" }}></div>
      <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(9,12,20,.86) 0%,rgba(9,12,20,.55) 48%,rgba(9,12,20,.15) 100%)" }}></div>
    </div>
    <div className="over" style={{ minHeight: "118vh", display: "flex", alignItems: "flex-end", padding: "0 40px 96px", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "1100px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "26px" }}>
          <span className="hero-rule" style={{ width: "56px", height: "1px", background: "var(--color-accent)", animationDelay: ".1s" }}></span>
          <span className="hero-in" style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)", animationDelay: ".22s" }}>Security deposit claims · Registered clients</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(32px,4vw,56px)", lineHeight: "1.06", letterSpacing: "-.025em", margin: "0 0 26px", textWrap: "balance" }}><span className="hero-in" style={{ display: "block", animationDelay: ".36s" }}>Your deposit,</span><span className="hero-in" style={{ display: "block", color: "var(--color-accent)", animationDelay: ".54s" }}>returned on the record.</span></h1>
        <p className="hero-in" style={{ fontSize: "17px", lineHeight: "1.65", color: "var(--color-neutral-300)", maxWidth: "58ch", margin: "0 0 34px", animationDelay: ".74s" }}>Every security deposit held by Credence Group is logged against your contract number. Registered clients file a refund claim here and follow it through review, approval and release.</p>
        <div className="hero-in" style={{ display: "flex", gap: "12px", flexWrap: "wrap", animationDelay: ".9s" }}>
          <button className="btn btn-primary" type="button" onClick={showPortal}>Claim your deposit</button>
          <A className="btn btn-ghost" href="#how">How it works</A>
        </div>
      </div>
    </div>
  </section>

  <section id="how" style={{ padding: "110px 40px", maxWidth: "1280px", margin: "0 auto" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
      <span style={{ width: "56px", height: "1px", background: "var(--color-accent)" }}></span>
      <span style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)" }}>How it works</span>
    </div>
    <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(30px,3.4vw,48px)", lineHeight: "1.05", letterSpacing: "-.02em", margin: "0 0 64px", maxWidth: "24ch" }}>Three steps from contract number to settlement</h2>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1px", background: "rgba(212,175,55,.18)", borderTop: "1px solid rgba(212,175,55,.18)", borderBottom: "1px solid rgba(212,175,55,.18)" }}>
      <div style={{ background: "var(--color-bg)", padding: "36px 30px 42px" }}>
        <div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "42px", fontWeight: "500", lineHeight: "1", color: "var(--color-accent)", marginBottom: "26px" }}>01</div>
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "20px", margin: "0 0 12px" }}>Verify your contract</h3>
        <p style={{ fontSize: "14.5px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0" }}>Enter the agreement number printed on your accommodation, office or brokerage contract. We match it to the deposit on file.</p>
      </div>
      <div style={{ background: "var(--color-bg)", padding: "36px 30px 42px" }}>
        <div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "42px", fontWeight: "500", lineHeight: "1", color: "var(--color-accent)", marginBottom: "26px" }}>02</div>
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "20px", margin: "0 0 12px" }}>File the claim</h3>
        <p style={{ fontSize: "14.5px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0" }}>Confirm the deposit amount you paid. Anything that differs from our ledger is flagged to the accounts desk rather than rejected.</p>
      </div>
      <div style={{ background: "var(--color-bg)", padding: "36px 30px 42px" }}>
        <div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "42px", fontWeight: "500", lineHeight: "1", color: "var(--color-accent)", marginBottom: "26px" }}>03</div>
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "20px", margin: "0 0 12px" }}>Track to release</h3>
        <p style={{ fontSize: "14.5px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0" }}>Review, approval and release each carry a date and an owner, visible in the portal until the funds leave our account.</p>
      </div>
    </div>
  </section>

  <section style={{ position: "relative" }}>
    <div className="pin">
      <img src="/assets/dubai-night.jpg" alt="Downtown Dubai at night" style={{ objectPosition: "center 45%" }} />
      <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(9,12,20,.87) 0%,rgba(9,12,20,.55) 45%,rgba(9,12,20,.88) 100%)" }}></div>
    </div>
    <div className="over" style={{ minHeight: "130vh", display: "flex", alignItems: "center", padding: "80px 40px", boxSizing: "border-box" }}>
      <div style={{ width: "100%", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)", marginBottom: "24px" }}>What the claim covers</div>
        <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(30px,4vw,58px)", lineHeight: "1.04", letterSpacing: "-.02em", margin: "0 0 22px", maxWidth: "20ch" }}>Deposits across every part of the group</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--color-neutral-300)", maxWidth: "60ch", margin: "0 0 56px" }}>One claim route for staff accommodation, serviced offices and brokerage tenancies — routed to the company that holds the deposit.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "64px" }}>
          <div><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px,4.6vw,62px)", fontWeight: "500", lineHeight: "1", letterSpacing: "-.03em", color: "var(--color-accent)" }}>{refundDays}</div><div style={{ fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-400)", marginTop: "10px" }}>Days to release after clearance</div></div>
          <div><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px,4.6vw,62px)", fontWeight: "500", lineHeight: "1", letterSpacing: "-.03em", color: "var(--color-accent)" }}>4</div><div style={{ fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-400)", marginTop: "10px" }}>Companies covered</div></div>
          <div><div className="num" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px,4.6vw,62px)", fontWeight: "500", lineHeight: "1", letterSpacing: "-.03em", color: "var(--color-accent)" }}>1</div><div style={{ fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-400)", marginTop: "10px" }}>Contract number to hand</div></div>
        </div>
      </div>
    </div>
  </section>

  <section style={{ padding: "110px 40px 130px", maxWidth: "1280px", margin: "0 auto" }}>
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "72px", alignItems: "center" }}>
      <div>
        <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)", marginBottom: "20px" }}>Already registered</div>
        <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(28px,3.2vw,44px)", lineHeight: "1.06", letterSpacing: "-.02em", margin: "0 0 20px" }}>Open the claim portal</h2>
        <p style={{ fontSize: "15.5px", lineHeight: "1.65", color: "var(--color-neutral-400)", margin: "0 0 28px", maxWidth: "52ch" }}>Existing clients need only the agreement number. New enquiries go through the group contact desk.</p>
        <button className="btn btn-primary" type="button" onClick={showPortal}>Enter the portal</button>
      </div>
      <div style={{ border: "1px solid rgba(212,175,55,.28)", borderRadius: "var(--radius-md,8px)", padding: "30px 28px" }}>
        <div style={{ fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "20px" }}>What you'll need</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "22px 1fr", gap: "14px", alignItems: "start" }}><span style={{ color: "var(--color-accent)" }}>—</span><div><div style={{ fontSize: "15px", marginBottom: "4px" }}>Contract / agreement number</div><div style={{ fontSize: "13px", color: "var(--color-neutral-500)" }}>Printed top-right of your signed agreement.</div></div></div>
          <div style={{ display: "grid", gridTemplateColumns: "22px 1fr", gap: "14px", alignItems: "start" }}><span style={{ color: "var(--color-accent)" }}>—</span><div><div style={{ fontSize: "15px", marginBottom: "4px" }}>Deposit amount paid</div><div style={{ fontSize: "13px", color: "var(--color-neutral-500)" }}>In AED, as it appears on your receipt.</div></div></div>
        </div>
      </div>
    </div>
  </section>
</div>
</>) : null}

{(isPortal) ? (<>
<section style={{ position: "relative" }}>
  <div className="pin">
    <img src="/assets/lounge-night.jpg" alt="" style={{ opacity: ".4", objectPosition: "center 45%" }} />
    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(9,12,20,.87) 0%,rgba(9,12,20,.8) 45%,rgba(9,12,20,.9) 100%)" }}></div>
  </div>
  <div className="over" style={{ minHeight: "100vh", padding: "56px 40px 110px", boxSizing: "border-box" }}>
    <div style={{ maxWidth: "1080px", margin: "0 auto" }}>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap", border: "1px solid rgba(212,175,55,.24)", borderRadius: "var(--radius-md,8px)", padding: "16px 20px", background: "rgba(9,12,20,.66)", marginBottom: "44px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-accent)", boxShadow: "0 0 0 4px rgba(212,175,55,.16)" }}></span>
          <span style={{ fontSize: "13.5px", color: "var(--color-neutral-300)" }}>Registered client session · deposit ledger live</span>
        </div>
        <span className="num" style={{ fontSize: "12px", letterSpacing: ".14em", color: "var(--color-neutral-500)" }}>{sessionRef}</span>
      </div>

      <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-accent-300)", marginBottom: "18px" }}>Security deposit claim</div>
      <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "clamp(32px,4vw,54px)", lineHeight: "1.04", letterSpacing: "-.03em", margin: "0 0 44px" }}>{portalHeading}</h1>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "44px" }}>
        <span style={sx(chipVerify)}>1 · Verify contract</span>
        <span style={sx(chipClaim)}>2 · File claim</span>
        <span style={sx(chipStatus)}>3 · Track</span>
      </div>

      {(atVerify) ? (<>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,.9fr)", gap: "56px", alignItems: "start" }}>
        <div style={{ border: "1px solid rgba(212,175,55,.3)", borderRadius: "var(--radius-md,8px)", padding: "30px 28px", background: "rgba(9,12,20,.68)" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "20px", margin: "0 0 8px" }}>Verify your contract</h2>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0 0 24px" }}>Enter the agreement number on your Credence contract. Try CRD-2024-1187.</p>
          <div className="field" style={{ marginBottom: "8px" }}>
            <label htmlFor="p-contract">Contract / agreement number</label>
            <input className="input" id="p-contract" placeholder="CRD-2024-1187" value={contract} onChange={onContract} />
          </div>
          <div style={{ fontSize: "12.5px", color: "var(--color-accent-300)", minHeight: "20px", marginBottom: "18px" }}>{verifyNote}</div>
          <button className="btn btn-primary btn-block" type="button" onClick={verify}>Verify and continue</button>
        </div>
        <div>
          <div style={{ fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "18px" }}>If the number won't match</div>
          <p style={{ fontSize: "14.5px", lineHeight: "1.65", color: "var(--color-neutral-400)", margin: "0 0 18px" }}>Deposits taken before March 2021 sit under the old ledger and are looked up manually by the accounts desk.</p>
          <A className="btn btn-ghost" href="mailto:admin@credence-group.ae">Email the accounts desk</A>
        </div>
      </div>
      </>) : null}

      {(atClaim) ? (<>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,.9fr)", gap: "56px", alignItems: "start" }}>
        <div style={{ border: "1px solid rgba(212,175,55,.3)", borderRadius: "var(--radius-md,8px)", padding: "30px 28px", background: "rgba(9,12,20,.68)" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "500", fontSize: "20px", margin: "0 0 8px" }}>File the claim</h2>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--color-neutral-400)", margin: "0 0 24px" }}>Confirm the deposit amount you paid, in AED.</p>
          <div className="field" style={{ marginBottom: "8px" }}>
            <label htmlFor="p-amount">Deposit amount paid (AED)</label>
            <input className="input" id="p-amount" placeholder="12,000" value={amount} onChange={onAmount} />
          </div>
          <div style={{ fontSize: "12.5px", color: "var(--color-accent-300)", minHeight: "20px", marginBottom: "18px" }}>{amountNote}</div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button className="btn btn-primary" type="button" onClick={submitClaim}>Submit claim</button>
            <button className="btn btn-ghost" type="button" onClick={backToVerify}>Back</button>
          </div>
        </div>
        <div style={{ border: "1px solid rgba(212,175,55,.18)", borderRadius: "var(--radius-md,8px)", padding: "26px 24px" }}>
          <div style={{ fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "20px" }}>Contract on file</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div><div style={{ fontSize: "11px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "5px" }}>Agreement</div><div className="num" style={{ fontSize: "15.5px" }}>{contract}</div></div>
            <div><div style={{ fontSize: "11px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "5px" }}>Holder</div><div style={{ fontSize: "15.5px" }}>Al Jaber Security Company LLC</div></div>
            <div><div style={{ fontSize: "11px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "5px" }}>Service</div><div style={{ fontSize: "15.5px" }}>Staff accommodation · Al Quoz camp 3</div></div>
            <div><div style={{ fontSize: "11px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "5px" }}>Deposit on ledger</div><div className="num" style={{ fontSize: "15.5px", color: "var(--color-accent)" }}>AED 12,000</div></div>
          </div>
        </div>
      </div>
      </>) : null}

      {(atStatus) ? (<>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1px", background: "rgba(212,175,55,.18)", borderTop: "1px solid rgba(212,175,55,.18)", borderBottom: "1px solid rgba(212,175,55,.18)", marginBottom: "56px" }}>
          <div style={{ background: "var(--color-bg)", padding: "24px 22px 28px" }}><div style={{ fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "10px" }}>Claim reference</div><div className="num" style={{ fontSize: "19px" }}>{claimRef}</div></div>
          <div style={{ background: "var(--color-bg)", padding: "24px 22px 28px" }}><div style={{ fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "10px" }}>Amount claimed</div><div className="num" style={{ fontSize: "19px", color: "var(--color-accent)" }}>{amountLabel}</div></div>
          <div style={{ background: "var(--color-bg)", padding: "24px 22px 28px" }}><div style={{ fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "10px" }}>Contract</div><div className="num" style={{ fontSize: "19px" }}>{contract}</div></div>
          <div style={{ background: "var(--color-bg)", padding: "24px 22px 28px" }}><div style={{ fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "10px" }}>Expected release</div><div style={{ fontSize: "19px" }}>{releaseLabel}</div></div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(0,.8fr)", gap: "64px", alignItems: "start" }}>
          <div>
            <div style={{ fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "26px" }}>Claim status</div>
            {(stages || []).map((s, $index) => (<Fragment key={$index}>
              <div style={{ display: "grid", gridTemplateColumns: "26px 1fr", gap: "20px", paddingBottom: "30px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <span style={sx(s.dot)}></span>
                  <span style={sx(s.line)}></span>
                </div>
                <div style={{ paddingTop: "1px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap", marginBottom: "6px" }}>
                    <span style={sx(s.titleStyle)}>{s.label}</span>
                    <span className="num" style={{ fontSize: "11.5px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-neutral-500)" }}>{s.when}</span>
                  </div>
                  <div style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--color-neutral-400)", maxWidth: "52ch" }}>{s.note}</div>
                </div>
              </div>
            </Fragment>))}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", paddingTop: "6px" }}>
              <button className="btn btn-primary" type="button" onClick={advance}>{advanceLabel}</button>
              <button className="btn btn-ghost" type="button" onClick={reset}>New claim</button>
            </div>
          </div>
          <div style={{ border: "1px solid rgba(212,175,55,.18)", borderRadius: "var(--radius-md,8px)", padding: "26px 24px" }}>
            <div style={{ fontSize: "10.5px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "20px" }}>Earlier claims on this contract</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "14px 0", borderTop: "1px solid rgba(212,175,55,.14)" }}><div><div className="num" style={{ fontSize: "14px" }}>CRD-DC-3390</div><div style={{ fontSize: "12px", color: "var(--color-neutral-500)", marginTop: "3px" }}>Released 12 Feb 2026</div></div><span className="num" style={{ fontSize: "14px", color: "var(--color-neutral-300)" }}>AED 8,000</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "14px 0", borderTop: "1px solid rgba(212,175,55,.14)" }}><div><div className="num" style={{ fontSize: "14px" }}>CRD-DC-2854</div><div style={{ fontSize: "12px", color: "var(--color-neutral-500)", marginTop: "3px" }}>Released 30 Aug 2025</div></div><span className="num" style={{ fontSize: "14px", color: "var(--color-neutral-300)" }}>AED 6,500</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "14px 0", borderTop: "1px solid rgba(212,175,55,.14)", borderBottom: "1px solid rgba(212,175,55,.14)" }}><div><div className="num" style={{ fontSize: "14px" }}>CRD-DC-1102</div><div style={{ fontSize: "12px", color: "var(--color-neutral-500)", marginTop: "3px" }}>Partly withheld · 04 Jan 2025</div></div><span className="num" style={{ fontSize: "14px", color: "var(--color-neutral-300)" }}>AED 3,200</span></div>
            </div>
            <p style={{ fontSize: "12.5px", lineHeight: "1.6", color: "var(--color-neutral-500)", margin: "20px 0 0" }}>Withheld amounts always carry a written reason from the facilities desk.</p>
          </div>
        </div>
      </div>
      </>) : null}

    </div>
  </div>
</section>
</>) : null}

</div>
    </>
  );
}
