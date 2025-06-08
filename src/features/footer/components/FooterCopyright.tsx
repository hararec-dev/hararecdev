import { motion } from 'framer-motion';

const links = [
    { text: `🌐 ${new Date().getFullYear()}`, href: '', className: 'pr-3' },
    { text: 'Web de código abierto', href: 'https://github.com/hararec-dev/hararecdev', className: 'border-l border-gray-400 dark:border-gray-900 px-3' },
    { text: 'Hecho con 💙', href: '', className: 'border-l border-gray-400 dark:border-gray-900 pl-3' }
];

export const FooterCopyright: React.FC = () => {

    return (
        <motion.div
            className="flex items-center md:text-base justify-center font-poppins font-semibold border-t-2 border-t-primary/10 mx-8 md:mx-0 py-4 w-auto shadow-inner rounded-b-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {links.map((link, index) => (
                <motion.p
                    key={index}
                    className={link.className + " transition-colors duration-200 text-background-dark dark:text-background-light text-opacity-70 hover:text-primary dark:hover:text-cyan-300 font-open"}
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
