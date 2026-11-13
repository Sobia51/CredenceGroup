import { useState, type FormEvent } from 'react';
import A from '../components/A';
import '../styles/base.css';
import '../styles/home.css';

const ENDPOINT = '/deposit-claim.php';
const INBOX = 'info@credence-group.ae';

const line = 'rgba(209,168,90,.22)';
const label = { fontSize: '10.5px', letterSpacing: '.2em', textTransform: 'uppercase' as const, color: 'var(--color-neutral-400)' };

function makeRef() {
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  return `DC-${ymd}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}
const fmtAED = (n: number) => 'AED ' + n.toLocaleString('en-AE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function DepositClaims() {
  const [contract, setContract] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState<{ contract?: string; amount?: string }>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [note, setNote] = useState('');
  const [receipt, setReceipt] = useState<{ ref: string; contract: string; amount: string; at: string } | null>(null);

  const amountNum = Number(amount.replace(/,/g, ''));

  function validate() {
    const e: typeof errors = {};
    const c = contract.trim();
    if (!c) e.contract = 'Enter your contract number.';
    else if (!/^[A-Za-z0-9][A-Za-z0-9\-\/ ]{2,39}$/.test(c)) e.contract = 'Use 3–40 letters, numbers, dashes or slashes.';
    if (!amount.trim()) e.amount = 'Enter the deposit amount.';
    else if (!isFinite(amountNum) || amountNum <= 0) e.amount = 'Enter an amount greater than zero.';
    else if (amountNum > 10000000) e.amount = 'Amount looks too large — please check it.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (status === 'sending' || !validate()) return;
    const ref = makeRef();
    const c = contract.trim();
    const a = amountNum.toFixed(2);
    const data = new FormData(ev.currentTarget);
    data.set('contract', c); data.set('amount', a); data.set('reference', ref);
    setStatus('sending'); setNote('');
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || 'Send failed');
      setReceipt({ ref: json.reference || ref, contract: c, amount: fmtAED(amountNum), at: new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' }) });
      setStatus('sent');
    } catch {
      const body = `Deposit claim\n\nReference: ${ref}\nContract number: ${c}\nClaim amount: ${fmtAED(amountNum)}`;
      window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(`Deposit claim ${ref} — Contract ${c}`)}&body=${encodeURIComponent(body)}`;
      setStatus('error');
      setNote(`We couldn't send that automatically, so your email app has been opened with the details filled in. You can also write to ${INBOX}.`);
    }
  }

  function reset() {
    setContract(''); setAmount(''); setErrors({}); setStatus('idle'); setNote(''); setReceipt(null);
  }

  const inputStyle = (bad?: string) => ({
    height: '54px', fontSize: '17px', padding: '0 16px', background: 'rgba(6,10,22,.6)',
    borderColor: bad ? '#e08a7f' : 'rgba(209,168,90,.3)', boxShadow: bad ? '0 0 0 3px rgba(224,138,127,.14)' : undefined,
  });

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header className="site-hd" style={{ position: 'sticky', top: '0', zIndex: '50', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', padding: '14px 40px', background: 'rgba(6,10,22,.8)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(209,168,90,.16)' }}>
        <A href="/" style={{ display: 'flex', alignItems: 'baseline', gap: '10px', color: 'var(--color-text)' }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', fontWeight: '500', letterSpacing: '.14em', color: 'var(--color-accent)' }}>CREDENCE</span>
          <span style={{ fontSize: '10px', letterSpacing: '.24em', color: 'var(--color-neutral-400)', textTransform: 'uppercase' }}>Deposit claims</span>
        </A>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <A className="btn btn-ghost" href="/" style={{ fontSize: '12.5px' }}>Back to site</A>
          <A className="btn btn-primary" href={`mailto:${INBOX}`} style={{ fontSize: '12.5px' }}>Email us</A>
        </div>
      </header>

      <main style={{ position: 'relative', flex: '1', overflow: 'hidden', padding: '96px 40px 110px' }}>
        <div aria-hidden="true" style={{ position: 'absolute', right: '-10%', top: '-20%', width: '70vw', height: '70vw', maxWidth: '900px', maxHeight: '900px', borderRadius: '50%', background: 'radial-gradient(closest-side, rgba(209,168,90,.16), rgba(209,168,90,0))', pointerEvents: 'none' }}></div>
        <div aria-hidden="true" style={{ position: 'absolute', left: '0', right: '0', top: '0', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(209,168,90,.4),transparent)' }}></div>

        <div className="rg-2" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <span className="hero-rule" style={{ width: '56px', height: '1px', background: 'var(--color-accent)' }}></span>
              <span className="hero-in" style={{ fontSize: '11px', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-300)', animationDelay: '.1s' }}>Security deposit refund</span>
            </div>
            <h1 className="hero-in" style={{ fontFamily: 'var(--font-heading)', fontWeight: '500', fontSize: 'clamp(34px,4.4vw,60px)', lineHeight: '1.04', letterSpacing: '-.025em', margin: '0 0 22px', textWrap: 'balance', animationDelay: '.2s' }}>Claim your deposit <span style={{ color: 'var(--color-accent)' }}>in under a minute.</span></h1>
            <p className="hero-in" style={{ fontSize: '16.5px', lineHeight: '1.65', color: 'var(--color-neutral-300)', maxWidth: '50ch', margin: '0 0 44px', animationDelay: '.3s' }}>Enter the contract number from your tenancy or accommodation agreement and the deposit amount. Our accounts team reviews every claim and contacts you to arrange the refund.</p>
            <ol className="hero-in" style={{ listStyle: 'none', margin: '0', padding: '0', display: 'grid', gap: '1px', background: line, borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}`, maxWidth: '460px', animationDelay: '.4s' }}>
              {[['01', 'Submit contract number and amount'], ['02', 'Accounts team verifies against your contract'], ['03', 'We contact you to settle the refund']].map(([n, t]) => (
                <li key={n} style={{ background: 'var(--color-bg)', display: 'flex', gap: '18px', alignItems: 'baseline', padding: '16px 2px' }}>
                  <span className="num" style={{ fontSize: '11px', letterSpacing: '.2em', color: 'var(--color-accent)' }}>{n}</span>
                  <span style={{ fontSize: '14.5px', color: 'var(--color-neutral-200)' }}>{t}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="hero-in" style={{ position: 'relative', animationDelay: '.35s' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '-1px', borderRadius: '14px', background: 'linear-gradient(140deg,rgba(209,168,90,.75),rgba(209,168,90,.08) 40%,rgba(209,168,90,.08) 60%,rgba(209,168,90,.5))', pointerEvents: 'none' }}></div>
            <div style={{ position: 'relative', margin: '1px', borderRadius: '13px', background: 'linear-gradient(180deg,#0d1428,#080d1c)', padding: '40px 38px 36px', boxShadow: '0 40px 90px rgba(0,0,0,.5), 0 0 60px rgba(209,168,90,.08)' }}>
              {status === 'sent' && receipt ? (
                <div role="status" aria-live="polite">
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', border: '1px solid var(--color-accent)', display: 'grid', placeItems: 'center', marginBottom: '24px', boxShadow: '0 0 0 6px rgba(209,168,90,.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 256 256" fill="var(--color-accent)" aria-hidden="true"><path d="M229.66 77.66l-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" /></svg>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: '500', fontSize: '28px', letterSpacing: '-.02em', margin: '0 0 10px' }}>Claim received</h2>
                  <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: 'var(--color-neutral-300)', margin: '0 0 28px' }}>Your claim has been sent to our accounts team. Keep the reference below for any follow-up.</p>
                  <dl style={{ margin: '0 0 28px', display: 'grid', gap: '1px', background: line, border: `1px solid ${line}`, borderRadius: '8px', overflow: 'hidden' }}>
                    {[['Reference', receipt.ref], ['Contract number', receipt.contract], ['Claim amount', receipt.amount], ['Submitted', receipt.at]].map(([k, v]) => (
                      <div key={k} style={{ background: '#0a1022', display: 'flex', justifyContent: 'space-between', gap: '16px', padding: '14px 18px' }}>
                        <dt style={label}>{k}</dt>
                        <dd className="num" style={{ margin: '0', fontSize: '14.5px', color: k === 'Reference' ? 'var(--color-accent)' : 'var(--color-text)', textAlign: 'right' }}>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button className="btn btn-primary" type="button" onClick={reset}>Submit another claim</button>
                    <A className="btn btn-ghost" href="/">Back to site</A>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '30px' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: '500', fontSize: '24px', letterSpacing: '-.02em', margin: '0' }}>Deposit claim</h2>
                    <span style={{ ...label, color: 'var(--color-accent-300)' }}>2 fields</span>
                  </div>
                  <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: '0' }} />

                  <div className="field" style={{ marginBottom: '22px' }}>
                    <label htmlFor="dc-contract">Contract number</label>
                    <input className="input" id="dc-contract" name="contract" autoComplete="off" placeholder="e.g. CPM-2024-01875" value={contract} maxLength={40}
                      onChange={(e) => { setContract(e.target.value); if (errors.contract) setErrors((x) => ({ ...x, contract: undefined })); }}
                      aria-invalid={!!errors.contract} aria-describedby="dc-contract-err" style={inputStyle(errors.contract)} />
                    <div id="dc-contract-err" style={{ fontSize: '12.5px', color: '#f0a39a', minHeight: '18px', marginTop: '6px' }}>{errors.contract}</div>
                  </div>

                  <div className="field" style={{ marginBottom: '26px' }}>
                    <label htmlFor="dc-amount">Deposit amount</label>
                    <div style={{ position: 'relative' }}>
                      <span className="num" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '13px', letterSpacing: '.14em', color: 'var(--color-accent)', pointerEvents: 'none' }}>AED</span>
                      <input className="input num" id="dc-amount" name="amount" inputMode="decimal" autoComplete="off" placeholder="0.00" value={amount}
                        onChange={(e) => { setAmount(e.target.value.replace(/[^\d.,]/g, '')); if (errors.amount) setErrors((x) => ({ ...x, amount: undefined })); }}
                        aria-invalid={!!errors.amount} aria-describedby="dc-amount-err" style={{ ...inputStyle(errors.amount), paddingLeft: '62px', width: '100%', boxSizing: 'border-box' }} />
                    </div>
                    <div id="dc-amount-err" style={{ fontSize: '12.5px', color: '#f0a39a', minHeight: '18px', marginTop: '6px' }}>{errors.amount}</div>
                  </div>

                  <button className="btn btn-primary btn-block" type="submit" disabled={status === 'sending'} style={{ height: '54px', fontSize: '14px', letterSpacing: '.08em', textTransform: 'uppercase' }}>
                    {status === 'sending' ? 'Sending…' : 'Send claim'}
                  </button>
                  <div role="status" style={{ fontSize: '12.5px', lineHeight: '1.5', color: '#f0a39a', minHeight: '18px', marginTop: '12px' }}>{note}</div>
                  <p style={{ fontSize: '12px', lineHeight: '1.55', color: 'var(--color-neutral-500)', margin: '10px 0 0', borderTop: '1px solid rgba(209,168,90,.14)', paddingTop: '16px' }}>Sent securely to {INBOX}. Refunds are processed after the unit handover inspection.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
