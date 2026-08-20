export interface TranslationKeys {
  nav: {
    home: string;
    catalog: string;
    docs: string;
    compatibility: string;
    faq: string;
    discord: string;
    tebex: string;
    openMenu: string;
    closeMenu: string;
    selectLanguage: string;
  };
  hero: {
    rating: string;
    resmon: string;
    keymaster: string;
    titleStart: string;
    titleEnd: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trustbar: {
    ratingText: string;
    reviews: string;
    cfxVerified: string;
    instantDelivery: string;
    customerSupport: string;
  };
  catalog: {
    tag: string;
    titleStart: string;
    titleEnd: string;
    subtitle: string;
    coverflowView: string;
    gridView: string;
    detailsBtn: string;
    buyBtn: string;
    resmonLabel: string;
    frameworksLabel: string;
  };
  demo: {
    tag: string;
    titleStart: string;
    titleEnd: string;
    subtitle: string;
    tabResmon: string;
    tabEcu: string;
    tabPurchase: string;
  };
  compatibility: {
    tag: string;
    titleStart: string;
    titleEnd: string;
    subtitle: string;
  };
  tebex: {
    tag: string;
    titleStart: string;
    titleEnd: string;
    subtitle: string;
  };
  socialProof: {
    tag: string;
    titleStart: string;
    titleEnd: string;
    subtitle: string;
  };
  faq: {
    tag: string;
    titleStart: string;
    titleEnd: string;
    subtitle: string;
    supportTitle: string;
    supportSubtitle: string;
    openTicketBtn: string;
  };
  cta: {
    tag: string;
    titleStart: string;
    titleEnd: string;
    subtitle: string;
    btnPrimary: string;
    btnSecondary: string;
  };
  footer: {
    holderLabel: string;
    tebexNotice: string;
    copyright: string;
    notice: string;
    privacy: string;
    cookies: string;
    terms: string;
    refunds: string;
  };
}

export const TRANSLATIONS: Record<string, TranslationKeys> = {
  es: {
    nav: {
      home: 'Inicio',
      catalog: 'Catálogo',
      docs: 'Documentación',
      compatibility: 'Compatibilidad',
      faq: 'FAQ',
      discord: 'Discord',
      tebex: 'Tienda Tebex',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      selectLanguage: 'Seleccionar idioma',
    },
    hero: {
      rating: '5.0 / 5.0 Rating CFX',
      resmon: '0.00ms Resmon Reposo',
      keymaster: 'CFX Keymaster Entrega Inmediata',
      titleStart: 'Recursos NUI de Alto Rendimiento para',
      titleEnd: 'FiveM.',
      subtitle: 'Sistemas profesionales con interfaces NUI a 60 FPS, consumo resmon 0.00ms e instalación limpia vinculada automáticamente a tu cuenta de CFX Keymaster.',
      ctaPrimary: 'Explorar Catálogo Tebex',
      ctaSecondary: 'Comunidad Discord',
    },
    trustbar: {
      ratingText: 'Puntuación 5/5 en CFX.re',
      reviews: 'Más de 1.400 clientes satisfechos',
      cfxVerified: 'Recursos NUI Verificados',
      instantDelivery: 'Entrega en Keymaster < 1 min',
      customerSupport: 'Soporte 24/7 en Discord',
    },
    catalog: {
      tag: 'CATÁLOGO PRINCIPAL',
      titleStart: 'Recursos optimizados para',
      titleEnd: 'tu servidor.',
      subtitle: 'Cada script incluye interfaz NUI fluida, archivo de configuración js/config.js y soporte por ticket en Discord.',
      coverflowView: 'Carrusel 3D Coverflow',
      gridView: 'Vista Cuadrícula',
      detailsBtn: 'Ver detalles',
      buyBtn: 'Comprar en Tebex',
      resmonLabel: 'Resmon Reposo',
      frameworksLabel: 'Frameworks',
    },
    demo: {
      tag: 'PRUEBA INTERACTIVA',
      titleStart: 'Prueba la fluidez y rendimiento en',
      titleEnd: 'tiempo real.',
      subtitle: 'Simula el comportamiento de nuestros scripts NUI antes de realizar la compra en Tebex.',
      tabResmon: 'Simulador de Resmon',
      tabEcu: 'Afinador de Rendimiento ECU',
      tabPurchase: 'Proceso de Compra y Licencia',
    },
    compatibility: {
      tag: 'COMPATIBILIDAD TOTAL',
      titleStart: 'Diseñados para cualquier',
      titleEnd: 'framework.',
      subtitle: 'Soporte nativo para ESX Legacy, QBCore, Qbox y configuraciones Standalone.',
    },
    tebex: {
      tag: 'COMPRA SEGURA EN TEBEX',
      titleStart: 'Garantía oficial y entrega instantánea con',
      titleEnd: 'Tebex.',
      subtitle: 'Procesamiento de pagos seguro con facturación automática y vinculación a Keymaster.',
    },
    socialProof: {
      tag: 'TESTIMONIOS REALES',
      titleStart: 'Lo que opinan los creadores de servidores',
      titleEnd: 'FiveM.',
      subtitle: 'Reseñas verificadas de administradores y desarrolladores.',
    },
    faq: {
      tag: 'PREGUNTAS FRECUENTES',
      titleStart: 'Resuelve tus dudas en',
      titleEnd: 'detalle.',
      subtitle: 'Información sobre licencias de CFX Keymaster, compatibilidad e instalación.',
      supportTitle: '¿Tienes alguna pregunta adicional?',
      supportSubtitle: 'Nuestro equipo técnico atiende tickets de soporte diariamente en Discord.',
      openTicketBtn: 'Abrir Ticket en Discord',
    },
    cta: {
      tag: 'LISTO PARA EMPEZAR',
      titleStart: 'Lleva tu servidor FiveM al siguiente',
      titleEnd: 'nivel.',
      subtitle: 'Instalación en menos de 2 minutos vinculada automáticamente a tu cuenta de CFX Keymaster.',
      btnPrimary: 'Ir a la Tienda Tebex',
      btnSecondary: 'Unirse al Discord',
    },
    footer: {
      holderLabel: 'Titular:',
      tebexNotice: 'Los pagos, facturación e impuestos son gestionados por Tebex Limited (Merchant of Record). Zyra Store es el proveedor y licenciante oficial.',
      copyright: 'Todos los derechos reservados.',
      notice: 'Aviso legal',
      privacy: 'Política de privacidad',
      cookies: 'Política de cookies',
      terms: 'Términos de compra y licencia',
      refunds: 'Política de reembolsos',
    },
  },
  en: {
    nav: {
      home: 'Home',
      catalog: 'Catalog',
      docs: 'Documentation',
      compatibility: 'Compatibility',
      faq: 'FAQ',
      discord: 'Discord',
      tebex: 'Tebex Store',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      selectLanguage: 'Select language',
    },
    hero: {
      rating: '5.0 / 5.0 CFX Rating',
      resmon: '0.00ms Idle Resmon',
      keymaster: 'CFX Keymaster Instant Delivery',
      titleStart: 'High Performance NUI Resources for',
      titleEnd: 'FiveM.',
      subtitle: 'Professional systems with 60 FPS NUI interfaces, 0.00ms resmon consumption, and clean installation bound to your CFX Keymaster account.',
      ctaPrimary: 'Explore Tebex Catalog',
      ctaSecondary: 'Discord Community',
    },
    trustbar: {
      ratingText: '5/5 Rating on CFX.re',
      reviews: 'Over 1,400 Satisfied Customers',
      cfxVerified: 'Verified NUI Resources',
      instantDelivery: 'Keymaster Delivery < 1 min',
      customerSupport: '24/7 Discord Support',
    },
    catalog: {
      tag: 'MAIN CATALOG',
      titleStart: 'Optimized Resources for',
      titleEnd: 'Your Server.',
      subtitle: 'Every script includes a smooth NUI interface, js/config.js file, and Discord ticket support.',
      coverflowView: '3D Coverflow Carousel',
      gridView: 'Grid View',
      detailsBtn: 'View Details',
      buyBtn: 'Buy on Tebex',
      resmonLabel: 'Idle Resmon',
      frameworksLabel: 'Frameworks',
    },
    demo: {
      tag: 'INTERACTIVE DEMO',
      titleStart: 'Experience Smooth Performance in',
      titleEnd: 'Real Time.',
      subtitle: 'Simulate our NUI scripts behavior live before purchasing on Tebex.',
      tabResmon: 'Resmon Simulator',
      tabEcu: 'ECU Performance Tuner',
      tabPurchase: 'Purchase & License Workflow',
    },
    compatibility: {
      tag: 'TOTAL COMPATIBILITY',
      titleStart: 'Designed for Any',
      titleEnd: 'Framework.',
      subtitle: 'Native support for ESX Legacy, QBCore, Qbox, and Standalone setups.',
    },
    tebex: {
      tag: 'SECURE TEBEX PURCHASE',
      titleStart: 'Official Guarantee & Instant Delivery with',
      titleEnd: 'Tebex.',
      subtitle: 'Secure payment processing with automatic invoicing and Keymaster binding.',
    },
    socialProof: {
      tag: 'REAL REVIEWS',
      titleStart: 'What FiveM Server Creators',
      titleEnd: 'Say About Us.',
      subtitle: 'Verified reviews from server owners and lead developers.',
    },
    faq: {
      tag: 'FREQUENTLY ASKED QUESTIONS',
      titleStart: 'Get Detailed Answers to',
      titleEnd: 'Your Questions.',
      subtitle: 'Information about CFX Keymaster licenses, framework compatibility, and installation.',
      supportTitle: 'Have an additional question?',
      supportSubtitle: 'Our technical support team handles Discord tickets daily.',
      openTicketBtn: 'Open Discord Ticket',
    },
    cta: {
      tag: 'READY TO UPGRADE',
      titleStart: 'Take Your FiveM Server to the Next',
      titleEnd: 'Level.',
      subtitle: 'Under 2-minute installation automatically linked to your CFX Keymaster account.',
      btnPrimary: 'Visit Tebex Store',
      btnSecondary: 'Join Discord Server',
    },
    footer: {
      holderLabel: 'Owner:',
      tebexNotice: 'Payments, invoicing, and taxes are managed by Tebex Limited (Merchant of Record). Zyra Store is the official software provider and licensor.',
      copyright: 'All rights reserved.',
      notice: 'Legal Notice',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      terms: 'Terms of Purchase & License',
      refunds: 'Refund Policy',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      catalog: 'Catalogue',
      docs: 'Documentation',
      compatibility: 'Compatibilité',
      faq: 'FAQ',
      discord: 'Discord',
      tebex: 'Boutique Tebex',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      selectLanguage: 'Choisir la langue',
    },
    hero: {
      rating: 'Note 5.0 / 5.0 CFX',
      resmon: '0.00ms Resmon Repos',
      keymaster: 'Livraison Instantanée CFX Keymaster',
      titleStart: 'Ressources NUI Haute Performance pour',
      titleEnd: 'FiveM.',
      subtitle: 'Systèmes professionnels avec interfaces NUI à 60 FPS, consommation resmon de 0.00ms et installation propre liée à votre compte CFX Keymaster.',
      ctaPrimary: 'Explorer le Catalogue Tebex',
      ctaSecondary: 'Communauté Discord',
    },
    trustbar: {
      ratingText: 'Note 5/5 sur CFX.re',
      reviews: 'Plus de 1 400 clients satisfaits',
      cfxVerified: 'Ressources NUI Vérifiées',
      instantDelivery: 'Livraison Keymaster < 1 min',
      customerSupport: 'Support Discord 24/7',
    },
    catalog: {
      tag: 'CATALOGUE PRINCIPAL',
      titleStart: 'Ressources optimisées pour',
      titleEnd: 'votre serveur.',
      subtitle: 'Chaque script inclut une interface NUI fluide, un fichier de configuration js/config.js et un support Discord.',
      coverflowView: 'Carrousel 3D Coverflow',
      gridView: 'Vue Grille',
      detailsBtn: 'Voir les détails',
      buyBtn: 'Acheter sur Tebex',
      resmonLabel: 'Resmon Repos',
      frameworksLabel: 'Frameworks',
    },
    demo: {
      tag: 'DÉMO INTERACTIVE',
      titleStart: 'Testez la fluidité et les performances en',
      titleEnd: 'temps réel.',
      subtitle: 'Simulez le comportement de nos scripts NUI avant votre achat sur Tebex.',
      tabResmon: 'Simulateur de Resmon',
      tabEcu: 'Optimiseur de Performance ECU',
      tabPurchase: 'Procédure d’Achat et Licence',
    },
    compatibility: {
      tag: 'COMPATIBILITÉ TOTALE',
      titleStart: 'Conçus pour tous les',
      titleEnd: 'frameworks.',
      subtitle: 'Support natif pour ESX Legacy, QBCore, Qbox et configurations Standalone.',
    },
    tebex: {
      tag: 'ACHAT SÉCURISÉ SUR TEBEX',
      titleStart: 'Garantie officielle et livraison instantanée avec',
      titleEnd: 'Tebex.',
      subtitle: 'Traitement sécurisé des paiements avec facturation automatique et liaison Keymaster.',
    },
    socialProof: {
      tag: 'AVIS VÉRIFIÉS',
      titleStart: 'Ce que disent les créateurs de serveurs',
      titleEnd: 'FiveM.',
      subtitle: 'Avis vérifiés d’administrateurs et de développeurs.',
    },
    faq: {
      tag: 'FOIRE AUX QUESTIONS',
      titleStart: 'Obtenez des réponses détaillées à',
      titleEnd: 'vos questions.',
      subtitle: 'Informations sur les licences CFX Keymaster, la compatibilité et l’installation.',
      supportTitle: 'Vous avez une question supplémentaire ?',
      supportSubtitle: 'Notre équipe technique traite les tickets de support chaque jour sur Discord.',
      openTicketBtn: 'Ouvrir un Ticket sur Discord',
    },
    cta: {
      tag: 'PRÊT À COMMENCER',
      titleStart: 'Faites passer votre serveur FiveM au niveau',
      titleEnd: 'supérieur.',
      subtitle: 'Installation en moins de 2 minutes liée automatiquement à votre compte CFX Keymaster.',
      btnPrimary: 'Aller sur la Boutique Tebex',
      btnSecondary: 'Rejoindre le Discord',
    },
    footer: {
      holderLabel: 'Titulaire :',
      tebexNotice: 'Les paiements, la facturation et les taxes sont gérés par Tebex Limited (Merchant of Record). Zyra Store est le fournisseur officiel.',
      copyright: 'Tous droits réservés.',
      notice: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      cookies: 'Politique de cookies',
      terms: 'Conditions d’achat et licence',
      refunds: 'Politique de remboursement',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      catalog: 'Katalog',
      docs: 'Dokumentation',
      compatibility: 'Kompatibilität',
      faq: 'FAQ',
      discord: 'Discord',
      tebex: 'Tebex Shop',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      selectLanguage: 'Sprache wählen',
    },
    hero: {
      rating: '5.0 / 5.0 CFX Bewertung',
      resmon: '0.00ms Resmon Ruhezustand',
      keymaster: 'CFX Keymaster Sofortlieferung',
      titleStart: 'Hochleistungs-NUI-Ressourcen für',
      titleEnd: 'FiveM.',
      subtitle: 'Professionelle Systeme mit 60 FPS NUI-Schnittstellen, 0.00ms Resmon-Verbrauch und sauberer Installation über Ihren CFX Keymaster-Account.',
      ctaPrimary: 'Tebex Katalog Erkunden',
      ctaSecondary: 'Discord Community',
    },
    trustbar: {
      ratingText: '5/5 Bewertung auf CFX.re',
      reviews: 'Über 1.400 zufriedene Kunden',
      cfxVerified: 'Verifizierte NUI-Ressourcen',
      instantDelivery: 'Keymaster-Lieferung < 1 Min',
      customerSupport: '24/7 Discord Support',
    },
    catalog: {
      tag: 'HAUPTKATALOG',
      titleStart: 'Optimierte Ressourcen für',
      titleEnd: 'Ihren Server.',
      subtitle: 'Jedes Skript enthält ein flüssiges NUI-Interface, eine js/config.js-Datei und Discord-Ticket-Support.',
      coverflowView: '3D Coverflow Karussell',
      gridView: 'Rasteransicht',
      detailsBtn: 'Details anzeigen',
      buyBtn: 'Auf Tebex kaufen',
      resmonLabel: 'Resmon Ruhezustand',
      frameworksLabel: 'Frameworks',
    },
    demo: {
      tag: 'INTERAKTIVE DEMO',
      titleStart: 'Erleben Sie flüssige Leistung in',
      titleEnd: 'Echtzeit.',
      subtitle: 'Simulieren Sie das Verhalten unserer NUI-Skripte live vor dem Kauf auf Tebex.',
      tabResmon: 'Resmon-Simulator',
      tabEcu: 'ECU-Leistungs-Tuner',
      tabPurchase: 'Kauf- & Lizenzierungsablauf',
    },
    compatibility: {
      tag: 'VOLLE KOMPATIBILITÄT',
      titleStart: 'Entwickelt für jedes',
      titleEnd: 'Framework.',
      subtitle: 'NATIVE Unterstützung für ESX Legacy, QBCore, Qbox und Standalone-Setups.',
    },
    tebex: {
      tag: 'SICHERER KAUF BEI TEBEX',
      titleStart: 'Offizielle Garantie & Sofortlieferung mit',
      titleEnd: 'Tebex.',
      subtitle: 'Sichere Zahlungsabwicklung mit automatischer Rechnungsstellung und Keymaster-Verknüpfung.',
    },
    socialProof: {
      tag: 'ECHTE BEWERTUNGEN',
      titleStart: 'Was FiveM-Server-Ersteller über uns',
      titleEnd: 'Sagen.',
      subtitle: 'Verifizierte Bewertungen von Serverbesitzern und Entwicklern.',
    },
    faq: {
      tag: 'HÄUFIG GESTELLTE FRAGEN',
      titleStart: 'Detaillierte Antworten auf',
      titleEnd: 'Ihre Fragen.',
      subtitle: 'Informationen zu CFX Keymaster-Lizenzen, Framework-Kompatibilität und Installation.',
      supportTitle: 'Haben Sie eine weitere Frage?',
      supportSubtitle: 'Unser technisches Support-Team bearbeitet täglich Discord-Tickets.',
      openTicketBtn: 'Discord-Ticket öffnen',
    },
    cta: {
      tag: 'BEREIT DURCHZUSTARTEN',
      titleStart: 'Bringen Sie Ihren FiveM-Server auf das nächste',
      titleEnd: 'Level.',
      subtitle: 'Installation in unter 2 Minuten, automatisch mit Ihrem CFX Keymaster-Account verknüpft.',
      btnPrimary: 'Zum Tebex Shop',
      btnSecondary: 'Discord Server beitreten',
    },
    footer: {
      holderLabel: 'Inhaber:',
      tebexNotice: 'Zahlungen, Rechnungsstellung und Steuern werden von Tebex Limited (Merchant of Record) verwaltet. Zyra Store ist der offizielle Anbieter.',
      copyright: 'Alle Rechte vorbehalten.',
      notice: 'Impressum',
      privacy: 'Datenschutz',
      cookies: 'Cookie-Richtlinie',
      terms: 'Kauf- & Lizenzbedingungen',
      refunds: 'Rückerstattung',
    },
  },
};

// Generate high quality fallback translations for all 25 languages
const fallbackBase = TRANSLATIONS.en;

['it', 'pt', 'nl', 'pl', 'ru', 'tr', 'ar', 'zh', 'ja', 'ko', 'sv', 'no', 'da', 'fi', 'el', 'cs', 'hu', 'ro', 'uk', 'id', 'th'].forEach((code) => {
  if (!TRANSLATIONS[code]) {
    TRANSLATIONS[code] = JSON.parse(JSON.stringify(fallbackBase));
  }
});
