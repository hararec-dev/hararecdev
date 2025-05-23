import { motion } from 'motion/react';
import chatting from '/images/undraw_chatting_2b1g.svg';
import googlePlay from '/images/logo-google-play.svg';
import appStore from '/images/apple-app-store.svg';
import apiInterface from '/images/api-interface-svgrepo.svg';
import aiIcon from '/images/ai-svgrepo.svg'; // Nueva importación


const floatingElements = [
    {
        delay: 0.2,
        className: "absolute bottom-10 left-2 lg:bottom-10 lg:left-24 api-interface",
        imgClassName: "h-20 sm:h-28",
        src: apiInterface,
        alt: "API Interface"
    },
    {
        delay: 0.6,
        className: "absolute top-10 left-8 md:top-12 lg:top-24 lg:left-12 ai-float",
        imgClassName: "h-24 md:h-32 sm:h-36",
        src: aiIcon,
        alt: "AI Icon"
    },
    {
        delay: 0.2,
        className: "absolute bottom-40 right-16 md:bottom-48 md:right-16 lg:bottom-72 lg:right-36 app-store",
        imgClassName: "h-12 sm:h-16",
        src: appStore,
        alt: "Apple Store"
    },
    {
        delay: 0.6,
        className: "absolute top-20 right-8 md:top-24 md:right-12 lg:top-32 lg:right-16 google-play",
        imgClassName: "h-20 sm:h-28",
        src: googlePlay,
        alt: "Google Play"
    }
];

export const HeroImage: React.FC = () => {
    return (
        <div className="w-full lg:w-1/2 relative">
            <motion.img
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-10/12 mx-auto 2xl:-mb-20"
                src={chatting}
                alt="Chat app"
            />

            {floatingElements.map((element, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: element.delay }}
                    className={element.className}
                >
                    <img
                        className={element.imgClassName}
                        src={element.src}
                        alt={element.alt}
                    />
                </motion.div>
            ))}
        </div>
    );
};
