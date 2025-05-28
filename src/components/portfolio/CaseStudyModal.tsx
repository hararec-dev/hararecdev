import { motion } from 'framer-motion';
import type { CaseStudyModalProps, Visual } from "../../types";

const ProjectSection: React.FC<{ title: string; content: string }> = ({ title, content }) => (
    <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{content}</p>
    </div>
);

const VisualContent: React.FC<{ visual: Visual; projectTitle: string }> = ({ visual, projectTitle }) => (
    <div className="rounded-lg overflow-hidden shadow-md">
        {visual.type === 'image' ? (
            <img src={visual.url} alt={visual.alt || projectTitle} className="w-full h-auto object-cover" />
        ) : visual.type === 'video' ? (
            <video src={visual.url} controls className="w-full h-auto">
                Su navegador no soporta la etiqueta de vídeo.
            </video>
        ) : (
            <iframe
                src={visual.url}
                title={visual.alt || projectTitle}
                className="w-full h-64 md:h-80 border-none"
                allowFullScreen
            />
        )}
    </div>
);

const ProjectLink: React.FC<{ href: string; variant: 'primary' | 'secondary'; children: React.ReactNode }> = ({ href, variant, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${variant === 'primary' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700 hover:bg-gray-800'
            } text-white font-semibold py-2 px-6 rounded-lg transition duration-300`}
    >
        {children}
    </a>
);

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, project }) => {
    if (!isOpen || !project) return null;

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out"
            onClick={onClose}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="bg-gradient-to-br from-white via-sky-50 to-sky-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border border-sky-200 dark:border-sky-800 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-modalShow"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl"
                >
                    &times;
                </button>

                <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-6 text-gray-800 dark:text-white">
                    {project.title}
                </h2>

                <ProjectSection title="Problema" content={project.problem} />
                <ProjectSection title="Solución" content={project.solution} />
                <ProjectSection title="Resultados" content={project.results} />

                {project.visuals?.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-200">Imágenes</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.visuals.map((visual, index) => (
                                <VisualContent key={index} visual={visual} projectTitle={project.title} />
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-wrap gap-4 mt-8">
                    {project.liveLink && (
                        <ProjectLink href={project.liveLink} variant="primary">
                            <span className="font-poppins">Ver proyecto en vivo</span>
                        </ProjectLink>
                    )}
                    {project.repoLink && (
                        <ProjectLink href={project.repoLink} variant="primary">
                            Ver repositorio
                        </ProjectLink>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};
