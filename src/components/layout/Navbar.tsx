import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

const languages: { code: Language; label: string }[] = [
  { code: "uz", label: "O'zbek" },
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
];

const branches = [
  { name: "Target Chilonzor", url: "https://targetschool.uz" },
  { name: "Target Yunusobod", url: "https://yunusobod.targetschool.uz" },
  { name: "Target Sergeli", url: "https://sergeli.targetschool.uz" },
  { name: "Target Mirzo Ulugbek", url: "https://mirzo.targetschool.uz" },
];

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isBranchOpen, setIsBranchOpen] = useState(false);
  const [isMobileBranchOpen, setIsMobileBranchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    // { href: "/about#values", label: t("nav.values") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/team", label: t("nav.team") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const isHome = location.pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || !isHome
            ? "bg-card/95 backdrop-blur-md shadow-md"
            : "bg-transparent",
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div
                className={cn(
                  "font-bold text-xl md:text-2xl transition-colors",
                  isScrolled || !isHome ? "text-primary" : "text-white",
                )}
              >
                <img
                  src="https://targetschool.uz/assets/icons/Logo.svg"
                  alt=""
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative py-1",
                    location.pathname === link.href
                      ? "text-destructive"
                      : isScrolled || !isHome
                        ? "text-foreground hover:text-destructive"
                        : "text-white/90 hover:text-white",
                  )}
                >
                  {link.label}
                  {location.pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-destructive"
                    />
                  )}
                </Link>
              ))}

              {/* Filiallar Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsBranchOpen(true)}
                onMouseLeave={() => setIsBranchOpen(false)}
              >
                <button
                  onClick={() => setIsBranchOpen(!isBranchOpen)}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors relative py-1",
                    isScrolled || !isHome
                      ? "text-foreground hover:text-destructive"
                      : "text-white/90 hover:text-white",
                  )}
                >
                  Filiallar
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isBranchOpen && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isBranchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 bg-card rounded-xl shadow-xl border overflow-hidden min-w-[200px] z-50"
                    >
                      {branches.map((branch) => (
                        <a
                          key={branch.url}
                          href={branch.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                          {branch.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Language Switcher & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors px-2 py-1 rounded",
                    isScrolled || !isHome
                      ? "text-foreground hover:bg-muted"
                      : "text-white hover:bg-white/10",
                  )}
                >
                  {language.toUpperCase()}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 bg-card rounded-lg shadow-lg border overflow-hidden min-w-[120px]"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangOpen(false);
                          }}
                          className={cn(
                            "w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors",
                            language === lang.code &&
                              "text-destructive font-medium",
                          )}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "lg:hidden p-2 rounded-lg transition-colors",
                  isScrolled || !isHome
                    ? "text-foreground hover:bg-muted"
                    : "text-white hover:bg-white/10",
                )}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-card shadow-xl"
            >
              <div className="pt-20 px-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      location.pathname === link.href
                        ? "bg-destructive/10 text-destructive"
                        : "text-foreground hover:bg-muted",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Filiallar mobile */}
                <div>
                  <button
                    onClick={() => setIsMobileBranchOpen(!isMobileBranchOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    Filiallar
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isMobileBranchOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {isMobileBranchOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {branches.map((branch) => (
                          <a
                            key={branch.url}
                            href={branch.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-2.5 text-sm text-foreground hover:text-destructive transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                            {branch.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
