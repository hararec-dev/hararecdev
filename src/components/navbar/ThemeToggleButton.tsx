import { useContext } from 'react';
import { ThemeContext } from '../../context';
import { BootstrapIcon } from '../shared/BootstrapIcon';

export const ThemeToggleButton: React.FC<{ className?: string }> = ({ className }) => {
    const context = useContext(ThemeContext);

    return !context
        ? null
        : (
            <button
                onClick={context.toggleTheme}
                className={`p-2 rounded-full bg-gradient-to-tr from-fuchsia-200 via-fuchsia-300 to-fuchsia-400 dark:from-fuchsia-800 dark:via-fuchsia-900 dark:to-fuchsia-950 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 dark:focus:ring-fuchsia-800 ${className}`}
            >
                <span className="flex items-center justify-center transition-transform duration-300 group-hover:rotate-180">
                    {context.theme === 'light' ? (
                        <BootstrapIcon name="moon-stars-fill" className="w-6 h-6 text-background-dark transition-colors duration-300" />
                    ) : (
                        <BootstrapIcon name="sun-fill" className="w-6 h-6 text-background-light transition-colors duration-300" />
                    )}
                </span>
            </button>
        );
};