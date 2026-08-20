import React, { useState } from 'react';
import { Cpu, Gauge, ShoppingCart, Sliders } from 'lucide-react';
import { ResmonSimulator } from './ResmonSimulator';
import { TunerECUSimulator } from './TunerECUSimulator';
import { HowItWorks } from './HowItWorks';
import { useLanguage } from '@/context/LanguageContext';

export const InteractiveDemoHub: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'resmon' | 'tuner' | 'purchase'>('resmon');

  return (
    <section id="demo-hub" className="py-20 relative z-10 w-full flex justify-center">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="section-tag">
            <Cpu size={14} />
            <span>{t.demo.tag}</span>
          </div>
          <h2 className="section-title">
            {t.demo.titleStart} <span className="text-gradient">{t.demo.titleEnd}</span>
          </h2>
          <p className="section-subtitle">
            {t.demo.subtitle}
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <button
            onClick={() => setActiveTab('resmon')}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2.5 transition-all cursor-pointer border min-h-[44px] ${
              activeTab === 'resmon'
                ? 'bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] border-[var(--color-border-strong)] shadow-lg scale-105'
                : 'bg-[var(--color-surface-soft)] text-[var(--color-text-secondary)] border-[var(--color-border-soft)] hover:text-[var(--color-text)]'
            }`}
          >
            <Gauge size={18} />
            <span>{t.demo.tabResmon}</span>
          </button>

          <button
            onClick={() => setActiveTab('tuner')}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2.5 transition-all cursor-pointer border min-h-[44px] ${
              activeTab === 'tuner'
                ? 'bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] border-[var(--color-border-strong)] shadow-lg scale-105'
                : 'bg-[var(--color-surface-soft)] text-[var(--color-text-secondary)] border-[var(--color-border-soft)] hover:text-[var(--color-text)]'
            }`}
          >
            <Sliders size={18} />
            <span>{t.demo.tabEcu}</span>
          </button>

          <button
            onClick={() => setActiveTab('purchase')}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2.5 transition-all cursor-pointer border min-h-[44px] ${
              activeTab === 'purchase'
                ? 'bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] border-[var(--color-border-strong)] shadow-lg scale-105'
                : 'bg-[var(--color-surface-soft)] text-[var(--color-text-secondary)] border-[var(--color-border-soft)] hover:text-[var(--color-text)]'
            }`}
          >
            <ShoppingCart size={18} />
            <span>{t.demo.tabPurchase}</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="w-full">
          {activeTab === 'resmon' && <ResmonSimulator />}
          {activeTab === 'tuner' && <TunerECUSimulator />}
          {activeTab === 'purchase' && <HowItWorks />}
        </div>
      </div>
    </section>
  );
};
