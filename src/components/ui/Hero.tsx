import { HeroButtons, HeroContent, HeroDescription, HeroImage, HeroTitle, HeroWave } from "../hero";
import { HeroLayout } from "../layout";

export const Hero: React.FC = ({ }) => {
    return (
        <HeroLayout>
            <HeroButtons />
            <HeroContent />
            <HeroDescription />
            <HeroImage />
            <HeroTitle />
            <HeroWave />
        </HeroLayout>
    );
};
