export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'purchase';
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'frameworks',
    question: '¿Con qué frameworks funcionan vuestros scripts?',
    answer: 'Funcionan con ESX Legacy, QBCore y Qbox. Varios recursos son Standalone o incluyen archivos de conversión para frameworks propios.',
    category: 'technical'
  },
  {
    id: 'delivery',
    question: '¿Cómo recibo el archivo tras la compra?',
    answer: 'La descarga se activa al instante en tu cuenta de CFX Keymaster una vez completado el pago en Tebex.',
    category: 'purchase'
  },
  {
    id: 'updates',
    question: '¿Tengo que pagar por las futuras actualizaciones?',
    answer: 'No. Cuando publicamos una mejora o corrección, la puedes descargar gratis directamente desde Keymaster.',
    category: 'general'
  },
  {
    id: 'support',
    question: '¿Dónde pido ayuda si tengo dudas?',
    answer: 'Atendemos por Discord. Abres un ticket y el desarrollador que ha programado el script responde para ayudarte.',
    category: 'general'
  },
  {
    id: 'dependencies',
    question: '¿Qué librerías o recursos necesito instalar antes?',
    answer: 'Cada producto indica lo que requiere en su ficha. La mayoría solo usa ox_lib para mantener el rendimiento alto.',
    category: 'technical'
  },
  {
    id: 'licensing',
    question: '¿Puedo usar la compra en varios servidores a la vez?',
    answer: 'La licencia va asociada a la cuenta de CFX Keymaster que realiza la compra, según las normas oficiales de CFX.re.',
    category: 'purchase'
  },
  {
    id: 'customization',
    question: '¿Es fácil cambiar colores, textos o idioma?',
    answer: 'Sí. Todos los textos, posiciones e idiomas están expuestos en el archivo js/config.js. No hace falta tocar el código interno.',
    category: 'technical'
  },
  {
    id: 'documentation',
    question: '¿Viene con guía de instalación?',
    answer: 'Sí. Cada descarga incluye un documento con los pasos de instalación, tablas de base de datos e instrucciones claras.',
    category: 'general'
  },
  {
    id: 'install-help',
    question: '¿Qué pasa si no sé configurar el recurso?',
    answer: 'Nos escribes por el Discord oficial y te guiamos paso a paso hasta dejarlo funcionando en tu servidor.',
    category: 'technical'
  },
  {
    id: 'refund-policy',
    question: '¿Cómo funcionan los reembolsos?',
    answer: 'Nos acogemos a la política oficial de Tebex y CFX.re. Si surge un error técnico impeditivo que no logremos resolver, tramitamos la solución directamente.',
    category: 'purchase'
  }
];
