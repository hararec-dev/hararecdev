import { motion } from "motion/react";
import { GradientText } from "../shared";
import type { ServiceCardProps } from "../../types";

export const ServiceCard: React.FC<ServiceCardProps> = ({ icons, title, description, benefits, delay }) => (
    <motion.div
        className="bg-gradient-to-br from-secondary-light/60 to-background-light dark:from-secondary-dark/80 dark:to-background-dark rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl focus-within:ring-4 ring-primary/40 border border-primary/10"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, delay }}
    >
        <div className="flex justify-center items-center gap-4 mb-3">
            {icons.map((icon, i) => (
                <div key={i} className="bg-primary/10 dark:bg-primary/20 rounded-full p-3 text-5xl text-background-dark dark:text-secondary shadow-md">
                    <GradientText>
                        {icon}
                    </GradientText>
                </div>
            ))}
        </div>
        <h3 className="font-bold font-poppins text-2xl mb-2 text-primary dark:text-cyan-300 tracking-tight drop-shadow-sm">
            {title}
        </h3>
        <p className="text-background-dark font-open dark:text-background-light mb-4 text-base opacity-90">
            {description}
        </p>
        <ul className="text-left font-work text-sm text-background-dark dark:text-background-light list-disc list-inside space-y-1">
            {benefits.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
    </motion.div>
);
