export type HeroLayoutProps = React.PropsWithChildren<{
    // Define your props here
}>;

export const HeroLayout: React.FC<HeroLayoutProps> = ({ children }) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
};
