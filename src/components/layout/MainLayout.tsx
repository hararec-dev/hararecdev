export type MainLayoutProps = React.PropsWithChildren<{
    // Define your props here
}>;

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
};
