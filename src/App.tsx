import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import DepositClaims from './pages/DepositClaims';

// Subtle reveal-on-scroll for headings, cards and quotes. Purely additive:
// elements get .rv from JS, so nothing is hidden if this never runs.
const REVEAL = 'section h2, section .over p, #operate article, #companies a, #who h3, #facilities h3, #testimonials blockquote, #locations iframe';
function useReveal(pathname: string) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    const t = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(REVEAL).forEach((el) => {
        if (el.closest('#top') || el.classList.contains('rv')) return;
        const sibs = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.matches(REVEAL)) : [];
        el.style.setProperty('--rv-delay', Math.min(sibs.indexOf(el), 4) * 0.08 + 's');
        el.classList.add('rv');
        io.observe(el);
      });
    }, 60);
    return () => { window.clearTimeout(t); io.disconnect(); };
  }, [pathname]);
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useReveal(pathname);
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/deposit-claims" element={<DepositClaims />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
