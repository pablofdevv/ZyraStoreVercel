import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SafeExternalLink } from '@/components/common/SafeExternalLink';
import { DiscordIcon } from '@/components/ui/icons/discord-icon';

export interface FlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'emerald' | 'discord';
  icon?: React.ReactNode;
}

export function FlowButton({
  text = "Flow Button",
  href,
  target,
  rel,
  variant = 'primary',
  children,
  className,
  disabled,
  icon,
  ...props
}: FlowButtonProps) {
  const content = children || text;
  const isPrimary = variant === 'primary' || variant === 'emerald';
  const isDiscord = variant === 'discord';

  const baseStyles = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-xs sm:text-sm font-extrabold cursor-pointer select-none transition-all duration-300 ease-out active:scale-[0.96]",
    "min-h-[40px] min-w-[40px]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2",
    disabled && "opacity-50 pointer-events-none cursor-not-allowed",
    isDiscord
      ? "bg-[#5865F2] hover:bg-[#4752C4] text-white border border-[#5865F2] shadow-md hover:shadow-[0_12px_28px_-6px_rgba(88,101,242,0.55)] hover:-translate-y-0.5 hover:scale-[1.03]"
      : isPrimary
      ? "bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] border border-transparent hover:opacity-95 shadow-md hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:scale-[1.03]"
      : "bg-[var(--color-btn-secondary-bg)] text-[var(--color-btn-secondary-text)] border border-[var(--color-btn-secondary-border)] hover:bg-[var(--color-surface-hover)] shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02]",
    className
  );

  const renderIcon = icon || (isDiscord ? <DiscordIcon size={18} color="#FFFFFF" className="shrink-0 transition-transform duration-300 group-hover:scale-115 group-hover:rotate-[-6deg]" /> : null);

  const innerContent = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {renderIcon}
      <span className="transition-transform duration-300 group-hover:tracking-wide">{content}</span>
      {!isDiscord && (
        <ArrowRight 
          aria-hidden="true"
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:scale-110 flex-shrink-0"
        />
      )}
    </span>
  );

  // Animated Shimmer Light Beam Effect on Hover
  const shimmerEffect = (
    <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
  );

  if (href) {
    if (target === '_blank') {
      return (
        <SafeExternalLink href={href} target={target} rel={rel} className={baseStyles}>
          {shimmerEffect}
          {innerContent}
        </SafeExternalLink>
      );
    }
    return (
      <a href={href} target={target} rel={rel} className={baseStyles}>
        {shimmerEffect}
        {innerContent}
      </a>
    );
  }

  return (
    <button className={baseStyles} disabled={disabled} {...props}>
      {shimmerEffect}
      {innerContent}
    </button>
  );
}
