import React from 'react';
import { Sparkles, Star, Cpu, Layers } from 'lucide-react';

export const BrandExperience: React.FC = () => {
  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: '64px 40px',
            borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(135deg, rgba(14, 19, 31, 0.9) 0%, rgba(7, 9, 14, 0.95) 100%)',
            borderColor: 'rgba(0, 242, 254, 0.3)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 242, 254, 0.1)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px', margin: '0 auto' }}>
            <div className="section-tag">
              <Sparkles size={14} />
              <span>NUESTRO COMPROMISO</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              No hacemos scripts genéricos. <br />
              <span className="text-gradient">Creamos mejores herramientas.</span>
            </h2>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                lineHeight: 1.7,
                marginBottom: '40px',
              }}
            >
              En Zyra Store nos centramos en lo que importa: código estable, respuestas rápidas en pantalla y soporte directo. Sin adornos innecesarios ni sistemas que ralenticen tu servidor.
            </p>

            {/* 3 Pillars Badge Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <Cpu size={20} color="var(--accent-cyan)" />
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>0.00ms en reposo</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <Layers size={20} color="var(--accent-cyan)" />
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>NUI fluido a 60 FPS</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <Star size={20} color="var(--accent-cyan)" />
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>Soporte directo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
