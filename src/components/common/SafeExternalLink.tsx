import React from 'react';
import { isValidUrl } from '@/lib/security';

export interface SafeExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * SafeExternalLink ensures external links opening in a new tab (_blank)
 * automatically enforce rel="noopener noreferrer" to prevent reverse tabnabbing,
 * and validates the URL protocol against javascript: or dangerous URI schemes.
 */
export const SafeExternalLink: React.FC<SafeExternalLinkProps> = ({
  href,
  children,
  className,
  target = '_blank',
  rel = 'noopener noreferrer',
  onClick,
  ...props
}) => {
  const isSafe = isValidUrl(href);
  const safeHref = isSafe ? href : '#';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isSafe) {
      e.preventDefault();
      console.warn(`[Security Guard] Blocked potentially unsafe URL: ${href}`);
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={safeHref}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : rel}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};
