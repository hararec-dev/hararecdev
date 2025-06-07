import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectGrid } from './ProjectGrid';
import { CaseStudyModal } from './CaseStudyModal';
import { SectionTitle } from '@components/shared';
import imageSrc from "/images/william-hook-apps-unsplash.jpg";
import type { MethodologyItem, ProjectItem } from '@types';

const allProjectsData: ProjectItem[] = [
    {
        id: '1',
        title: 'Ledger A, una App de Finanzas Personales',
        posterTitle: 'Ledger A - App de Finanzas Personales',
        type: 'app',
        imageUrl: '/images/logo-ledger-a.png',
        platform: 'android',
        challenge: 'Crear una App de finanzas personales con funciones abanzadas en la capa gratuita.',
        solution: 'Ledger-A proporciona gestión financiera, reportes en Excel y gráficos.',
        results: 'El proyecto está en proceso de desarrollo.',
        visuals: [{ 
            type: 'iframe',
            url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7314190105211002880?compact=1',
            alt: 'Video de LinkedIn - Ledger A: Finanzas Personales',
         }],
        repoLink: 'https://github.com/hararec-dev/ledger-a',
        liveLink: '',
        isTextDark: true,
    },
];

const methodologyItems: MethodologyItem[] = [
    {
        id: 1,
        text: 'Ledger A: App de Finanzas Personales',
    },
]

export const PortfolioSection: React.FC = ({ }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
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
            viewport={{ amount: 0 }}
        >
            <SectionTitle
                headerTitle='Portafolio'
                headerSubtitle='Aquí puedes ver una muestra de cómo ayudo a negocios como el tuyo a alcanzar sus objetivos a través de soluciones web y móviles. Cada proyecto es una historia de colaboración, y de ideas convertidas en realidad.'
                imageAlt='Portafolio'
                imageSrc={imageSrc}
                methodologyItems={methodologyItems}
                methodologyTitle='Proyectos'
                hasMethodology
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
