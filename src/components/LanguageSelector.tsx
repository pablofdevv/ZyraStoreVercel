import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { LANGUAGES, type Language } from '@/i18n/languages';
import { useLanguage } from '@/context/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-50" ref={dropdownRef}>
      {/* Active Flag & Language Selector Button in Header Pill */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Seleccionar idioma / Select language"
        className="px-3 py-1.5 rounded-full bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)] text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] transition-all flex items-center gap-1.5 text-xs font-extrabold cursor-pointer min-h-[36px] active:scale-95 shadow-sm"
      >
        <span className="text-base leading-none select-none">{currentLanguage.flag}</span>
        <span className="uppercase text-[11px] font-black tracking-wider text-[var(--color-text)]">
          {currentLanguage.code}
        </span>
        <ChevronDown size={14} className={`text-[var(--color-text-muted)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Floating Dropdown Grid of 25 Flags */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-72 sm:w-80 max-h-[75vh] overflow-y-auto rounded-3xl liquid-glass border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-text)] shadow-2xl p-3 animate-in fade-in zoom-in-95 duration-200 z-[9999]"
          role="menu"
          aria-orientation="vertical"
          style={{ position: 'absolute' }}
        >
          <div className="px-3 py-2 border-b border-[var(--color-border-soft)] mb-2 flex items-center justify-between text-xs font-extrabold text-[var(--color-text-muted)]">
            <span className="flex items-center gap-1.5">
              <Globe size={14} />
              <span>Idiomas / Languages (25)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {LANGUAGES.map((lang) => {
              const isSelected = currentLanguage.code === lang.code;

              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelectLanguage(lang)}
                  role="menuitem"
                  className={`w-full px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between gap-2 transition-all cursor-pointer border-0 ${
                    isSelected
                      ? 'bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] font-extrabold shadow-sm border border-[var(--color-border-strong)]'
                      : 'bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-text)]'
                  }`}
                >
                  <div className="flex items-center gap-2 overflow-hidden text-left">
                    <span className="text-lg leading-none select-none shrink-0">{lang.flag}</span>
                    <span className="truncate text-[11px]">
                      {lang.nativeName}
                    </span>
                  </div>
                  {isSelected && <Check size={14} className="shrink-0 text-emerald-500" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
