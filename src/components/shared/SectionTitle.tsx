import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { SectionMethodology } from "./SectionMethodology";
import type { SectionTitleProps } from "../../types";

export const SectionTitle: React.FC<SectionTitleProps> = ({
    headerTitle,
    headerSubtitle,
    methodologyItems,
    methodologyTitle,
    imageSrc,
    imageAlt,
    hasMethodology = true,
    roundedImage = false,
}) => {
    return (
        <header>
            <div className={`${roundedImage ? 'gap-0' : 'gap-8'} hidden w-full md:flex md:flex-row md:items-center justify-center`}>
                <div className="w-full md:w-3/5 lg:w-2/5 flex justify-center md:justify-start">
                    <motion.img
                        src={imageSrc}
                        alt={imageAlt}
                        className={`${roundedImage ? 'rounded-full w-4/5' : 'rounded-2xl w-full'} h-auto drop-shadow-xl`}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        viewport={{ amount: 0.3 }}
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col items-center w-full md:w-2/5 justify-center md:justify-start">
                    <SectionHeader
                        title={headerTitle}
                        subtitle={headerSubtitle}
                    />
                    {hasMethodology && <SectionMethodology
                        items={methodologyItems}
                        title={methodologyTitle}
                    />}
                </div>
            </div>
            <div className="flex flex-col items-center md:hidden">
                <SectionHeader
                    title={headerTitle}
                    subtitle={headerSubtitle}
                />
                <div className={`${roundedImage ? 'w-4/5' : 'w-full'}  md:w-1/3 lg:w-2/5 flex justify-center mt-2 mb-8`}>
                    <motion.img
                        src={imageSrc}
                        alt="Digital Nomad Illustration"
                        className={`${roundedImage ? 'rounded-full' : 'rounded-2xl'} w-full h-auto drop-shadow-xl`}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        viewport={{ amount: 0.3 }}
                        loading="lazy"
                    />
                </div>
                {hasMethodology && <SectionMethodology
                    items={methodologyItems}
                    title={methodologyTitle}
                />}
            </div>
        </header>
    );
};
