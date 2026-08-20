import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Activity, Gauge, Server, Info } from 'lucide-react';

export const ResmonSimulator: React.FC = () => {
  const [playerCount, setPlayerCount] = useState<number>(128);
  const [selectedScript, setSelectedScript] = useState<'zyra' | 'generic'>('zyra');
  const [simulatedResmon, setSimulatedResmon] = useState<number>(0.00);

  useEffect(() => {
    if (selectedScript === 'zyra') {
      setSimulatedResmon(0.00);
    } else {
      const ms = 0.12 + (playerCount / 200) * 0.35;
      setSimulatedResmon(parseFloat(ms.toFixed(2)));
    }
  }, [playerCount, selectedScript]);

  return (
    <section style={{ padding: '80px 0', position: 'relative' }} className="w-full flex justify-center">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <Activity size={14} />
            <span>ESTIMACIÓN GRÁFICA INTERACTIVA</span>
          </div>
          <h2 className="section-title">
            Demostración visual de <span className="text-gradient">rendimiento resmon.</span>
          </h2>
          <p className="section-subtitle">
            Simula gráficamente la carga de memoria estimada según concurrencia en servidor de pruebas (Ryzen 7 7800X3D, OneSync Infinity).
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            padding: '40px',
            borderRadius: '28px',
            background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(5, 5, 5, 0.98) 80%)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            borderTop: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95), 0 0 50px rgba(255, 255, 255, 0.1)',
            width: '100%',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            {/* Control Panel Left */}
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                Simulador de Carga de Jugadores
              </h3>
              
              {/* Script Selection Toggle */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'block', marginBottom: '10px' }}>
                  Selecciona el tipo de recurso para comparar:
                </label>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => setSelectedScript('zyra')}
                    style={{
                      flex: 1,
                      padding: '14px 18px',
                      borderRadius: '16px',
                      border: selectedScript === 'zyra' ? '1px solid rgba(255, 255, 255, 0.8)' : '1px solid rgba(255, 255, 255, 0.1)',
                      background: selectedScript === 'zyra' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.05)',
                      color: selectedScript === 'zyra' ? '#000000' : 'var(--text-secondary)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                    }}
                  >
                    <Zap size={18} />
                    Zyra Optimized
                  </button>

                  <button
                    onClick={() => setSelectedScript('generic')}
                    style={{
                      flex: 1,
                      padding: '14px 18px',
                      borderRadius: '16px',
                      border: selectedScript === 'generic' ? '1px solid rgba(239, 68, 68, 0.8)' : '1px solid rgba(255, 255, 255, 0.1)',
                      background: selectedScript === 'generic' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      color: selectedScript === 'generic' ? '#fff' : 'var(--text-secondary)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                    }}
                  >
                    <Server size={18} className="text-red-400" />
                    Script Convencional
                  </button>
                </div>
              </div>

              {/* Slider Jugadores */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    Jugadores simultáneos simulados:
                  </span>
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                    {playerCount} Jugadores
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={300}
                  value={playerCount}
                  onChange={(e) => setPlayerCount(Number(e.target.value))}
                  aria-label="Jugadores simultáneos simulados"
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    accentColor: selectedScript === 'zyra' ? '#FFFFFF' : '#EF4444',
                    cursor: 'pointer',
                  }}
                />
              </div>

              {/* Status explanation */}
              <div style={{ padding: '14px 18px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Info size={18} className="text-zinc-400 flex-shrink-0 mt-0.5" />
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {selectedScript === 'zyra'
                    ? '⚡ Los recursos Zyra liberan la memoria y suspenden los bucles tick al cerrar el menú NUI, manteniendo 0.00ms en reposo fuera de interacción.'
                    : '⚠️ Los scripts convencionales sin optimización de hilos mantienen bucles activos sin temporizador Wait, incrementando los ms con la densidad de jugadores.'}
                </p>
              </div>
            </div>

            {/* Gauge Display Right */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.95)',
                padding: '32px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.9)',
              }}
            >
              <div style={{ position: 'relative', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Gauge size={84} color={selectedScript === 'zyra' ? '#FFFFFF' : '#EF4444'} style={{ filter: 'drop-shadow(0 0 16px rgba(255, 255, 255, 0.4))' }} />
              </div>

              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                Consumo CPU Estimado en Reposo
              </span>

              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: 900, color: selectedScript === 'zyra' ? '#FFFFFF' : '#EF4444', lineHeight: 1 }}>
                {simulatedResmon.toFixed(2)} <span style={{ fontSize: '1.4rem' }}>ms</span>
              </div>

              <div style={{ marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '100px', background: selectedScript === 'zyra' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(239, 68, 68, 0.15)', border: selectedScript === 'zyra' ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(239, 68, 68, 0.3)', color: selectedScript === 'zyra' ? '#FFFFFF' : '#EF4444', fontSize: '0.82rem', fontWeight: 800 }}>
                <Cpu size={14} />
                {selectedScript === 'zyra' ? 'ESTIMACIÓN REPOSO (0.00ms)' : 'ALTA CARGA EN SERVIDOR'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
