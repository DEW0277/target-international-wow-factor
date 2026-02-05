import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Layout, Container } from "@/components/layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(9, "Phone is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short"),
});

type FormData = z.infer<typeof formSchema>;

const contactInfo = [
  { icon: MapPin, labelKey: "contact.address", valueKey: "contact.addressText" },
  { icon: Phone, labelKey: "contact.phone", value: "+998 90 123 45 67" },
  { icon: Mail, labelKey: "contact.email", value: "info@targetschool.uz" },
  { icon: Clock, labelKey: "contact.hours", valueKey: "contact.hoursText" },
];

const Contact = () => {
  const { t } = useLanguage();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("Contact form submitted:", data);
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
            <h1 className="text-4xl md:text-5xl font-bold">{t("contact.title")}</h1>
            <p className="mt-6 text-xl text-primary-foreground/80 max-w-3xl">
              {t("contact.subtitle")}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection animation="slideRight">
              <h2 className="text-2xl font-bold text-primary mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.labelKey} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{t(info.labelKey)}</h3>
                      <p className="text-muted-foreground">
                        {info.value || t(info.valueKey!)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video bg-muted rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mr-2" />
                  <span>Map will be displayed here</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slideLeft">
              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("form.name")} *
                    </label>
                    <Input {...register("name")} placeholder="Your name" />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t("form.phone")} *
                      </label>
                      <Input {...register("phone")} placeholder="+998 90 123 45 67" />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t("form.email")} *
                      </label>
                      <Input {...register("email")} type="email" placeholder="your@email.com" />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("form.message")} *
                    </label>
                    <Textarea {...register("message")} rows={5} placeholder="How can we help you?" />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-destructive hover:bg-destructive/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : t("form.submit")}
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
