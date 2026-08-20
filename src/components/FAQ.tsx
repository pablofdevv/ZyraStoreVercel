import React, { useState } from 'react';
import { ChevronDown, Sparkles, ChevronUp } from 'lucide-react';
import { FlowButton } from './ui/flow-button';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslatedFAQ } from '@/i18n/translatedData';
import { siteConfig } from '@/config/siteConfig';

export const FAQ: React.FC = () => {
  const { currentLanguage, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  const faqItems = getTranslatedFAQ(currentLanguage.code);
  const visibleFaqItems = showAll ? faqItems : faqItems.slice(0, 5);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ padding: '96px 0', position: 'relative' }} className="w-full flex justify-center">
      <div className="container max-w-6xl px-4">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-tag mb-3">
            <span>{t.faq.tag}</span>
          </div>
          <h2 className="section-title">
            {t.faq.titleStart} <span className="text-gradient">{t.faq.titleEnd}</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Visual 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
          {visibleFaqItems.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id || idx}
                className={`liquid-glass glass-card p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                  isOpen
                    ? 'border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-2xl scale-[1.01]'
                    : 'border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] hover:bg-[var(--color-surface-soft)] hover:border-[var(--color-border-strong)] shadow-lg'
                }`}
              >
                <div>
                  {/* Semantic Button Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full text-left flex items-start justify-between gap-4 cursor-pointer border-0 bg-transparent p-0 m-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text)] rounded-xl"
                  >
                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-[var(--color-text)] leading-snug m-0 pr-2">
                      {faq.question}
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)] flex items-center justify-center text-[var(--color-text)] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#5865F2] text-white border-[#5865F2]' : 'group-hover:scale-110'
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className={`transition-all duration-300 overflow-hidden motion-reduce:transition-none ${
                      isOpen ? 'mt-4 pt-4 border-t border-[var(--color-border-soft)] opacity-100 max-h-96' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed m-0 font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {!isOpen && (
                  <div className="mt-4 pt-3 flex items-center gap-1.5 text-[11px] font-extrabold text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">
                    <Sparkles size={12} className="text-amber-500" />
                    <span>Haz clic para leer respuesta</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All Questions Button Toggle */}
        {faqItems.length > 5 && (
          <div className="text-center mb-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="py-3 px-8 rounded-full bg-[var(--color-surface-soft)] hover:bg-[var(--color-surface-hover)] border border-[var(--color-border-soft)] text-[var(--color-text)] text-xs sm:text-sm font-extrabold transition-all cursor-pointer inline-flex items-center gap-2 shadow-md active:scale-95"
            >
              <span>{showAll ? 'Mostrar menos preguntas' : 'Ver todas las preguntas'}</span>
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}

        {/* Support Ticket Banner */}
        <div className="liquid-glass glass-card max-w-4xl mx-auto p-7 sm:p-9 rounded-[32px] border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-text)] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[var(--color-text)] m-0">
              {t.faq.supportTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] m-0 mt-1">
              {t.faq.supportSubtitle}
            </p>
          </div>
          <FlowButton
            href={siteConfig.links.discordTicket}
            target="_blank"
            rel="noopener noreferrer"
            variant="discord"
            text={t.faq.openTicketBtn}
            className="py-3 px-6 text-xs sm:text-sm font-bold shrink-0 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
