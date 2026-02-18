import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import TripPlanningHub from "@/components/TripPlanningHub";
import PreBuiltTrips from "@/components/PreBuiltTrips";
import WhyPocketGuide from "@/components/WhyPocketGuide";
import RoadConditions from "@/components/RoadConditions";
import SupportNamibia from "@/components/SupportNamibia";
import HowItWorks from "@/components/HowItWorks";
import PremiumTeaser from "@/components/PremiumTeaser";
import BlogPreview from "@/components/BlogPreview";

const Index = () => (
  <Layout className="bg-background" fullBleed>
    <HeroSection />
    <TripPlanningHub />
    <PreBuiltTrips />
    <WhyPocketGuide />
    <PremiumTeaser />
    <RoadConditions />
    <SupportNamibia />
    <HowItWorks />
    <BlogPreview />
  </Layout>
);

export default Index;
