import React from 'react';
import { Zap, Palette, Sliders, Code2, BookOpen, Headphones, Sparkles } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefitsList = [
    {
      icon: <Zap size={24} className="text-cyan" />,
      title: 'Consumo Resmon 0.00ms',
      description: 'Optimizamos eventos y llamadas NUI para no saturar el cliente ni el servidor cuando el recurso no se usa.',
    },
    {
      icon: <Palette size={24} className="text-cyan" />,
      title: 'Diseño NUI Fluido',
      description: 'Interfaces construidas en HTML/CSS moderno que responden a 60 FPS sin tirones visuales.',
    },
    {
      icon: <Sliders size={24} className="text-cyan" />,
      title: 'Configuración en js/config.js',
      description: 'Cambia textos, colores, idiomas y puntos de mapa desde un solo archivo sin necesidad de modificar el marcado.',
    },
    {
      icon: <Code2 size={24} className="text-cyan" />,
      title: 'Código Ordenado',
      description: 'Exportaciones claras y eventos estructurados para integrar con tus propios scripts fácilmente.',
    },
    {
      icon: <BookOpen size={24} className="text-cyan" />,
      title: 'Documentación Directa',
      description: 'Instrucciones paso a paso con ejemplos de base de datos e instalación limpia.',
    },
    {
      icon: <Headphones size={24} className="text-cyan" />,
      title: 'Soporte en Discord',
      description: 'Atención por ticket atendida por los desarrolladores que han escrito el código.',
    },
  ];

  return (
    <section id="benefits" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>CÓDIGO Y DISEÑO</span>
          </div>
          <h2 className="section-title">
            Ventajas de <span className="text-gradient">nuestros recursos.</span>
          </h2>
          <p className="section-subtitle">
            Combinamos Lua limpio con interfaces NUI rápidas para que tu servidor funcione sin lag ni complicaciones.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {benefitsList.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(0, 242, 254, 0.08)',
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
