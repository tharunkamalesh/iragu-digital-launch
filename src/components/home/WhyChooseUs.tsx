import { Users, Cpu, DollarSign, Zap, HeadphonesIcon, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Client-Focused Approach",
    description: "Your success is our priority",
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    description: "Latest technologies for future-proof solutions",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Quality solutions within your budget",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "On-time delivery with regular updates",
  },
  {
    icon: HeadphonesIcon,
    title: "Post-Launch Support",
    description: "We're here even after go-live",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-width">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Why Choose <span className="text-gradient">IRAGU</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We're committed to delivering excellence at every step
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-background/50 p-5 transition-all duration-300 hover:border-primary/30"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <reason.icon className="h-5 w-5 text-white" />
              </div>

              {/* Content */}
              <div>
                <h3 className="mb-1 font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
