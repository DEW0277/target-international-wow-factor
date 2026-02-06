import { Layout } from "@/components/layout";
import {
  VideoHero,
  ProgramsCarousel,
  HighlightsCarousel,
  StatsSection,
  CTASection,
  FAQSection,
} from "@/components/home";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const Home = () => {
  return (
    <Layout>
      <ScrollReveal width="100%"><VideoHero /></ScrollReveal>
      <ScrollReveal width="100%" delay={0.2}><ProgramsCarousel /></ScrollReveal>
      <ScrollReveal width="100%"><StatsSection /></ScrollReveal>
      <ScrollReveal width="100%"><HighlightsCarousel /></ScrollReveal>
      <ScrollReveal width="100%"><FAQSection /></ScrollReveal>
      <ScrollReveal width="100%"><CTASection /></ScrollReveal>
    </Layout>
  );
};

export default Home;
