import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';
import type { ProjectGridProps } from '../../types';


export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onProjectClick }) => {

    return !projects || projects.length === 0
        ? (
            <div className="text-center">
                <p className="text-xl text-gray-600 dark:text-gray-300">No hay proyectos para mostrar con los filtros seleccionados.</p>
            </div>
        )
        : (
            <motion.div
                className="container mx-auto px-4 py-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ amount: 0.2 }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onViewDetails={onProjectClick}
                        />
                    ))}
                </div>
            </motion.div>
        );
};
