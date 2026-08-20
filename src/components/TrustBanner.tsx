import React from 'react';
import { ShieldCheck, Key, RefreshCw, MessageSquare } from 'lucide-react';

export const TrustBanner: React.FC = () => {
  const guarantees = [
    {
      icon: <ShieldCheck size={20} className="text-[var(--color-text)] shrink-0" />,
      title: 'Pago protegido por Tebex',
      subtitle: 'Facturación y cobro seguro internacional',
    },
    {
      icon: <Key size={20} className="text-[var(--color-text)] shrink-0" />,
      title: 'Activación en CFX Keymaster',
      subtitle: 'Entrega automática e inmediata tras el pago',
    },
    {
      icon: <RefreshCw size={20} className="text-[var(--color-text)] shrink-0" />,
      title: 'Actualizaciones incluidas',
      subtitle: 'Descarga futuras mejoras sin coste adicional',
    },
    {
      icon: <MessageSquare size={20} className="text-[var(--color-text)] shrink-0" />,
      title: 'Soporte por ticket en Discord',
      subtitle: 'Atención técnica directa para dudas o fallos',
    },
  ];

  return (
    <section className="w-full flex justify-center py-6 relative">
      <div className="container max-w-6xl px-4">
        <div className="liquid-glass p-6 sm:p-8 rounded-3xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-text)] shadow-xl">
          {/* 4 Compact Guarantees Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-6">
            {guarantees.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[var(--color-text)] m-0 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[var(--color-text-secondary)] m-0 mt-0.5 leading-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Microcopy Bar */}
          <div className="pt-4 border-t border-[var(--color-border-soft)] text-center text-xs text-[var(--color-text-muted)] font-normal">
            <p className="m-0">
              Compra una vez, descarga desde tu cuenta de Keymaster y recibe futuras mejoras sin procesos manuales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
