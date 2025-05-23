import { motion } from 'motion/react';
import { FooterCopyright, ContactForm } from '../footer';
import contact from '/images/undraw_new-message_nl8w.svg';

export const Footer: React.FC = () => {
    return (
        <motion.footer
            className='bg-primary-light dark:bg-primary-dark'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-8 px-4"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <img 
                    src={contact} 
                    alt="Contacto ilustración" 
                    className="w-40 md:w-64 mt-4 md:mr-8 flex-shrink-0" 
                />
                <div className="flex-1 w-full">
                    <ContactForm />
                    <FooterCopyright />
                </div>
            </motion.div>
        </motion.footer>
    );
};
