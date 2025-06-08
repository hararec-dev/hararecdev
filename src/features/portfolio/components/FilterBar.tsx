'use client';
import { motion } from 'framer-motion';
import type { FilterBarProps, ProjectPlatform, ProjectType } from "@/features/portfolio/types";

export const FilterBar: React.FC<FilterBarProps> = ({
    currentType,
    currentPlatform,
    onTypeChange,
    onPlatformChange,
    types,
    platforms
}) => {
    const filters = [
        {
            id: 'type-filter',
            label: 'Tipo:',
            value: currentType,
            onChange: (value: string) => onTypeChange(value as ProjectType),
            options: types
        },
        {
            id: 'platform-filter',
            label: 'Plataforma:',
            value: currentPlatform,
            onChange: (value: string) => onPlatformChange(value as ProjectPlatform),
            options: platforms
        }
    ];

    return (
        <motion.div
            className="py-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ amount: 0.2 }}
        >
            <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-4">
                {filters.map(filter => (
                    <div key={filter.id} className="flex items-center">
                        <label
                            htmlFor={filter.id}
                            className="font-semibold font-poppins text-sky-700 dark:text-sky-300 mr-2"
                        >
                            {filter.label}
                        </label>
                        <select
                            id={filter.id}
                            value={filter.value}
                            onChange={(e) => filter.onChange(e.target.value)}
                            className="p-2 border-2 border-sky-300 dark:border-sky-700 rounded-lg bg-gradient-to-r from-white via-sky-50 to-sky-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 font-open-sans shadow-sm transition"
                        >
                            {filter.options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
