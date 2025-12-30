import { MessageSquare, FileText, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Requirement Discussion",
    description: "Understanding your needs",
  },
  {
    number: "02",
    icon: FileText,
    title: "Planning & Proposal",
    description: "Detailed project roadmap",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "Building with precision",
  },
  {
    number: "04",
    icon: TestTube,
    title: "Testing",
    description: "Quality assurance",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Delivery & Support",
    description: "Launch and beyond",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A streamlined approach to bring your ideas to life
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative text-center"
            >
              {/* Step Card */}
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/30">
                {/* Number Badge */}
                <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-1 font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Connector (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 bg-border lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
