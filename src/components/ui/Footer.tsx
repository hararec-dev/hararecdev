import { useContext } from 'react';
import { motion } from 'motion/react';
import { FooterCopyright, ContactForm } from '../footer';
import contactDark from '/images/erica-steeves-G_lwAp0TF38-unsplash-rb.jpg';
import contactLight from '/images/erica-steeves-G_lwAp0TF38-unsplash-rb.jpg';
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
                    className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-0 lg:gap-8 px-4"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <img
                        src={context.theme === 'dark'? contactDark : contactLight}
                        alt="Contacto ilustración"
                        className="w-3/4 lg:w-2/5 drop-shadow-xl rounded-2xl"
                    />
                    <div className="flex-1 w-full">
                        <ContactForm />
                        <FooterCopyright />
                    </div>
                </motion.div>
            </motion.footer>
        );
};
