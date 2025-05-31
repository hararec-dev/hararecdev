export interface CarouselItem {
    srcLight: string;
    srcDark: string;
    alt: string;
}

export interface CarouselProps {
    items: CarouselItem[];
}

export type MethodologyItem = {
    id: number;
    text: string;
};

export interface SectionTitleProps {
    imageSrc: string;
    imageAlt: string;
    headerTitle: string;
    headerSubtitle: string;
    methodologyItems: MethodologyItem[];
    methodologyTitle: string;
    hasMethodology?: boolean;
    roundedImage?: boolean;
}

export interface CTAProps {
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
}

export type GradientTextProps = React.PropsWithChildren< {
    className?: string;
}>;

export interface ServicesHeaderProps {
    title: string;
    subtitle: string;
}

export interface MethodologyProps {
    items: MethodologyItem[];
    title: string;
}