import { motion } from 'motion/react';
import smartphone from '/images/hero-phone.png';

export const HeroImage: React.FC = () => {
    return (
        <div className="w-full lg:w-1/2 relative">
            <motion.img
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full ml-auto 2xl:-mb-20"
                src={smartphone}
                alt="Smartphone"
            />
        </div>
    );
};
