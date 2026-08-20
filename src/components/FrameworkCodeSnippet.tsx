import React, { useState } from 'react';
import { Code2, Copy, Check, Terminal } from 'lucide-react';

export const FrameworkCodeSnippet: React.FC = () => {
  const [activeFramework, setActiveFramework] = useState<'esx' | 'qbcore' | 'qbox'>('esx');
  const [copied, setCopied] = useState<boolean>(false);

  const snippets = {
    esx: `-- client.lua - Integración ESX Legacy
ESX = exports["es_extended"]:getSharedObject()

-- Abrir Menú NUI de Alquiler Zyra
exports['zyra_rental']:OpenRentalMenu({
    location = vector3(-1035.2, -2732.1, 13.7),
    category = 'compacts',
    deposit = 500
})`,
    qbcore: `-- client.lua - Integración QBCore
local QBCore = exports['qb-core']:GetCoreObject()

-- Abrir Menú NUI de Alquiler Zyra
TriggerEvent('zyra_rental:client:openMenu', {
    location = vector3(-1035.2, -2732.1, 13.7),
    garage = 'airport_rentals'
})`,
    qbox: `-- client.lua - Integración Qbox & ox_lib
local qbx = require '@qbx_core.modules.player'

-- Abrir Menú NUI de Alquiler Zyra con ox_target
exports.zyra_rental:open({
    target = 'ox_target',
    resmonOpt = true
})`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeFramework]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={{ padding: '80px 0', position: 'relative' }} className="w-full flex justify-center">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <Code2 size={14} />
            <span>INTEGRACIÓN LUA DIRECTA</span>
          </div>
          <h2 className="section-title">
            Código limpio listo para <span className="text-gradient">tu framework.</span>
          </h2>
          <p className="section-subtitle">
            Copia e integra la llamada en tus eventos de cliente en menos de 2 minutos.
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            borderRadius: '24px',
            overflow: 'hidden',
            background: 'rgba(5, 5, 5, 0.98)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.95)',
            width: '100%',
          }}
        >
          {/* Header Bar */}
          <div
            className="p-4 sm:p-5 flex items-center justify-between flex-wrap gap-3"
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Framework Tabs */}
            <div className="flex gap-2 flex-wrap">
              {(['esx', 'qbcore', 'qbox'] as const).map((fw) => (
                <button
                  key={fw}
                  onClick={() => setActiveFramework(fw)}
                  aria-selected={activeFramework === fw}
                  className="min-h-[44px] min-w-[44px]"
                  style={{
                    padding: '8px 16px',
                    borderRadius: '100px',
                    border: activeFramework === fw ? '1px solid rgba(255, 255, 255, 0.8)' : '1px solid transparent',
                    background: activeFramework === fw ? '#FFFFFF' : 'transparent',
                    color: activeFramework === fw ? '#000000' : 'var(--text-secondary)',
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {fw}
                </button>
              ))}
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="min-h-[44px] px-4 py-2"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                borderRadius: '100px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#fff',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {copied ? <Check size={14} className="text-white" /> : <Copy size={14} />}
              {copied ? '¡Copiado!' : 'Copiar Código'}
            </button>
          </div>

          {/* Code Window Container - Controlled horizontal scroll */}
          <div className="p-4 sm:p-6 relative text-left min-w-0 overflow-hidden">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.78rem', marginBottom: '12px' }}>
              <Terminal size={14} />
              <span>client/main.lua</span>
            </div>

            <div className="w-full overflow-x-auto min-w-0 pb-2">
              <pre
                style={{
                  fontFamily: 'Consolas, Monaco, "Fira Code", monospace',
                  fontSize: '0.86rem',
                  color: '#FFFFFF',
                  lineHeight: 1.65,
                  margin: 0,
                  whiteSpace: 'pre',
                }}
              >
                {snippets[activeFramework]}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
