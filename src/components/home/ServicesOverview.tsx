import { Link } from "react-router-dom";
import { Globe, Layers, Cog, Cloud, ArrowRight } from "lucide-react";

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

export const ServicesOverview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-gradient-card p-6 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-elevated"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
