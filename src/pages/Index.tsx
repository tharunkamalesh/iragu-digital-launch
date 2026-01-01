import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import RevealSection from "@/components/RevealSection";
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
  Mail,
  Phone,
  MapPin,
  User,
  AtSign,
  HelpCircle,
  Send,
  ExternalLink,
} from "lucide-react";



// Why Choose Us Data
const reasons = [
  { icon: Users, title: "Client-Focused Approach", description: "Your success is our priority" },
  { icon: Cpu, title: "Modern Tech Stack", description: "Latest technologies for future-proof solutions" },
  { icon: DollarSign, title: "Affordable Pricing", description: "Quality solutions within your budget" },
  { icon: Zap, title: "Fast Delivery", description: "On-time delivery with regular updates" },
  { icon: HeadphonesIcon, title: "Post-Launch Support", description: "We're here even after go-live" },
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => {
      observer.observe(card);
    });
    
    // Observe team cards
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      serviceCards.forEach((card) => {
        observer.unobserve(card);
      });
      
      teamCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

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
      <section id="home" className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center z-10">
        {/* Original background elements (kept for additional depth) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl opacity-50" />
        </div>

        <div className="container-width section-padding relative z-10">
          <div className="mx-auto max-w-4xl text-center relative z-10">
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 text-sm text-muted-foreground backdrop-blur-sm opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              IT Solutions Agency
            </div>

            <h1
              className="mb-6 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] opacity-0 animate-fade-in sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              style={{ animationDelay: "0.2s" }}
            >
              We Build Digital Solutions That Help Businesses <span style={{color: "#16A34A"}}>Scale Faster</span>
            </h1>

            <p
              className="mx-auto mb-4 max-w-xl text-base text-[#64748B] opacity-0 animate-fade-in sm:text-lg md:mb-6 md:max-w-2xl md:text-xl"
              style={{ animationDelay: "0.3s" }}
            >
              We help startups and businesses build fast, secure, and scalable digital products.
            </p>
            
            <p
              className="mx-auto mb-8 max-w-xl text-sm text-[#64748B] opacity-0 animate-fade-in sm:text-base md:mb-12"
              style={{ animationDelay: "0.35s" }}
            >
              Free consultation • No obligation • Quick response
            </p>

            <div
              className="flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-in sm:flex-row sm:gap-6"
              style={{ animationDelay: "0.4s" }}
            >
              <a href="https://wa.me/9626299568" target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="lg" className="w-full sm:w-auto min-w-[200px] md:min-w-[220px] bg-[#22C55E] hover:bg-[#16A34A] text-white">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT IRAGU SECTION ==================== */}
      <section className="section-padding bg-card relative z-10">
        <div className="container-width">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">About <span className="text-gradient">IRAGU</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: About IRAGU - Flip Card */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3 className="text-xl font-bold text-foreground">About IRAGU</h3>
                  </div>
                  <div className="flip-card-back">
                    <p className="text-sm sm:text-base text-white">
                      IRAGU is an IT solutions agency focused on helping startups and businesses build a strong digital presence.
                      We design and develop modern websites, scalable web applications, and automation solutions that save time and improve efficiency.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card 2: Our Mission - Flip Card */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <div className="flip-card-back">
                    <p className="text-sm sm:text-base text-white">
                      Our mission is to help businesses grow by providing reliable, affordable, and high-quality digital solutions using modern technology and best practices.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card 3: Our Vision - Flip Card */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <div className="flip-card-back">
                    <p className="text-sm sm:text-base text-white">
                      Our vision is to become a trusted technology partner for businesses by delivering innovative, scalable, and future-ready digital solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="section-padding bg-[#0B0F0E] relative z-10">
        <div className="container-width">
          <RevealSection>
            <div className="mb-12 text-center">
              <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
                What Services We Provide
              </h2>
              <p className="max-w-2xl mx-auto text-[#9CA3AF]">
                End-to-end digital solutions designed to build, scale, and transform businesses.
              </p>
            </div>
          </RevealSection>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Web Development */}
            <div className="dark-service-card group relative rounded-xl bg-[#111827] p-6 border border-[#374151] transition-all duration-300 hover:border-green-500/50 cursor-pointer">
              <div className="absolute inset-0 rounded-xl opacity-20 bg-gradient-to-br from-transparent to-green-500/10"></div>
              <div className="relative z-10">
                <span className="text-xs text-[#9CA3AF] mb-2 inline-block">Development</span>
                <h3 className="text-xl font-bold text-white mb-3">Web Development</h3>
                <p className="text-[#9CA3AF] mb-4">Custom web applications, business websites, e-commerce platforms, and PWAs.</p>
                <div className="flex items-center text-green-500 text-sm font-medium">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
            
            {/* Mobile Applications */}
            <div className="dark-service-card group relative rounded-xl bg-[#111827] p-6 border border-[#374151] transition-all duration-300 hover:border-green-500/50 cursor-pointer">
              <div className="absolute inset-0 rounded-xl opacity-20 bg-gradient-to-br from-transparent to-green-500/10"></div>
              <div className="relative z-10">
                <span className="text-xs text-[#9CA3AF] mb-2 inline-block">Development</span>
                <h3 className="text-xl font-bold text-white mb-3">Mobile Applications</h3>
                <p className="text-[#9CA3AF] mb-4">Native and cross-platform mobile applications for Android and iOS.</p>
                <div className="flex items-center text-green-500 text-sm font-medium">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
            
            {/* Cloud & DevOps - Larger card */}
            <div className="dark-service-card group relative rounded-xl bg-[#111827] p-6 border border-[#374151] transition-all duration-300 hover:border-green-500/50 cursor-pointer">
              <div className="absolute inset-0 rounded-xl opacity-20 bg-gradient-to-br from-transparent to-green-500/10"></div>
              <div className="relative z-10">
                <span className="text-xs text-[#9CA3AF] mb-2 inline-block">Infrastructure</span>
                <h3 className="text-xl font-bold text-white mb-3">Cloud & DevOps</h3>
                <p className="text-[#9CA3AF] mb-4">Scalable infrastructure, cloud deployment, and CI/CD pipelines.</p>
                <div className="flex items-center text-green-500 text-sm font-medium">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
            
            {/* Automation & CRM */}
            <div className="dark-service-card group relative rounded-xl bg-[#111827] p-6 border border-[#374151] transition-all duration-300 hover:border-green-500/50 cursor-pointer">
              <div className="absolute inset-0 rounded-xl opacity-20 bg-gradient-to-br from-transparent to-green-500/10"></div>
              <div className="relative z-10">
                <span className="text-xs text-[#9CA3AF] mb-2 inline-block">Automation</span>
                <h3 className="text-xl font-bold text-white mb-3">Automation & CRM</h3>
                <p className="text-[#9CA3AF] mb-4">Workflow automation and CRM solutions to save time and improve efficiency.</p>
                <div className="flex items-center text-green-500 text-sm font-medium">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
            
            {/* Intelligence / AI Solutions */}
            <div className="dark-service-card group relative rounded-xl bg-[#111827] p-6 border border-[#374151] transition-all duration-300 hover:border-green-500/50 cursor-pointer">
              <div className="absolute inset-0 rounded-xl opacity-20 bg-gradient-to-br from-transparent to-green-500/10"></div>
              <div className="relative z-10">
                <span className="text-xs text-[#9CA3AF] mb-2 inline-block">Intelligence</span>
                <h3 className="text-xl font-bold text-white mb-3">Intelligence / AI Solutions</h3>
                <p className="text-[#9CA3AF] mb-4">Data-driven intelligence and smart automation solutions.</p>
                <div className="flex items-center text-green-500 text-sm font-medium">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
            
            {/* Design & Transformation */}
            <div className="dark-service-card group relative rounded-xl bg-[#111827] p-6 border border-[#374151] transition-all duration-300 hover:border-green-500/50 cursor-pointer">
              <div className="absolute inset-0 rounded-xl opacity-20 bg-gradient-to-br from-transparent to-green-500/10"></div>
              <div className="relative z-10">
                <span className="text-xs text-[#9CA3AF] mb-2 inline-block">Design</span>
                <h3 className="text-xl font-bold text-white mb-3">Design & Transformation</h3>
                <p className="text-[#9CA3AF] mb-4">UI/UX design and digital transformation services.</p>
                <div className="flex items-center text-green-500 text-sm font-medium">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US SECTION ==================== */}
      <section className="section-padding bg-card relative z-10">
        <div className="container-width">
          <RevealSection>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Why Choose <span className="text-gradient">IRAGU</span>?
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">We're committed to delivering excellence at every step</p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 rounded-2xl border border-border bg-background/50 p-5 transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <reason.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="mb-1 font-semibold text-foreground">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ==================== OUR TEAM SECTION ==================== */}
      <section className="section-padding bg-background relative z-10">
        <div className="container-width">
          <RevealSection>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Our Team
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">The people behind IRAGU who turn ideas into digital solutions</p>
            </div>
          </RevealSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="team-card team-card-base rounded-lg border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white text-xl font-bold mb-4">
                D
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">Dharshan</h3>
              <p className="text-sm text-muted-foreground">Software Engineer / Developer</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="team-card team-card-base rounded-lg border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white text-xl font-bold mb-4">
                TK
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">Tharun Kamalesh</h3>
              <p className="text-sm text-muted-foreground">Software Engineer / Developer</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="team-card team-card-base rounded-lg border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white text-xl font-bold mb-4">
                S
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">Sharvesh</h3>
              <p className="text-sm text-muted-foreground">Software Engineer / Developer</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="team-card team-card-base rounded-lg border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white text-xl font-bold mb-4">
                Sr
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">Sridhar</h3>
              <p className="text-sm text-muted-foreground">Software Engineer / Developer</p>
            </div>
          </div>
        </div>
      </section>





      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="section-padding bg-background relative z-10">
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
            <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 sm:mb-8">
              <a
                href="mailto:hello@iragu.com"
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 transition-all hover:border-primary/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-muted-foreground">Email Support</p>
                  <p className="font-semibold text-foreground">hello@iragu.com</p>
                </div>
              </a>
              <a
                href="tel:+15550123456"
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 transition-all hover:border-primary/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">+1 (555) 012-3456</p>
                </div>
              </a>
            </div>

            {/* Address */}
            <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground">Main Office</p>
                <p className="font-semibold text-foreground text-sm sm:text-base">123 Innovation Blvd, Tech District, San Francisco, CA 94103</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Send us a message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
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
            <div className="mt-6 sm:mt-8 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 p-4 sm:p-6 text-center">
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-foreground">Prefer a Quick Chat?</h3>
              <p className="mb-3 sm:mb-4 text-sm text-muted-foreground">Get in touch with us on WhatsApp for instant responses.</p>
              <a href="https://wa.me/9626299568" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
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