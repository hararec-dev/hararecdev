import type { SocialLink } from "../types";

export const getSocialLinks = (): SocialLink[] => {
    return [
        {
            href: `https://api.whatsapp.com/send?phone=525542084239&text=${encodeURIComponent('¡Hola!, quiero hablar de mi nuevo proyecto 🚀')}`,
            bgColor: 'bg-green-500',
            hoverColor: 'hover:bg-green-600',
            shadowColor: 'shadow-green-500/70',
            ariaLabel: 'WhatsApp',
            iconName: 'whatsapp',
            delay: 0.2,
        },
        {
            href: 'tel:+525542084239',
            bgColor: 'bg-blue-500',
            hoverColor: 'hover:bg-blue-600',
            shadowColor: 'shadow-blue-500/70',
            ariaLabel: 'Llamada',
            iconName: 'telephone-fill',
            delay: 0.4,
        },
        {
            href: 'mailto:hararecdev@gmail.com',
            bgColor: 'bg-red-500',
            hoverColor: 'hover:bg-red-600',
            shadowColor: 'shadow-red-500/70',
            ariaLabel: 'Email',
            iconName: 'envelope-at-fill',
            delay: 0.6,
        },
        {
            href: 'https://www.linkedin.com/in/hararec-dev',
            bgColor: 'bg-blue-700',
            hoverColor: 'hover:bg-blue-800',
            shadowColor: 'shadow-blue-700/70',
            ariaLabel: 'LinkedIn',
            iconName: 'linkedin',
            delay: 0.8,
        },
        {
            href: 'https://x.com/hararec_dev',
            bgColor: 'bg-gray-800',
            hoverColor: 'hover:bg-gray-900',
            shadowColor: 'shadow-gray-800/70',
            ariaLabel: 'X',
            iconName: 'twitter-x',
            delay: 1,
        },
        /* {
          href: 'https://www.facebook.com/hararec.medinagonzalez/',
          bgColor: 'bg-blue-600',
          hoverColor: 'hover:bg-blue-700',
          shadowColor: 'shadow-blue-600/70',
          ariaLabel: 'Facebook',
          iconName: 'facebook',
          delay: 2,
        }, */
    ];
}