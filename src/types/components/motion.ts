import { motion } from "motion/react";

export interface MotionDivProps extends React.ComponentProps<typeof motion.div> {
    xOffset?: number;
    yOffset?: number;
    transition?: {
        duration: number;
        delay: number;
    };
}