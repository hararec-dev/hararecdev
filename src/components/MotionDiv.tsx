import { motion } from "motion/react";
import type { MotionDivProps } from "../types";

export function MotionDiv({
    children,
    yOffset = -20,
    xOffset = 0,
    transition = { duration: 1, delay: 0.5 },
    ...props
}: MotionDivProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, x:xOffset, y: yOffset },
                visible: { opacity: 1, x: 0, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            transition={transition}
            viewport={{ once: true, amount: 0.5 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}