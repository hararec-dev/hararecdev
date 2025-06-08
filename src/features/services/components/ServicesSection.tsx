import { motion } from 'framer-motion';
import { ServicesGrid } from './ServicesGrid';
import { CarouselOfTechnologies } from './CarouselOfTechnologies';
import { SectionTitle } from '@/common/components/SectionTitle';
import imageSrc from '/images/pexels-mikhail-nilov-7989239.jpg';
import type { MethodologyItem } from '@/common/types';

const methodologyItems: MethodologyItem[] = [
    { id: 1, text: 'Comunicación clara, transparente y disponible' },
    { id: 2, text: 'Entregas iterativas y cumplimiento de plazos' },
    { id: 3, text: 'Soluciones adaptadas al presupuesto' }
];

export const ServicesSection: React.FC = () => {
    return (
        <motion.section
            id="services"
            className="w-full py-14 px-4 shadow-2xl shadow-sky-300 dark:shadow-sky-700 bg-gradient-to-br from-secondary-light/40 to-background-light dark:from-secondary-dark/60 dark:to-background-dark bg-opacity-10 border dark:border-primary/10 border-white"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SectionTitle
                headerTitle='Servicios'
                headerSubtitle='¿Para quién? Emprendedores, Startups y PYMEs que quieren lanzar o validar su producto rápido, sin complicarse con lo técnico. Cada negocio es distinto, y por eso desarrollo apps móviles y web personalizadas, pensadas para poner tu marca justo en el bolsillo de tus clientes.'
                methodologyItems={methodologyItems}
                methodologyTitle='¡Seré tu socio y aliado técnico!'
                imageAlt='Mis Servicios'
                imageSrc={imageSrc.src}
            />
            <div className="mt-10">
                <ServicesGrid />
                <CarouselOfTechnologies />
            </div>
        </motion.section>
    );
};
