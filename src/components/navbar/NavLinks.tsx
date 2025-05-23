import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggleButton } from './ThemeToggleButton';
import type { NavLink, NavLinksProps } from '../../types';
import { SocialLinkButtons } from '../shared';

const navLinks: NavLink[] = [
    {
        text: 'Servicios',
        href: '#services',
    },
    {
        text: 'Portafolio',
        href: '#portfolio',
    },
    {
        text: 'Sobre mí',
        href: '#about',
    }
];

export const NavLinks: React.FC<NavLinksProps> = ({ open }) => {
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
                animate={open ? "visible" : "hidden"}
                className={`${open ? 'h-full' : 'h-0'} md:h-auto flex flex-col flex-grow md:items-center md:justify-end md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:transform-none dark:text-dark-primary`}
            >
                <ThemeToggleButton className='hidden sm:block'/>
                {navLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        variants={itemVariants}
                        className="px-5 py-1 text-base font-poppins font-medium text-center bg-gradient-to-r from-fuchsia-200 via-fuchsia-300 to-fuchsia-300 dark:from-fuchsia-800 dark:via-fuchsia-900 dark:to-fuchsia-950 hover:from-fuchsia-300 hover:to-fuchsia-500 dark:hover:from-fuchsia-700 dark:hover:to-fuchsia-800 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 text-background-dark dark:text-background-light rounded-full border border-fuchsia-300 dark:border-fuchsia-800 transform"
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
