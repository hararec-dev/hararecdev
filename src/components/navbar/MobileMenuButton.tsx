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
            className="rounded-full md:hidden focus:outline-none focus:ring-2 focus:ring-fuchsia-400 dark:focus:ring-fuchsia-800 bg-gradient-to-tr from-fuchsia-200 via-fuchsia-300 to-fuchsia-400 dark:from-fuchsia-800 dark:via-fuchsia-900 dark:to-fuchsia-950 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-110 px-3"
            onClick={handleClick}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
            {open ? (
                <BootstrapIcon name="x" className="w-7 h-7 text-background-dark dark:text-background-light transition-transform duration-300" />
            ) : (
                <BootstrapIcon name="list" className="w-7 h-7 text-background-dark dark:text-background-light transition-transform duration-300" />
            )}
        </button>
    );
};
