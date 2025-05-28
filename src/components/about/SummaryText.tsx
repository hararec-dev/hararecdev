import { motion } from 'framer-motion';
import type { AboutSection, SummaryTextProps } from "../../types";

export const SummaryText: React.FC<SummaryTextProps> = ({ summary, education, experience, cvUrl }) => {
    const sections: AboutSection[] = [
        {
            title: "Experiencia",
            items: experience,
            keyPrefix: "exp"
        },
        {
            title: "Formación",
            items: education,
            keyPrefix: "edu"
        },
    ];

    return (
        <motion.div
            className="p-8 md:p-10 flex flex-col items-center text-center max-w-3xl mx-auto transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ amount: 0.3 }}
        >
            <motion.p
                className="text-lg text-left mb-6 text-background-dark dark:text-background-light font-open opacity-90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
            >{summary}</motion.p>
            <div className="grid md:grid-cols-2 gap-8 mb-8 w-full">
                {sections.map((section) => (
                    <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ amount: 0.3 }}
                        className="bg-gradient-to-br from-secondary-light/60 to-background-light dark:from-secondary-dark/80 dark:to-background-dark rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl focus-within:ring-4 ring-primary/40 border border-primary/10"
                    >
                        <h3 className="text-2xl font-bold mb-3 text-primary dark:text-cyan-300 font-poppins drop-shadow-sm tracking-tight">
                            {section.title}
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-background-dark dark:text-background-light font-open">
                            {section.items.map((item, index) => (
                                <motion.li
                                    key={`${section.keyPrefix}-${index}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    viewport={{ amount: 0.3 }}
                                >{item}</motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
            <motion.a
                href={cvUrl}
                download
                className="w-full inline-block bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-poppins font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:ring-4 ring-primary/40 border border-primary/10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ amount: 0.3 }}
            >
                ¡Descarga mi CV!
            </motion.a>
        </motion.div>
    );
};
