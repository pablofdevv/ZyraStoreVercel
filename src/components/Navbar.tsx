import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, ExternalLink, MessageSquare } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Productos', href: '#products' },
    { name: 'Demostración', href: '#showcase' },
    { name: 'Ventajas', href: '#benefits' },
    { name: 'Compatibilidad', href: '#compatibility' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(7, 9, 14, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              color: '#07090E',
              fontSize: '1.2rem',
              boxShadow: '0 0 16px rgba(0, 242, 254, 0.4)',
            }}
          >
            Z
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', color: '#fff', letterSpacing: '-0.02em' }}>
            ZYRA<span style={{ color: 'var(--accent-cyan)' }}>STORE</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="desktop-nav">
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <MessageSquare size={16} />
            Discord
          </a>
          <a
            href="https://tebex.io"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.88rem' }}
          >
            <ShoppingCart size={16} />
            Tienda Tebex
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            background: 'rgba(7, 9, 14, 0.96)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
            <a
              href="https://tebex.io"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <ShoppingCart size={18} />
              Comprar en Tebex
              <ExternalLink size={14} />
            </a>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageSquare size={18} />
              Unirse a Discord
            </a>
          </div>
        </div>
      )}

      {/* Responsive styles override */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
