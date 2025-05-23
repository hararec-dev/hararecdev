export type GradientTextProps = React.PropsWithChildren< {
    className?: string;
}>;

export const GradientText: React.FC<GradientTextProps> = ({ children, className = "" }) => {
    return (
        <span className={`bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 dark:from-sky-400 dark:via-violet-500 dark:to-pink-500 ${className}`}>
            {children}
        </span>
    );
};
