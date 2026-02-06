import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Layout, Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Target, Eye, Heart, Users, CheckCircle2 } from "lucide-react";

const values = [
  { icon: Target, key: "excellence" },
  { icon: Eye, key: "vision" },
  { icon: Heart, key: "care" },
  { icon: Users, key: "community" },
  { icon: CheckCircle2, key: "resilience" },
];

const timeline = ["2012", "2015", "2018", "2020", "2023"];

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <ScrollReveal width="100%">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy to-red-cta pb-2">{t("about.title")}</h1>
            <p className="mt-6 text-xl text-navy/80 max-w-3xl mx-auto">
              {t("about.subtitle")}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <ScrollReveal width="100%">
              <div className="glass-card rounded-2xl p-8 border border-white/40 h-full hover:bg-white/60 transition-colors">
                <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                  <div className="w-2 h-8 rounded-full bg-red-500" />
                  {t("about.mission.title")}
                </h2>
                <p className="text-navy/70 leading-relaxed">
                  {t("about.mission.desc")}
                </p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal width="100%" delay={0.1}>
              <div className="glass-card rounded-2xl p-8 border border-white/40 h-full hover:bg-white/60 transition-colors">
                <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                  <div className="w-2 h-8 rounded-full bg-blue-500" />
                  {t("about.vision.title")}
                </h2>
                <p className="text-navy/70 leading-relaxed">
                  {t("about.vision.desc")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20">
        <Container>
          <ScrollReveal width="100%" className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">{t("about.values.title")}</h2>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {values.map((value, index) => (
              <ScrollReveal key={value.key} width="100%" delay={index * 0.1}>
                <div className="glass-card rounded-xl p-8 text-center border border-white/40 h-full hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-6 border border-navy/10 text-navy">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-xl text-navy mb-3">{t(`about.values.${value.key}.title`)}</h3>
                  <p className="text-navy/70 leading-relaxed">{t(`about.values.${value.key}.desc`)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <Container>
          <ScrollReveal width="100%" className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">{t("about.journey.title")}</h2>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {timeline.map((year, index) => (
              <ScrollReveal key={year} width="100%" delay={index * 0.1}>
                <div className="flex gap-6 mb-12 last:mb-0 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-navy/10 border border-navy/20 text-navy flex items-center justify-center font-bold text-sm group-hover:bg-navy/20 transition-colors">
                      {year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-navy/10 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8 glass-card rounded-xl p-6 border border-white/40 ml-4">
                    <h3 className="font-semibold text-lg text-navy">{t(`about.timeline.${year}.title`)}</h3>
                    <p className="text-navy/60 mt-1">{t(`about.timeline.${year}.desc`)}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default About;
