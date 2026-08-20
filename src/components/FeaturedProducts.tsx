import React, { useState, useMemo } from 'react';
import { Search, X, CheckCircle2, ExternalLink, Play, Eye } from 'lucide-react';
import { type Product } from '../data/products';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslatedProducts } from '@/i18n/translatedData';
import { SafeExternalLink } from './common/SafeExternalLink';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
  onSelectDemo?: (productId: string) => void;
}

export const CATEGORIES = [
  'Todos',
  'Economía y negocios',
  'Vehículos',
  'Administración',
  'UI y utilidades',
  'Inmersión y roleplay',
  'Gratis',
];

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onSelectProduct, onSelectDemo }) => {
  const { currentLanguage, t } = useLanguage();
  const products = getTranslatedProducts(currentLanguage.code);

  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Real-time filtering logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === 'Todos' ||
        (activeCategory === 'Gratis'
          ? p.price.toLowerCase().includes('gratis') || p.badge?.toLowerCase().includes('gratis')
          : p.category.toLowerCase() === activeCategory.toLowerCase());

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.frameworks.some((f) => f.toLowerCase().includes(query)) ||
        p.highlights.some((h) => h.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchQuery]);

  const hasActiveFilters = activeCategory !== 'Todos' || searchQuery.trim().length > 0;

  const clearFilters = () => {
    setActiveCategory('Todos');
    setSearchQuery('');
  };

  const handleGoToDemo = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSelectDemo) {
      onSelectDemo(productId);
    }
    const showcaseElem = document.getElementById('showcase');
    if (showcaseElem) {
      showcaseElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" style={{ padding: '72px 0', position: 'relative' }} className="w-full flex justify-center">
      <div className="container max-w-6xl px-4">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="section-tag mb-3">
            <span>CATÁLOGO COMPLETO</span>
          </div>
          <h2 className="section-title text-2xl sm:text-4xl font-extrabold">
            Recursos optimizados para <span className="text-gradient">tu servidor</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Explora nuestra colección de scripts NUI. Cada recurso incluye archivo de configuración y documentación.
          </p>
        </div>

        {/* Filter Bar: Category Tabs & Search Input */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Search Input */}
          <div className="relative w-full max-w-md mx-auto">
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value.slice(0, 100))}
              placeholder="Buscar un recurso…"
              aria-label="Buscar un recurso"
              maxLength={100}
              className="w-full pl-11 pr-10 py-3 rounded-full bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] text-xs sm:text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:border-transparent transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Limpiar búsqueda"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex justify-center gap-2 flex-wrap w-full">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-selected={isActive}
                  className={`px-3.5 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer min-h-[38px] ${
                    isActive
                      ? 'bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] border border-[var(--color-border-strong)] shadow-md scale-105'
                      : 'bg-[var(--color-surface-soft)] text-[var(--color-text-secondary)] border border-[var(--color-border-soft)] hover:text-[var(--color-text)] hover:border-[var(--color-border)]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Counter & Clear Filters Button */}
          <div className="flex items-center justify-between text-xs font-extrabold text-[var(--color-text-muted)] px-2 pt-2 border-t border-[var(--color-border-soft)]">
            <span>Mostrando {filteredProducts.length} de {products.length} recursos</span>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs font-extrabold text-[var(--color-text)] hover:underline cursor-pointer flex items-center gap-1 bg-transparent border-0 p-0"
              >
                <X size={14} />
                <span>Limpiar filtros</span>
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="liquid-glass p-10 rounded-3xl text-center my-8 max-w-lg mx-auto border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] shadow-xl">
            <h3 className="font-heading font-extrabold text-base sm:text-lg text-[var(--color-text)] mb-2">
              No se encontraron recursos
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mb-5 leading-relaxed">
              No hay scripts que coincidan con la búsqueda o categoría seleccionada.
            </p>
            <button
              onClick={clearFilters}
              className="py-2.5 px-6 rounded-full bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] text-xs font-extrabold cursor-pointer shadow-md hover:opacity-90 transition-all"
            >
              Ver todos los recursos
            </button>
          </div>
        ) : (
          /* Simplified Catalog Product Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="liquid-glass glass-card p-6 rounded-3xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-text)] shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[var(--color-border-strong)] relative overflow-hidden cursor-pointer"
              >
                <div>
                  {/* Product Image Frame with Quick Inspection Trigger */}
                  <div className="relative rounded-2xl overflow-hidden mb-4 bg-black/40 border border-[var(--color-border-soft)] aspect-[16/10]">
                    <img
                      src={product.image}
                      alt={`Captura del producto ${product.name}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] font-heading font-black text-[10px] tracking-wider uppercase shadow-md">
                        {product.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 price-pill px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-white font-extrabold text-xs sm:text-sm border border-white/20 shadow-md">
                      {product.price}
                    </span>

                    {/* Quick Details Hover Hint */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-extrabold border border-white/20 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                        <Eye size={13} />
                        <span>Ver detalles</span>
                      </span>
                    </div>
                  </div>

                  {/* Clean Category & Framework Badges */}
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                    <span className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-wider">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 flex-wrap">
                      {product.frameworks.slice(0, 3).map((fw) => (
                        <span
                          key={fw}
                          className="px-2 py-0.5 rounded-md bg-[var(--color-surface-soft)] text-[var(--color-text-secondary)] text-[10px] font-extrabold border border-[var(--color-border-soft)]"
                        >
                          {fw}
                        </span>
                      ))}
                      {product.frameworks.length > 3 && (
                        <span className="text-[10px] font-bold text-[var(--color-text-muted)]">
                          +{product.frameworks.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-heading font-extrabold text-lg text-[var(--color-text)] mb-2 leading-snug">
                    {product.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-2 font-normal">
                    {product.shortDescription}
                  </p>

                  {/* Key Highlights (Exactly 2 for clean scanning) */}
                  <ul className="list-none flex flex-col gap-1.5 mb-5 p-0">
                    {product.highlights.slice(0, 2).map((hl, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-secondary)] font-medium">
                        <CheckCircle2 size={13} className="text-[var(--color-text)] shrink-0" />
                        <span className="truncate">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Conversion Action Buttons */}
                <div className="flex flex-col gap-2 pt-3 border-t border-[var(--color-border-soft)]">
                  {/* Dominant Primary CTA: Direct Tebex Purchase */}
                  <SafeExternalLink
                    href={product.tebexUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full py-3 px-4 rounded-full bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] text-xs font-extrabold transition-all hover:opacity-95 cursor-pointer text-center min-h-[44px] flex items-center justify-center gap-1.5 shadow-md active:scale-[0.98]"
                  >
                    <span>Comprar en Tebex ({product.price})</span>
                    <ExternalLink size={14} />
                  </SafeExternalLink>

                  {/* Subordinated Secondary CTA: View Interactive Demo */}
                  <button
                    onClick={(e) => handleGoToDemo(product.id, e)}
                    className="w-full py-1.5 px-3 text-[11px] font-extrabold text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer flex items-center justify-center gap-1 border-0 bg-transparent"
                  >
                    <Play size={11} />
                    <span>Ver demo en directo</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
