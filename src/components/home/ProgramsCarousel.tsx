import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen, Microscope, Languages, GraduationCap, Award, Target } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const programs = [
  { icon: BookOpen, titleKey: "programs.primary.title", descKey: "programs.primary.desc", color: "bg-blue-500" },
  { icon: GraduationCap, titleKey: "programs.secondary.title", descKey: "programs.secondary.desc", color: "bg-indigo-500" },
  { icon: Microscope, titleKey: "programs.stem.title", descKey: "programs.stem.desc", color: "bg-emerald-500" },
  { icon: Languages, titleKey: "programs.languages.title", descKey: "programs.languages.desc", color: "bg-amber-500" },
  { icon: Award, titleKey: "programs.ielts.title", descKey: "programs.ielts.desc", color: "bg-rose-500" },
  { icon: Target, titleKey: "programs.university.title", descKey: "programs.university.desc", color: "bg-violet-500" },
];

export function ProgramsCarousel() {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  return (
    <section className="py-20 bg-background">
      <Container>
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {t("programs.title")}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t("programs.subtitle")}
          </p>
        </AnimatedSection>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center hover:bg-muted transition-colors hidden md:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center hover:bg-muted transition-colors hidden md:flex"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {programs.map((program, index) => (
                <motion.div
                  key={program.titleKey}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-4"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`
                    h-full glass-card rounded-2xl p-8 border border-white/40 
                    card-3d transition-all duration-500
                    ${program.color.includes("blue") ? "shadow-glow-blue" : ""}
                    ${program.color.includes("indigo") ? "shadow-glow-purple" : ""}
                    ${program.color.includes("emerald") ? "shadow-glow-emerald" : ""}
                    ${program.color.includes("amber") ? "shadow-glow-amber" : ""}
                    ${program.color.includes("rose") ? "shadow-glow-red" : ""}
                    ${program.color.includes("violet") ? "shadow-glow-purple" : ""}
                  `}>
                    <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform", program.color)}>
                      <program.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-blue-600 transition-colors">
                      {t(program.titleKey)}
                    </h3>
                    <p className="text-navy/70 text-sm mb-6 leading-relaxed">
                      {t(program.descKey)}
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto text-red-cta font-semibold hover:text-red-700 group-hover:translate-x-2 transition-transform">
                      <Link to="/programs">Learn more →</Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  selectedIndex === index
                    ? "bg-destructive w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
