import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Logo, MobileMenuButton, NavLinks, ThemeToggleButton } from '@components/navbar';

export const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.nav
            className="w-full text-background-light dark:text-background-dark backdrop-filter backdrop-blur-sm font-work fixed z-50 pb-4 md:pb-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col max-w-screen-xl px-8 mx-auto md:items-center md:justify-center md:flex-row">
                <div className="flex flex-row items-center justify-between py-2">
                    <Logo />
                    <div className='flex justify-center gap-6 md:hidden'>
                        <ThemeToggleButton />
                        <MobileMenuButton onClick={() => setOpen(!open)} />
                    </div>
                </div>
                {open && <NavLinks />}
            </div>
        </motion.nav>
    );
};
