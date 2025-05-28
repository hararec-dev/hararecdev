import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ProjectGrid } from './ProjectGrid';
import { CaseStudyModal } from './CaseStudyModal';
import { ThemeContext } from '../../context';
import { SectionTitle } from '../shared';
import type { ProjectItem } from '../../types';

const allProjectsData: ProjectItem[] = [
    {
        id: '1',
        title: 'Ledger A, una App de Finanzas Personales',
        posterTitle: 'Ledger A: Finanzas Personales',
        type: 'app',
        imageUrl: '/images/ledger-a-logo.png',
        platform: 'android',
        problem: 'Crear una App de finanzas personales con funciones abanzadas en la capa gratuita.',
        solution: 'Ledger-A proporciona gestión financiera, reportes en Excel y gráficos.',
        results: 'El proyecto está en proceso de desarrollo.',
        visuals: [{ 
            type: 'iframe',
            url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7314190105211002880?compact=1',
            alt: 'Video de LinkedIn',
         }],
        repoLink: 'https://github.com/hararec-dev/ledger-a',
        liveLink: '',
        isTextDark: true,
    },
];

export const PortfolioSection: React.FC = ({ }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
    const themeContext = useContext(ThemeContext);

    const imageSrc = themeContext?.theme === 'dark'
        ? "/images/undraw_building-websites_k2zp-dark.svg"
        : "/images/undraw_building-websites_k2zp-light.svg";

    const handleProjectClick = (project: ProjectItem) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <motion.section
            id="portfolio"
            className="w-full pt-5 px-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ amount: 0.1 }}
        >
            <SectionTitle
                headerTitle='Portafolio'
                headerSubtitle='Aquí es donde las ideas se convierten en soluciones. Quiero ayudarte a superar tus desafíos y alcanzar tus objetivos. Cada proyecto es una historia de colaboración, innovación y resultados tangibles.'
                imageAlt='Mi Portafolio'
                imageSrc={imageSrc}
                methodologyItems={[]}
                methodologyTitle=''
                hasMethodology={false}
            />
            <ProjectGrid projects={allProjectsData} onProjectClick={handleProjectClick} />
            {selectedProject && (
                <CaseStudyModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    project={selectedProject}
                />
            )}
        </motion.section>
    );
};
