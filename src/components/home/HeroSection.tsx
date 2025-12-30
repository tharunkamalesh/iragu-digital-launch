import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-width section-padding relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div 
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            IT Solutions Agency
          </div>

          {/* Headline */}
          <h1 
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 animate-fade-in sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.2s' }}
          >
            We Build Digital Solutions That{" "}
            <span className="text-gradient">Grow Your Business</span>
          </h1>

          {/* Subheading */}
          <p 
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-in sm:text-xl"
            style={{ animationDelay: '0.3s' }}
          >
            Websites, automation, and cloud solutions tailored for modern businesses
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-in sm:flex-row"
            style={{ animationDelay: '0.4s' }}
          >
            <Link to="/contact">
              <Button variant="gradient" size="lg" className="group">
                Get Free Consultation
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5" />
                Contact on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
