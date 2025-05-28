import { HeroMainCopywriting, HeroImage } from "../hero";

export const Hero: React.FC = ({ }) => {
    return (
        <header
            id="hero"
            className="font-work mt-32 xl:mt-44 xl:mb-24 max-w-screen-xl px-10 md:px-14 flex flex-col lg:flex-row items-center justify-center"
        >
            <HeroMainCopywriting />
            <HeroImage />
        </header>
    );
};
