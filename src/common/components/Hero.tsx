'use client';
import { HeroMainCopywriting } from "@/features/hero/components/HeroMainCopywriting";
import { HeroImage } from "@/features/hero/components/HeroImage";

export const Hero: React.FC = ({ }) => {
    return (
        <header
            id="hero"
            className="font-work mt-24 lg:mb-20 px-10 md:px-14 lg:px-20 flex flex-col lg:flex-row items-center justify-center"
        >
            <HeroMainCopywriting />
            <HeroImage />
        </header>
    );
};
