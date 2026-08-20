import React from 'react';
import { Star } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const reviews = [
    {
      author: 'Carlos M. (Owner & Lead Dev)',
      server: 'Spain Life Roleplay',
      text: 'El script de gasolineras Zyra Fuel ha sido una gran adquisición. Los jugadores disfrutan de la interfaz NUI fluida y el rendimiento en el servidor es impecable.',
      rating: 5,
    },
    {
      author: 'Alexandre P.',
      server: 'French Riviera RP',
      text: 'Muy limpio y fácil de personalizar desde el archivo de configuración. La entrega en Keymaster se completó al momento de realizar el pago en Tebex.',
      rating: 5,
    },
    {
      author: 'Lukas B. (Developer)',
      server: 'Berlin District RP',
      text: 'El soporte en Discord es atento y profesional. Resolvieron nuestra consulta técnica sobre la integración con QBCore rápidamente en el ticket.',
      rating: 5,
    },
  ];

  return (
    <section style={{ padding: '72px 0', position: 'relative' }} className="w-full flex justify-center">
      <div className="container max-w-6xl px-4">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag mb-3">
            <span>OPINIONES DE LA COMUNIDAD</span>
          </div>
          <h2 className="section-title text-2xl sm:text-4xl font-extrabold">
            Opiniones de la <span className="text-gradient">comunidad</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Experiencias compartidas por administradores y desarrolladores de servidores FiveM.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="liquid-glass glass-card p-6 sm:p-7 rounded-3xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-text)] shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] m-0 leading-relaxed italic font-normal mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--color-border-soft)]">
                <h3 className="font-heading font-extrabold text-xs sm:text-sm text-[var(--color-text)] m-0">
                  {rev.author}
                </h3>
                <span className="text-[11px] text-[var(--color-text-muted)] mt-0.5 block font-medium">
                  {rev.server}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
