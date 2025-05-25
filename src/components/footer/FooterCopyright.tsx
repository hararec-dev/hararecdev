import { motion } from 'motion/react';

const links = [
    { text: `🌐 ${new Date().getFullYear()}`, href: '', className: 'pr-3' },
    { text: 'Código Abierto', href: 'https://github.com/hararec-dev/hararecdev', className: 'border-l border-gray-400 dark:border-gray-900 px-3' },
    { text: 'Hecho con 💙', href: '', className: 'border-l border-gray-400 dark:border-gray-900 pl-3' }
];

export const FooterCopyright: React.FC = () => {

    return (
        <motion.div
            className="flex items-center md:text-base justify-center font-open font-semibold border-t-2 border-t-gray-50 dark:border-t-gray-900 mx-8 md:mx-0 py-4 w-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {links.map((link, index) => (
                <motion.p
                    key={index}
                    className={link.className + " transition-colors duration-200 text-foreground-light dark:text-background-dark text-opacity-60 hover:text-accent dark:hover:text-emerald-700"}
                    transition={{ duration: 0.2 }}
                >
                    {link.href ? (
                        <a 
                            href={link.href} 
                            target={link.href !== '#' ? "_blank" : undefined} 
                            rel={link.href !== '#' ? "noopener noreferrer" : undefined}
                        >
                            {link.text}
                        </a>
                    ) : (
                        link.text
                    )}
                </motion.p>
            ))}
        </motion.div>
    );
};
