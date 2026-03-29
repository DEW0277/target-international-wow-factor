
import { Layout, Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { MapPin, Phone, ArrowRight } from "lucide-react";

export default function Branches() {
  const { t } = useLanguage();

  const branches = [
    {
      id: "yunusobod",
      name: "Yunusobod filiali",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
      address: "Toshkent shahri, Yunusobod tumani, Nurmakon ko'chasi, 1",
      phone: "+998 71 200 07 37",
      mapLink: "https://maps.google.com",
    },
    {
      id: "tinchlik",
      name: "Tinchlik filiali",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
      address: "Toshkent shahri, Olmazor tumani, Tinchlik",
      phone: "+998 71 200 07 37",
      mapLink: "https://maps.google.com",
    },
    {
      id: "sirgali",
      name: "Sirg'ali filiali",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      address: "Toshkent shahri, Sirg'ali tumani",
      phone: "+998 71 200 07 37",
      mapLink: "https://maps.google.com",
    },
    {
      id: "olmazor",
      name: "Olmazor filiali",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
      address: "Toshkent shahri, Olmazor tumani",
      phone: "+998 71 200 07 37",
      mapLink: "https://maps.google.com",
    },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20 relative">
        <Container>
          <ScrollReveal width="100%" className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy to-red-cta pb-2">
              {t("branches.title")}
            </h1>
            <p className="mt-4 text-xl text-navy/70 max-w-2xl mx-auto">
              {t("branches.subtitle")}
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <ScrollReveal key={branch.id} width="100%" delay={index * 0.1}>
                <div className="group h-full bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-navy/5 transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-4">{branch.name}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3 text-navy/70">
                        <MapPin className="w-5 h-5 text-red-cta shrink-0 mt-0.5" />
                        <span className="text-sm">{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-3 text-navy/70">
                        <Phone className="w-5 h-5 text-red-cta shrink-0" />
                        <span className="text-sm font-medium">{branch.phone}</span>
                      </div>
                    </div>

                    <a
                      href={branch.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-cta font-semibold group-hover:gap-3 transition-all"
                    >
                      {t("branches.getDirections")}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
}
