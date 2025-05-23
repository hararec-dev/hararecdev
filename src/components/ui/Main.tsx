import {
    AssessmentsSection,
    ClassManagement,
    ClassroomFeatures,
    DiscussionsSection,
    FeatureCard,
    IntegrationsSection,
    NewsSection,
    TeachingTools,
    UIFeatureItem,
    UserInterface,
    UserTypeCard,
} from "../main";

export const Main: React.FC = ({ }) => {
    return (
        <div>
            <AssessmentsSection />
            <ClassManagement />
            <ClassroomFeatures />
            <DiscussionsSection />
            <FeatureCard />
            <IntegrationsSection />
            <NewsSection />
            <TeachingTools />
            <UIFeatureItem />
            <UserInterface />
            <UserTypeCard />
        </div>
    );
};
