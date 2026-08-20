import React, { useState, useEffect } from 'react';
import { Sparkles, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/gallery';

export const ShowcaseGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'HUD', name: 'HUD' },
    { id: 'Vehicle', name: 'Vehículos' },
    { id: 'Emergency', name: 'Emergencias' },
    { id: 'Dashboard', name: 'Dashboard' },
  ];

  const filteredImages = selectedCategory === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((img: GalleryItem) => img.category === selectedCategory);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeItem) {
        setActiveItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem]);

  return (
    <section id="gallery" style={{ padding: '80px 0', position: 'relative' }} className="w-full flex justify-center">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>GALERÍA DE CAPTURAS</span>
          </div>
          <h2 className="section-title">
            Galería visual de <span className="text-gradient">nuestros productos.</span>
          </h2>
          <p className="section-subtitle">
            Imágenes reales capturadas directamente desde el juego en servidores de prueba.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '10px 22px',
                borderRadius: 'var(--radius-full)',
                border: selectedCategory === cat.id ? '1px solid rgba(255, 255, 255, 0.8)' : '1px solid rgba(255, 255, 255, 0.15)',
                background: selectedCategory === cat.id ? '#FFFFFF' : 'rgba(255, 255, 255, 0.05)',
                color: selectedCategory === cat.id ? '#000000' : 'var(--text-secondary)',
                fontWeight: 800,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(16px)',
                minHeight: '44px',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            width: '100%',
          }}
        >
          {filteredImages.map((item: GalleryItem) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item)}
              aria-label={`Ver captura de ${item.title}`}
              className="glass-card group"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: 0,
                cursor: 'pointer',
                position: 'relative',
                aspectRatio: '16/10',
                background: 'rgba(0, 0, 0, 0.6)',
                width: '100%',
                display: 'block',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                className="group-hover:scale-105"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 60%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '20px',
                  opacity: 0.9,
                }}
              >
                <div style={{ textAlign: 'left', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{item.description}</p>
                  </div>
                  <Maximize2 size={18} className="text-white" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Accessible Lightbox Modal */}
        {activeItem && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 300,
              background: 'rgba(0, 0, 0, 0.92)',
              backdropFilter: 'blur(24px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
            onClick={() => setActiveItem(null)}
          >
            <div
              className="glass-card"
              style={{
                maxWidth: '900px',
                width: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Cerrar vista ampliada"
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  zIndex: 10,
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>

              <img src={activeItem.image} alt={activeItem.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '20px 28px', background: 'rgba(5, 5, 5, 0.95)', textAlign: 'left' }}>
                <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 800 }}>{activeItem.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{activeItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
