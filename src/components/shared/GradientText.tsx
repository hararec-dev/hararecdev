import type { GradientTextProps } from "@types";

export const GradientText: React.FC<GradientTextProps> = ({ children, className = "" }) => {
    return (
        <span className={`bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-indigo-500 to-purple-600 dark:from-sky-300 dark:via-violet-400 dark:to-pink-400 ${className}`}>
            {children}
        </span>
    );
};
