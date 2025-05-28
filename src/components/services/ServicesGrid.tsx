import { BootstrapIcon } from '../shared';
import { ServiceCard } from './ServiceCard';
import type { ServiceItem } from '../../types';

const services: ServiceItem[] = [
    {
        icons: ['android2', 'apple'],
        title: 'Apps Móviles',
        description: '¿Necesitas una App? Te ofrezco soluciones personalizadas para que tu negocio crezca en el ecosistema móvil.',
        benefits: ['iOS & Android', 'UI/UX moderna'],
        delay: 0.3,
    },
    {
        icons: ['globe', 'hdd-rack'],
        title: 'Integración de Sistemas',
        description: '¿Necesitas integrar tus sistemas? Automatizo tus procesos con APIs RESTFul, conecto servicios externos y gestiono datos en la nube.',
        benefits: ['Estandares de seguridad OWASP', 'Escalabilidad y Optimización', 'Documentación clara', ],
        delay: 0.4,
    },
    {
        icons: ['openai', 'anthropic'],
        title: 'Integración con AI',
        description: 'La inteligencia artificial es el futuro. Te ofrezco su integración para mejorar la experiencia de tus clientes.',
        benefits: ['Asistentes de AI', 'Automatización inteligente', 'Análisis predictivo'],
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
