import { motion } from "motion/react";
import { BootstrapIcon } from "./BootstrapIcon";

export const WhatsAppButton = () => {
    const whatsappLink = {
        href: `https://api.whatsapp.com/send?phone=525542084239&text=${encodeURIComponent('¡Hola!, quiero hablar de mi nuevo proyecto 🚀')}`,
        bgColor: 'bg-green-500',
        hoverColor: 'hover:bg-green-600',
        shadowColor: 'shadow-green-500/70',
        ariaLabel: 'WhatsApp',
        iconName: 'whatsapp',
        delay: 0.4,
    };

    return (
        <motion.div
            transition={{ duration: 0.5, delay: whatsappLink.delay }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            className="fixed bottom-5 right-6 z-40 md:hidden"
        >
            <a
                href={whatsappLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative px-4 py-3 rounded-full border-2 border-white shadow-lg ${whatsappLink.bgColor} text-white hover:scale-110 transition-all duration-300 ease-in-out flex items-center justify-center ${whatsappLink.shadowColor} group overflow-hidden`}
                aria-label={whatsappLink.ariaLabel}
            >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-tr from-white via-fuchsia-200 to-transparent dark:from-fuchsia-900 dark:via-fuchsia-800"></span>
                <BootstrapIcon name={whatsappLink.iconName} className="relative z-10 text-3xl group-hover:animate-pulse" />
            </a>
        </motion.div>
    );
};