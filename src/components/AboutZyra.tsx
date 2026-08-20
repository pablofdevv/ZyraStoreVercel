import React from 'react';
import { Sparkles } from 'lucide-react';

export const AboutZyra: React.FC = () => {
  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>SOBRE ZYRA STORE</span>
          </div>

          <h2 className="section-title">
            Pensado para <span className="text-gradient">creadores de servidores.</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '24px' }}>
            Zyra Store nació para resolver un problema común: scripts de FiveM que daban tirones o tenían interfaces anticuadas.
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Programamos en Lua con interfaces NUI en JavaScript pensando en la estabilidad a largo plazo. Queremos que montar o ampliar tu servidor sea una experiencia rápida y sin sobresaltos.
          </p>
        </div>
      </div>
    </section>
  );
};
