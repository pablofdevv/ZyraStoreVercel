import React, { useState, useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Shield, Zap, Layers, ChevronLeft, ChevronRight, Maximize2, ArrowLeft, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { SafeExternalLink } from './common/SafeExternalLink';
import type { Product } from '../data/products';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslatedProducts } from '@/i18n/translatedData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { currentLanguage, t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Reset image index and zoom level when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setZoomLevel(1);
  }, [product, isLightboxOpen]);

  // Hide floating site header when product modal or lightbox is open
  useEffect(() => {
    if (product || isLightboxOpen) {
      document.body.dataset.modalOpen = 'true';
    } else {
      delete document.body.dataset.modalOpen;
    }
    return () => {
      delete document.body.dataset.modalOpen;
    };
  }, [product, isLightboxOpen]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else if (product) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, isLightboxOpen, onClose]);

  if (!product) return null;

  // Retrieve translated version of product if available
  const translatedProducts = getTranslatedProducts(currentLanguage.code);
  const translatedProduct = translatedProducts.find((p) => p.id === product.id) || product;

  const imageList = translatedProduct.images && translatedProduct.images.length > 0 ? translatedProduct.images : [translatedProduct.image];
  const hasMultipleImages = imageList.length > 1;

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
    <>
      <div
        className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        <div
          className="w-full max-w-4xl max-h-[92vh] overflow-y-auto p-6 sm:p-10 rounded-[32px] bg-[#0A0A0E] text-white border border-white/20 shadow-[0_32px_96px_rgba(0,0,0,0.95)] relative text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Cerrar detalles del producto"
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer active:scale-95 z-20 shadow-md"
          >
            <X size={20} />
          </button>

          {/* Modal Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Media Preview & Lightbox Trigger */}
            <div className="lg:col-span-6">
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl mb-4 aspect-[16/10] bg-black group cursor-pointer"
              >
                <img
                  key={imageList[currentImageIndex]}
                  src={imageList[currentImageIndex]}
                  alt={`${translatedProduct.name} - Captura ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Zoom / Lightbox Trigger Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLightboxOpen(true);
                  }}
                  className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md shadow-lg transition-all cursor-pointer opacity-90 group-hover:opacity-100 min-w-[36px] min-h-[36px] flex items-center justify-center"
                  aria-label="Ampliar captura en HD"
                  title="Ver captura completa en HD"
                >
                  <Maximize2 size={16} />
                </button>

                {/* Next / Prev Image Controls */}
                {hasMultipleImages && (
                  <div className="absolute top-1/2 left-3 right-3 -translate-y-1/2 z-20 flex items-center justify-between pointer-events-auto">
                    <button
                      onClick={handlePrevImage}
                      className="p-2 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 shadow-lg backdrop-blur-md transition-all cursor-pointer hover:scale-110 active:scale-95 min-w-[36px] min-h-[36px] flex items-center justify-center"
                      aria-label="Foto anterior"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="p-2 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 shadow-lg backdrop-blur-md transition-all cursor-pointer hover:scale-110 active:scale-95 min-w-[36px] min-h-[36px] flex items-center justify-center"
                      aria-label="Siguiente foto"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                )}

                {/* Gallery Dots Indicator */}
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

              {/* High Contrast Specs Box */}
              <div className="flex flex-col gap-3 bg-white/10 p-4 sm:p-5 rounded-2xl border border-white/20 backdrop-blur-md text-xs sm:text-sm text-slate-100">
                <div className="flex items-center gap-2.5">
                  <Zap size={16} className="text-amber-400 shrink-0" />
                  <span style={{ color: '#F1F5F9', WebkitTextFillColor: '#F1F5F9' }}>
                    <strong style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF' }} className="font-extrabold">{t.catalog.resmonLabel}:</strong> {translatedProduct.resmon}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Layers size={16} className="text-blue-400 shrink-0" />
                  <span style={{ color: '#F1F5F9', WebkitTextFillColor: '#F1F5F9' }}>
                    <strong style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF' }} className="font-extrabold">{t.catalog.frameworksLabel}:</strong> {translatedProduct.frameworks.join(', ')}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Shield size={16} className="text-emerald-400 shrink-0" />
                  <span style={{ color: '#F1F5F9', WebkitTextFillColor: '#F1F5F9' }}>
                    <strong style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF' }} className="font-extrabold">Entrega:</strong> Automática en CFX Keymaster
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Ultra High Contrast Product Details & CTA */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                {/* Category & Badge Header */}
                <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                  <span
                    style={{ color: '#94A3B8', WebkitTextFillColor: '#94A3B8', background: 'none' }}
                    className="text-xs font-black uppercase tracking-widest block"
                  >
                    {translatedProduct.category}
                  </span>
                  {translatedProduct.badge && (
                    <span
                      style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF' }}
                      className="px-3 py-0.5 rounded-full bg-white/20 font-extrabold text-[11px] border border-white/30 tracking-wider uppercase"
                    >
                      {translatedProduct.badge}
                    </span>
                  )}
                </div>

                {/* Product Title */}
                <h2
                  id="modal-product-title"
                  style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF', background: 'none' }}
                  className="font-heading text-2xl sm:text-4xl font-extrabold mb-3 leading-tight tracking-tight"
                >
                  {translatedProduct.name}
                </h2>

                {/* Clear High Contrast Description */}
                <p
                  style={{ color: '#E2E8F0', WebkitTextFillColor: '#E2E8F0' }}
                  className="text-xs sm:text-sm sm:text-base leading-relaxed mb-6 font-normal"
                >
                  {translatedProduct.description}
                </p>

                {/* Included Features Subheading */}
                <h3
                  style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF', background: 'none' }}
                  className="font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-3"
                >
                  Características Incluidas:
                </h3>

                <ul className="list-none flex flex-col gap-2.5 mb-8 p-0">
                  {translatedProduct.features.map((feat, idx) => (
                    <li
                      key={idx}
                      style={{ color: '#F1F5F9', WebkitTextFillColor: '#F1F5F9' }}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-normal"
                    >
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Price & Direct Buy CTA */}
              <div className="pt-5 border-t border-white/15 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <span
                    style={{ color: '#94A3B8', WebkitTextFillColor: '#94A3B8' }}
                    className="text-[11px] block font-medium"
                  >
                    Licencia Oficial Tebex
                  </span>
                  <span
                    style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF', background: 'none' }}
                    className="price-pill font-heading text-3xl font-extrabold"
                  >
                    {translatedProduct.price}
                  </span>
                </div>

                <SafeExternalLink
                  href={translatedProduct.tebexUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
                  className="py-3 px-8 rounded-full bg-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-all shadow-2xl shrink-0 cursor-pointer active:scale-95 min-h-[44px]"
                >
                  <span>Comprar en Tebex</span>
                  <ExternalLink size={16} className="text-black" />
                </SafeExternalLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Ultra HD Lightbox Modal with Zoom Tool */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-between p-4 sm:p-8 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-200 select-none overflow-hidden"
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
                {translatedProduct.name}
              </h4>
              <span className="text-slate-300 text-xs font-medium block mt-0.5">
                Captura {currentImageIndex + 1} de {imageList.length} • Zoom: {Math.round(zoomLevel * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Zoom In Button */}
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

              {/* Zoom Out Button */}
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

              {/* Reset Zoom Button */}
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

              {/* Close Button */}
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
              alt={`Vista completa en HD de ${translatedProduct.name}`}
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
    </>
  );
};
