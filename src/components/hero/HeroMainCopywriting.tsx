import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getHeroMainCopywriting } from '../../helpers';
import { GradientText } from '../shared';
import type { CopywritingItem } from '../../types';

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

export const HeroMainCopywriting: React.FC = () => {
    const [copywriting, setCopywriting] = useState<CopywritingItem[]>([]);

    useEffect(() => {
        getHeroMainCopywriting().then(setCopywriting);
    }, []);

    return (
        <div className="flex flex-col w-full lg:w-1/2 justify-center lg:pt-5 items-center">
            <div className="mx-auto text-start md:text-center text-gray-800 dark:text-gray-200">
                <motion.div
                    variants={fadeInVariants}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h1 className="inline font-black text-4xl sm:text-5xl lg:text-6xl font-poppins">
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
                </motion.div>

                <motion.div
                    variants={fadeInVariants}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <p className="font-work my-5 text-lg md:text-xl text-start px-5 md:px-0">
                        ¿Permitirás que la competencia te deje atrás? Impulsa tu negocio con apps móviles, APIs e inteligencia artificial para destacar y crecer de manera sencilla y sin costos ocultos.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
