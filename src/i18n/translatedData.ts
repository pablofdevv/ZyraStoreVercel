import { PRODUCTS, type Product } from '@/data/products';
import { FAQ_ITEMS, type FAQItem } from '@/data/faq';

export function getTranslatedProducts(langCode: string): Product[] {
  if (langCode === 'es') return PRODUCTS;

  // English & Global Translation Mapping for all 16 products
  const translationsMap: Record<string, Partial<Product>> = {
    zyra_fuel: {
      tagline: 'Advanced Fueling System with Gas Stations & Electric Chargers',
      description: 'Total control of gas stations, fuel types (95, 98, Diesel, Electric), customizable NUI interface, Jerry Cans, station management, stock system, and dynamic prices per liter.',
      category: 'Vehicle Systems',
    },
    zyra_dealerships: {
      tagline: 'Modern Dealership & Vehicle Showroom System',
      description: 'Management of private and public dealerships with 3D camera preview, test drives, vehicle financing, category filtering, employee management, and custom stock system.',
      category: 'Economy & Business',
    },
    zyra_tuning: {
      tagline: 'Professional Tuning Workshop & Custom Mechanic NUI',
      description: 'Advanced mechanic system with ECU remapping, stance camber tuning, RGB custom paint, custom bodykits, neon lights, dyno performance simulator, and engine swap system.',
      category: 'Vehicles & Mechanics',
    },
    'zyra-rental': {
      tagline: 'Multi-Location Vehicle & Boat Rental NUI',
      description: 'Automated vehicle, bicycle, boat, and aircraft rental stations with custom timers, deposits, location ping return points, and full framework compatibility.',
      category: 'Vehicles & Travel',
    },
    'zyra-adminmenu': {
      tagline: 'Next-Gen Ultra Fast Staff & Admin Management Panel',
      description: 'Complete administration menu with spectator mode, player inventory inspection, instant ban/kick/warn, weather/time manipulation, vehicle spawner, and Discord webhook logging.',
      category: 'Admin & Moderation',
    },
    zyra_gym: {
      tagline: 'Interactive Fitness, Workout & Stamina Buff System',
      description: 'Fitness centers with bench press, pull-up bars, treadmill NUI minigames, protein shakes, muscle strength stats, and progressive stamina buffs for RP servers.',
      category: 'Player Stats & Fitness',
    },
    'zyra-dispatch': {
      tagline: 'Tactical Police, EMS & Fire Dispatch Center',
      description: 'Interactive CAD/MDT dispatch system with live unit map tracking, GPS auto-navigation, panic buttons, call responder assignment, and sound alert effects.',
      category: 'Emergency & Jobs',
    },
    'zyra-hud': {
      tagline: 'Clean Minimalist 60 FPS Player Status HUD',
      description: 'Ultra-lightweight HUD displaying health, armor, hunger, thirst, stress, voice proximity circle, custom seatbelt indicator, cruise control, and speedo NUI.',
      category: 'UI & Interface',
    },
    'zyra-garage': {
      tagline: 'Multi-Pound Garage & Impound Management System',
      description: 'Advanced garage system with valet service, vehicle damage saving, engine/body status, impound fees, shared gang garages, and key transfer system.',
      category: 'Vehicles & Storage',
    },
    'zyra-housing': {
      tagline: 'Real Estate Property & Custom Furniture Decorator',
      description: 'Buying, selling, and renting houses with 3D furniture decorator tool, property stashes, wardrobe, guest key management, and customizable interiors.',
      category: 'Real Estate & Living',
    },
    'zyra-inventory': {
      tagline: 'Grid-Based Drag & Drop Item Inventory System',
      description: 'High-performance inventory with hotbar shortcuts, item durability, weapon attachments, drop bags, container stashes, and smooth NUI animations.',
      category: 'Core & Inventory',
    },
    'zyra-banking': {
      tagline: 'ATM & Modern Online Banking Interface',
      description: 'Bank account management with IBAN transfers, credit cards, transaction history, loan system, joint gang accounts, and ATM robbery minigames.',
      category: 'Economy & Finance',
    },
    'zyra-jobs': {
      tagline: 'All-in-One Legal Job Center & Task Manager',
      description: 'Job center with delivery driver, garbage collector, electrician, taxi driver, and miner jobs including leveling system and daily quest rewards.',
      category: 'Jobs & Activities',
    },
    'zyra-crafting': {
      tagline: 'Blueprint Crafting & Workbench Assembly System',
      description: 'Crafting stations with recipe blueprints, level requirements, crafting timers, workbench upgrades, and secret illegal crafting locations.',
      category: 'Crafting & Items',
    },
    'zyra-blackmarket': {
      tagline: 'Secret Illegal Crypto Market & Weapon Dealer',
      description: 'Dark web online store for illegal items, contraband, special ammo, hacking devices, dynamic crypto payments, and randomized pickup coordinates.',
      category: 'Crime & Illegal',
    },
    'zyra-billing': {
      tagline: 'Invoice & Fine Payment NUI Panel',
      description: 'Fine and invoice management system for police, EMS, and mechanics with auto-debit payments, overdue interest, and invoice creation menu.',
      category: 'Jobs & Finance',
    },
  };

  return PRODUCTS.map((p) => {
    const t = translationsMap[p.id];
    if (!t) return p;
    return {
      ...p,
      tagline: t.tagline || p.tagline,
      description: t.description || p.description,
      category: t.category || p.category,
    };
  });
}

export function getTranslatedFAQ(langCode: string): FAQItem[] {
  if (langCode === 'es') return FAQ_ITEMS;

  // Global FAQ Translations for Non-Spanish Users
  const faqTranslations: Record<string, { q: string; a: string }> = {
    frameworks: {
      q: 'Which frameworks are supported by your scripts?',
      a: 'They support ESX Legacy, QBCore, and Qbox natively. Several resources are Standalone or include bridge config files for custom frameworks.',
    },
    delivery: {
      q: 'How do I receive the download after purchasing?',
      a: 'The download is instantly unlocked on your CFX Keymaster account (keymaster.fivem.net) right after payment on Tebex.',
    },
    updates: {
      q: 'Do I need to pay for future script updates?',
      a: 'No. Whenever we release a bug fix or feature update, you can redownload it for free directly from Keymaster.',
    },
    support: {
      q: 'Where can I get technical support if I have questions?',
      a: 'We provide daily support on Discord. Open a ticket and the developer who wrote the script will assist you directly.',
    },
    dependencies: {
      q: 'Which dependencies or libraries need to be installed?',
      a: 'Each product page lists its requirements. Most scripts rely on ox_lib to maintain ultra-low 0.00ms resmon consumption.',
    },
    licensing: {
      q: 'Can I use my purchase on multiple servers at the same time?',
      a: 'The software license is automatically bound to the CFX Keymaster account that completes the purchase, following official CFX.re guidelines.',
    },
    customization: {
      q: 'Is it easy to customize colors, text, or language?',
      a: 'Yes. All text, UI positions, and languages are exposed in the js/config.js file. You never need to touch internal code.',
    },
    documentation: {
      q: 'Does it come with an installation guide?',
      a: 'Yes. Every download includes a README document with step-by-step setup instructions, database SQL tables, and clear setup notes.',
    },
    'install-help': {
      q: 'What if I need help configuring the resource?',
      a: 'Join our official Discord server and open a ticket. Our team will guide you step-by-step until it runs smoothly on your server.',
    },
    'refund-policy': {
      q: 'How do refunds work?',
      a: 'We adhere to the official Tebex Limited and CFX.re policy. If an unresolvable technical bug occurs, we process the resolution directly.',
    },
  };

  return FAQ_ITEMS.map((item) => {
    const t = faqTranslations[item.id];
    if (!t) return item;
    return {
      ...item,
      question: t.q,
      answer: t.a,
    };
  });
}
