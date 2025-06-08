export interface ProfileData {
    summary: string;
    education: string[];
    experience: string[];
    cvUrl: string;
}

export interface HeroIntroProps {
    tagline: string;
}

export interface SummaryTextProps {
    summary: string;
    education: string[];
    experience: string[];
    cvUrl: string;
}

export type AboutSection = {
    title: string;
    items: string[];
    keyPrefix: string;
};