export type FooterLayoutProps = React.PropsWithChildren<{
    // Define your props here
}>;

export const FooterLayout: React.FC<FooterLayoutProps> = ({ children }) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
};
