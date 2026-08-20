export interface Review {
  id: string;
  author: string;
  role: string;
  community: string;
  avatar: string;
  content: string;
  rating: number;
  productUsed: string;
}

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Marc V.',
    role: 'Desarrollador Principal',
    community: 'Imperium RP (250+ slots)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    content: 'Pusimos el sistema de Rental en un servidor con 250 jugadores simultáneos y el resmon no pasó de 0.00ms. La instalación nos llevó menos de diez minutos.',
    rating: 5,
    productUsed: 'Zyra Rental System'
  },
  {
    id: '2',
    author: 'David R.',
    role: 'Dueño de Servidor',
    community: 'Los Santos Stories',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    content: 'Buscaba un HUD limpio que no cargara la pantalla. A la comunidad le encantó la interfaz y el soporte por Discord respondió el mismo día.',
    rating: 5,
    productUsed: 'Zyra Ultra HUD'
  },
  {
    id: '3',
    author: 'Alex K.',
    role: 'Administrador de Servidor',
    community: 'Neon City Roleplay',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    content: 'El CAD de despacho funciona sin fallos. La policía del servidor organiza los avisos desde el mapa en directo y no da tirones.',
    rating: 5,
    productUsed: 'Zyra Dispatch CAD'
  }
];
