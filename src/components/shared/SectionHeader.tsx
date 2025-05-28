import { motion } from 'motion/react';
import { GradientText } from './GradientText';
import type { ServicesHeaderProps } from '../../types';

export const SectionHeader: React.FC<ServicesHeaderProps> = ({ title, subtitle }) => (
    <motion.header
        className="text-center mb-10"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
    >
        <h2 className="text-3xl lg:text-5xl font-poppins font-semibold mb-3 text-background-dark dark:text-background-light tracking-tight drop-shadow-lg">
            {title.split(' ')[0]}<GradientText> {title.split(' ')[1]}</GradientText>
        </h2>
        <div className="mx-auto w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4" />
        <p className="text-lg md:text-xl px-6 text-left font-work text-background-dark dark:text-background-light opacity-80">{subtitle}</p>
    </motion.header>
);
