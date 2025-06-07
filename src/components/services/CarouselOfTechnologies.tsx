import { Carousel } from '@components/shared';
import { motion } from 'framer-motion';
import reactNativeLight from '/images/reactjs-svgrepo-light.svg';
import reactNativeDark from '/images/reactjs-svgrepo-dark.svg';
import django from '/images/django-icon-svgrepo.svg';
import go from '/images/go.svg';
import nextjsDark from '/images/nextjs-svgrepo-dark.svg';
import nextjsLight from '/images/nextjs-svgrepo-light.svg';
import cpp from '/images/c++.svg';
import docker from '/images/docker-svgrepo.svg';
import postgresql from '/images/postgresql.svg';
import mongo from '/images/mongo-svgrepo.svg';
import awsDark from '/images/aws-svgrepo-dark.svg';
import awsLight from '/images/aws-svgrepo-light.svg';
import linux from '/images/tux.svg';
import type { CarouselItem } from '@types';

export const CarouselOfTechnologies: React.FC = () => {
    const brands: CarouselItem[] = [
        { srcLight: reactNativeLight, srcDark: reactNativeDark, alt: 'React Native logo' },
        { srcLight: nextjsLight, srcDark: nextjsDark, alt: 'Next.js logo' },
        { srcLight: django, srcDark: django, alt: 'Django logo' },
        { srcLight: go, srcDark: go, alt: 'Go logo' },
        { srcLight: cpp, srcDark: cpp, alt: 'C++ logo' },
        { srcLight: docker, srcDark: docker, alt: 'Docker logo' },
        { srcLight: postgresql, srcDark: postgresql, alt: 'PostgreSQL logo' },
        { srcLight: mongo, srcDark: mongo, alt: 'MongoDB logo' },
        { srcLight: linux, srcDark: linux, alt: 'Linux logo' },
        { srcLight: awsLight, srcDark: awsDark, alt: 'AWS logo' },
    ];

    return (
        <motion.section
            className="max-w-4xl mx-auto pt-10 pb-2 mt-10 border-t border-primary/20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7 }}
        >
            <Carousel items={brands} />
        </motion.section>
    );
};
