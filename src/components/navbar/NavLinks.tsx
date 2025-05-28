import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggleButton } from './ThemeToggleButton';
import { SocialLinkButtons } from '../shared';
import type { NavLink } from '../../types';

const navLinks: NavLink[] = [
    {
        text: 'Servicios',
        href: 'services',
    },
    {
        text: 'Portafolio',
        href: 'portfolio',
    },
    {
        text: 'Sobre mí',
        href: 'about',
    }
];

export const NavLinks: React.FC = () => {
    const containerVariants = {
        hidden: {
            height: 0,
            opacity: 0
        },
        visible: {
            height: 'auto',
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            y: 20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="h-full md:h-auto flex flex-col flex-grow md:items-center md:justify-end md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:transform-none dark:text-dark-primary"
            >
                <ThemeToggleButton className='hidden sm:block' />
                {navLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        variants={itemVariants}
                        className="px-5 py-1 text-base font-poppins font-medium text-center bg-gradient-to-r 
                        from-sky-300 via-sky-400 to-sky-500 dark:from-sky-600 dark:via-sky-700 dark:to-sky-800 hover:from-sky-500 hover:to-sky-700 dark:hover:from-sky-600 dark:hover:to-sky-900 shadow-md shadow-sky-400 dark:shadow-sky-700 transition-all duration-300 ease-in-out hover:scale-105 text-gray-900 dark:text-gray-50 rounded-full border border-sky-500 dark:border-sky-800 transform"
                        href={`#${link.href}`}
                        onClick={(e) => handleScroll(e, link.href)}
                    >
                        {link.text}
                    </motion.a>
                ))}
                <SocialLinkButtons />
            </motion.nav>
        </AnimatePresence>
    );
};
