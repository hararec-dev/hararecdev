export type GradientTextProps = React.PropsWithChildren< {
    className?: string;
}>;

export const GradientText: React.FC<GradientTextProps> = ({ children, className = "" }) => {
    return (
        <span className={`bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-pink-400 ${className}`}>
            {children}
        </span>
    );
};
