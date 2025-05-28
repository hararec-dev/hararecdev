import { useContext } from 'react';
import { motion } from 'motion/react';
import { ServicesGrid } from './ServicesGrid';
import { ThemeContext } from '../../context/ThemeContext';
import { CarouselOfTechnologies } from './CarouselOfTechnologies';
import { SectionTitle } from '../shared';
import type { MethodologyItem } from '../../types';

const methodologyItems: MethodologyItem[] = [
    { id: 1, text: 'Comunicación clara y transparente' },
    { id: 2, text: 'Entregas iterativas y cumplimiento de plazos' },
    { id: 3, text: 'Soluciones 100% personalizadas y adaptadas al presupuesto' }
];

export const ServicesSection: React.FC = () => {
    const themeCtx = useContext(ThemeContext);
    const theme = themeCtx?.theme || 'light';
    const imageSrc = theme === 'dark'
        ? '/images/undraw_working_n9u0-dark.svg'
        : '/images/undraw_working_n9u0-light.svg';

    return (
        <motion.section
            id="services"
            className="w-full py-14 px-4 shadow-2xl shadow-sky-300 dark:shadow-sky-700 bg-gradient-to-br from-secondary-light/40 to-background-light dark:from-secondary-dark/60 dark:to-background-dark bg-opacity-10 border dark:border-primary/10 border-white"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
        >
            <SectionTitle
                headerTitle='Servicios'
                headerSubtitle='Me especializo en apps móviles personalizadas e integración de sistemas (APIs) para impulsar tu negocio y resolver tus problemas, entregando valor real.'
                methodologyItems={methodologyItems}
                methodologyTitle='Enfoque:'
                imageAlt='Mis Servicios'
                imageSrc={imageSrc}
            />
            <div className="mt-10">
                <ServicesGrid />
                <CarouselOfTechnologies />
            </div>
        </motion.section>
    );
};
