import { useContext } from 'react';
import { ThemeContext } from '@context';
import { BootstrapIcon } from '@components/shared/BootstrapIcon';

export const ThemeToggleButton: React.FC<{ className?: string }> = ({ className }) => {
    const context = useContext(ThemeContext);

    return !context
        ? null
        : (
            <button
                onClick={context.toggleTheme}
                className={`p-2 rounded-full bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 dark:from-sky-600 dark:via-sky-700 dark:to-sky-800 hover:from-sky-500 hover:to-sky-700 dark:hover:from-sky-600 dark:hover:to-sky-900 shadow-md shadow-sky-400 dark:shadow-sky-700 transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-sky-800 border border-sky-500 dark:border-sky-800 ${className}`}
            >
                <span className="flex items-center justify-center transition-transform duration-300 group-hover:rotate-180">
                    {context.theme === 'light' ? (
                        <BootstrapIcon name="moon-stars-fill" className="w-6 h-6 text-gray-900 transition-colors duration-300" />
                    ) : (
                        <BootstrapIcon name="sun-fill" className="w-6 h-6 text-gray-50 transition-colors duration-300" />
                    )}
                </span>
            </button>
        );
};