"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { FlowButton } from "./flow-button";
import CartIcon from "./icons/cart-icon";
import { ChevronLeft, ChevronRight, Maximize2, ArrowLeft, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import type { Product } from "@/data/products";

export interface InteractiveProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
  onSelectProduct?: (product: Product) => void;
}

export function InteractiveProductCard({
  className,
  product,
  onSelectProduct,
  ...props
}: InteractiveProductCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [style, setStyle] = React.useState<React.CSSProperties>({});
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const [zoomLevel, setZoomLevel] = React.useState(1);

  const imageList = product.images && product.images.length > 0 ? product.images : [product.image];
  const hasMultipleImages = imageList.length > 1;

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
    setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
    setCurrentImageIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
    setIsLightboxOpen(true);
  };

  const closeLightbox = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setZoomLevel(1);
    setIsLightboxOpen(false);
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => (prev >= 2 ? 1 : prev + 0.5));
  };

  // Toggle body attribute to hide floating site header when lightbox is open
  React.useEffect(() => {
    if (isLightboxOpen) {
      document.body.dataset.lightboxOpen = "true";
    } else {
      delete document.body.dataset.lightboxOpen;
    }
    return () => {
      delete document.body.dataset.lightboxOpen;
    };
  }, [isLightboxOpen]);

  // Keyboard navigation for Lightbox
  React.useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        setZoomLevel(1);
        setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
      } else if (e.key === "ArrowLeft") {
        setZoomLevel(1);
        setCurrentImageIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, imageList.length]);

  // Mouse Move 3D Tilt Handler (Desktop only for smooth interaction)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 768) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y - height / 2) / (height / 2)) * -8;
    const rotateY = ((x - width / 2) / (width / 2)) * 8;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`,
      transition: "transform 0.1s ease-out",
    });
  };

  // Mouse Leave Reset
  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.4s ease-in-out",
    });
  };

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className={cn(
          "relative w-full max-w-[340px] aspect-[9/13] rounded-[32px] bg-[var(--color-surface)] shadow-2xl overflow-hidden cursor-pointer mx-auto flex flex-col justify-between group min-w-0 border border-[var(--color-glass-border)] transition-all",
          className
        )}
        {...props}
      >
        {/* Background Product Image - Precision Framed */}
        <img
          key={imageList[currentImageIndex]}
          src={imageList[currentImageIndex]}
          alt={`Captura del producto ${product.name} - Imagen ${currentImageIndex + 1}`}
          className="absolute inset-0 h-full w-full object-cover object-[center_35%] rounded-[32px] transition-all duration-500 group-hover:scale-105 opacity-95 animate-in fade-in duration-300"
          style={{ transform: "translateZ(-20px) scale(1.05)" }}
        />

        {/* Subtle Overlay Gradient for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/40 rounded-[32px] pointer-events-none" />

        {/* Top Floating Liquid Glass Header - Title Only + Official Logo */}
        <div
          className="absolute top-4 left-4 right-4 z-20 px-4 py-3.5 rounded-2xl bg-[var(--color-glass-bg)] backdrop-blur-2xl border border-[var(--color-glass-border)] text-[var(--color-text)] flex items-center justify-between text-left shadow-xl"
          style={{ transform: "translateZ(30px)" }}
        >
          <h3 className="text-base sm:text-lg font-black text-[var(--color-text)] leading-tight m-0 tracking-tight drop-shadow-sm pr-2">
            {product.name}
          </h3>
          <img
            src="/assets/zyra_logo.png"
            alt="Logo Zyra"
            className="w-6 h-6 object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] flex-shrink-0"
          />
        </div>

        {/* Price Pill Tag in Evogria Italic */}
        <div
          className="price-pill absolute top-[80px] left-4 z-20 px-3.5 py-1.5 rounded-full bg-[var(--color-glass-bg)] backdrop-blur-xl border border-[var(--color-glass-border)] text-[var(--color-text)] text-sm font-black shadow-md tracking-wide"
          style={{ transform: "translateZ(35px)" }}
        >
          {product.price}
        </div>

        {/* Product Badge */}
        {product.badge && (
          <div
            className="absolute top-[80px] right-4 z-20 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider bg-[var(--color-surface-soft)] text-[var(--color-text)] border border-[var(--color-border-soft)] backdrop-blur-md uppercase shadow-md"
            style={{ transform: "translateZ(35px)" }}
          >
            {product.badge}
          </div>
        )}

        {/* Full-Screen Zoom Lightbox Button (Top Right Under Badge) */}
        <button
          onClick={openLightbox}
          className="absolute top-[125px] right-4 z-20 p-1.5 rounded-full bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] text-[var(--color-text)] shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-md opacity-80 group-hover:opacity-100 min-w-[28px] min-h-[28px] flex items-center justify-center"
          aria-label="Ampliar imagen"
          title="Ver captura completa en HD"
          style={{ transform: "translateZ(35px)" }}
        >
          <Maximize2 size={13} />
        </button>

        {/* Compact Image Navigation Controls (Only if Product Has Multiple Photos) */}
        {hasMultipleImages && (
          <div
            className="absolute top-1/2 left-2.5 right-2.5 -translate-y-1/2 z-30 flex items-center justify-between pointer-events-auto opacity-90 group-hover:opacity-100 transition-opacity"
            style={{ transform: "translateZ(45px)" }}
          >
            <button
              onClick={handlePrevImage}
              className="p-1.5 rounded-full bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] text-[var(--color-text)] shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-md flex items-center justify-center min-w-[28px] min-h-[28px]"
              aria-label="Foto anterior"
              title="Foto anterior"
            >
              <ChevronLeft size={13} />
            </button>
            <button
              onClick={handleNextImage}
              className="p-1.5 rounded-full bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] text-[var(--color-text)] shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-md flex items-center justify-center min-w-[28px] min-h-[28px]"
              aria-label="Siguiente foto"
              title="Siguiente foto"
            >
              <ChevronRight size={13} />
            </button>
          </div>
        )}

        {/* Bottom Action Bar - Gallery Dots & Cart Button */}
        <div
          className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto"
          style={{ transform: "translateZ(40px)" }}
        >
          {/* Compact Gallery Dots Indicator */}
          {hasMultipleImages ? (
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] backdrop-blur-md shadow-sm">
              {imageList.map((_, i) => (
                <span
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(i);
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all cursor-pointer",
                    i === currentImageIndex
                      ? "bg-[var(--color-text)] w-3"
                      : "bg-[var(--color-text-muted)] opacity-40 hover:opacity-80 w-1.5"
                  )}
                />
              ))}
            </div>
          ) : (
            <div />
          )}

          <FlowButton
            href={product.tebexUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            aria-label={`Comprar en Tebex el producto ${product.name}`}
            className="py-2.5 px-6 text-xs font-extrabold shadow-xl"
          >
            <CartIcon size={18} />
          </FlowButton>
        </div>
      </div>

      {/* Full-Screen Ultra High Z-Index HD Lightbox Modal with Zoom Tool */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-between p-4 sm:p-8 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-200 select-none overflow-hidden"
          onClick={() => closeLightbox()}
        >
          {/* Lightbox Top Navigation & Zoom Controls Bar */}
          <div
            className="w-full max-w-6xl flex items-center justify-between gap-4 z-50 pt-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => closeLightbox(e)}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xl transition-all cursor-pointer flex items-center gap-2 text-xs font-bold shadow-lg active:scale-95 min-h-[40px]"
            >
              <ArrowLeft size={16} />
              <span>Volver atrás</span>
            </button>

            {/* Bright High Contrast Title & Screenshot Counter */}
            <div className="text-center">
              <h4
                style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF', background: 'none' }}
                className="font-heading font-extrabold text-base sm:text-xl text-white m-0 drop-shadow-md tracking-wide"
              >
                {product.name}
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
                onClick={(e) => closeLightbox(e)}
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
              alt={`Vista completa en HD de ${product.name} - Imagen ${currentImageIndex + 1}`}
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
                    className={cn(
                      "h-2 rounded-full transition-all cursor-pointer",
                      i === currentImageIndex ? "bg-white w-5" : "bg-white/40 hover:bg-white/70 w-2"
                    )}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
