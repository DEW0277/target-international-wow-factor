import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/i18n/LanguageContext";
import { Layout, Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
      <section className="pt-32 pb-20 relative overflow-hidden">
        <Container className="text-center relative z-10">
          <ScrollReveal width="100%">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy to-red-cta">{t("admissions.title")}</h1>
            <p className="mt-6 text-xl text-navy/80 max-w-3xl mx-auto">
              {t("admissions.subtitle")}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.titleKey} width="100%" delay={index * 0.1}>
                <div className="text-center relative glass-card p-6 rounded-2xl border border-white/40 h-full">
                  <div className="w-16 h-16 rounded-full bg-navy/10 text-navy flex items-center justify-center mx-auto mb-4 relative z-10 border border-navy/10">
                    <step.icon className="w-8 h-8" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[3.5rem] left-[60%] w-[80%] h-0.5 bg-navy/10 z-0" />
                  )}
                  <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-600 text-sm font-medium mb-2 border border-red-500/20">
                    Step {index + 1}
                  </span>
                  <h3 className="font-semibold text-lg text-navy mb-2">{t(step.titleKey)}</h3>
                  <p className="text-navy/60 text-sm">{t(step.descKey)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <Container>
          <ScrollReveal className="max-w-2xl mx-auto" width="100%">
            <div className="glass-card rounded-2xl p-8 border border-white/40 shadow-xl backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-navy mb-6 text-center">
                {t("hero.cta.apply")}
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      {t("form.name")} *
                    </label>
                    <Input {...register("parentName")} placeholder="John Doe" className="bg-white/50 border-white/40 text-navy placeholder:text-navy/30 focus-visible:ring-navy/20" />
                    {errors.parentName && (
                      <p className="text-red-500 text-sm mt-1">{errors.parentName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      {t("form.phone")} *
                    </label>
                    <Input {...register("phone")} placeholder="+998 90 123 45 67" className="bg-white/50 border-white/40 text-navy placeholder:text-navy/30 focus-visible:ring-navy/20" />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    {t("form.email")} *
                  </label>
                  <Input {...register("email")} type="email" placeholder="parent@email.com" className="bg-white/50 border-white/40 text-navy placeholder:text-navy/30 focus-visible:ring-navy/20" />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      {t("form.childName")} *
                    </label>
                    <Input {...register("childName")} placeholder="Child name" className="bg-white/50 border-white/40 text-navy placeholder:text-navy/30 focus-visible:ring-navy/20" />
                    {errors.childName && (
                      <p className="text-red-500 text-sm mt-1">{errors.childName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      {t("form.childAge")} *
                    </label>
                    <Input {...register("childAge")} type="number" min="5" max="18" placeholder="10" className="bg-white/50 border-white/40 text-navy placeholder:text-navy/30 focus-visible:ring-navy/20" />
                    {errors.childAge && (
                      <p className="text-red-500 text-sm mt-1">{errors.childAge.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      {t("form.grade")} *
                    </label>
                    <Input {...register("grade")} placeholder="5th grade" className="bg-white/50 border-white/40 text-navy placeholder:text-navy/30 focus-visible:ring-navy/20" />
                    {errors.grade && (
                      <p className="text-red-500 text-sm mt-1">{errors.grade.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    {t("form.message")}
                  </label>
                  <Textarea {...register("message")} rows={4} placeholder="Any questions or comments..." className="bg-white/50 border-white/40 text-navy placeholder:text-navy/30 focus-visible:ring-navy/20" />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white border-0"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : t("form.submit")}
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </Layout>
  );
};

export default Admissions;
