import type { CSSProperties } from 'react';

const cache = new Map<string, CSSProperties>();

/**
 * Parses a CSS declaration string into a React style object.
 * The pages were authored with CSS strings for the values that are computed at
 * runtime (selected states, occupancy bars, step pills); static styles are plain
 * objects in the JSX. Safe to delete once those are refactored to objects.
 */
export function sx(css?: string | null): CSSProperties {
  if (!css) return {};
  const hit = cache.get(css);
  if (hit) return hit;

  const out: Record<string, string> = {};
  let depth = 0;
  let cur = '';
  const flush = () => {
    const i = cur.indexOf(':');
    if (i > 0) {
      const k = cur.slice(0, i).trim();
      const v = cur.slice(i + 1).trim();
      if (k) out[k.startsWith('--') ? k : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = v;
    }
    cur = '';
  };
  for (const ch of css) {
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    if (ch === ';' && depth === 0) flush();
    else cur += ch;
  }
  flush();

  const style = out as CSSProperties;
  cache.set(css, style);
  return style;
}
