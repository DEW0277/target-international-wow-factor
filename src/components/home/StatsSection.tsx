import { useLanguage } from "@/i18n/LanguageContext";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StatsCounter } from "@/components/ui/StatsCounter";

const stats = [
  { value: 12, suffix: "+", labelKey: "stats.years" },
  { value: 5000, suffix: "+", labelKey: "stats.students" },
  { value: 92, suffix: "%", labelKey: "stats.universities" },
  { value: 8, suffix: "", labelKey: "stats.teachers" },
];

export function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.labelKey}
                className="
                  glass-card rounded-2xl p-6 border border-white/40 text-center
                  card-3d shadow-glow-blue hover:shadow-glow-emerald
                  flex flex-col items-center justify-center
                "
              >
                <div className="w-16 h-16 rounded-full bg-blue-100/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  {/* Icon placeholder or just style the number */}
                  <span className="text-4xl font-bold text-blue-600">
                    {stat.value}
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-navy font-medium opacity-80">
                  {t(stat.labelKey)}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
