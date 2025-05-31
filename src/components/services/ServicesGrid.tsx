import { BootstrapIcon } from '../shared';
import { ServiceCard } from './ServiceCard';
import type { ServiceItem } from '../../types';

const services: ServiceItem[] = [
    {
        icons: [
            'android2',
            'apple'
        ],
        title: 'Aplicaciones Móviles',
        description: '¿Sientes que podrías estar más cerca de tus clientes? Una app móvil bien diseñada te acerca a tu audiencia, crea lealtad y te diferencia del resto.',
        benefits: [
            'Canales venta y comunicación 24/7',
            'Diseño intuitivo que atrae usuarios',
            'Notificaciones push personalizables',
            'Disponible para iOS y Android',
            'Soporte y actualizaciones continuas'
        ],
        delay: 0.3,
    },
    {
        icons: [
            'globe',
            'hdd-rack'
        ],
        title: 'Aplicaciones Web',
        description: '¿Tu web no genera resultados o aún no tienes presencia online? Una web personalizada y optimizada para SEO impulsa tus ventas y refuerza tu imagen profesional en línea.',
        benefits: [
            'Interfaz amigable para usuarios',
            'Cobros y formularios integrados',
            'Adaptabilidad en todos los dispositivos',
            'Datos y métricas en tiempo real',
            'Tiempos de carga mínimos'
        ],
        delay: 0.4,
    },
    {
        icons: [
            'anthropic',
            'robot',
        ],
        title: 'Integración de Apps con Inteligencia Artificial',
        description: 'Mientras otros ya aprovechan la IA, ¿tú aún no? Automatiza tareas y ofrece experiencias personalizadas. Integramos Inteligencia Artificial en tus apps para ayudarte a crecer.',
        benefits: [
            'Chatbots y otras soluciones de IA',
            'Recomendadores personalizados',
            'Fácil conexión con tus apps existentes'
        ],
        delay: 0.5,
    },
];

export const ServicesGrid: React.FC = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-8">
        {services.map((service, index) => (
            <ServiceCard
                key={index}
                icons={service.icons.map(icon => <BootstrapIcon name={icon} />)}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                delay={service.delay}
            />
        ))}
    </div>
);
