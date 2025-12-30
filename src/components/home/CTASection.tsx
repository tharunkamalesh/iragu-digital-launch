import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-card">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container-width relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Heading */}
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Ready to Start Your Digital Journey with{" "}
            <span className="text-gradient">IRAGU</span>?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Let's discuss how we can help transform your business with technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button variant="gradient" size="lg" className="group">
                Contact Us
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
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
