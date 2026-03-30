import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Layout, Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LazyImage } from "@/components/ui/LazyImage";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 12;

const galleryItems = [
  { id: 1,  category: "campus",     title: "Target International School",  image: "/gallery/DSC09213.JPG" },
  { id: 2,  category: "activities", title: "Dars jarayoni",                image: "/gallery/ERU_0566.JPG" },
  { id: 3,  category: "activities", title: "O'quvchilar",                  image: "/gallery/ERU_0568.JPG" },
  { id: 4,  category: "activities", title: "Sinfxona",                     image: "/gallery/ERU_0571.JPG" },
  { id: 5,  category: "activities", title: "Faoliyat",                     image: "/gallery/ERU_0572.JPG" },
  { id: 6,  category: "events",     title: "Jamoa",                        image: "/gallery/ERU_0577.JPG" },
  { id: 7,  category: "activities", title: "Amaliyot",                     image: "/gallery/ERU_0582.JPG" },
  { id: 8,  category: "campus",     title: "Laboratoriya",                 image: "/gallery/ERU_0592.JPG" },
  { id: 9,  category: "activities", title: "O'zlashtirish",                image: "/gallery/ERU_0596.jpg" },
  { id: 10, category: "campus",     title: "Sharoitlar",                   image: "/gallery/11ERU_0532.jpg" },
  { id: 11, category: "events",     title: "Jarayon",                      image: "/gallery/IMAGE 2026-03-26 17:39:31.jpg" },
  { id: 12, category: "activities", title: "O'quvchilar",                  image: "/gallery/IMAGE 2026-03-26 17:39:35.jpg" },
  { id: 13, category: "campus",     title: "Sinfxona",                     image: "/gallery/IMAGE 2026-03-26 17:39:37.jpg" },
  { id: 14, category: "events",     title: "Dars",                         image: "/gallery/IMAGE 2026-03-26 17:39:40.jpg" },
  { id: 15, category: "activities", title: "Faollik",                      image: "/gallery/IMAGE 2026-03-26 17:39:43.jpg" },
  { id: 16, category: "campus",     title: "Maktab binosi",                image: "/gallery/IMAGE 2026-03-26 17:39:45.jpg" },
  { id: 17, category: "events",     title: "Tadbir",                       image: "/gallery/IMAGE 2026-03-26 17:39:48.jpg" },
  { id: 18, category: "activities", title: "Amaliyot",                     image: "/gallery/IMAGE 2026-03-26 17:39:50.jpg" },
  { id: 19, category: "campus",     title: "Sharoitlar",                   image: "/gallery/IMAGE 2026-03-26 17:39:57.jpg" },
  { id: 20, category: "events",     title: "Jamoa",                        image: "/gallery/IMAGE 2026-03-26 17:40:00.jpg" },
  { id: 21, category: "activities", title: "O'zlashtirish",                image: "/gallery/IMAGE 2026-03-26 17:40:03.jpg" },
  { id: 22, category: "campus",     title: "Laboratoriya",                 image: "/gallery/IMAGE 2026-03-26 17:40:06.jpg" },
  { id: 23, category: "events",     title: "Ochiq dars",                   image: "/gallery/IMAGE 2026-03-26 17:40:08.jpg" },
  { id: 24, category: "activities", title: "Amaliyot",                     image: "/gallery/IMAGE 2026-03-26 17:40:10.jpg" },
  { id: 25, category: "campus",     title: "Kutubxona",                    image: "/gallery/IMAGE 2026-03-26 17:40:13.jpg" },
  { id: 26, category: "events",     title: "Muloqot",                      image: "/gallery/IMAGE 2026-03-26 17:40:16.jpg" },
  { id: 27, category: "activities", title: "O'rganish",                    image: "/gallery/IMAGE 2026-03-26 17:40:20.jpg" },
  { id: 28, category: "campus",     title: "Sport zali",                   image: "/gallery/IMAGE 2026-03-26 17:40:22.jpg" },
  { id: 29, category: "events",     title: "Tajriba",                      image: "/gallery/IMAGE 2026-03-26 17:40:25.jpg" },
  { id: 30, category: "activities", title: "Izlanish",                     image: "/gallery/IMAGE 2026-03-26 17:40:28.jpg" },
  { id: 31, category: "campus",     title: "Foye",                         image: "/gallery/IMAGE 2026-03-26 17:40:30.jpg" },
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
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setVisibleCount(PAGE_SIZE);
  };

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
      <section className="pt-32 pb-20 relative overflow-hidden">
        <Container className="text-center relative z-10">
          <ScrollReveal width="100%">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy to-navy/70">{t("gallery.title")}</h1>
            <p className="mt-6 text-xl text-navy/80 max-w-3xl mx-auto">
              {t("gallery.subtitle")}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <Container>
          {/* Filter */}
          <ScrollReveal width="100%" className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm mx-2 font-medium transition-colors border",
                  activeCategory === cat.id
                    ? "bg-navy text-white border-navy"
                    : "bg-transparent text-navy border-navy/20 hover:bg-navy/5"
                )}
              >
                {cat.label}
              </button>
            ))}
          </ScrollReveal>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {visibleItems.map((item, index) => (
              <ScrollReveal key={item.id} width="100%" delay={(index % PAGE_SIZE) * 0.04}>
                <motion.button
                  onClick={() => setSelectedId(item.id)}
                  whileHover={{ scale: 1.02 }}
                  className="
                    w-full aspect-square rounded-2xl overflow-hidden relative group border border-white/40
                    card-3d shadow-glow-blue hover:shadow-glow-purple
                  "
                >
                  <LazyImage
                    src={item.image}
                    alt={item.title}
                    priority={index < 4}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</span>
                  </div>
                </motion.button>
              </ScrollReveal>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center mt-10">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="px-8 py-3 rounded-full bg-navy text-white font-medium shadow hover:bg-navy/80 transition-colors"
              >
                Ko'proq ko'rish ({filteredItems.length - visibleCount} ta qoldi)
              </motion.button>
            </div>
          )}
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
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
                className="w-full rounded-xl shadow-2xl border border-white/10"
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
