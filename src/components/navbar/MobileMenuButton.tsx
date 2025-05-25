import { useState } from 'react';
import type { MobileMenuButtonProps } from '../../types';
import { BootstrapIcon } from '../shared/BootstrapIcon';

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ onClick }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
        if (onClick) onClick();
    };

    return (
        <button
            className="rounded-full md:hidden focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-sky-800 bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 dark:from-sky-600 dark:via-sky-700 dark:to-sky-800 hover:from-sky-500 hover:to-sky-700 dark:hover:from-sky-600 dark:hover:to-sky-900 shadow-md shadow-sky-400 dark:shadow-sky-700 transition-all duration-300 ease-in-out hover:scale-110 px-3 border border-sky-500 dark:border-sky-800"
            onClick={handleClick}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
            {open ? (
                <BootstrapIcon name="x" className="w-7 h-7 text-gray-900 dark:text-gray-50 transition-transform duration-300" />
            ) : (
                <BootstrapIcon name="list" className="w-7 h-7 text-gray-900 dark:text-gray-50 transition-transform duration-300" />
            )}
        </button>
    );
};
