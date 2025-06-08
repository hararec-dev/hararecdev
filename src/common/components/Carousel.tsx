'use client';
import { useContext } from "react";
import Image from 'next/image'; // Added import
import { ThemeContext } from "@/common/context/ThemeContext";
import type { CarouselProps } from "@/common/types";

const VISIBLE_ITEMS_DESKTOP = 10;
const VISIBLE_ITEMS_TABLET = 5;
const VISIBLE_ITEMS_MOBILE = 5;


export const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.theme || 'light';
    let visibleItems = VISIBLE_ITEMS_DESKTOP;
    if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) visibleItems = VISIBLE_ITEMS_MOBILE;
        else if (window.innerWidth < 1024) visibleItems = VISIBLE_ITEMS_TABLET;
    }
    const duplicated = [...items, ...items];

    return !Array.isArray(items) || items.length === 0
        ? null
        : (
            <div className="relative w-full overflow-hidden rounded-lg">
                <div
                    className="flex gap-1 animate-[carousel-scroll_20s_linear_infinite]"
                    style={{ width: `${(duplicated.length / visibleItems) * 100}%` }}
                >
                    {duplicated.map((item, idx) => (
                        <div key={idx} className="relative h-8 w-1/6 sm:w-1/6 md:w-1/6 lg:h-10 lg:w-1/6">
                            <Image
                                src={theme === 'dark' ? item.srcDark : item.srcLight}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 640px) 16.6vw, (max-width: 1024px) 16.6vw, 16.6vw"
                                className="object-contain rounded"
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
};
