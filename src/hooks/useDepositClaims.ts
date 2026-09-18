import { useState } from 'react';

const CLAIM_REF = 'CRD-DC-4821';

const tab = (active: boolean) =>
  'padding:7px 16px;border-radius:999px;border:0;cursor:pointer;font-family:var(--font-body);font-size:12.5px;letter-spacing:.04em;' +
  (active ? 'background:var(--color-accent);color:#0b0e17' : 'background:transparent;color:var(--color-neutral-300)');

const chip = (state: 'done' | 'current' | 'todo') => {
  const base = 'font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;padding:7px 13px;border-radius:999px;border:1px solid ';
  if (state === 'done') return base + 'rgba(212,175,55,.45);color:var(--color-accent-300);background:rgba(212,175,55,.1)';
  if (state === 'current') return base + 'var(--color-accent);color:#0b0e17;background:var(--color-accent)';
  return base + 'rgba(212,175,55,.2);color:var(--color-neutral-500)';
};

type Step = 'verify' | 'claim' | 'status';

export function useDepositClaims({ refundDays = 30, startInPortal = false } = {}) {
  const [view, setView] = useState<'service' | 'portal'>(startInPortal ? 'portal' : 'service');
  const [step, setStep] = useState<Step>('verify');
  const [contract, setContract] = useState('');
  const [amount, setAmount] = useState('');
  const [stage, setStage] = useState(1);
  const [note, setNote] = useState('');
  const [amountNote, setAmountNote] = useState('');

  const chipState = (i: number) => {
    const order: Record<Step, number> = { verify: 1, claim: 2, status: 3 };
    const cur = order[step];
    return i < cur ? 'done' : i === cur ? 'current' : 'todo';
  };

  const amountLabel = () => {
    const a = (amount || '').replace(/[^0-9.]/g, '');
    return a ? 'AED ' + Number(a).toLocaleString('en-US') : 'AED 12,000';
  };

  const stageDefs = [
    { label: 'Claim submitted', when: '13 Aug 2026', note: 'Filed through the client portal against contract ' + (contract || 'CRD-2024-1187') + '.' },
    { label: 'Under review', when: '14 Aug 2026', note: 'Accounts desk matches the amount to the deposit ledger; facilities confirm the site is cleared.' },
    { label: 'Approved', when: 'Est. 18 Aug 2026', note: 'Approval is signed off by the company holding the deposit.' },
    { label: 'Refund released', when: 'Est. ' + refundDays + ' days from clearance', note: 'Funds leave the Credence account to the registered payee. The reference stays open until settlement is confirmed.' }
  ];

  const stages = stageDefs.map((s, i) => {
    const n = i + 1;
    const done = n < stage;
    const current = n === stage;
    const color = done ? 'var(--color-accent-600)' : current ? 'var(--color-accent)' : 'rgba(212,175,55,.28)';
    return {
      label: s.label,
      when: s.when,
      note: s.note,
      dot:
        'width:' + (current ? '14px' : '10px') + ';height:' + (current ? '14px' : '10px') +
        ';border-radius:50%;background:' + color +
        (current ? ';box-shadow:0 0 0 5px rgba(212,175,55,.18)' : '') +
        ';margin-top:' + (current ? '3px' : '5px'),
      line:
        'flex:1;width:1px;min-height:' + (i === stageDefs.length - 1 ? '0' : '34px') +
        ';background:' + (done ? 'var(--color-accent-600)' : 'rgba(212,175,55,.22)'),
      titleStyle:
        'font-family:var(--font-heading);font-size:18px;font-weight:500;color:' +
        (n <= stage ? 'var(--color-text)' : 'var(--color-neutral-500)')
    };
  });

  const headings: Record<Step, string> = {
    verify: 'Confirm the contract we hold your deposit against',
    claim: 'Tell us what you paid',
    status: 'Claim ' + CLAIM_REF + ' is in progress'
  };

  return {
    isService: view === 'service',
    isPortal: view === 'portal',
    showService: () => setView('service'),
    showPortal: () => setView('portal'),
    tabServiceStyle: tab(view === 'service'),
    tabPortalStyle: tab(view === 'portal'),
    refundDays,
    sessionRef: 'SESSION 8841 · AL JABER SECURITY',

    atVerify: step === 'verify',
    atClaim: step === 'claim',
    atStatus: step === 'status',
    chipVerify: chip(chipState(1)),
    chipClaim: chip(chipState(2)),
    chipStatus: chip(chipState(3)),
    portalHeading: headings[step],

    contract,
    amount,
    verifyNote: note,
    amountNote,
    onContract: (e: React.ChangeEvent<HTMLInputElement>) => {
      setContract(e.target.value);
      setNote('');
    },
    onAmount: (e: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(e.target.value);
      setAmountNote('');
    },
    // TODO: replace with a call to the deposit-ledger API.
    verify: () => {
      const v = (contract || '').trim();
      if (v.length < 6) {
        setNote('Enter the full agreement number, e.g. CRD-2024-1187.');
        return;
      }
      setStep('claim');
      setNote('');
    },
    backToVerify: () => setStep('verify'),
    submitClaim: () => {
      const a = (amount || '').replace(/[^0-9.]/g, '');
      if (!a) {
        setAmountNote('Enter the deposit amount as it appears on your receipt.');
        return;
      }
      setStep('status');
      setStage(2);
      setAmountNote('');
    },

    stages,
    claimRef: CLAIM_REF,
    amountLabel: amountLabel(),
    releaseLabel: refundDays + ' days from clearance',
    advance: () => setStage((s) => Math.min(4, s + 1)),
    advanceLabel: stage >= 4 ? 'Settlement confirmed' : 'Advance status (demo)',
    reset: () => {
      setStep('verify');
      setContract('');
      setAmount('');
      setStage(1);
      setNote('');
      setAmountNote('');
    }
  };
}
