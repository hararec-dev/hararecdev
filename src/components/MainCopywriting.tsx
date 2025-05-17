import { useEffect, useState } from "react";
import { MotionDiv } from "./MotionDiv";
import { GradientText } from "./GradientText";
import { BootstrapIcon } from "./BootstrapIcon";
import { getHeroMainCopywriting } from "../helpers";
import type { CopywritingItem } from "../types";

export const MainCopywriting: React.FC = () => {
    return (
        <MotionDiv   transition={{ duration: 1, delay: 0.3 }}>
            <div className="mx-auto text-center">
                <Header />
                <Description />
                <CallToAction />
            </div>
        </MotionDiv>
    );
};

const Header: React.FC = () => {
    const [copywriting, setCopywriting] = useState<CopywritingItem[]>([]);

    useEffect(() => {
        getHeroMainCopywriting().then(setCopywriting);
    }, []);

    return (
        <h1 className="mb-5 text-4xl font-black lg:text-6xl text-black dark:text-white md:mx-4">
            {copywriting.map((item, index) => {
                const isHandwriting = item.font === 'handwriting';
                return isHandwriting ? (
                    <GradientText key={index}>
                        {item.text}
                    </GradientText>
                ) : (
                    <span key={index}>{item.text}</span>
                );
            })}
        </h1>
    );
};

const Description: React.FC = () => (
    <p className={`mb-5 mx-auto md:mx-10 text-start text-lg !leading-relaxed text-foreground-light dark:text-foreground-dark sm:text-lg md:text-xl px-10 sm:px-12 md:px-0`}>
        ¿Permitirás que la competencia te deje atrás? Impulsa tu negocio con apps móviles, APIs e inteligencia artificial para destacar y crecer de manera sencilla y sin costos ocultos.
    </p>
);

const CallToAction: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://api.whatsapp.com/send?phone=525542084239&text=${encodeURIComponent('¡Hola!, quiero hablar de mi nuevo proyecto 🚀')}`}
                className={`flex items-center justify-center rounded-full bg-dominant-dark dark:bg-dominant-light px-5 py-4 text-base font-semibold text-background-light dark:text-background-dark duration-300 ease-in-out hover:bg-dominant-dark/80 dark:hover:bg-dominant-light/80 hover:scale-110 transform shadow-three shadow-blue-500/70`}
            >
                <span className="text-2xl font-bold mr-3">¡Hablemos de tu proyecto!</span>
                <BootstrapIcon name="chat-dots-fill" className="text-background-light dark:text-background-dark" />
            </a>
        </div>
    );
};