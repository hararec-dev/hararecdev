import { NavbarLayout } from "../layout";
import { Logo, MobileMenuButton, NavLinks } from "../navbar";

export const Navbar: React.FC = ({ }) => {
    return (
        <NavbarLayout>
            <Logo />
            <MobileMenuButton />
            <NavLinks />
        </NavbarLayout>
    );
};
