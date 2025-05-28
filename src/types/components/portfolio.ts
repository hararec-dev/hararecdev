export interface Visual {
    type: 'image' | 'video' | 'iframe';
    url: string;
    alt?: string;
}

export interface Project {
    title: string;
    problem: string;
    solution: string;
    results: string;
    visuals: Visual[];
    liveLink?: string;
    repoLink?: string;
}

export interface CaseStudyModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

export type ProjectType = 'all' | 'app' | 'api';
export type ProjectPlatform = 'all' | 'ios' | 'android' | 'web';

export interface FilterBarProps {
    currentType: ProjectType;
    currentPlatform: ProjectPlatform;
    onTypeChange: (type: ProjectType) => void;
    onPlatformChange: (platform: ProjectPlatform) => void;
    types: { value: ProjectType; label: string }[];
    platforms: { value: ProjectPlatform; label: string }[];
}

export interface ProjectItem {
    id: string;
    title: string;
    posterTitle: string;
    imageUrl?: string;
    videoUrl?: string;
    gifUrl?: string;
    type: 'app' | 'api';
    platform: 'ios' | 'android' | 'web';
    problem: string;
    solution: string;
    results: string;
    visuals: { type: 'image' | 'video' | 'iframe'; url: string; alt?: string }[];
    liveLink?: string;
    repoLink?: string;
    delay?: number;
    isTextDark: boolean;
}

export interface ProjectCardProps {
    project: ProjectItem;
    onViewDetails: (project: ProjectItem) => void;
}

export interface ProjectGridProps {
    projects: ProjectItem[];
    onProjectClick: (project: ProjectItem) => void;
}

export interface TestimonialItem {
    id: string;
    quote: string;
    author: string;
    company?: string;
    logoUrl?: string;
    authorImageUrl?: string;
}

export interface TestimonialsProps {
    testimonials: TestimonialItem[];
    displayMode?: 'grid' | 'carousel';
}