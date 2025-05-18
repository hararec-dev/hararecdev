export type NavbarLayoutProps = React.PropsWithChildren<{
    // Define your props here
}>;

export const NavbarLayout: React.FC<NavbarLayoutProps> = ({ children }) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
};
