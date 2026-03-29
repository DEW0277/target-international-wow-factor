import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Layout, Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Bekhzod Jalilov",
    role: "Asoschi (Founder)",
    category: "leadership",
    image: "https://targetschool.uz/assets/images/jalilov.png",
    bio: "TARGET School asoschisi va ta'lim sohasida ko'p yillik tajribaga ega rahbar.",
  },
  {
    name: "Jamshid Saidaxmedov",
    role: "Direktor (Principal)",
    category: "leadership",
    image: "/placeholder.svg",
    bio: "Maktab direktori, xalqaro ta'lim standartlarini joriy etuvchi boshqaruvchi.",
  },
  {
    name: "Muzaffar Isroilov",
    role: "Ta'lim bo'limi rahbari (Head of Department of Education)",
    category: "academic",
    image: "/placeholder.svg",
    bio: "Ta'lim sifati va o'quv dasturlarini rivojlantirish bo'yicha mas'ul rahbar.",
  },
  {
    name: "Marwa Mansour",
    role: "Kembrij koordinatori (Cambridge Coordinator)",
    category: "academic",
    image: "https://targetschool.uz/assets/images/marwa.jpg",
    bio: "Cambridge Assessment dasturlarini maktabga tadbiq etish bo'yicha xalqaro mutaxassis.",
  },
  {
    name: "Diyorbek Naimov",
    role: "Mashg'ulotlar koordinatori (Training Coordinator)",
    category: "academic",
    image: "https://targetschool.uz/assets/images/diyor.png",
    bio: "Amaliy darslar va to'garaklar faoliyatini muvofiqlashtiruvchi mutaxassis.",
  },
  {
    name: "Rajabboy Naimov",
    role: "IT va multimedia bo'limi rahbari (Head of IT and Multimedia Department)",
    category: "academic",
    image: "/placeholder.svg",
    bio: "IT va multimedia bo'limi rahbari, maktabning texnik va multimedia infratuzilmasini rivojlantirish bo'yicha mas'ul rahbar.",
  },
];

const categories = [
  { id: "all", label: "Barchasi" },
  { id: "leadership", label: "Rahbariyat" },
  { id: "academic", label: "Ta'lim Bo'limi" },
];

const Team = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredMembers =
    activeCategory === "all"
      ? teamMembers
      : teamMembers.filter((m) => m.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <Container className="text-center relative z-10">
          <ScrollReveal width="100%">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy to-red-cta">
              {t("team.title")}
            </h1>
            <p className="mt-6 text-xl text-navy/80 max-w-3xl mx-auto">
              {t("team.subtitle")}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <Container>
          {/* Filter */}
          <ScrollReveal
            width="100%"
            className="flex justify-center gap-4 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm mx-2 font-medium transition-colors border",
                  activeCategory === cat.id
                    ? "bg-navy text-white border-navy"
                    : "bg-transparent text-navy border-navy/20 hover:bg-navy/5",
                )}
              >
                {cat.label}
              </button>
            ))}
          </ScrollReveal>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <ScrollReveal key={member.name} width="100%" delay={index * 0.05}>
                <div
                  className="
                  group glass-card rounded-2xl overflow-hidden border border-white/40 
                  card-3d shadow-glow-blue hover:shadow-glow-purple
                "
                >
                  <div className="aspect-square overflow-hidden bg-white/20 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Social/Contact reveal (Placeholder if needed) */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="h-1 w-12 bg-red-500 rounded-full mb-2" />
                      <p className="text-white text-xs font-medium">Read Bio</p>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    <h3 className="font-semibold text-lg text-navy group-hover:text-blue-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-red-500 text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-navy/60 text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Team;
