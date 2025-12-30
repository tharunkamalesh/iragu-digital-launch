import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Globe, Layers, Cog, Cloud, Shield, Smartphone, BarChart3, Palette, ArrowRight, Check, ChevronRight } from "lucide-react";

const categories = ["All", "Development", "Cloud", "Consulting"];

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive business websites that convert visitors into customers.",
    category: "Development",
    benefits: ["Responsive design", "SEO-optimized", "Fast loading", "Easy CMS"],
    problem: "Outdated website that doesn't represent your brand?",
    solution: "We build websites that reflect your brand and engage your audience.",
  },
  {
    icon: Layers,
    title: "Web Applications",
    description: "Custom web apps built for scalability and optimal user experience.",
    category: "Development",
    benefits: ["Custom functionality", "Scalable architecture", "User-friendly", "Secure"],
    problem: "Need a specific tool that doesn't exist?",
    solution: "We create bespoke applications designed around your requirements.",
  },
  {
    icon: Cog,
    title: "Automation & CRM",
    description: "Workflow automation to save time, reduce costs, and boost efficiency.",
    category: "Consulting",
    benefits: ["Reduced manual work", "Better tracking", "Improved productivity", "Cost savings"],
    problem: "Spending too much time on repetitive tasks?",
    solution: "Our automation solutions free up your team to focus on what matters.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Secure migration to AWS, Azure, or Google Cloud with optimized costs.",
    category: "Cloud",
    benefits: ["99.9% uptime", "Secure hosting", "Auto backups", "Scalable"],
    problem: "Worried about server downtime or security?",
    solution: "We ensure your applications are always available and secure.",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "End-to-end protection for your digital assets and customer data.",
    category: "Consulting",
    benefits: ["Threat detection", "Data encryption", "Compliance", "24/7 monitoring"],
    problem: "Concerned about data breaches?",
    solution: "We implement robust security measures to protect your business.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Dev",
    description: "iOS and Android native solutions for your mobile presence.",
    category: "Development",
    benefits: ["Native performance", "Cross-platform", "App store ready", "Push notifications"],
    problem: "Want to reach customers on mobile?",
    solution: "We build mobile apps that your users will love.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Insights to drive better decisions and optimize your operations.",
    category: "Consulting",
    benefits: ["Custom dashboards", "Real-time data", "Predictive analytics", "Reporting"],
    problem: "Struggling to make sense of your data?",
    solution: "We turn your data into actionable insights.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive digital experiences that delight users.",
    category: "Development",
    benefits: ["User research", "Wireframing", "Prototyping", "Usability testing"],
    problem: "Users finding your app confusing?",
    solution: "We design experiences that are intuitive and engaging.",
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = activeCategory === "All" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero pt-24">
        <div className="container-width">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              Transforming businesses{" "}
              <span className="text-gradient">with cutting-edge IT.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive suite of technology solutions designed to scale your operations.
            </p>
          </div>

          {/* Category Pills */}
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "pill-active" : "pill"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="section-padding !pt-8 bg-background">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-card border border-border p-8 md:p-10">
            {/* Tech Background */}
            <div className="absolute inset-0 opacity-30">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.4) 0%, transparent 50%),
                                   radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.3) 0%, transparent 50%)`,
                }}
              />
              {/* Wave Pattern */}
              <svg className="absolute bottom-0 left-0 right-0 opacity-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)" />
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary) / 0.3)" />
                    <stop offset="100%" stopColor="hsl(var(--accent) / 0.3)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="relative">
              <span className="mb-4 inline-block rounded-md bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                FEATURED
              </span>
              <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                Custom Software Development
              </h2>
              <p className="mb-6 max-w-xl text-muted-foreground">
                Tailored, scalable engineering solutions built specifically to address your unique business challenges and drive sustainable growth.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="group">
                  Read More
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="section-padding !pt-0 bg-background">
        <div className="container-width">
          <h3 className="mb-4 text-lg font-semibold text-foreground">All Services</h3>
          
          <div className="space-y-3">
            {filteredServices.map((service) => (
              <Link
                key={service.title}
                to="/contact"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground truncate">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <ChevronRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/90 backdrop-blur-lg p-4 md:hidden">
        <Link to="/contact" className="block">
          <Button variant="gradient" size="lg" className="w-full">
            <MessageCircle className="h-5 w-5" />
            Request a Quote
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

import { MessageCircle } from "lucide-react";

export default Services;
