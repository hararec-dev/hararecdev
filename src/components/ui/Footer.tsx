import { FooterCopyright, FooterLinks, FooterLogo, NewsletterSubscription } from "../footer";
import { FooterLayout } from "../layout";

export const Footer: React.FC = ({ }) => {
    return (
        <FooterLayout>
            <FooterCopyright />
            <FooterLinks />
            <FooterLogo />
            <NewsletterSubscription />
        </FooterLayout>
    );
};
