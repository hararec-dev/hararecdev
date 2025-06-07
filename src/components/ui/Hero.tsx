import { HeroMainCopywriting, HeroImage } from "@components/hero";

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
