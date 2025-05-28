import { AboutSection } from "../about";
import { PortfolioSection } from "../portfolio";
import { ServicesSection } from "../services";

export const Main: React.FC = ({ }) => {
    return (
        <main className="my-20 font-work container flex flex-col gap-16 
        max-w-screen-xl text-background-light dark:text-background-dark overflow-x-hidden">
            <ServicesSection />
            <PortfolioSection />
            <AboutSection />
        </main>
    );
};
