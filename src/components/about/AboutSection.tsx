import { motion } from 'motion/react';
import { SummaryText } from './SummaryText';
import { SectionTitle } from '@components/shared';
import imageSrc from '/images/selfie.png';
import type { ProfileData } from '@types';

const PROFILE_DATA: ProfileData = {
    summary: "",
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

    return (
        <motion.section
            id="about"
            className="w-full py-14 px-4 shadow-[0_-35px_60px_-15px_rgba(0,0,0,0.3)] shadow-sky-300 dark:shadow-sky-700 bg-gradient-to-br from-secondary-light/70 to-background-light/40 dark:from-secondary-dark/90 dark:to-background-dark/70 bg-opacity-10 border dark:border-primary/10 border-white"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SectionTitle
                headerTitle='Sobre mí'
                headerSubtitle='¡Hola! Soy Hararec, desarrollador con +3 años creando apps y webs. Mi misión es simple: Ayudarte a digitalizar tu negocio sin que la tecnología sea un dolor de cabeza. Trabajo contigo en español, en tu horario y desde CDMX. No soy una agencia costosa ni un freelancer distante, soy tu socio de confianza.'
                imageAlt='Sobre mí'
                imageSrc={imageSrc}
                methodologyItems={[]}
                methodologyTitle=''
                hasMethodology={false}
                roundedImage
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
