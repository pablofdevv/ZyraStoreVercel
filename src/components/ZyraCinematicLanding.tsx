import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Star,
  Cpu,
  Zap,
  ArrowRight,
  Play,
} from 'lucide-react';

import { FlowButton } from './ui/flow-button';
import { SafeExternalLink } from './common/SafeExternalLink';
import { StartHereSection } from './StartHereSection';
import { TrustBanner } from './TrustBanner';
import { FeaturedProducts } from './FeaturedProducts';
import { ProductShowcase } from './ProductShowcase';
import { Compatibility } from './Compatibility';
import { TebexPurchaseAssurance } from './TebexPurchaseAssurance';
import { SocialProof } from './SocialProof';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';
import { Footer } from './Footer';
import { ProductModal } from './ProductModal';
import { LegalModal, type LegalPageKey } from './common/LegalModal';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';
import ToggleIcon from './ui/icons/toggle-icon';
import { GradientBackground } from './ui/soft-pastel-blend';
import { GlassFilter } from './ui/liquid-glass';
import { siteConfig } from '@/config/siteConfig';
import type { Product } from '../data/products';

export function ZyraCinematicLanding() {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedDemoId, setSelectedDemoId] = useState<string | null>(null);
  const [activeLegalPage, setActiveLegalPage] = useState<LegalPageKey | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // URL route & hash listener for direct legal page links
  useEffect(() => {
    const handleUrlRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path === '/aviso-legal' || hash === '#aviso-legal') {
        setActiveLegalPage('notice');
      } else if (path === '/privacidad' || hash === '#privacidad') {
        setActiveLegalPage('privacy');
      } else if (path === '/cookies' || hash === '#cookies') {
        setActiveLegalPage('cookies');
      } else if (path === '/terminos-licencia' || hash === '#terminos-licencia') {
        setActiveLegalPage('license');
      } else if (path === '/reembolsos' || hash === '#reembolsos') {
        setActiveLegalPage('refunds');
      }
    };

    handleUrlRoute();
    window.addEventListener('popstate', handleUrlRoute);
    window.addEventListener('hashchange', handleUrlRoute);
    return () => {
      window.removeEventListener('popstate', handleUrlRoute);
      window.removeEventListener('hashchange', handleUrlRoute);
    };
  }, []);

  const navLinks = [
    { name: 'Productos', href: '#products', external: false },
    { name: 'Demos', href: '#showcase', external: false },
    { name: 'Documentación', href: siteConfig.links.docs, external: true },
    { name: 'Compatibilidad', href: '#compatibility', external: false },
    { name: 'FAQ', href: '#faq', external: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const scrollToDemos = () => {
    const showcaseElem = document.getElementById('showcase');
    if (showcaseElem) {
      showcaseElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen transition-colors duration-300 bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* 21st.dev SVG Distortion Filter for Liquid Glass */}
      <GlassFilter />

      {/* Soft Pastel Blend Background Layer */}
      <div className={`fixed inset-0 w-full h-full z-0 pointer-events-none transition-opacity duration-500 ${
        theme === 'light' ? 'opacity-100' : 'opacity-40 mix-blend-screen'
      }`}>
        <GradientBackground className="w-full h-full" />
      </div>

      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[var(--color-btn-primary-bg)] focus:text-[var(--color-btn-primary-text)] focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none"
      >
        Saltar al contenido principal
      </a>

      {/* Header & Navigation */}
      <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 transition-all duration-300">
        <nav
          aria-label="Navegación principal"
          className={`w-full max-w-6xl px-4 sm:px-6 py-2.5 rounded-full liquid-glass border transition-all duration-300 bg-[var(--color-glass-bg)] border-[var(--color-glass-border)] text-[var(--color-text)] shadow-2xl relative ${
            isScrolled ? 'max-w-5xl py-2 shadow-xl' : ''
          }`}
          style={{ overflow: 'visible' }}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <a
              href="#hero"
              aria-label="Zyra Store - Ir al inicio"
              className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-current rounded-xl p-1 shrink-0"
            >
              <img
                src="/assets/zyra_logo.png"
                alt="Logo Zyra Store"
                width="32"
                height="32"
                className="w-8 h-8 object-contain filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
              />
              <span className="brand-logo-text font-heading font-black text-base sm:text-lg tracking-tight text-[var(--color-text)] uppercase whitespace-nowrap">
                ZYRA STORE
              </span>
            </a>

            {/* Nav Links (Clean text without external icon) */}
            <ul className="hidden lg:flex items-center gap-3 xl:gap-5 text-xs xl:text-sm font-extrabold m-0 p-0 list-none text-[var(--color-text)]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <SafeExternalLink
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-text)] hover:opacity-75 transition-opacity py-1.5 px-2 rounded-lg font-extrabold tracking-tight whitespace-nowrap"
                    >
                      {link.name}
                    </SafeExternalLink>
                  ) : (
                    <a
                      href={link.href}
                      className="text-[var(--color-text)] hover:opacity-75 transition-opacity py-1.5 px-2 rounded-lg font-extrabold tracking-tight whitespace-nowrap"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Actions: 25-Flag Language Selector + Theme Toggle + Small Visible Tebex CTA */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <LanguageSelector />

              <button
                onClick={toggleTheme}
                type="button"
                aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                className="p-1 text-[var(--color-text)] opacity-90 hover:opacity-100 transition-opacity border-0 bg-transparent min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer active:scale-95 shrink-0"
              >
                <ToggleIcon size={24} className="text-[var(--color-text)]" />
              </button>

              <SafeExternalLink
                href={siteConfig.links.tebexStore}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-full bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] text-xs font-extrabold transition-all hover:opacity-95 shadow-md shrink-0 cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                <span>Tienda Tebex</span>
              </SafeExternalLink>
            </div>

            {/* Mobile / Tablet Responsive Controls */}
            <div className="lg:hidden flex items-center gap-1.5">
              <LanguageSelector />

              <button
                onClick={toggleTheme}
                type="button"
                aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                className="p-1 text-[var(--color-text)] opacity-90 hover:opacity-100 transition-opacity border-0 bg-transparent min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              >
                <ToggleIcon size={24} className="text-[var(--color-text)]" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
                className="p-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-text)] min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Accessible Mobile Menu */}
          {mobileMenuOpen && (
            <div
              id="mobile-navigation"
              ref={mobileMenuRef}
              className="lg:hidden mt-3 pt-3 border-t border-[var(--color-border-soft)] flex flex-col gap-2 p-4 rounded-3xl bg-[var(--color-surface)] text-[var(--color-text)] shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            >
              <ul className="flex flex-col gap-1 m-0 p-0 list-none text-left">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <SafeExternalLink
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-3 px-4 text-sm font-extrabold border-b border-[var(--color-border-soft)] flex items-center justify-between rounded-xl text-[var(--color-text)] hover:bg-[var(--color-surface-soft)] transition-colors min-h-[44px]"
                      >
                        <span>{link.name}</span>
                      </SafeExternalLink>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-3 px-4 text-sm font-extrabold border-b border-[var(--color-border-soft)] block rounded-xl text-[var(--color-text)] hover:bg-[var(--color-surface-soft)] transition-colors min-h-[44px] flex items-center"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 mt-3 pt-2">
                <SafeExternalLink
                  href={siteConfig.links.tebexStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 px-4 rounded-full bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] text-xs font-extrabold flex items-center justify-center gap-2 shadow-md cursor-pointer min-h-[44px]"
                >
                  <span>Tienda Tebex</span>
                  <ArrowRight size={15} />
                </SafeExternalLink>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content" tabIndex={-1} className="relative z-10 pt-24 outline-none">
        {/* 1. HERO SECTION */}
        <section id="hero" className="relative pt-10 md:pt-16 pb-14 flex flex-col items-center justify-center text-center">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center justify-center text-center">
            {/* Kept Indicators Badge */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-6 text-xs sm:text-sm section-tag">
              <div className="flex items-center gap-1.5 font-bold text-[var(--color-text)]">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>5.0 / 5.0 Rating CFX</span>
              </div>
              <span className="opacity-30">|</span>
              <div className="flex items-center gap-1.5 text-[var(--color-text)]">
                <Cpu className="w-4 h-4" />
                <span>Resmon Reposo Optimizado</span>
              </div>
              <span className="opacity-30">|</span>
              <div className="flex items-center gap-1.5 text-[var(--color-text)]">
                <Zap className="w-4 h-4" />
                <span>CFX Keymaster Entrega Inmediata</span>
              </div>
            </div>

            {/* Sales Oriented Headline */}
            <h1 className="hero-title max-w-4xl mx-auto text-balance text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] text-center text-[var(--color-text)]">
              Scripts FiveM que mejoran tu servidor <span className="text-gradient">sin castigar el rendimiento.</span>
            </h1>

            {/* Sales Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-balance text-sm md:text-base leading-relaxed font-normal text-center text-[var(--color-text-secondary)]">
              Sistemas NUI para ESX, QBCore y Qbox. Instala, configura y entrega una experiencia profesional a tus jugadores con consumo eficiente.
            </p>

            {/* Hero Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
              <SafeExternalLink
                href={siteConfig.links.tebexStore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-xl active:scale-[0.98] cursor-pointer min-h-[48px]"
              >
                <span>Ver scripts en Tebex</span>
                <ArrowRight size={18} />
              </SafeExternalLink>

              <button
                onClick={scrollToDemos}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[var(--color-surface-soft)] text-[var(--color-text)] border border-[var(--color-border-soft)] font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-[var(--color-surface-hover)] transition-all shadow-sm active:scale-[0.98] cursor-pointer min-h-[48px]"
              >
                <Play size={16} />
                <span>Ver demos</span>
              </button>
            </div>

            {/* Credible Microcopy Line */}
            <p className="mt-6 text-xs text-[var(--color-text-muted)] font-extrabold tracking-wide">
              Entrega automática · Licencia oficial CFX Keymaster · Actualizaciones incluidas
            </p>
          </div>
        </section>

        {/* 2. SECCIÓN EMPIEZA POR AQUÍ */}
        <StartHereSection />

        {/* 3. BLOQUE DE CONFIANZA ANTES DEL CATÁLOGO */}
        <TrustBanner />

        {/* 4. CATÁLOGO CON FILTROS Y TARJETAS LIMPIAS */}
        <FeaturedProducts
          onSelectProduct={(p) => setSelectedProduct(p)}
          onSelectDemo={(id) => setSelectedDemoId(id)}
        />

        {/* 5. DEMOS CON SELECTOR ESCALABLE */}
        <ProductShowcase selectedDemoId={selectedDemoId} />

        {/* 6. COMPATIBILIDAD */}
        <Compatibility />

        {/* 7. GARANTÍA TEBEX */}
        <TebexPurchaseAssurance />

        {/* 8. OPINIONES DE LA COMUNIDAD */}
        <SocialProof />

        {/* 9. FAQ ACCORDION */}
        <FAQ />

        {/* 10. FINAL CLOSING CTA */}
        <FinalCTA />

        {/* FOOTER */}
        <Footer onOpenLegal={(key) => setActiveLegalPage(key)} />
      </main>

      {/* MODALS */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <LegalModal pageKey={activeLegalPage} onClose={() => setActiveLegalPage(null)} />
    </div>
  );
}

export default ZyraCinematicLanding;
