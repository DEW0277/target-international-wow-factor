import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-destructive/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {t("cta.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("cta.subtitle")}
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground text-lg px-8 py-6"
            >
              <Link to="/admissions">{t("cta.button")}</Link>
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
