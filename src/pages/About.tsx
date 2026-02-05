import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Layout, Container } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Excellence", desc: "We strive for the highest standards in everything we do" },
  { icon: Eye, title: "Vision", desc: "Preparing students for a rapidly changing global future" },
  { icon: Heart, title: "Care", desc: "Every student is valued and supported individually" },
  { icon: Users, title: "Community", desc: "Building strong relationships with families and partners" },
];

const timeline = [
  { year: "2012", title: "School Founded", desc: "TARGET International School opened its doors with 50 students" },
  { year: "2015", title: "Cambridge Partnership", desc: "Became an official Cambridge Assessment partner" },
  { year: "2018", title: "STEM Center", desc: "Opened state-of-the-art robotics and science labs" },
  { year: "2020", title: "Language Center", desc: "Launched comprehensive language learning programs" },
  { year: "2023", title: "New Campus", desc: "Expanded to a modern campus with world-class facilities" },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-destructive rounded-full blur-3xl" />
        </div>
        <Container className="relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold">{t("about.title")}</h1>
            <p className="mt-6 text-xl text-primary-foreground/80 max-w-3xl">
              {t("about.missionText")}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection animation="slideRight">
              <div className="bg-card rounded-2xl p-8 border shadow-lg h-full">
                <h2 className="text-2xl font-bold text-primary mb-4">{t("about.mission")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.missionText")}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideLeft">
              <div className="bg-card rounded-2xl p-8 border shadow-lg h-full">
                <h2 className="text-2xl font-bold text-primary mb-4">{t("about.vision")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.visionText")}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Values</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-card rounded-xl p-6 text-center border shadow-sm h-full">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Journey</h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default About;
