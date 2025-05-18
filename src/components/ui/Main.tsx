import { MainLayout } from "../layout";
import {
    AssessmentsSection,
    ClassManagement,
    ClassroomFeatures,
    DiscussionsSection,
    FeatureButton,
    FeatureCard,
    IntegrationsSection,
    MainContent,
    NewsSection,
    TeachingTools,
    UIFeatureItem,
    UserInterface,
    UserTypeCard,
} from "../main";

export const Main: React.FC = ({ }) => {
    return (
        <MainLayout>
            <AssessmentsSection />
            <ClassManagement />
            <ClassroomFeatures />
            <DiscussionsSection />
            <FeatureButton />
            <FeatureCard />
            <IntegrationsSection />
            <MainContent />
            <NewsSection />
            <TeachingTools />
            <UIFeatureItem />
            <UserInterface />
            <UserTypeCard />
        </MainLayout>
    );
};
