import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export const SITES = [
  { id: 'son', name: 'Sonapur Camp 1', area: 'Sonapur / Muhaisnah', type: 'Labour camp', capacity: 3200, beds: 180, rooms: 420, x: '74%', y: '22%', photo: 'https://royal-uae-portals.lovable.app/assets/prop-1-BvTtaELf.jpg', configs: ['6-bed', '8-bed'] },
  { id: 'son2', name: 'Muhaisnah Block C', area: 'Sonapur / Muhaisnah', type: 'Staff accommodation', capacity: 1600, beds: 0, rooms: 260, x: '82%', y: '34%', photo: 'https://royal-uae-portals.lovable.app/assets/prop-3-eX8QR1wO.jpg', configs: ['4-bed', '6-bed'] },
  { id: 'jaf', name: 'Jebel Ali Camp 3', area: 'Jebel Ali Industrial Area', type: 'Labour camp', capacity: 4800, beds: 640, rooms: 610, x: '13%', y: '71%', photo: 'https://royal-uae-portals.lovable.app/assets/prop-2-D57UhuvN.jpg', configs: ['6-bed', '8-bed', 'Supervisor suite'] },
  { id: 'dip', name: 'DIP Residences', area: 'Dubai Investments Park', type: 'Staff accommodation', capacity: 2400, beds: 310, rooms: 390, x: '28%', y: '62%', photo: '/assets/lounge-night.jpg', configs: ['4-bed', '6-bed', 'Supervisor suite'] },
  { id: 'quo', name: 'Al Quoz Block 4', area: 'Al Quoz', type: 'Supervisor block', capacity: 520, beds: 64, rooms: 130, x: '47%', y: '46%', photo: 'https://royal-uae-portals.lovable.app/assets/prop-3-eX8QR1wO.jpg', configs: ['4-bed', 'Supervisor suite'] },
  { id: 'qus', name: 'Al Qusais Camp 2', area: 'Al Qusais', type: 'Labour camp', capacity: 1900, beds: 0, rooms: 300, x: '66%', y: '14%', photo: 'https://royal-uae-portals.lovable.app/assets/prop-1-BvTtaELf.jpg', configs: ['6-bed', '8-bed'] },
  { id: 'rak', name: 'Ras Al Khor Lodge', area: 'Ras Al Khor', type: 'Staff accommodation', capacity: 900, beds: 120, rooms: 180, x: '55%', y: '66%', photo: 'https://royal-uae-portals.lovable.app/assets/prop-2-D57UhuvN.jpg', configs: ['4-bed', '6-bed'] }
];

const SECTORS = [
  { id: 'acc', label: 'Workforce accommodation', note: '25 camp sites across Dubai — MOHRE-standard rooms, catering, transport and 24/7 site management under Credence Property Management L.L.C.' },
  { id: 'mnt', label: 'Building maintenance', note: 'HVAC, civil defence compliance and DEWA handled in-house by Credence Building Maintenance L.L.C across every site we operate.' },
  { id: 'cln', label: 'Building cleaning', note: 'Daily and specialised cleaning schedules from Credence Building Cleaning Services L.L.C — deep cleans, floor care and hygiene control in high-traffic blocks.' },
  { id: 'brk', label: 'Commercial brokerage', note: 'Credence Real Estate Brokers covers commercial property across Downtown, Business Bay, Dubai Marina, Palm Jumeirah and JBR.' },
  { id: 'bcn', label: 'Business centre', note: 'Credence Business Center L.L.C provides ready-to-use serviced offices, short or long term, in Al Karama.' }
];

const EXTRAS = ['Catering', 'Transportation', 'Laundry', 'Cleaning'];
const RATE: Record<string, number> = {
  'Long-term (12 months+)': 420,
  'Project-based (3–11 months)': 480,
  'Short-term (under 3 months)': 560
};
const MIN_CAP: Record<string, number> = {
  'Any capacity': 0, '50+ workers': 50, '500+ workers': 500, '1,500+ workers': 1500, '3,000+ workers': 3000
};

const fmt = (n: number | string) => Number(n).toLocaleString('en-US');

const pill = (active: boolean) =>
  'padding:9px 16px;border-radius:999px;cursor:pointer;font-family:var(--font-body);font-size:12.5px;letter-spacing:.04em;transition:all .15s;' +
  (active
    ? 'background:var(--color-accent);color:#0b0e17;border:1px solid var(--color-accent)'
    : 'background:transparent;color:var(--color-neutral-300);border:1px solid rgba(212,175,55,.3)');

const tab = (active: boolean) =>
  'padding:7px 16px;border-radius:999px;border:0;cursor:pointer;font-family:var(--font-body);font-size:12.5px;letter-spacing:.04em;' +
  (active ? 'background:var(--color-accent);color:#0b0e17' : 'background:transparent;color:var(--color-neutral-300)');

type Filters = { area: string; cap: string; type: string; room: string };

function matches(f: Filters) {
  const min = MIN_CAP[f.cap] || 0;
  return SITES.filter(
    (x) =>
      (f.area === 'All areas' || x.area === f.area) &&
      (f.type === 'All types' || x.type === f.type) &&
      (f.room === 'Any configuration' || x.configs.indexOf(f.room) > -1) &&
      x.capacity >= min
  );
}

const DEFAULT_FILTERS: Filters = { area: 'All areas', cap: 'Any capacity', type: 'All types', room: 'Any configuration' };

export function useAccommodation({ defaultView = 'map', showSectorSwitcher = true } = {}) {
  const [sector, setSector] = useState('acc');
  const [view, setView] = useState(defaultView);
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [selectedId, setSelectedId] = useState('jaf');
  const [, setHover] = useState<string | null>(null);

  const [quoteOpen, setQuoteOpen] = useState(false);
  const [workers, setWorkers] = useState<number | string>(500);
  const [qLocation, setQLocation] = useState('No preference — best availability');
  const [term, setTerm] = useState('Long-term (12 months+)');
  const [extraList, setExtraList] = useState<string[]>(['Catering']);
  const [quoteNote, setQuoteNote] = useState('');
  const [sent, setSent] = useState(false);

  const list = useMemo(() => matches(filters), [filters]);

  // The map lives in /public/dubai-map.html and talks over postMessage.
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const d = (e.data || {}) as { source?: string; type?: string; id?: string };
      if (d.source !== 'credence-map') return;
      if (d.type === 'select' && d.id) setSelectedId(d.id);
      if (d.type === 'hover') setHover(d.id ?? null);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const lastKey = useRef('');
  useEffect(() => {
    const frame = document.querySelector<HTMLIFrameElement>('iframe[src="/dubai-map.html"]');
    if (!frame || !frame.contentWindow) return;
    const ids = list.map((x) => x.id);
    const key = selectedId + '|' + ids.join(',');
    if (key === lastKey.current) return;
    lastKey.current = key;
    const send = () => {
      frame.contentWindow?.postMessage({ source: 'credence-host', type: 'filter', ids }, '*');
      frame.contentWindow?.postMessage({ source: 'credence-host', type: 'select', id: selectedId }, '*');
    };
    send();
    const t = setTimeout(send, 700);
    return () => clearTimeout(t);
  }, [list, selectedId, view]);

  const decorate = useCallback(
    (x: (typeof SITES)[number]) => ({
      ...x,
      photoStyle: 'position:absolute;inset:0;background-image:url(' + x.photo + ');background-size:cover;background-position:center;opacity:.75',
      heroStyle: 'position:absolute;inset:0;background-image:url(' + x.photo + ');background-size:cover;background-position:center;opacity:.85',
      capacityLabel: fmt(x.capacity),
      bedsLabel: x.beds > 0 ? fmt(x.beds) + ' beds free' : 'At capacity',
      roomsLabel: fmt(x.rooms) + ' rooms',
      onClick: () => {
        setSelectedId(x.id);
        setHover(null);
      },
      onHover: () => setHover(x.id)
    }),
    []
  );

  const sel = SITES.find((x) => x.id === selectedId) || SITES[0];

  const rooms = [
    { name: '4-bed', area: '32 m²', bedCount: 4, count: 96, note: 'Bunk pairs with individual lockers and a private washroom.' },
    { name: '6-bed', area: '42 m²', bedCount: 6, count: 184, note: 'Standard configuration — shared washroom block on each floor.' },
    { name: '8-bed', area: '54 m²', bedCount: 8, count: 212, note: 'High-density option for project mobilisation peaks.' },
    { name: 'Supervisor suite', area: '26 m²', bedCount: 2, count: 38, note: 'Twin room with desk, en-suite and separate entry.' }
  ].map((r) => ({
    ...r,
    style: 'border:1px solid rgba(212,175,55,.22);border-radius:var(--radius-md,8px);padding:22px 20px 24px;background:rgba(9,12,20,.5)',
    beds: Array.from({ length: r.bedCount }, () => ({ style: 'width:16px;height:11px;border-radius:2px;background:rgba(212,175,55,.55)' }))
  }));

  const workerCount = Number(workers) || 500;
  const perRoom = workerCount > 2000 ? 8 : workerCount > 600 ? 6 : 4;
  const roomsNeeded = Math.ceil(workerCount / perRoom);
  const extrasCost = extraList.length * 55;
  const monthly = workerCount * (RATE[term] + extrasCost);
  const sitesMatching = SITES.filter(
    (x) => (qLocation.indexOf('No preference') === 0 || x.area === qLocation) && x.capacity >= workerCount * 0.5
  ).length;

  return {
    showSectorSwitcher,
    sectors: SECTORS.map((x) => ({
      label: x.label,
      style: pill(x.id === sector),
      onClick: () => setSector(x.id)
    })),
    sectorNote: (SECTORS.find((x) => x.id === sector) || SECTORS[0]).note,

    isMap: view === 'map',
    isGrid: view === 'grid',
    showMap: () => setView('map'),
    showGrid: () => setView('grid'),
    tabMap: tab(view === 'map'),
    tabGrid: tab(view === 'grid'),

    area: filters.area,
    cap: filters.cap,
    type: filters.type,
    room: filters.room,
    onArea: (e: React.ChangeEvent<HTMLSelectElement>) => setFilters((f) => ({ ...f, area: e.target.value })),
    onCap: (e: React.ChangeEvent<HTMLSelectElement>) => setFilters((f) => ({ ...f, cap: e.target.value })),
    onType: (e: React.ChangeEvent<HTMLSelectElement>) => setFilters((f) => ({ ...f, type: e.target.value })),
    onRoom: (e: React.ChangeEvent<HTMLSelectElement>) => setFilters((f) => ({ ...f, room: e.target.value })),
    clearFilters: () => setFilters(DEFAULT_FILTERS),
    resultCount: list.length,

    clusters: list.map((x) => ({
      ...decorate(x),
      style:
        'text-align:left;width:100%;background:' +
        (x.id === selectedId ? 'rgba(212,175,55,.1)' : 'transparent') +
        ';border:0;border-top:1px solid rgba(212,175,55,.14);padding:16px 4px;cursor:pointer;color:var(--color-text);font-family:var(--font-body)'
    })),
    selected: decorate(sel),
    rooms,

    quoteOpen,
    openQuote: () => {
      setQuoteOpen(true);
      setQuoteNote('');
      setSent(false);
    },
    closeQuote: () => setQuoteOpen(false),
    workers,
    workersLabel: fmt(workerCount) + (workerCount >= 5000 ? '+' : '') + ' workers',
    onWorkers: (e: React.ChangeEvent<HTMLInputElement>) => setWorkers(e.target.value),
    qLocation,
    onQLocation: (e: React.ChangeEvent<HTMLSelectElement>) => setQLocation(e.target.value),
    term,
    onTerm: (e: React.ChangeEvent<HTMLSelectElement>) => setTerm(e.target.value),
    extras: EXTRAS.map((l) => ({
      label: l,
      style: pill(extraList.indexOf(l) > -1),
      onClick: () => setExtraList((prev) => (prev.indexOf(l) > -1 ? prev.filter((v) => v !== l) : prev.concat([l])))
    })),
    roomsNeeded: fmt(roomsNeeded) + ' rooms',
    suggestedConfig: perRoom + '-bed',
    sitesMatching: sitesMatching + ' of ' + SITES.length,
    extrasLabel: extraList.length ? extraList.join(', ') : 'Accommodation only',
    monthly: 'AED ' + fmt(monthly),
    submitLabel: sent ? 'Request received' : 'Send to an account manager',
    quoteNote,
    // TODO: POST to the enquiries endpoint once the API exists.
    submitQuote: () => {
      setSent(true);
      setQuoteNote('Received. An account manager will confirm pricing within 24 hours on +971 4 575 6773.');
    }
  };
}
