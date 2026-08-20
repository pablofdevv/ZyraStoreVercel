import React from 'react';
import { ShieldCheck, Key, RefreshCw, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { StackIcon } from '@/components/ui/icons/stack-icon';

export const TebexPurchaseAssurance: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <ShieldCheck size={22} className="text-emerald-500 shrink-0" />,
      title: 'Tebex Merchant of Record',
      description: 'Facturación, cobro seguro por tarjeta o PayPal y cumplimiento fiscal internacional garantizado por Tebex Limited.',
    },
    {
      icon: <Key size={22} className="text-amber-500 shrink-0" />,
      title: 'Entrega en CFX Keymaster',
      description: 'El script se añade automáticamente a tu cuenta de CFX Keymaster (keymaster.fivem.net) inmediatamente tras el pago.',
    },
    {
      icon: <RefreshCw size={22} className="text-blue-500 shrink-0" />,
      title: 'Actualizaciones Gratuitas',
      description: 'Cualquier corrección o mejora futura se puede volver a descargar sin coste adicional desde tu panel de Keymaster.',
    },
    {
      icon: <Zap size={22} className="text-purple-500 shrink-0" />,
      title: 'Rendimiento Verificado 0.00ms',
      description: 'Interfaces NUI nativas desarrolladas con React e HTML5 a 60 FPS sin sobrecargar el procesador del servidor.',
    },
  ];

  return (
    <section style={{ padding: '80px 0', position: 'relative' }} className="w-full flex justify-center">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-tag flex items-center justify-center gap-2">
            <StackIcon size={16} loop={true} speed={1.2} className="text-[var(--color-text)] shrink-0" />
            <span>{t.tebex.tag}</span>
          </div>
          <h2 className="section-title">
            {t.tebex.titleStart} <span className="text-gradient">{t.tebex.titleEnd}</span>
          </h2>
          <p className="section-subtitle">
            {t.tebex.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid with Unique Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="liquid-glass glass-card p-6 sm:p-8 rounded-3xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-text)] shadow-xl flex gap-4 items-start"
            >
              <div className="p-2.5 rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)] shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[var(--color-text)] m-0 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] m-0 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
