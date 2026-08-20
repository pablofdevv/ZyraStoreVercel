import React, { useEffect } from 'react';
import { X, FileText, Lock, Cookie, Scale, RefreshCw } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { StackIcon } from '@/components/ui/icons/stack-icon';

export type LegalPageKey = 'notice' | 'privacy' | 'cookies' | 'license' | 'refunds';

interface LegalModalProps {
  pageKey: LegalPageKey | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ pageKey, onClose }) => {
  const [activeTab, setActiveTab] = React.useState<LegalPageKey>(pageKey || 'notice');

  useEffect(() => {
    if (pageKey) {
      setActiveTab(pageKey);
    }
  }, [pageKey]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && pageKey) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pageKey, onClose]);

  if (!pageKey) return null;

  const pageData = siteConfig.legalPages[activeTab];

  const legalTabs: { key: LegalPageKey; label: string; icon: React.ReactNode }[] = [
    { key: 'notice', label: 'Aviso legal', icon: <Scale size={15} /> },
    { key: 'privacy', label: 'Política de privacidad', icon: <Lock size={15} /> },
    { key: 'cookies', label: 'Política de cookies', icon: <Cookie size={15} /> },
    { key: 'license', label: 'Términos de compra y licencia', icon: <FileText size={15} /> },
    { key: 'refunds', label: 'Política de reembolsos', icon: <RefreshCw size={15} /> },
  ];

  // Clean Markdown formatter helper for subheadings and bullet points
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n').map((l) => l.trim()).filter(Boolean);

    return lines.map((line, idx) => {
      const cleanLine = line.replace(/^###\s*/, '').replace(/^\d+\.\s*/, (match) => match);
      const isHeading = line.startsWith('###') || /^\d+\.\s+/.test(line);

      // Parse bold markdown **text**
      const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
      const formattedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx} className="font-extrabold text-[var(--color-text)]">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (isHeading) {
        return (
          <h3 key={idx} className="font-heading text-sm sm:text-base font-extrabold text-[var(--color-text)] mt-6 mb-3 pt-3 border-t border-[var(--color-border-soft)] flex items-center gap-2">
            <span>{formattedParts}</span>
          </h3>
        );
      }

      if (line.startsWith('- ')) {
        return (
          <li key={idx} className="ml-4 mb-1 text-xs sm:text-sm text-[var(--color-text-secondary)] list-disc">
            {formattedParts}
          </li>
        );
      }

      return (
        <p key={idx} className="m-0 mb-3 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {formattedParts}
        </p>
      );
    });
  };

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="liquid-glass glass-card w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-6 sm:p-10 rounded-[32px] border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-text)] shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar documento legal"
          className="absolute top-6 right-6 p-2.5 rounded-full bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)] text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] transition-all min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer active:scale-95 z-20"
        >
          <X size={20} />
        </button>

        {/* Modal Header with Animated StackIcon */}
        <div className="flex items-center gap-4 mb-5 pb-4 border-b border-[var(--color-border-soft)] pr-12">
          <div className="w-12 h-12 rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)] flex items-center justify-center text-[var(--color-text)] shrink-0 shadow-sm">
            <StackIcon size={26} loop={true} speed={1.2} className="text-emerald-500" />
          </div>
          <div>
            <h1 id="legal-modal-title" className="font-heading text-xl sm:text-3xl font-extrabold text-[var(--color-text)] m-0 leading-tight">
              {pageData.title}
            </h1>
            <span className="text-xs text-[var(--color-text-muted)] mt-1 block font-medium">
              Última actualización: {pageData.lastUpdated} • Zyra Store Legal Hub
            </span>
          </div>
        </div>

        {/* Legal Page Selector Navigation Tabs */}
        <div className="flex gap-2 flex-wrap mb-5 pb-4 border-b border-[var(--color-border-soft)]">
          {legalTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold flex items-center gap-2 transition-all cursor-pointer min-h-[38px] ${
                activeTab === tab.key
                  ? 'bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] border border-[var(--color-border-strong)] shadow-md'
                  : 'bg-[var(--color-surface-soft)] text-[var(--color-text-secondary)] border border-[var(--color-border-soft)] hover:text-[var(--color-text)]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Featured Tebex & Keymaster Merchant Disclaimer Box */}
        <div className="p-4 rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)] text-xs text-[var(--color-text-secondary)] leading-relaxed mb-5">
          <p className="font-bold text-[var(--color-text)] m-0">
            {siteConfig.disclaimers.tebex} {siteConfig.disclaimers.keymaster}
          </p>
        </div>

        {/* Document Content Reader with Clean Formatted Headings */}
        <div className="flex-1 overflow-y-auto pr-2 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed font-normal">
          {renderFormattedText(pageData.content)}
        </div>

        {/* Modal Footer Footnote */}
        <div className="pt-4 mt-4 border-t border-[var(--color-border-soft)] text-[11px] text-[var(--color-text-muted)] text-center">
          <p className="m-0 leading-normal">
            {siteConfig.disclaimers.rockstar} © {new Date().getFullYear()} Zyra Store S.L.
          </p>
        </div>
      </div>
    </div>
  );
};
