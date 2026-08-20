import React from 'react';
import { ShoppingBag, Download, Settings2, Sparkles } from 'lucide-react';
import { FlowButton } from './ui/flow-button';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: <ShoppingBag size={24} className="text-violet-400" />,
      title: 'Selecciona en Tebex',
      description: 'Elige el recurso que necesita tu servidor en nuestra tienda oficial de Tebex.',
    },
    {
      step: '02',
      icon: <Download size={24} className="text-violet-400" />,
      title: 'Descarga en Keymaster',
      description: 'Tras el pago, la licencia se activa al instante en tu panel de CFX Keymaster.',
    },
    {
      step: '03',
      icon: <Settings2 size={24} className="text-violet-400" />,
      title: 'Configura a tu gusto',
      description: 'Edita textos, colores e idioma desde el archivo js/config.js en 5 minutos.',
    },
  ];

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>PROCESO DE COMPRA</span>
          </div>
          <h2 className="section-title">
            Instalación en <span className="text-gradient">3 sencillos pasos.</span>
          </h2>
          <p className="section-subtitle">
            Sin esperas manuales ni procesos complicados. Todo automatizado a través de la plataforma oficial de CFX.re.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '36px 30px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: 'rgba(255, 255, 255, 0.05)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {item.step}
              </span>

              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'rgba(139, 92, 246, 0.12)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(139, 92, 246, 0.15)',
                }}
              >
                {item.icon}
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>
                {item.title}
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Discord Help Pill */}
        <div
          className="glass-card"
          style={{
            marginTop: '48px',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            borderRadius: 'var(--radius-full)',
          }}
        >
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>
              ¿Tienes preguntas sobre la instalación?
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              El equipo de soporte te acompaña durante todo el proceso.
            </p>
          </div>

          <FlowButton
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            text="Abrir Ticket en Discord"
            className="py-2.5 px-6 text-xs"
          />
        </div>
      </div>
    </section>
  );
};
