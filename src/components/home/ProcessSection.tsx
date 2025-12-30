import { MessageSquare, FileText, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Requirement Discussion",
    description: "We start by understanding your needs and goals.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Planning & Proposal",
    description: "Detailed project plan with timeline and cost estimates.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "Building your solution with regular progress updates.",
  },
  {
    number: "04",
    icon: TestTube,
    title: "Testing",
    description: "Rigorous testing to ensure quality and performance.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Delivery & Support",
    description: "Launch and ongoing support for your success.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Our Process
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A streamlined approach to bring your ideas to life
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number & Icon */}
                <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-card">
                  <step.icon className="h-6 w-6 text-primary" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-cta text-xs font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mb-2 font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
