import { Link } from 'react-router-dom';
import type { AnchorHTMLAttributes } from 'react';

/**
 * Anchor that routes internally. Absolute app paths ("/accommodation") go
 * through react-router; hashes, mailto:, tel: and external URLs stay native.
 */
export default function A({ href = '', children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const internal = href.startsWith('/') && !href.startsWith('//');
  if (internal) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
