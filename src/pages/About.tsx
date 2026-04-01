import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Layout, Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Target, Globe, Shield, Lightbulb, HandHeart, CheckCircle2, Award, BookOpen, Users, Star } from "lucide-react";

const values = [
  { icon: Award, key: "excellence" },
  { icon: CheckCircle2, key: "resilience" },
  { icon: Globe, key: "globalcitizenship" },
  { icon: Shield, key: "protecting" },
  { icon: Lightbulb, key: "innovation" },
  { icon: HandHeart, key: "helping" },
  { icon: Target, key: "integrity" },
];

const timeline = ["2012", "2015", "2016", "2017", "2018_1", "2018_2", "2019", "2021", "2022_1", "2022_2", "2023", "2024", "2025"];

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
            <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl border border-white/20 mx-auto max-w-5xl">
               <img src="/gallery/IMAGE 2026-03-26 17:40:30.jpg" alt="Main Building" className="w-full h-[300px] md:h-[500px] object-cover" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <ScrollReveal width="100%">
              <div className="glass-card rounded-2xl p-8 border border-white/40 h-full hover:bg-white/60 transition-colors flex flex-col">
                <img src="/gallery/IMAGE 2026-03-26 17:39:31.jpg" alt="Mission" className="w-full h-48 object-cover rounded-xl mb-6 shadow-md" />
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
              <div className="glass-card rounded-2xl p-8 border border-white/40 h-full hover:bg-white/60 transition-colors flex flex-col">
                <img src="/gallery/IMAGE 2026-03-26 17:39:35.jpg" alt="Vision" className="w-full h-48 object-cover rounded-xl mb-6 shadow-md" />
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
      <section id="values" className="py-20">
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

      {/* Educational Philosophy */}
      <section className="py-20 bg-muted/30">
        <Container>
          <ScrollReveal width="100%" className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">{t("about.philosophy.title")}</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
             <ScrollReveal width="100%" delay={0.1}>
                 <div className="glass-card rounded-2xl p-8 border border-white/40 h-full hover:shadow-glow-blue transition-all group flex flex-col">
                     <img src="/gallery/IMAGE 2026-03-26 17:39:37.jpg" alt="Academic" className="w-full h-40 object-cover rounded-xl mb-6 shadow-md" />
                     <BookOpen className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                     <h3 className="font-semibold text-xl text-navy mb-3">{t("about.philosophy.academic.title")}</h3>
                     <p className="text-navy/70 leading-relaxed">{t("about.philosophy.academic.desc")}</p>
                 </div>
             </ScrollReveal>
             <ScrollReveal width="100%" delay={0.2}>
                 <div className="glass-card rounded-2xl p-8 border border-white/40 h-full hover:shadow-glow-emerald transition-all group flex flex-col">
                     <img src="/gallery/IMAGE 2026-03-26 17:39:40.jpg" alt="Holistic" className="w-full h-40 object-cover rounded-xl mb-6 shadow-md" />
                     <Users className="w-10 h-10 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
                     <h3 className="font-semibold text-xl text-navy mb-3">{t("about.philosophy.holistic.title")}</h3>
                     <p className="text-navy/70 leading-relaxed">{t("about.philosophy.holistic.desc")}</p>
                 </div>
             </ScrollReveal>
             <ScrollReveal width="100%" delay={0.3}>
                 <div className="glass-card rounded-2xl p-8 border border-white/40 h-full hover:shadow-glow-purple transition-all group flex flex-col">
                     <img src="/gallery/IMAGE 2026-03-26 17:39:43.jpg" alt="Ethos" className="w-full h-40 object-cover rounded-xl mb-6 shadow-md" />
                     <Star className="w-10 h-10 text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
                     <h3 className="font-semibold text-xl text-navy mb-3">{t("about.philosophy.ethos.title")}</h3>
                     <p className="text-navy/70 leading-relaxed">{t("about.philosophy.ethos.desc")}</p>
                 </div>
             </ScrollReveal>
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
            {timeline.map((key, index) => (
              <ScrollReveal key={key} width="100%" delay={index * 0.05}>
                <div className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-navy/10 border border-navy/20 text-navy flex items-center justify-center font-bold text-sm group-hover:bg-navy/20 transition-colors shrink-0">
                      {key.split('_')[0]}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-navy/10 my-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-10 glass-card rounded-xl p-6 border border-white/40 ml-4 mb-2 group-hover:border-navy/20 transition-all">
                    <h3 className="font-semibold text-lg text-navy">{t(`about.timeline.${key}.title`)}</h3>
                    <p className="text-navy/60 mt-1">{t(`about.timeline.${key}.desc`)}</p>
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
