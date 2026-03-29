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
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { t } = useLanguage();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success(t("form.success"));
    reset();
  };

  const contactInfo = [
    { icon: MapPin, title: t("contact.address"), details: t("contact.addressText"), link: "https://maps.google.com" },
    { icon: Phone, title: t("contact.phone"), details: "+998 71 200 07 37", link: "tel:+998712000737" },
    { icon: Mail, title: t("contact.email"), details: "info@targetschool.uz", link: "mailto:info@targetschool.uz" },
    { icon: Clock, title: t("contact.hours"), details: t("contact.hoursText"), link: null },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <Container className="text-center relative z-10">
          <ScrollReveal width="100%">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy to-red-cta">{t("contact.title")}</h1>
            <p className="mt-6 text-xl text-navy/80 max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6 h-fit">
              {contactInfo.map((item, index) => (
                <ScrollReveal key={item.title} width="100%" delay={index * 0.1}>
                  <a
                     href={item.link || undefined}
                     className={`block p-6 rounded-2xl glass-card border border-white/40 h-full hover:-translate-y-1 transition-transform ${!item.link ? 'cursor-default' : 'hover:bg-white/60'}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-4 text-navy">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-lg text-navy mb-2">{item.title}</h3>
                    <p className="text-navy/70 text-sm leading-relaxed">{item.details}</p>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            {/* Contact Form */}
            <ScrollReveal width="100%" delay={0.2}>
              <div className="glass-card rounded-2xl p-8 border border-white/40 shadow-lg bg-white/40">
                <h2 className="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      {t("form.name")}
                    </label>
                    <Input {...register("name")} placeholder="Your name" className="bg-white/50 border-white/40 text-navy placeholder:text-navy/30 focus-visible:ring-navy/20" />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      {t("form.email")}
                    </label>
                    <Input {...register("email")} type="email" placeholder="Your email" className="bg-white/50 border-white/40 text-navy placeholder:text-navy/30 focus-visible:ring-navy/20" />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Subject
                    </label>
                    <Input {...register("subject")} placeholder="Inquiry subject" className="bg-white/50 border-white/40 text-navy placeholder:text-navy/30 focus-visible:ring-navy/20" />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      {t("form.message")}
                    </label>
                    <Textarea {...register("message")} rows={4} placeholder="How can we help you?" className="bg-white/50 border-white/40 text-navy placeholder:text-navy/30 focus-visible:ring-navy/20" />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white border-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : t("form.submit")}
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
