'use client';
import { AboutSection } from "@/features/about/components/AboutSection";
import { PortfolioSection } from "@/features/portfolio/components/PortfolioSection";
import { ServicesSection } from "@/features/services/components/ServicesSection";

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
