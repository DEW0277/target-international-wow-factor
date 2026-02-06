import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Layout, Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Principal",
    category: "leadership",
    image: "/placeholder.svg",
    bio: "PhD in Education from Oxford University with 20 years of international school leadership experience.",
  },
  {
    name: "Alisher Karimov",
    role: "Vice Principal",
    category: "leadership",
    image: "/placeholder.svg",
    bio: "Former Cambridge examiner and curriculum specialist.",
  },
  {
    name: "Emily Chen",
    role: "Head of Primary",
    category: "leadership",
    image: "/placeholder.svg",
    bio: "Early childhood education expert from Singapore.",
  },
  {
    name: "James Wilson",
    role: "Science Teacher",
    category: "teachers",
    image: "/placeholder.svg",
    bio: "BSc Physics from MIT, STEM education specialist.",
  },
  {
    name: "Nodira Rashidova",
    role: "Math Teacher",
    category: "teachers",
    image: "/placeholder.svg",
    bio: "National math olympiad coach with multiple gold medalists.",
  },
  {
    name: "Michael Brown",
    role: "English Teacher",
    category: "teachers",
    image: "/placeholder.svg",
    bio: "Native speaker with CELTA certification, IELTS examiner.",
  },
  {
    name: "Dilshod Umarov",
    role: "Robotics Coach",
    category: "teachers",
    image: "/placeholder.svg",
    bio: "World Robotics Olympiad judge and FRC mentor.",
  },
  {
    name: "Yuki Tanaka",
    role: "Language Center Director",
    category: "teachers",
    image: "/placeholder.svg",
    bio: "Multilingual educator specializing in Korean and Japanese.",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "leadership", label: "Leadership" },
  { id: "teachers", label: "Teachers" },
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
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy to-red-cta">{t("team.title")}</h1>
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
          <ScrollReveal width="100%" className="flex justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <ScrollReveal key={member.name} width="100%" delay={index * 0.05}>
                <div className="
                  group glass-card rounded-2xl overflow-hidden border border-white/40 
                  card-3d shadow-glow-blue hover:shadow-glow-purple
                ">
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
                    <p className="text-red-500 text-sm font-medium mb-2">{member.role}</p>
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
