import { FooterCopyright, FooterLinks, FooterLogo, NewsletterSubscription } from "../footer";

export const Footer: React.FC = ({ }) => {
    return (
        <div>
            <FooterCopyright />
            <FooterLinks />
            <FooterLogo />
            <NewsletterSubscription />
        </div>
    );
};
