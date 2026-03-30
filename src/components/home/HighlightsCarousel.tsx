import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { LazyImage } from "@/components/ui/LazyImage";
import { cn } from "@/lib/utils";

const highlights = [
  { id: 1, title: "Maktab binosi", image: "/gallery/DSC09213.JPG" },
  { id: 2, title: "Dars jarayoni", image: "/gallery/ERU_0566.JPG" },
  { id: 3, title: "O'quvchilar", image: "/gallery/ERU_0568.JPG" },
  { id: 4, title: "Sinfxona", image: "/gallery/ERU_0571.JPG" },
  { id: 5, title: "Faoliyat", image: "/gallery/ERU_0572.JPG" },
  { id: 6, title: "Jamoa", image: "/gallery/ERU_0577.JPG" },
  { id: 7, title: "Amaliyot", image: "/gallery/ERU_0582.JPG" },
  { id: 8, title: "Laboratoriya", image: "/gallery/ERU_0592.JPG" },
  { id: 9, title: "O'zlashtirish", image: "/gallery/ERU_0596.jpg" },
  { id: 10, title: "Sharoitlar", image: "/gallery/11ERU_0532.jpg" },
  { id: 11, title: "Ochiq dars", image: "/gallery/IMAGE 2026-03-26 17:40:08.jpg" },
  { id: 12, title: "Sport", image: "/gallery/IMAGE 2026-03-26 17:40:22.jpg" },
];

export function HighlightsCarousel() {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <>
      <section className="py-20 bg-muted">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {t("highlights.title")}
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {t("highlights.subtitle")}
            </p>
          </AnimatedSection>

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center hover:bg-accent transition-colors hidden md:flex"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center hover:bg-accent transition-colors hidden md:flex"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Carousel */}
            <div ref={emblaRef} className="overflow-hidden rounded-xl px-4">
              <div className="flex gap-4">
                {highlights.map((item) => (
                  <motion.div
                    key={item.id}
                    className="flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_46%] min-w-0"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => setSelectedImage(item.id)}
                      className="w-full aspect-[4/3] rounded-xl overflow-hidden relative group"
                    >
                      <LazyImage
                        src={item.image}
                        alt={item.title}
                        priority={item.id <= 2}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white font-medium">{item.title}</span>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={highlights.find((h) => h.id === selectedImage)?.image || "/placeholder.svg"}
                alt={highlights.find((h) => h.id === selectedImage)?.title || ""}
                className="w-full rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
