import { useLanguage } from "@/i18n/LanguageContext";
import { Layout, Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BookOpen, Microscope, Languages, GraduationCap, Award, Target, Clock, Users, Trophy } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    titleKey: "programs.primary.title",
    descKey: "programs.primary.desc",
    color: "bg-blue-500",
    features: ["Cambridge Primary", "Ages 6-10", "Holistic development", "Project-based learning"],
  },
  {
    icon: GraduationCap,
    titleKey: "programs.secondary.title",
    descKey: "programs.secondary.desc",
    color: "bg-indigo-500",
    features: ["Cambridge Secondary", "Ages 11-16", "IGCSE preparation", "University pathways"],
  },
  {
    icon: Microscope,
    titleKey: "programs.stem.title",
    descKey: "programs.stem.desc",
    color: "bg-emerald-500",
    features: ["Robotics & Coding", "Science labs", "Competition prep", "Innovation projects"],
  },
  {
    icon: Languages,
    titleKey: "programs.languages.title",
    descKey: "programs.languages.desc",
    color: "bg-amber-500",
    features: ["English (Native)", "Korean", "Chinese", "Russian"],
  },
  {
    icon: Award,
    titleKey: "programs.ielts.title",
    descKey: "programs.ielts.desc",
    color: "bg-rose-500",
    features: ["7.0+ guarantee", "Mock exams", "Speaking practice", "Small groups"],
  },
  {
    icon: Target,
    titleKey: "programs.university.title",
    descKey: "programs.university.desc",
    color: "bg-violet-500",
    features: ["SAT/ACT prep", "A-Level courses", "Application essays", "University counseling"],
  },
];

const Programs = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <ScrollReveal width="100%">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy to-red-cta">{t("programs.title")}</h1>
            <p className="mt-6 text-xl text-navy/80 max-w-3xl mx-auto">
              {t("programs.subtitle")}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ScrollReveal key={program.titleKey} width="100%" delay={index * 0.1}>
                {/* 3D Card with Specific Glow Color based on program color */}
                <div className={`
                  group relative glass-card rounded-2xl border border-white/40 overflow-hidden h-full 
                  card-3d hover:bg-white/80 transition-all duration-500
                  ${program.color.includes("blue") ? "shadow-glow-blue" : ""}
                  ${program.color.includes("indigo") ? "shadow-glow-purple" : ""}
                  ${program.color.includes("emerald") ? "shadow-glow-emerald" : ""}
                  ${program.color.includes("amber") ? "shadow-glow-amber" : ""}
                  ${program.color.includes("rose") ? "shadow-glow-red" : ""}
                  ${program.color.includes("violet") ? "shadow-glow-purple" : ""}
                `}>
                  
                  {/* Gradient Decoration Background */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 ${program.color} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                  <div className={`${program.color} p-6 bg-opacity-90 backdrop-blur-sm relative z-10 
                    group-hover:scale-105 transition-transform duration-500 origin-top-left`}>
                    <program.icon className="w-10 h-10 text-white drop-shadow-md" />
                  </div>
                  
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-blue-700 transition-colors">
                      {t(program.titleKey)}
                    </h3>
                    <p className="text-navy/70 mb-4 group-hover:text-navy/90 transition-colors">
                      {t(program.descKey)}
                    </p>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-navy/60 group-hover:text-navy/80 transition-colors">
                          <div className={`w-1.5 h-1.5 rounded-full ${program.color}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <Container>
          <ScrollReveal width="100%" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Why Choose Our Programs</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Flexible Schedule", desc: "Morning and afternoon sessions available" },
              { icon: Users, title: "Small Classes", desc: "Maximum 15 students per class" },
              { icon: Trophy, title: "Proven Results", desc: "95% university admission rate" },
            ].map((item, index) => (
              <ScrollReveal key={item.title} width="100%" delay={index * 0.1}>
                <div className="text-center glass-card p-8 rounded-2xl border border-white/40 h-full">
                  <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4 border border-navy/10">
                    <item.icon className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="font-semibold text-lg text-navy mb-2">{item.title}</h3>
                  <p className="text-navy/60">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Programs;
