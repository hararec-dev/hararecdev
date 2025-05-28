import { useContext } from 'react';
import { motion } from 'motion/react';
import { SummaryText } from './SummaryText';
import { ThemeContext } from '../../context';
import { SectionTitle } from '../shared';
import type { ProfileData } from '../../types';

const PROFILE_DATA: ProfileData = {
    summary: "Mi experiencia prueba que entenderé tus necesidades para ofrecer soluciones optimas en tu negocio. Priorizo la calidad, la comunicación constante y la resolución proactiva de problemas, buscando ser tu socio tecnológico y superar siempre tus expectativas.",
    experience: [
        "Desarrollador Full-Stack en MAS SERVICIOS México, 2023 - 2024.",
        "Desarrollador Junior en Indra Sistemas México, S.A. De C.V. (2021)"
    ],
    education: [
        "Lic. Matemáticas, Facultad de Ciencias UNAM",
        "Certificaciones en Desarrollo Mobile/Full-Stack - Udemy"
    ],
    cvUrl: "/pdf/curriculum-hararec.pdf"
};

export const AboutSection: React.FC = () => {
    const themeContext = useContext(ThemeContext);
    const currentTheme = themeContext?.theme || 'light';
    const imageSrc = currentTheme === 'dark'
        ? '/images/undraw_feeling-proud_tdos-dark.svg'
        : '/images/undraw_feeling-proud_tdos-light.svg';

    return (
        <motion.section
            id="about"
            className="w-full py-14 px-4 shadow-[0_-35px_60px_-15px_rgba(0,0,0,0.3)] shadow-sky-300 dark:shadow-sky-700 bg-gradient-to-br from-secondary-light/70 to-background-light/40 dark:from-secondary-dark/90 dark:to-background-dark/70 bg-opacity-10 border dark:border-primary/10 border-white"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
        >
            <SectionTitle
                headerTitle='Sobre mí'
                headerSubtitle='¡Hola! Soy Hararec, un desarrollador Freelancer y también profesor de Matemáticas, con más de 3 años de experiencia en el mundo de la tecnología.'
                imageAlt='Sobre mí'
                imageSrc={imageSrc}
                methodologyItems={[]}
                methodologyTitle=''
                hasMethodology={false}
            />
            <SummaryText
                summary={PROFILE_DATA.summary}
                education={PROFILE_DATA.education}
                experience={PROFILE_DATA.experience}
                cvUrl={PROFILE_DATA.cvUrl}
            />
        </motion.section>
    );
};
