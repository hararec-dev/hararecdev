import { HeroMainCopywriting, HeroImage } from "../hero";

export const Hero: React.FC = ({ }) => {
    return (
        <header
            id="hero"
            className="font-work mt-28 max-w-screen-xl px-10 flex flex-col lg:flex-row items-center justify-center"
        >
            <HeroMainCopywriting />
            <HeroImage />
        </header>
    );
};
