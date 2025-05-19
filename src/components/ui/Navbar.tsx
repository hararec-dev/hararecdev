import { NavbarLayout } from "../layout";
import { Logo, MobileMenuButton, NavLinks } from "../navbar";
import { ThemeToggleButton } from "../navbar/ThemeToggleButton";

export const Navbar: React.FC = ({ }) => {
    return (
        <NavbarLayout>
            <Logo />
            <MobileMenuButton />
            <NavLinks />
            <ThemeToggleButton />
        </NavbarLayout>
    );
};
