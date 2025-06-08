export interface PortfolioSectionProps {
    type: 'instructor' | 'student';
    title: string;
    imageSrc: string;
    buttonText: string;
    buttonColor?: string;
}

export interface ServicesSectionItemProps {
    icon: React.ReactNode;
    description: string;
}
