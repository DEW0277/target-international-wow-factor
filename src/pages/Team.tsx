import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Layout, Container } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
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
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <Container>
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold">{t("team.title")}</h1>
            <p className="mt-6 text-xl text-primary-foreground/80 max-w-3xl">
              {t("team.subtitle")}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <Container>
          {/* Filter */}
          <AnimatedSection className="flex justify-center gap-4 mb-12">
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
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-card rounded-2xl overflow-hidden border shadow-lg group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                    <p className="text-destructive text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </Layout>
  );
};

export default Team;
