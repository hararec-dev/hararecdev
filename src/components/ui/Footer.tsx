import { useContext } from 'react';
import { motion } from 'motion/react';
import { FooterCopyright, ContactForm } from '../footer';
import contactDark from '/images/undraw_team-chat_kjj8-dark.svg';
import contactLight from '/images/undraw_team-chat_kjj8-light.svg';
import { ThemeContext } from '../../context';

export const Footer: React.FC = () => {
    const context = useContext(ThemeContext);

    return !context?.theme
        ? null
        : (
            <motion.footer
                className="bg-gradient-to-br from-secondary-light/80 to-background-light dark:from-secondary-dark/80 dark:to-background-dark border-t-2 border-primary/10 font-poppins"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-8 px-4 py-8"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <img
                        src={context.theme === 'dark'? contactDark : contactLight}
                        alt="Contacto ilustración"
                        className="w-40 md:w-60 mt-4 md:mr-8 flex-shrink-0 drop-shadow-xl rounded-2xl"
                    />
                    <div className="flex-1 w-full">
                        <ContactForm />
                        <FooterCopyright />
                    </div>
                </motion.div>
            </motion.footer>
        );
};
