import { useLanguage } from "@/i18n/LanguageContext";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Yulduz Kodirova (9-sinf)",
      text: "Maktab faqat zerikarli darslar va uy vazifalaridan iborat deb o'ylardim, lekin Targetda hammasi boshqacha. Bu yerda biz amaliyot orqali o'rganamiz.",
      image: "https://ui-avatars.com/api/?name=Yulduz+K&background=random&color=fff",
    },
    {
      name: "Nodir Kudratov (10-sinf)",
      text: "Bu yerda sizni faqat imtihonlarga emas, hayotga tayyorlashadi. Bizda tadbirkorlar bilan master-klasslar, IELTS ga tayyorgarlik bo'ldi. Men SAT ni topshirdim va allaqachon ikkita universitetdan taklif oldim.",
      image: "https://ui-avatars.com/api/?name=Nodir+K&background=random&color=fff",
    },
    {
      name: "Ota-onalar",
      detail: "(Nargiza Bahodirova, Alisher Ismoilov, Nigora Bahodirova, Dilshod Abdullaev)",
      text: "Bolalarning o'ziga bo'lgan ishonchi ortgani, dasturlash (IT) ga qiziqishi oshgani, ingliz tilida erkin gapirayotgani hamda o'qituvchilarning har bir o'quvchiga alohida e'tibor qaratayotganidan juda xursandmiz.",
      image: "https://ui-avatars.com/api/?name=Parents&background=random&color=fff",
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <Container>
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            {t("testimonials.title")}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testim, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass-card rounded-2xl p-8 border border-white/40 h-full flex flex-col relative group hover:shadow-glow-blue transition-all">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
                <p className="text-navy/80 leading-relaxed flex-1 mt-4 italic">
                  "{testim.text}"
                </p>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-navy/10">
                  <img
                    src={testim.image}
                    alt={testim.name}
                    className="w-12 h-12 rounded-full border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-navy">{testim.name}</h4>
                    {testim.detail && (
                      <p className="text-xs text-navy/60 mt-0.5">{testim.detail}</p>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
