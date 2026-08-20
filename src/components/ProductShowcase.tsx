import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Shield, Zap, ChevronLeft, ChevronRight, Maximize2, ArrowLeft, ArrowRight, X, ExternalLink, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslatedProducts } from '@/i18n/translatedData';
import { SafeExternalLink } from './common/SafeExternalLink';

interface ProductShowcaseProps {
  selectedDemoId?: string | null;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ selectedDemoId }) => {
  const { currentLanguage, t } = useLanguage();
  const products = getTranslatedProducts(currentLanguage.code);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [activeTabId, setActiveTabId] = useState<string>(selectedDemoId || products[0]?.id || 'zyra_fuel');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Sync selectedDemoId prop if changed from external catalog button
  useEffect(() => {
    if (selectedDemoId) {
      setActiveTabId(selectedDemoId);
    }
  }, [selectedDemoId]);

  const activeProductIndex = products.findIndex((p) => p.id === activeTabId);
  const activeProduct = products[activeProductIndex >= 0 ? activeProductIndex : 0];
  const imageList = activeProduct.images && activeProduct.images.length > 0 ? activeProduct.images : [activeProduct.image];
  const hasMultipleImages = imageList.length > 1;

  // Next / Previous Script handlers
  const handlePrevScript = () => {
    const prevIdx = (activeProductIndex - 1 + products.length) % products.length;
    setActiveTabId(products[prevIdx].id);
  };

  const handleNextScript = () => {
    const nextIdx = (activeProductIndex + 1) % products.length;
    setActiveTabId(products[nextIdx].id);
  };

  const scrollTabs = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Reset image index and zoom level when switching active product tab
  useEffect(() => {
    setCurrentImageIndex(0);
    setZoomLevel(1);
  }, [activeTabId, isLightboxOpen]);

  // Hide floating site header when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.dataset.lightboxOpen = 'true';
    } else {
      delete document.body.dataset.lightboxOpen;
    }
    return () => {
      delete document.body.dataset.lightboxOpen;
    };
  }, [isLightboxOpen]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        setZoomLevel(1);
        setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
      } else if (e.key === 'ArrowLeft') {
        setZoomLevel(1);
        setCurrentImageIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, imageList.length]);

  const handleNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setZoomLevel(1);
    setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setZoomLevel(1);
    setCurrentImageIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => (prev >= 2 ? 1 : prev + 0.5));
  };

  return (
    <section id="showcase" className="py-20 relative w-full flex justify-center">
      <div className="container max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="section-tag mb-3">
            <span>PRUEBA ANTES DE COMPRAR</span>
          </div>
          <h2 className="section-title text-2xl sm:text-4xl font-extrabold">
            {t.demo.titleStart} <span className="text-gradient">{t.demo.titleEnd}</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Explora las capturas y flujos de pantalla de nuestros scripts antes de adquirir la licencia oficial en Tebex.
          </p>
        </div>

        {/* Scalable Horizontal Scroll Demo Selector Pill Slider with Arrows */}
        <div className="relative w-full mb-10 flex items-center">
          <button
            onClick={() => scrollTabs('left')}
            className="hidden sm:flex p-2 rounded-full bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)] text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] transition-all cursor-pointer shrink-0 mr-2 shadow-sm min-w-[36px] min-h-[36px] items-center justify-center"
            aria-label="Desplazar demos a la izquierda"
          >
            <ChevronLeft size={16} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2 overflow-x-auto py-2 px-1 w-full no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((prod) => {
              const isActive = prod.id === activeTabId;
              return (
                <button
                  key={prod.id}
                  onClick={() => setActiveTabId(prod.id)}
                  aria-selected={isActive}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer shrink-0 whitespace-nowrap min-h-[38px] ${
                    isActive
                      ? 'bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] border border-[var(--color-border-strong)] shadow-md'
                      : 'bg-[var(--color-surface-soft)] text-[var(--color-text-secondary)] border border-[var(--color-border-soft)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {prod.name}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => scrollTabs('right')}
            className="hidden sm:flex p-2 rounded-full bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)] text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] transition-all cursor-pointer shrink-0 ml-2 shadow-sm min-w-[36px] min-h-[36px] items-center justify-center"
            aria-label="Desplazar demos a la derecha"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Showcase Display Card - Strict Overflow Control & Perfect Padding */}
        <div className="liquid-glass p-6 sm:p-8 lg:p-10 rounded-3xl w-full border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-text)] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Product Image Screenshot Container with Carousel & Zoom */}
            <div className="lg:col-span-7">
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="rounded-2xl overflow-hidden border border-[var(--color-border-soft)] shadow-2xl relative aspect-[16/10] bg-black group cursor-pointer"
              >
                {/* Product Screenshot */}
                <img
                  key={imageList[currentImageIndex]}
                  src={imageList[currentImageIndex]}
                  alt={`Demostración de ${activeProduct.name} - Captura ${currentImageIndex + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 animate-in fade-in duration-300"
                />

                {/* Zoom / Lightbox Trigger Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLightboxOpen(true);
                  }}
                  className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md shadow-lg transition-all cursor-pointer opacity-80 group-hover:opacity-100 min-w-[36px] min-h-[36px] flex items-center justify-center"
                  aria-label="Ampliar imagen"
                  title="Ver captura completa en HD"
                >
                  <Maximize2 size={16} />
                </button>

                {/* Left/Right Chevron Navigation Buttons */}
                {hasMultipleImages && (
                  <div className="absolute top-1/2 left-3 right-3 -translate-y-1/2 z-20 flex items-center justify-between pointer-events-auto opacity-90 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={handlePrevImage}
                      className="p-2 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 shadow-lg backdrop-blur-md transition-all cursor-pointer hover:scale-110 active:scale-95 min-w-[36px] min-h-[36px] flex items-center justify-center"
                      aria-label="Foto anterior"
                      title="Foto anterior"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="p-2 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 shadow-lg backdrop-blur-md transition-all cursor-pointer hover:scale-110 active:scale-95 min-w-[36px] min-h-[36px] flex items-center justify-center"
                      aria-label="Siguiente foto"
                      title="Siguiente foto"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                )}

                {/* Bottom Gallery Dots Indicator */}
                {hasMultipleImages && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-white/20 backdrop-blur-md shadow-md">
                    {imageList.map((_, i) => (
                      <span
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(i);
                        }}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          i === currentImageIndex ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/80 w-1.5'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Detailed Product Specs, Context & CTA */}
            <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest block">
                    {activeProduct.category}
                  </span>

                  {/* Script Index Counter */}
                  <span className="text-[11px] font-extrabold text-[var(--color-text-muted)] px-2.5 py-0.5 rounded-full bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)]">
                    {activeProductIndex + 1} / {products.length}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[var(--color-text)] leading-tight tracking-tight m-0">
                    {activeProduct.name}
                  </h3>
                  <span className="price-pill text-lg font-extrabold text-[var(--color-text)] shrink-0">
                    {activeProduct.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5 font-normal">
                  {activeProduct.description}
                </p>

                {/* Resmon & Framework Spec Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 p-4 rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)]">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] mb-1 font-bold">
                      <Zap size={14} className="text-[var(--color-text)]" />
                      <span>{t.catalog.resmonLabel}</span>
                    </div>
                    <span className="text-xs font-extrabold text-[var(--color-text)]">{activeProduct.resmon}</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] mb-1 font-bold">
                      <Shield size={14} className="text-[var(--color-text)]" />
                      <span>{t.catalog.frameworksLabel}</span>
                    </div>
                    <span className="text-xs font-extrabold text-[var(--color-text)]">{activeProduct.frameworks.join(', ')}</span>
                  </div>
                </div>

                {/* Included Features Bullet Points */}
                <ul className="list-none flex flex-col gap-2 mb-5 p-0">
                  {activeProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--color-text-secondary)]">
                      <CheckCircle2 size={15} className="text-[var(--color-text)] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Realistic Disclaimer Explanation Note */}
                <p className="text-[11px] text-[var(--color-text-muted)] italic leading-normal mb-5 pt-3 border-t border-[var(--color-border-soft)]">
                  Las demos muestran el diseño y flujo del recurso. La experiencia final depende de la configuración de tu servidor.
                </p>
              </div>

              {/* Perfectly Contained Action Bar: Stacked vertically or compact inline so NO button ever overflows */}
              <div className="flex flex-col gap-3 pt-3 border-t border-[var(--color-border-soft)] w-full">
                <SafeExternalLink
                  href={activeProduct.tebexUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-full bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-xl cursor-pointer active:scale-95 min-h-[44px]"
                >
                  <span>Comprar en Tebex ({activeProduct.price})</span>
                  <ExternalLink size={15} />
                </SafeExternalLink>

                {/* Script Navigation Buttons - Guaranteed Inside Container */}
                <div className="flex items-center justify-between gap-2 w-full">
                  <button
                    onClick={handlePrevScript}
                    className="flex-1 py-2 px-3 rounded-full bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)] text-[var(--color-text)] text-xs font-extrabold hover:bg-[var(--color-surface-hover)] transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm active:scale-95 min-h-[38px]"
                  >
                    <ArrowLeft size={14} />
                    <span>Anterior</span>
                  </button>

                  <button
                    onClick={handleNextScript}
                    className="flex-1 py-2 px-3 rounded-full bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)] text-[var(--color-text)] text-xs font-extrabold hover:bg-[var(--color-surface-hover)] transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm active:scale-95 min-h-[38px]"
                  >
                    <span>Siguiente</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Ultra High Z-Index HD Lightbox Modal with Zoom Tool */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-between p-4 sm:p-8 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-200 select-none overflow-hidden"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Top Navigation & Zoom Controls Bar */}
          <div
            className="w-full max-w-6xl flex items-center justify-between gap-4 z-50 pt-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xl transition-all cursor-pointer flex items-center gap-2 text-xs font-bold shadow-lg active:scale-95 min-h-[40px]"
            >
              <ArrowLeft size={16} />
              <span>Volver atrás</span>
            </button>

            {/* Bright High Contrast Title & Screenshot Counter */}
            <div className="text-center">
              <h4
                style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF', background: 'none' }}
                className="font-heading font-extrabold text-base sm:text-xl m-0 drop-shadow-md tracking-wide"
              >
                {activeProduct.name}
              </h4>
              <span className="text-slate-300 text-xs font-medium block mt-0.5">
                Captura {currentImageIndex + 1} de {imageList.length} • Zoom: {Math.round(zoomLevel * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel((prev) => Math.min(prev + 0.5, 3));
                }}
                title="Aumentar Zoom"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xl transition-all cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center shadow-lg active:scale-95"
              >
                <ZoomIn size={18} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel((prev) => Math.max(prev - 0.5, 1));
                }}
                title="Reducir Zoom"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xl transition-all cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center shadow-lg active:scale-95"
              >
                <ZoomOut size={18} />
              </button>

              {zoomLevel > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomLevel(1);
                  }}
                  title="Restablecer Zoom"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xl transition-all cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center shadow-lg active:scale-95"
                >
                  <RotateCcw size={18} />
                </button>
              )}

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xl transition-all cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center shadow-lg active:scale-95"
                aria-label="Cerrar visor"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Main High-Res Image Display Container with Magnifier Zoom */}
          <div
            className="relative max-w-6xl w-full flex-1 my-4 flex items-center justify-center overflow-auto cursor-zoom-in"
            onClick={toggleZoom}
          >
            {hasMultipleImages && (
              <button
                onClick={handlePrevImage}
                className="absolute left-2 sm:left-4 z-50 p-3 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/25 shadow-2xl backdrop-blur-xl transition-all cursor-pointer hover:scale-110 active:scale-95 flex items-center justify-center min-w-[44px] min-h-[44px]"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            <img
              key={imageList[currentImageIndex]}
              src={imageList[currentImageIndex]}
              alt={`Vista completa en HD de ${activeProduct.name}`}
              style={{
                transform: `scale(${zoomLevel})`,
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl border border-white/20 shadow-2xl animate-in zoom-in-95 duration-200"
            />

            {hasMultipleImages && (
              <button
                onClick={handleNextImage}
                className="absolute right-2 sm:right-4 z-50 p-3 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/25 shadow-2xl backdrop-blur-xl transition-all cursor-pointer hover:scale-110 active:scale-95 flex items-center justify-center min-w-[44px] min-h-[44px]"
                aria-label="Siguiente foto"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>

          {/* Lightbox Bottom Indicator Dots */}
          <div
            className="w-full max-w-md flex flex-col items-center justify-center gap-2 z-50 pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            {hasMultipleImages && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 border border-white/20 backdrop-blur-xl shadow-xl">
                {imageList.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => {
                      setZoomLevel(1);
                      setCurrentImageIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === currentImageIndex ? 'bg-white w-5' : 'bg-white/40 hover:bg-white/70 w-2'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
