import { Users, Cpu, DollarSign, Zap, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Client-Focused Approach",
    description: "Your success is our priority. We listen, understand, and deliver.",
  },
  {
    icon: Cpu,
    title: "Modern Technology Stack",
    description: "We use the latest technologies to build future-proof solutions.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Quality solutions that fit your budget without compromising value.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Delivery",
    description: "On-time delivery with consistent communication throughout.",
  },
  {
    icon: HeadphonesIcon,
    title: "Post-Launch Support",
    description: "We're here for you even after the project goes live.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-width">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Why Choose IRAGU?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We're committed to delivering excellence at every step
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex gap-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-cta">
                  <reason.icon className="h-5 w-5 text-primary-foreground" />
                </div>
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
