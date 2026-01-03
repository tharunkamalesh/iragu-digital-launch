import { useState, useEffect, useRef } from "react";
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

// Services Data
const services = [
  { 
    category: "Development", 
    title: "Web Development", 
    description: "Custom web applications, business websites, e-commerce platforms, and PWAs.",
    image: "/api/placeholder/400/200?text=Web+Development" 
  },
  { 
    category: "Development", 
    title: "Mobile Applications", 
    description: "Native and cross-platform mobile applications for Android and iOS.",
    image: "/api/placeholder/400/200?text=Mobile+Apps" 
  },
  { 
    category: "Infrastructure", 
    title: "Cloud & DevOps", 
    description: "Scalable infrastructure, cloud deployment, and CI/CD pipelines.",
    image: "/api/placeholder/400/200?text=Cloud+DevOps" 
  },
  { 
    category: "Intelligence", 
    title: "Intelligence / AI Solutions", 
    description: "Data-driven intelligence and smart automation solutions.",
    image: "/api/placeholder/400/200?text=AI+Solutions" 
  },
  { 
    category: "Design", 
    title: "Design & Transformation", 
    description: "UI/UX design and digital transformation services.",
    image: "/api/placeholder/400/200?text=UI+UX" 
  },
  { 
    category: "Automation", 
    title: "Automation & CRM", 
    description: "Workflow automation and CRM solutions to save time and improve efficiency.",
    image: "/api/placeholder/400/200?text=CRM" 
  }
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
  

  
  const heroRef = useRef<HTMLDivElement>(null);

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
      <section ref={heroRef} className="relative overflow-hidden w-full h-screen flex items-center" style={{ zIndex: 5 }}>
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" style={{ zIndex: 1 }}></div>
        
        {/* Content Layer (STATIC) - Higher z-index to appear above the animation */}
        <div className="container-width section-padding relative" style={{ zIndex: 10 }}>
          <div className="mx-auto max-w-4xl text-center relative">
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#374151] bg-[#111827]/50 px-5 py-2.5 text-sm text-[#9CA3AF] backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" />
              IT Solutions Agency
            </div>

            <h1
              className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
            >
              We Build Digital Solutions That Help Businesses <span className="text-[#22C55E]">Scale Faster</span>
            </h1>

            <p
              className="mx-auto mb-4 max-w-xl text-base text-[#D1D5DB] md:mb-6 md:max-w-2xl md:text-xl"
            >
              We help startups and businesses build fast, secure, and scalable digital products.
            </p>
            
            <p
              className="mx-auto mb-8 max-w-xl text-sm text-[#9CA3AF] md:mb-12"
            >
              Free consultation • No obligation • Quick response
            </p>

            <div
              className="flex flex-col items-center justify-center gap-4"
            >
              <a href="#contact">
                <Button variant="orange-cta" size="lg" className="w-full md:w-auto min-w-[200px] md:min-w-[220px]">
                  Contact Us
                </Button>
              </a>
              
              <a href="https://wa.me/9626299568" target="_blank" rel="noopener noreferrer">
                <Button variant="green-accent" size="lg" className="w-full md:w-auto min-w-[200px] md:min-w-[220px]">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT IRAGU SECTION ==================== */}
      <section className="section-padding bg-[#000000] relative z-10">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">About IRAGU</h2>
            <p className="mt-4 text-[#9CA3AF] max-w-2xl mx-auto">Who we are, what we do, and where we are headed</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* About Us Card */}
            <div className="flip-card rounded-none border border-[#374151] bg-[#0B0F0E] h-64 cursor-pointer transition-all duration-300 hover:border-white hover:-translate-y-1">
              <div className="flip-card-inner w-full h-full relative transition-transform duration-600 ease-in-out transform-style-preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-bold text-white text-center">About Us</h3>
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6 bg-[#0B0F0E] rounded-none border border-[#374151]">
                  <h3 className="text-xl font-bold text-white mb-2 text-center">About Us</h3>
                  <p className="text-[#D1D5DB] text-center">IRAGU is an IT solutions agency focused on helping startups and businesses build a strong digital presence.</p>
                </div>
              </div>
            </div>
            
            {/* Our Mission Card */}
            <div className="flip-card rounded-none border border-[#374151] bg-[#0B0F0E] h-64 cursor-pointer transition-all duration-300 hover:border-white hover:-translate-y-1">
              <div className="flip-card-inner w-full h-full relative transition-transform duration-600 ease-in-out transform-style-preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-bold text-white text-center">Our Mission</h3>
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6 bg-[#0B0F0E] rounded-none border border-[#374151]">
                  <h3 className="text-xl font-bold text-white mb-2 text-center">Our Mission</h3>
                  <p className="text-[#D1D5DB] text-center">Our mission is to help businesses grow by providing reliable, affordable, and high-quality digital solutions using modern technology and best practices.</p>
                </div>
              </div>
            </div>
            
            {/* Our Vision Card */}
            <div className="flip-card rounded-none border border-[#374151] bg-[#0B0F0E] h-64 cursor-pointer transition-all duration-300 hover:border-white hover:-translate-y-1">
              <div className="flip-card-inner w-full h-full relative transition-transform duration-600 ease-in-out transform-style-preserve-3d">
                <div className="flip-card-front absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-bold text-white text-center">Our Vision</h3>
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6 bg-[#0B0F0E] rounded-none border border-[#374151]">
                  <h3 className="text-xl font-bold text-white mb-2 text-center">Our Vision</h3>
                  <p className="text-[#D1D5DB] text-center">Our vision is to become a trusted technology partner for businesses by delivering innovative, scalable, and future-ready digital solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE IRAGU SECTION ==================== */}
      <section className="section-padding bg-[#000000] relative z-10">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Choose IRAGU</h2>
            <p className="mt-4 text-[#9CA3AF] max-w-2xl mx-auto">We deliver exceptional service with proven expertise and dedication to your success.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="rounded-none border border-[#374151] bg-[#0B0F0E] p-6 text-center transition-all duration-300 hover:border-white hover:-translate-y-1 cursor-default">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-none bg-gradient-to-br from-primary to-accent">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Expert Team</h3>
              <p className="text-[#9CA3AF] text-sm">Skilled professionals with years of experience in digital solutions.</p>
            </div>
            
            <div className="rounded-none border border-[#374151] bg-[#0B0F0E] p-6 text-center transition-all duration-300 hover:border-white hover:-translate-y-1 cursor-default">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-none bg-gradient-to-br from-primary to-accent">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Quality Assurance</h3>
              <p className="text-[#9CA3AF] text-sm">Rigorous testing and quality control for flawless deliverables.</p>
            </div>
            
            <div className="rounded-none border border-[#374151] bg-[#0B0F0E] p-6 text-center transition-all duration-300 hover:border-white hover:-translate-y-1 cursor-default">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-none bg-gradient-to-br from-primary to-accent">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Timely Delivery</h3>
              <p className="text-[#9CA3AF] text-sm">We respect deadlines and deliver projects on schedule.</p>
            </div>
            
            <div className="rounded-none border border-[#374151] bg-[#0B0F0E] p-6 text-center transition-all duration-300 hover:border-white hover:-translate-y-1 cursor-default">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-none bg-gradient-to-br from-primary to-accent">
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">24/7 Support</h3>
              <p className="text-[#9CA3AF] text-sm">Round-the-clock assistance for all your technical needs.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="section-padding bg-[#000000] relative z-10">
        <div className="container-width">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Our Services
            </h2>
            <p className="mb-8 text-[#9CA3AF] max-w-2xl mx-auto">
              End-to-end digital solutions designed to build, scale, and transform businesses.
            </p>
            
            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="service-card rounded-2xl border border-[#374151] bg-[#0B0F0E] p-6 transition-all duration-300"
                >
                  <div className="service-card-image-container mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-40 object-cover rounded-xl"
                    />
                  </div>
                  <div className="service-card-content">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-[#D1D5DB] mb-4">{service.description}</p>
                    <a href="#" className="inline-flex items-center text-[#22C55E] hover:text-[#22C55E]/80 text-sm font-medium">
                      Learn more <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* ==================== OUR TEAM SECTION ==================== */}
      <section className="section-padding bg-[#000000] relative z-10">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-[#9CA3AF]">The people behind IRAGU who turn ideas into digital solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="team-card rounded-none border border-[#374151] bg-[#0B0F0E] p-6 text-center transition-all duration-300 hover:border-white flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-none bg-gradient-to-br from-primary to-accent text-white text-xl font-bold mb-4">
                D
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">Dharshan</h3>
              <p className="text-sm text-[#9CA3AF]">Software Engineer / Developer</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="team-card rounded-none border border-[#374151] bg-[#0B0F0E] p-6 text-center transition-all duration-300 hover:border-white flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-none bg-gradient-to-br from-primary to-accent text-white text-xl font-bold mb-4">
                TK
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">Tharun Kamalesh</h3>
              <p className="text-sm text-[#9CA3AF]">Software Engineer / Developer</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="team-card rounded-none border border-[#374151] bg-[#0B0F0E] p-6 text-center transition-all duration-300 hover:border-white flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-none bg-gradient-to-br from-primary to-accent text-white text-xl font-bold mb-4">
                S
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">Sharvesh</h3>
              <p className="text-sm text-[#9CA3AF]">Software Engineer / Developer</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="team-card rounded-none border border-[#374151] bg-[#0B0F0E] p-6 text-center transition-all duration-300 hover:border-white flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-none bg-gradient-to-br from-primary to-accent text-white text-xl font-bold mb-4">
                Sr
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">Sridhar</h3>
              <p className="text-sm text-[#9CA3AF]">Software Engineer / Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="section-padding bg-[#000000] relative z-10">
        <div className="container-width">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-3">Get in Touch</h2>
              <p className="text-[#9CA3AF]">We are here to help you transform your business with intelligent IT solutions.</p>
            </div>
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              <a
                href="mailto:hello@iragu.com"
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 rounded-none border border-border bg-card p-4 transition-all hover:border-primary/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-none bg-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-[#9CA3AF]">Email Support</p>
                  <p className="font-semibold text-foreground">hello@iragu.com</p>
                </div>
              </a>
              <a
                href="tel:+15550123456"
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 rounded-none border border-border bg-card p-4 transition-all hover:border-primary/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-none bg-accent/20">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-[#9CA3AF]">Call Us</p>
                  <p className="font-semibold text-foreground">+1 (555) 012-3456</p>
                </div>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <div className="rounded-none border border-[#25D366]/30 bg-[#25D366]/10 p-4 text-center mb-6">
              <h3 className="mb-2 text-base font-semibold text-foreground">Prefer a Quick Chat?</h3>
              <p className="mb-3 text-sm text-[#9CA3AF]">Get in touch with us on WhatsApp for instant responses.</p>
              <a href="https://wa.me/9626299568" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="w-full">
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