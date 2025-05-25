export type GradientTextProps = React.PropsWithChildren< {
    className?: string;
}>;

export const GradientText: React.FC<GradientTextProps> = ({ children, className = "" }) => {
    return (
        <span className={`bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-indigo-500 to-purple-600 dark:from-sky-400 dark:via-violet-500 dark:to-pink-500 ${className}`}>
            {children}
        </span>
    );
};
