import { useLanguage } from "@/i18n/LanguageContext";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StatsCounter } from "@/components/ui/StatsCounter";

const stats = [
  { value: 500, suffix: "+", labelKey: "stats.students" },
  { value: 45, suffix: "", labelKey: "stats.teachers" },
  { value: 12, suffix: "", labelKey: "stats.years" },
  { value: 95, suffix: "%", labelKey: "stats.universities" },
];

export function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-destructive rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <StatsCounter
                key={stat.labelKey}
                value={stat.value}
                suffix={stat.suffix}
                label={t(stat.labelKey)}
                className="text-primary-foreground"
              />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
