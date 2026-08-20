import React from 'react';
import { SafeExternalLink } from './common/SafeExternalLink';
import { siteConfig } from '@/config/siteConfig';
import { ArrowRight, ShieldCheck, Key, RefreshCw, MessageSquare } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section style={{ padding: '72px 0 48px 0', position: 'relative' }} className="w-full flex justify-center">
      <div className="container max-w-4xl px-4">
        {/* Brand Closing Card */}
        <div className="liquid-glass glass-card py-10 px-6 sm:px-12 rounded-[32px] border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-text)] shadow-2xl text-center flex flex-col items-center justify-center relative overflow-hidden">
          {/* Section Tag Badge */}
          <div className="section-tag mb-4">
            <span>LICENCIAS OFICIALES Y SOPORTE</span>
          </div>

          {/* Specific Brand Headline */}
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[var(--color-text)] m-0 tracking-tight leading-tight max-w-2xl">
            Potencia tu servidor con recursos de <span className="text-gradient">Zyra Store</span>
          </h2>

          {/* Concrete Subtitle */}
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-xl mt-3 mb-8 leading-relaxed font-normal">
            Entrega inmediata en tu cuenta de CFX Keymaster, compatibilidad garantizada con ESX, QBCore y Qbox, y atención por ticket en nuestra comunidad de Discord.
          </p>

          {/* 4 Brand Value Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl mb-8 text-left">
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)]">
              <ShieldCheck size={16} className="text-[var(--color-text)] shrink-0" />
              <span className="text-[11px] font-extrabold text-[var(--color-text)]">Pago Tebex</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)]">
              <Key size={16} className="text-[var(--color-text)] shrink-0" />
              <span className="text-[11px] font-extrabold text-[var(--color-text)]">CFX Keymaster</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)]">
              <RefreshCw size={16} className="text-[var(--color-text)] shrink-0" />
              <span className="text-[11px] font-extrabold text-[var(--color-text)]">Updates Gratis</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)]">
              <MessageSquare size={16} className="text-[var(--color-text)] shrink-0" />
              <span className="text-[11px] font-extrabold text-[var(--color-text)]">Soporte Discord</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <SafeExternalLink
              href={siteConfig.links.tebexStore}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-xl active:scale-[0.98] cursor-pointer min-h-[46px]"
            >
              <span>Explorar tienda en Tebex</span>
              <ArrowRight size={16} />
            </SafeExternalLink>

            <SafeExternalLink
              href={siteConfig.links.discordCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[var(--color-surface-soft)] text-[var(--color-text)] border border-[var(--color-border-soft)] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 hover:bg-[var(--color-surface-hover)] transition-all shadow-sm active:scale-[0.98] cursor-pointer min-h-[46px]"
            >
              <span>Unirse al Discord</span>
            </SafeExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
};
