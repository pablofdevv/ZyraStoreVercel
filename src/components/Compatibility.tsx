import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Compatibility: React.FC = () => {
  const { t } = useLanguage();

  const frameworks = [
    { name: 'ESX Legacy', version: '1.9.0 - 1.10.x', status: 'Soporte Nativo 100%' },
    { name: 'QBCore', version: 'Última versión cfx', status: 'Soporte Nativo 100%' },
    { name: 'Qbox Framework', version: 'qbx_core / ox_lib', status: 'Soporte Nativo 100%' },
    { name: 'Standalone / Custom', version: 'Cualquier entorno', status: 'Configurable js/config.js' },
  ];

  return (
    <section id="compatibility" style={{ padding: '80px 0', position: 'relative' }} className="w-full flex justify-center">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <span>{t.compatibility.tag}</span>
          </div>
          <h2 className="section-title">
            {t.compatibility.titleStart} <span className="text-gradient">{t.compatibility.titleEnd}</span>
          </h2>
          <p className="section-subtitle">
            {t.compatibility.subtitle}
          </p>
        </div>

        {/* Framework Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {frameworks.map((fw) => (
            <div
              key={fw.name}
              className="liquid-glass glass-card p-6 rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-text)] shadow-xl flex items-center justify-between text-left"
            >
              <div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[var(--color-text)] m-0">
                  {fw.name}
                </h3>
                <span className="text-xs text-[var(--color-text-muted)] mt-1 block font-medium">
                  {fw.version}
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)] text-xs font-bold text-[var(--color-text)]">
                <CheckCircle2 size={14} className="text-emerald-500" />
                <span>{fw.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
