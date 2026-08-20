import React from 'react';
import { Star, ShieldCheck, Zap, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const TrustBar: React.FC = () => {
  const { t } = useLanguage();

  const trustMetrics = [
    { icon: <Star size={16} className="text-amber-500 fill-amber-500" />, label: t.trustbar.ratingText },
    { icon: <ShieldCheck size={16} className="text-emerald-500" />, label: t.trustbar.cfxVerified },
    { icon: <Zap size={16} className="text-blue-500" />, label: t.trustbar.instantDelivery },
    { icon: <MessageSquare size={16} className="text-indigo-500" />, label: t.trustbar.customerSupport },
  ];

  return (
    <div className="w-full py-8 border-y border-[var(--color-border-soft)] bg-[var(--color-surface-soft)] relative z-10 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 text-xs sm:text-sm font-bold text-[var(--color-text-secondary)]">
          {trustMetrics.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border-soft)] shadow-sm">
              {item.icon}
              <span className="text-[var(--color-text)] font-extrabold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
