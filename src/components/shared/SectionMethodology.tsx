import { motion } from 'motion/react';
import type { MethodologyProps } from "../../types";

export const SectionMethodology: React.FC<MethodologyProps> = ({ items, title }) => (
    <motion.section
        className="mb-10 px-6 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl shadow-md border border-primary/10"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
    >
        <h4 className="font-bold font-open text-primary dark:text-cyan-300 text-lg mb-3 tracking-wide">
            {title}
        </h4>
        <ul className="list-disc list-inside font-work text-gray-700 dark:text-gray-200 space-y-2 pl-2">
            {items.map((item) => (
                <li key={item.id} className="relative pl-2 before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-primary before:rounded-full">
                    {item.text}
                </li>
            ))}
        </ul>
    </motion.section>
);
