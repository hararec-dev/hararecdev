import { useState } from "react";
import { motion } from "framer-motion";
import type { ProjectCardProps } from "../../types";

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
    const [isHovered, setIsHovered] = useState(false);
    const mediaUrl = project.gifUrl || project.videoUrl || project.imageUrl;
    const mediaType = project.gifUrl ? 'gif' : project.videoUrl ? 'video' : 'image';

    return (
        <motion.div
            className="relative rounded-2xl shadow-xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-sky-50 via-white to-sky-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-sky-100 dark:border-sky-800"
            onClick={() => onViewDetails(project)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: project.delay || 0.2 }}
            viewport={{ amount: 0.2 }}
        >
            {mediaType === 'image' && mediaUrl && (
                <img
                    src={mediaUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
            )}
            {mediaType === 'gif' && mediaUrl && (
                <img
                    src={mediaUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
            )}
            {mediaType === 'video' && mediaUrl && (
                <video
                    src={mediaUrl}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    autoPlay={isHovered} // Autoplay on hover might be too much, consider a play button
                    muted
                    loop
                    playsInline
                    preload="metadata" // For faster loading of video metadata
                >
                    Tu navegador no soporta el tag de video.
                </video>
            )}
            {!mediaUrl && (
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">Sin visual disponible</p>
                </div>
            )}

            <div className="absolute inset-0 bg-opacity-60 transition-all duration-300 flex flex-col items-center justify-center p-4 hover:bg-background-dark/20">
                <h3 className={`${project.isTextDark ? 'text-background-dark' : 'text-background-light'} backdrop-filter backdrop-blur-md rounded-2xl text-2xl font-bold font-poppins mb-8 opacity-100 transition-opacity duration-300 delay-100 text-center drop-shadow-lg py-2 px-4`}>
                    {project.posterTitle}
                </h3>
                <button
                    className="text-white bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 py-2 px-6 rounded-lg font-poppins font-semibold shadow-lg opacity-100 transition-all duration-300 delay-200 transform translate-y-0"
                >
                    Ver Detalles
                </button>
            </div>
        </motion.div>
    );
};
