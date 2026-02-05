import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  GraduationCap,
  Shield,
  Award,
  BookOpen,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: BookOpen, key: "badge.curriculum" },
  { icon: GraduationCap, key: "badge.stem" },
  { icon: Award, key: "badge.ielts" },
  { icon: Shield, key: "badge.safety" },
];

export function VideoHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Gradient Fallback */}
      <div className="absolute inset-0 bg-primary">
        {/* Animated gradient background as fallback/overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-destructive/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-3/4 -right-1/4 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-muted/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>
        
        {/* Video element - will show if video file exists */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/placeholder.svg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {t("hero.title")}{" "}
            <span className="text-destructive">{t("hero.titleHighlight")}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground text-lg px-8 py-6"
          >
            <Link to="/admissions">{t("hero.cta.apply")}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
          >
            <a href="https://t.me/targetschool" target="_blank" rel="noopener noreferrer">
              <Send className="w-5 h-5 mr-2" />
              {t("hero.cta.telegram")}
            </a>
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.key}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
            >
              <badge.icon className="w-5 h-5 text-destructive" />
              <span className="text-white text-sm font-medium">{t(badge.key)}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
