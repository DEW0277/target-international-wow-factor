import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/i18n/LanguageContext";
import { Layout, Container } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FileText, MessageSquare, ClipboardCheck, CheckCircle } from "lucide-react";

const formSchema = z.object({
  parentName: z.string().min(2, "Name is required"),
  phone: z.string().min(9, "Phone is required"),
  email: z.string().email("Invalid email"),
  childName: z.string().min(2, "Child name is required"),
  childAge: z.string().min(1, "Age is required"),
  grade: z.string().min(1, "Grade is required"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { icon: FileText, titleKey: "admissions.step1", descKey: "admissions.step1Desc" },
  { icon: MessageSquare, titleKey: "admissions.step2", descKey: "admissions.step2Desc" },
  { icon: ClipboardCheck, titleKey: "admissions.step3", descKey: "admissions.step3Desc" },
  { icon: CheckCircle, titleKey: "admissions.step4", descKey: "admissions.step4Desc" },
];

const Admissions = () => {
  const { t } = useLanguage();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    // Here you would send to Supabase or API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success(t("form.success"));
    reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <Container>
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold">{t("admissions.title")}</h1>
            <p className="mt-6 text-xl text-primary-foreground/80 max-w-3xl">
              {t("admissions.subtitle")}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <Container>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={step.titleKey}>
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon className="w-8 h-8" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                  <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-2">
                    Step {index + 1}
                  </span>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t(step.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm">{t(step.descKey)}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted">
        <Container>
          <AnimatedSection className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                {t("hero.cta.apply")}
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("form.name")} *
                    </label>
                    <Input {...register("parentName")} placeholder="John Doe" />
                    {errors.parentName && (
                      <p className="text-destructive text-sm mt-1">{errors.parentName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("form.phone")} *
                    </label>
                    <Input {...register("phone")} placeholder="+998 90 123 45 67" />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("form.email")} *
                  </label>
                  <Input {...register("email")} type="email" placeholder="parent@email.com" />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("form.childName")} *
                    </label>
                    <Input {...register("childName")} placeholder="Child name" />
                    {errors.childName && (
                      <p className="text-destructive text-sm mt-1">{errors.childName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("form.childAge")} *
                    </label>
                    <Input {...register("childAge")} type="number" min="5" max="18" placeholder="10" />
                    {errors.childAge && (
                      <p className="text-destructive text-sm mt-1">{errors.childAge.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("form.grade")} *
                    </label>
                    <Input {...register("grade")} placeholder="5th grade" />
                    {errors.grade && (
                      <p className="text-destructive text-sm mt-1">{errors.grade.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("form.message")}
                  </label>
                  <Textarea {...register("message")} rows={4} placeholder="Any questions or comments..." />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-destructive hover:bg-destructive/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : t("form.submit")}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </Layout>
  );
};

export default Admissions;
