import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Layout, Container } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

const galleryItems = [
  { id: 1, category: "campus", title: "Main Building", image: "/placeholder.svg" },
  { id: 2, category: "campus", title: "Science Lab", image: "/placeholder.svg" },
  { id: 3, category: "campus", title: "Library", image: "/placeholder.svg" },
  { id: 4, category: "events", title: "Sports Day 2023", image: "/placeholder.svg" },
  { id: 5, category: "events", title: "Science Fair", image: "/placeholder.svg" },
  { id: 6, category: "events", title: "Graduation Ceremony", image: "/placeholder.svg" },
  { id: 7, category: "activities", title: "Robotics Club", image: "/placeholder.svg" },
  { id: 8, category: "activities", title: "Art Exhibition", image: "/placeholder.svg" },
  { id: 9, category: "activities", title: "Music Performance", image: "/placeholder.svg" },
  { id: 10, category: "campus", title: "Sports Ground", image: "/placeholder.svg" },
  { id: 11, category: "events", title: "Cultural Day", image: "/placeholder.svg" },
  { id: 12, category: "activities", title: "Chess Tournament", image: "/placeholder.svg" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "campus", label: "Campus" },
  { id: "events", label: "Events" },
  { id: "activities", label: "Activities" },
];

const Gallery = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const selectedIndex = filteredItems.findIndex((item) => item.id === selectedId);

  const navigateLightbox = (direction: "prev" | "next") => {
    if (selectedIndex === -1) return;
    const newIndex =
      direction === "prev"
        ? (selectedIndex - 1 + filteredItems.length) % filteredItems.length
        : (selectedIndex + 1) % filteredItems.length;
    setSelectedId(filteredItems[newIndex].id);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <Container>
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold">{t("gallery.title")}</h1>
            <p className="mt-6 text-xl text-primary-foreground/80 max-w-3xl">
              {t("gallery.subtitle")}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <Container>
          {/* Filter */}
          <AnimatedSection className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                )}
              >
                {cat.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <StaggerItem key={item.id}>
                <motion.button
                  onClick={() => setSelectedId(item.id)}
                  whileHover={{ scale: 1.02 }}
                  className="w-full aspect-square rounded-xl overflow-hidden relative group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white font-medium">{item.title}</span>
                  </div>
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedId(null)}
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems.find((item) => item.id === selectedId)?.image || "/placeholder.svg"}
                alt={filteredItems.find((item) => item.id === selectedId)?.title || ""}
                className="w-full rounded-xl shadow-2xl"
              />
              <p className="text-white text-center mt-4 font-medium">
                {filteredItems.find((item) => item.id === selectedId)?.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
