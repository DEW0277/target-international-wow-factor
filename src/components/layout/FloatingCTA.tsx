import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, FileText } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const { t } = useLanguage();
  const [showApply, setShowApply] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowApply(scrollPercent > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Apply Button (appears after 20% scroll) */}
      <AnimatePresence>
        {showApply && (
          <motion.a
            href="/admissions"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "w-14 h-14 rounded-full bg-destructive text-destructive-foreground",
              "flex items-center justify-center shadow-lg",
              "animate-pulse-glow"
            )}
            aria-label={t("hero.cta.apply")}
          >
            <FileText className="w-6 h-6" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Telegram Button (always visible) */}
      <motion.a
        href="https://t.me/targetschool"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-14 h-14 rounded-full bg-[#0088cc] text-white",
          "flex items-center justify-center shadow-lg"
        )}
        aria-label={t("hero.cta.telegram")}
      >
        <Send className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
