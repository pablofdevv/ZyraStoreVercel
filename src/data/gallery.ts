export interface GalleryItem {
  id: string;
  title: string;
  category: 'HUD' | 'Vehicle' | 'Emergency' | 'Dashboard';
  image: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Zyra Rental UI Dashboard',
    category: 'Dashboard',
    image: '/assets/hero_product_preview.jpg',
    description: 'Panel NUI principal para la elección de vehículos con tarjeta interactiva en 3D.'
  },
  {
    id: 'g2',
    title: 'Performance Tuner Telemetry',
    category: 'Vehicle',
    image: '/assets/zyra_tuner_preview.jpg',
    description: 'Consola visual de reprogramación de mapas de motor y curvas de turbo.'
  },
  {
    id: 'g3',
    title: 'Radial HUD & Location Banner',
    category: 'HUD',
    image: '/assets/zyra_hud_preview.jpg',
    description: 'Interface de conducción minimalista con brújula y lectura de velocidad radial.'
  },
  {
    id: 'g4',
    title: 'CAD/MDT Dispatch Tactical Map',
    category: 'Emergency',
    image: '/assets/zyra_dispatch_preview.jpg',
    description: 'Mapa táctico de emergencias con geolocalización de unidades en tiempo real.'
  }
];
