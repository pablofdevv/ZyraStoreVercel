import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Star } from 'lucide-react';
import { PRODUCTS, type Product } from '../data/products';
import { SafeExternalLink } from './common/SafeExternalLink';

export const StartHereSection: React.FC = () => {
  // Select the 3 top featured products
  const rental = PRODUCTS.find((p) => p.id === 'zyra-rental') || PRODUCTS[0];
  const admin = PRODUCTS.find((p) => p.id === 'zyra-adminmenu') || PRODUCTS[1];
  const fuel = PRODUCTS.find((p) => p.id === 'zyra_fuel') || PRODUCTS[4];

  const featuredList: Array<{ product: Product; contextLine: string; isTopPick?: boolean }> = [
    {
      product: rental,
      contextLine: 'Ideal para servidores de roleplay económico y transporte',
      isTopPick: true,
    },
    {
      product: admin,
      contextLine: 'Pensado para moderación ágil y gestión de staff',
    },
    {
      product: fuel,
      contextLine: 'Perfecto para mecánicas de vehículos e inmersión',
    },
  ];

  return (
    <section id="start-here" style={{ padding: '72px 0', position: 'relative' }} className="w-full flex justify-center">
      <div className="container max-w-6xl px-4">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag mb-3">
            <span>SELECCIÓN DESTACADA</span>
          </div>
          <h2 className="section-title text-2xl sm:text-4xl font-extrabold">
            Los recursos que más instalan los <span className="text-gradient">servidores</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Sistemas probados por administradores para ofrecer funcionalidades clave con rendimiento ligero y soporte garantizado.
          </p>
        </div>

        {/* Perfectly Balanced 3-Column Equal Height Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {featuredList.map(({ product, contextLine, isTopPick }) => (
            <article
              key={product.id}
              className={`liquid-glass rounded-3xl border text-[var(--color-text)] shadow-xl overflow-hidden flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                isTopPick
                  ? 'border-[var(--color-border-strong)] bg-[var(--color-glass-bg)] ring-1 ring-white/20'
                  : 'border-[var(--color-glass-border)] bg-[var(--color-glass-bg)]'
              }`}
            >
              <div>
                {/* Product Image Frame */}
                <div className="relative rounded-2xl overflow-hidden mb-5 bg-black/40 border border-[var(--color-border-soft)] aspect-[16/10]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {isTopPick && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white text-black font-heading font-black text-[11px] tracking-wider uppercase shadow-lg flex items-center gap-1">
                      <Star size={12} className="fill-black" />
                      <span>MÁS VENDIDO</span>
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 price-pill px-3.5 py-1 rounded-full bg-black/85 backdrop-blur-md text-white font-extrabold text-xs sm:text-sm border border-white/20 shadow-md">
                    {product.price}
                  </span>
                </div>

                {/* Contextual Use-Case Tag */}
                <div className="flex items-center gap-1.5 mb-3 text-[11px] font-bold text-[var(--color-text-muted)] bg-[var(--color-surface-soft)] px-3 py-1.5 rounded-xl border border-[var(--color-border-soft)] w-fit">
                  <Sparkles size={13} className="text-amber-500 shrink-0" />
                  <span className="truncate">{contextLine}</span>
                </div>

                {/* Framework Compatibility Chips */}
                <div className="flex items-center gap-1.5 mb-2.5 flex-wrap">
                  {product.frameworks.map((fw) => (
                    <span
                      key={fw}
                      className="px-2.5 py-0.5 rounded-md bg-[var(--color-surface-soft)] text-[var(--color-text-secondary)] text-[10px] font-extrabold border border-[var(--color-border-soft)]"
                    >
                      {fw}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-heading font-extrabold text-xl text-[var(--color-text)] mb-2 leading-snug">
                  {product.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4 font-normal line-clamp-2">
                  {product.shortDescription}
                </p>

                {/* 3 Key Benefits */}
                <ul className="list-none flex flex-col gap-2 mb-6 p-0">
                  {product.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)] font-medium">
                      <CheckCircle2 size={15} className="text-[var(--color-text)] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <SafeExternalLink
                href={product.tebexUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-full bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-md active:scale-[0.98] cursor-pointer min-h-[44px]"
              >
                <span>Comprar en Tebex ({product.price})</span>
                <ArrowRight size={15} />
              </SafeExternalLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
