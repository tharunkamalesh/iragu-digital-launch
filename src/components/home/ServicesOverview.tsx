import { Link } from "react-router-dom";
import { Globe, Layers, Cog, Cloud, ArrowRight, ChevronRight } from "lucide-react";

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
        <div className="mb-12">
          <h2 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
            Transforming businesses{" "}
            <span className="text-gradient">with cutting-edge IT.</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Explore our comprehensive suite of technology solutions designed to scale your operations.
          </p>
        </div>

        {/* Featured Card */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-card border border-border p-8 md:p-10">
            {/* Tech Background Pattern */}
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
              <h3 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                Custom Software Development
              </h3>
              <p className="mb-6 max-w-xl text-muted-foreground">
                Tailored, scalable engineering solutions built specifically to address your unique business challenges and drive growth.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* All Services Header */}
        <h3 className="mb-4 text-lg font-semibold text-foreground">All Services</h3>

        {/* Services List */}
        <div className="space-y-3">
          {services.map((service) => (
            <Link
              key={service.title}
              to="/services"
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
  );
};
