import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  MessageCircle,
  Globe,
  Layers,
  Cog,
  Cloud,
  ChevronRight,
  Users,
  Cpu,
  DollarSign,
  Zap,
  HeadphonesIcon,
  MessageSquare,
  FileText,
  Code,
  TestTube,
  Rocket,
  Target,
  Lightbulb,
  Heart,
  Award,
  Sparkles,
  Shield,
  Mail,
  Phone,
  MapPin,
  User,
  AtSign,
  HelpCircle,
  Send,
  ExternalLink,
} from "lucide-react";

// Services Data
const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive business websites that convert visitors into customers.",
  },
  {
    icon: Layers,
    title: "Web Applications",
    description: "Custom web apps built for scalability and optimal user experience.",
  },
  {
    icon: Cog,
    title: "Automation & CRM",
    description: "Workflow automation to save time, reduce costs, and boost efficiency.",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description: "Secure and reliable cloud deployment for your applications.",
  },
];

// Why Choose Us Data
const reasons = [
  { icon: Users, title: "Client-Focused Approach", description: "Your success is our priority" },
  { icon: Cpu, title: "Modern Tech Stack", description: "Latest technologies for future-proof solutions" },
  { icon: DollarSign, title: "Affordable Pricing", description: "Quality solutions within your budget" },
  { icon: Zap, title: "Fast Delivery", description: "On-time delivery with regular updates" },
  { icon: HeadphonesIcon, title: "Post-Launch Support", description: "We're here even after go-live" },
];

// Process Steps
const steps = [
  { number: "01", icon: MessageSquare, title: "Discussion", description: "Understanding your needs" },
  { number: "02", icon: FileText, title: "Planning", description: "Detailed project roadmap" },
  { number: "03", icon: Code, title: "Development", description: "Building with precision" },
  { number: "04", icon: TestTube, title: "Testing", description: "Quality assurance" },
  { number: "05", icon: Rocket, title: "Delivery", description: "Launch and beyond" },
];

// Values Data
const values = [
  { icon: Heart, title: "Integrity", desc: "Honest and transparent" },
  { icon: Award, title: "Quality", desc: "Excellence in every project" },
  { icon: Sparkles, title: "Innovation", desc: "Embracing new ideas" },
  { icon: Shield, title: "Partnership", desc: "Lasting relationships" },
];

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({ title: "Message Sent!", description: "Thank you for reaching out. We'll get back to you soon." });
    setFormData({ name: "", email: "", inquiryType: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* ==================== HERO SECTION ==================== */}
      <section id="home" className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="container-width section-padding relative">
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 text-sm text-muted-foreground backdrop-blur-sm opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              IT Solutions Agency
            </div>

            <h1
              className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 animate-fade-in sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.2s" }}
            >
              We Build Digital Solutions That <span className="text-gradient">Grow Your Business</span>
            </h1>

            <p
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-in sm:text-xl"
              style={{ animationDelay: "0.3s" }}
            >
              Websites, automation, and cloud solutions tailored for modern businesses
            </p>

            <div
              className="flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-in sm:flex-row"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                variant="gradient"
                size="lg"
                className="group min-w-[220px]"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Free Consultation
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="min-w-[220px]">
                  <MessageCircle className="h-5 w-5" />
                  Contact on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="section-padding bg-background">
        <div className="container-width">
          <div className="mb-12">
            <h2 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
              Transforming businesses <span className="text-gradient">with cutting-edge IT.</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Explore our comprehensive suite of technology solutions designed to scale your operations.
            </p>
          </div>

          {/* Featured Card */}
          <div className="mb-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-card border border-border p-8 md:p-10">
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.3) 0%, transparent 50%),
                                     radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.2) 0%, transparent 50%)`,
                  }}
                />
              </div>
              <div className="relative">
                <span className="mb-4 inline-block rounded-md bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  FEATURED
                </span>
                <h3 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">Custom Software Development</h3>
                <p className="mb-6 max-w-xl text-muted-foreground">
                  Tailored, scalable engineering solutions built specifically to address your unique business challenges.
                </p>
                <Button
                  variant="outline"
                  className="group"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Quote
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          <h3 className="mb-4 text-lg font-semibold text-foreground">All Services</h3>
          <div className="space-y-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50 cursor-pointer"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground">{service.title}</h4>
                  <p className="text-sm text-muted-foreground truncate">{service.description}</p>
                </div>
                <ChevronRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US SECTION ==================== */}
      <section className="section-padding bg-card">
        <div className="container-width">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose <span className="text-gradient">IRAGU</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">We're committed to delivering excellence at every step</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-background/50 p-5 transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <reason.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS SECTION ==================== */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">A streamlined approach to bring your ideas to life</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step.number} className="group relative text-center">
                <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/30">
                  <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                    {step.number}
                  </span>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-1 font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 bg-border lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="section-padding bg-card">
        <div className="container-width">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                About <span className="text-gradient">IRAGU</span>
              </h2>
              <p className="text-muted-foreground">
                A growing IT solutions agency focused on delivering reliable, scalable, and affordable digital solutions.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background/50 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To help businesses grow through technology-driven solutions that are reliable, scalable, and tailored to their needs.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/50 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become a trusted technology partner for businesses worldwide, known for innovation and reliability.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="flex items-center gap-3 rounded-xl border border-border bg-background/50 p-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                    <p className="text-xs text-muted-foreground">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Founder */}
            <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-background/50 p-8 sm:flex-row sm:items-start">
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="mb-1 text-xl font-bold text-foreground">Tharun</h3>
                <p className="mb-4 text-sm font-medium text-primary">Founder & Tech Lead</p>
                <p className="text-muted-foreground">
                  With a passion for technology and a vision to help businesses succeed, Tharun founded IRAGU to bridge the gap between
                  complex technology and practical business solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="section-padding bg-background">
        <div className="container-width">
          <div className="mx-auto max-w-2xl">
            {/* Hero Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-card border border-border p-8 text-center mb-8">
              <div className="absolute inset-0 opacity-30">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.4) 0%, transparent 40%),
                                     radial-gradient(circle at 70% 80%, hsl(var(--accent) / 0.3) 0%, transparent 40%)`,
                  }}
                />
              </div>
              <div className="relative">
                <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">Get in Touch</h2>
                <p className="text-muted-foreground">We are here to help you transform your business with intelligent IT solutions.</p>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4 sm:grid-cols-2 mb-8">
              <a
                href="mailto:hello@iragu.com"
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Support</p>
                  <p className="font-semibold text-foreground">hello@iragu.com</p>
                </div>
              </a>
              <a
                href="tel:+15550123456"
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">+1 (555) 012-3456</p>
                </div>
              </a>
            </div>

            {/* Address */}
            <div className="mb-8 flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Main Office</p>
                <p className="font-semibold text-foreground">123 Innovation Blvd, Tech District, San Francisco, CA 94103</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Send us a message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-border bg-background pl-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Email Address
                  </Label>
                  <div className="relative">
                    <AtSign className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-border bg-background pl-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Inquiry Type</Label>
                  <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                    <SelectTrigger className="h-12 rounded-xl border-border bg-background">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        <SelectValue placeholder="General Inquiry" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="project">New Project</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="rounded-xl border-border bg-background resize-none"
                  />
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Prefer a Quick Chat?</h3>
              <p className="mb-4 text-sm text-muted-foreground">Get in touch with us on WhatsApp for instant responses.</p>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
