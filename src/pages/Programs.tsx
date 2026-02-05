import { useLanguage } from "@/i18n/LanguageContext";
import { Layout, Container } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
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
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <Container>
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold">{t("programs.title")}</h1>
            <p className="mt-6 text-xl text-primary-foreground/80 max-w-3xl">
              {t("programs.subtitle")}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <Container>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <StaggerItem key={program.titleKey}>
                <div className="bg-card rounded-2xl border shadow-lg overflow-hidden h-full">
                  <div className={`${program.color} p-6`}>
                    <program.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {t(program.titleKey)}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t(program.descKey)}
                    </p>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Our Programs</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Flexible Schedule", desc: "Morning and afternoon sessions available" },
              { icon: Users, title: "Small Classes", desc: "Maximum 15 students per class" },
              { icon: Trophy, title: "Proven Results", desc: "95% university admission rate" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </Layout>
  );
};

export default Programs;
