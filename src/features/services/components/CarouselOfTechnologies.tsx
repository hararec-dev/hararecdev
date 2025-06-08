'use client';
import { Carousel } from '@/common/components/Carousel';
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
import type { CarouselItem } from '@/common/types';

export const CarouselOfTechnologies: React.FC = () => {
    const brands: CarouselItem[] = [
        { srcLight: reactNativeLight.src, srcDark: reactNativeDark.src, alt: 'React Native logo' },
        { srcLight: nextjsLight.src, srcDark: nextjsDark.src, alt: 'Next.js logo' },
        { srcLight: django.src, srcDark: django.src, alt: 'Django logo' },
        { srcLight: go.src, srcDark: go.src, alt: 'Go logo' },
        { srcLight: cpp.src, srcDark: cpp.src, alt: 'C++ logo' },
        { srcLight: docker.src, srcDark: docker.src, alt: 'Docker logo' },
        { srcLight: postgresql.src, srcDark: postgresql.src, alt: 'PostgreSQL logo' },
        { srcLight: mongo.src, srcDark: mongo.src, alt: 'MongoDB logo' },
        { srcLight: linux.src, srcDark: linux.src, alt: 'Linux logo' },
        { srcLight: awsLight.src, srcDark: awsDark.src, alt: 'AWS logo' },
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
