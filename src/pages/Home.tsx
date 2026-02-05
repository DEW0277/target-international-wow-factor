import { Layout } from "@/components/layout";
import {
  VideoHero,
  ProgramsCarousel,
  HighlightsCarousel,
  StatsSection,
  CTASection,
  FAQSection,
} from "@/components/home";

const Home = () => {
  return (
    <Layout>
      <VideoHero />
      <ProgramsCarousel />
      <StatsSection />
      <HighlightsCarousel />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Home;
