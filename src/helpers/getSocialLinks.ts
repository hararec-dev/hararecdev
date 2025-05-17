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
            delay: 1,
            isVisibleInMobile: true,
        },
        {
            href: 'tel:+525542084239',
            bgColor: 'bg-blue-500',
            hoverColor: 'hover:bg-blue-600',
            shadowColor: 'shadow-blue-500/70',
            ariaLabel: 'Llamada',
            iconName: 'telephone-fill',
            delay: 1.2,
            isVisibleInMobile: true,
        },
        {
            href: 'mailto:hararecdev@gmail.com',
            bgColor: 'bg-red-500',
            hoverColor: 'hover:bg-red-600',
            shadowColor: 'shadow-red-500/70',
            ariaLabel: 'Email',
            iconName: 'envelope-at-fill',
            delay: 1.4,
            isVisibleInMobile: true,
        },
        {
            href: 'https://www.linkedin.com/in/hararec-dev',
            bgColor: 'bg-blue-700',
            hoverColor: 'hover:bg-blue-800',
            shadowColor: 'shadow-blue-700/70',
            ariaLabel: 'LinkedIn',
            iconName: 'linkedin',
            delay: 1.6,
            isVisibleInMobile: false,
        },
        {
            href: 'https://x.com/hararec_dev',
            bgColor: 'bg-gray-800',
            hoverColor: 'hover:bg-gray-900',
            shadowColor: 'shadow-gray-800/70',
            ariaLabel: 'X',
            iconName: 'twitter-x',
            delay: 1.8,
            isVisibleInMobile: false,
        },
        /* {
          href: 'https://www.facebook.com/hararec.medinagonzalez/',
          bgColor: 'bg-blue-600',
          hoverColor: 'hover:bg-blue-700',
          shadowColor: 'shadow-blue-600/70',
          ariaLabel: 'Facebook',
          iconName: 'facebook',
          delay: 2,
          isVisibleInMobile: false,
        }, */
    ];
}