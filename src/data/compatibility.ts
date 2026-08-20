export interface Framework {
  id: string;
  name: string;
  category: 'Framework' | 'Library' | 'Architecture';
  description: string;
  status: 'Full Support' | 'Native';
  icon: string;
}

export const FRAMEWORKS: Framework[] = [
  {
    id: 'esx',
    name: 'ESX Legacy',
    category: 'Framework',
    description: 'Soporte total para ESX Final / Legacy con adapters de inventario automáticos.',
    status: 'Native',
    icon: 'Layers'
  },
  {
    id: 'qbcore',
    name: 'QBCore',
    category: 'Framework',
    description: 'Compatibilidad 100% nativa con la API de QBCore y sistemas de callbacks.',
    status: 'Native',
    icon: 'Cpu'
  },
  {
    id: 'qbox',
    name: 'Qbox Framework',
    category: 'Framework',
    description: 'Integración fluida con el ecosistema moderno Qbox.',
    status: 'Native',
    icon: 'Box'
  },
  {
    id: 'standalone',
    name: 'Standalone',
    category: 'Architecture',
    description: 'Sistemas limpios ejecutados independientemente sin ataduras a un framework concreto.',
    status: 'Full Support',
    icon: 'Zap'
  },
  {
    id: 'ox_lib',
    name: 'ox_lib',
    category: 'Library',
    description: 'Aprovecha las utilidades de ox_lib para máximo rendimiento.',
    status: 'Native',
    icon: 'Code2'
  },
  {
    id: 'ox_inventory',
    name: 'ox_inventory',
    category: 'Library',
    description: 'Integración nativa con inventarios modernos basados en items.',
    status: 'Full Support',
    icon: 'PackageCheck'
  },
  {
    id: 'ox_target',
    name: 'ox_target / qb-target',
    category: 'Library',
    description: 'Zonas de interacción físicas de alto rendimiento visual.',
    status: 'Full Support',
    icon: 'Crosshair'
  },
  {
    id: 'onesync',
    name: 'OneSync Infinity',
    category: 'Architecture',
    description: 'Optimizado para servidores masivos con OneSync activado.',
    status: 'Native',
    icon: 'Network'
  }
];
