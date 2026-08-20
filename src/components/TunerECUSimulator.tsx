import React, { useState } from 'react';
import { Sliders, Flame, Gauge, Sparkles, Check, X } from 'lucide-react';
import { FlowButton } from './ui/flow-button';

export const TunerECUSimulator: React.FC = () => {
  const [rpmLimit, setRpmLimit] = useState<number>(8500);
  const [turboPressure, setTurboPressure] = useState<number>(1.8);
  const [popAndBang, setPopAndBang] = useState<boolean>(true);
  const [isRevving, setIsRevving] = useState<boolean>(false);

  const handleRev = () => {
    setIsRevving(true);
    setTimeout(() => setIsRevving(false), 1200);
  };

  return (
    <section style={{ padding: '80px 0', position: 'relative' }} className="w-full flex justify-center">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <Sliders size={14} />
            <span>DEMO NUI INTERACTIVA</span>
          </div>
          <h2 className="section-title">
            Prueba la interfaz de <span className="text-gradient">Zyra Performance Tuner.</span>
          </h2>
          <p className="section-subtitle">
            Interactúa con los controles NUI de prueba para ajustar la ECU en tiempo real y comprobar la respuesta visual.
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            padding: '40px',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, rgba(20, 20, 24, 0.95) 0%, rgba(5, 5, 5, 0.98) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderTop: '1px solid rgba(255, 255, 255, 0.6)',
            boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95), 0 0 60px rgba(255, 255, 255, 0.12)',
            width: '100%',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            {/* Controls */}
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.8rem', color: '#FFFFFF', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  ECU REPROGRAMMER NUI DEMO
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '24px' }}>
                Ajuste de Telemetría NUI
              </h3>

              {/* RPM Slider */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Corte de RPM:</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>{rpmLimit} RPM</span>
                </div>
                <input
                  type="range"
                  min={6000}
                  max={11000}
                  step={250}
                  value={rpmLimit}
                  onChange={(e) => setRpmLimit(Number(e.target.value))}
                  aria-label="Corte de RPM"
                  style={{ width: '100%', height: '6px', accentColor: '#FFFFFF', cursor: 'pointer' }}
                />
              </div>

              {/* Turbo Pressure Slider */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Presión Turbo Boost:</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>{turboPressure.toFixed(1)} BAR</span>
                </div>
                <input
                  type="range"
                  min={0.5}
                  max={3.0}
                  step={0.1}
                  value={turboPressure}
                  onChange={(e) => setTurboPressure(Number(e.target.value))}
                  aria-label="Presión Turbo Boost"
                  style={{ width: '100%', height: '6px', accentColor: '#FFFFFF', cursor: 'pointer' }}
                />
              </div>

              {/* Pop & Bang Switch - Multi-sensory text + icon */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Flame size={20} color={popAndBang ? '#FFFFFF' : 'var(--text-muted)'} />
                  <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 700 }}>Pops & Bangs de Escape</span>
                </div>
                <button
                  onClick={() => setPopAndBang(!popAndBang)}
                  aria-label={popAndBang ? 'Desactivar Pops and Bangs' : 'Activar Pops and Bangs'}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '100px',
                    border: 'none',
                    background: popAndBang ? '#FFFFFF' : 'rgba(255, 255, 255, 0.1)',
                    color: popAndBang ? '#000000' : '#fff',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {popAndBang ? <Check size={14} /> : <X size={14} />}
                  {popAndBang ? 'ACTIVADO' : 'DESACTIVADO'}
                </button>
              </div>

              <FlowButton
                onClick={handleRev}
                variant="primary"
                text={isRevving ? "🔥 ¡Acelerando Motor! ..." : "🔊 Probar Aceleración ECU"}
                className="w-full justify-center py-3.5 text-base font-bold"
              />
            </div>

            {/* Visual Telemetry Gauges Gauge */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.95)',
                padding: '32px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: isRevving ? '0 0 50px rgba(255, 255, 255, 0.3)' : 'inset 0 0 40px rgba(0, 0, 0, 0.9)',
                transition: 'all 0.3s ease',
                textAlign: 'center',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Gauge size={20} className="text-white" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>DIAGNOSTIC TELEMETRY</span>
                </div>
                <span style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: '100px', background: 'rgba(255, 255, 255, 0.2)', color: '#FFFFFF', fontWeight: 800 }}>ECU ONLINE</span>
              </div>

              {/* Dynamic Bar Display */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  <span>POTENCIA ESTIMADA</span>
                  <span style={{ color: '#fff', fontWeight: 800 }}>{Math.round(rpmLimit * 0.08 * turboPressure)} HP</span>
                </div>
                <div style={{ width: '100%', height: '14px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.1)', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  <div
                    style={{
                      height: '100%',
                      width: '100%',
                      transformOrigin: 'left center',
                      transform: isRevving ? 'scaleX(0.98)' : `scaleX(${(turboPressure / 3.0) * 0.8})`,
                      background: isRevving ? 'linear-gradient(90deg, #FFFFFF, #A1A1AA)' : 'linear-gradient(90deg, #FFFFFF, #E2E8F0)',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      borderRadius: '8px',
                    }}
                  />
                </div>
              </div>

              {/* Simulated Rev Flame Effect */}
              {isRevving && (
                <div style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontWeight: 800, fontSize: '0.9rem', animation: 'pulse 1s infinite' }}>
                  <Sparkles size={18} /> ¡PETARDEO Y TURBO BOOST EN DEMO!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
