import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Container } from "./Container";

export function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/about", label: t("nav.about") },
    { href: "/programs", label: t("nav.programs") },
    { href: "/admissions", label: t("nav.admissions") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/targetschool.uz",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@TargetEdu",
      label: "YouTube",
    },
    {
      icon: Send,
      href: "https://t.me/targetschooluz",
      label: "Telegram",
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="font-bold text-2xl">
                <img width={150} height={150} src="/images/logo2.png" alt="" />
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              International education excellence in the heart of Tashkent.
              Cambridge curriculum, STEM focus, and individual approach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("contact.title")}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t("contact.addressText")}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+998901234567"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +998 90 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:info@targetschool.uz"
                  className="hover:text-primary-foreground transition-colors"
                >
                  info@targetschool.uz
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-destructive transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} TARGET International School. {t("footer.rights")}.
          </p>
          <p className="text-sm text-primary-foreground/60">
            {t("footer.address")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
