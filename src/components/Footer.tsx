import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import { SafeExternalLink } from './common/SafeExternalLink';
import type { LegalPageKey } from './common/LegalModal';

interface FooterProps {
  onOpenLegal: (pageKey: LegalPageKey) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="w-full pt-12 pb-10 border-t border-[var(--color-border-soft)] bg-[var(--color-bg)] text-[var(--color-text)] flex justify-center">
      <div className="container max-w-6xl px-4 flex flex-col gap-8">
        {/* Top Footer Row: Logo & Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/assets/zyra_logo.png"
                alt="Logo Zyra Store"
                width="28"
                height="28"
                className="w-7 h-7 object-contain"
              />
              <span className="font-heading font-black text-base text-[var(--color-text)] uppercase tracking-tight">
                ZYRA STORE
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-muted)] max-w-sm leading-relaxed font-normal m-0">
              Desarrollo de scripts y sistemas NUI para FiveM. Licencias oficiales distribuidas a través de Tebex Store y la red de CFX Keymaster.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <h4 className="font-heading font-extrabold text-xs text-[var(--color-text)] uppercase tracking-wider mb-1">
              Enlaces Directos
            </h4>
            <a href="#products" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors w-fit">
              Catálogo de recursos
            </a>
            <a href="#showcase" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors w-fit">
              Demos en directo
            </a>
            <a href="#compatibility" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors w-fit">
              Frameworks compatibles
            </a>
            <a href="#faq" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors w-fit">
              Preguntas frecuentes
            </a>
          </div>

          {/* Legal Links Column */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <h4 className="font-heading font-extrabold text-xs text-[var(--color-text)] uppercase tracking-wider mb-1">
              Legal y Términos
            </h4>
            <button
              onClick={() => onOpenLegal('notice')}
              className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-left bg-transparent border-0 p-0 cursor-pointer w-fit"
            >
              Aviso Legal y Protección de Datos
            </button>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-left bg-transparent border-0 p-0 cursor-pointer w-fit"
            >
              Política de Privacidad
            </button>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-left bg-transparent border-0 p-0 cursor-pointer w-fit"
            >
              Política de Cookies
            </button>
            <button
              onClick={() => onOpenLegal('license')}
              className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-left bg-transparent border-0 p-0 cursor-pointer w-fit"
            >
              Términos de Licencia y CFX Keymaster
            </button>
            <button
              onClick={() => onOpenLegal('refunds')}
              className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-left bg-transparent border-0 p-0 cursor-pointer w-fit"
            >
              Política de Reembolsos
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Platform Badges */}
        <div className="pt-6 border-t border-[var(--color-border-soft)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-muted)] font-medium">
          <span>© {new Date().getFullYear()} Zyra Store. Todos los derechos reservados.</span>

          <div className="flex items-center gap-4">
            <SafeExternalLink
              href={siteConfig.links.tebexStore}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-text)] transition-colors"
            >
              Tebex Store
            </SafeExternalLink>
            <span>•</span>
            <SafeExternalLink
              href={siteConfig.links.discordCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-text)] transition-colors"
            >
              Discord Oficial
            </SafeExternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
