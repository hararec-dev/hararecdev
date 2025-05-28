import { motion } from "motion/react";
import { getSocialLinks } from "../../helpers";
import { BootstrapIcon } from "./BootstrapIcon";

export const SocialLinkButtons = () => {
  const socialLinks = getSocialLinks();

  return (
    <div className="flex space-x-4 items-center justify-center">
      {socialLinks.map((link, index) => (
        <motion.div key={index}
          transition={{ duration: 0.5, delay: link.delay }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
        >
          <a
            href={link.href}
            target={link.ariaLabel === 'Llamada' || link.ariaLabel === 'Email' ? undefined : "_blank"}
            rel={link.ariaLabel === 'Llamada' || link.ariaLabel === 'Email' ? undefined : "noopener noreferrer"}
            className={`relative px-2 py-1 xl:px-3 xl:py-2 rounded-full border-2 border-white shadow-lg ${link.bgColor} text-white hover:scale-110 transition-all duration-300 ease-in-out flex items-center justify-center ${link.shadowColor} group overflow-hidden`}
            aria-label={link.ariaLabel}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-tr from-white via-fuchsia-200 to-transparent dark:from-fuchsia-900 dark:via-fuchsia-800"></span>
            <BootstrapIcon name={link.iconName} className="relative z-10 text-2xl xl:text-3xl group-hover:animate-pulse" />
          </a>
        </motion.div>
      )
      )}
    </div >
  );
};
