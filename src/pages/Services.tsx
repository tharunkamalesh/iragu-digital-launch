import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Globe, Layers, Cog, Cloud, ArrowRight, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Your website is often the first impression customers have of your business. We create modern, responsive websites that not only look great but also convert visitors into customers.",
    benefits: [
      "Responsive design for all devices",
      "SEO-optimized structure",
      "Fast loading speeds",
      "Easy content management",
    ],
    problem: "Struggling with an outdated website that doesn't represent your brand?",
    solution: "We build websites that reflect your brand identity and engage your audience effectively.",
  },
  {
    icon: Layers,
    title: "Web Applications",
    description: "Off-the-shelf software doesn't always fit your unique needs. We develop custom web applications tailored to your specific business processes and workflows.",
    benefits: [
      "Custom functionality",
      "Scalable architecture",
      "User-friendly interfaces",
      "Secure and reliable",
    ],
    problem: "Need a specific tool that doesn't exist in the market?",
    solution: "We create bespoke web applications designed around your exact requirements.",
  },
  {
    icon: Cog,
    title: "Automation & CRM",
    description: "Manual processes waste time and introduce errors. We implement automation solutions and CRM systems that streamline your operations and improve efficiency.",
    benefits: [
      "Reduced manual work",
      "Better customer tracking",
      "Improved team productivity",
      "Cost savings over time",
    ],
    problem: "Spending too much time on repetitive tasks?",
    solution: "Our automation solutions free up your team to focus on what matters most.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Reliable infrastructure is the backbone of any digital business. We handle cloud deployment, server management, and DevOps to keep your applications running smoothly.",
    benefits: [
      "99.9% uptime guarantee",
      "Secure hosting environment",
      "Automatic backups",
      "Scalable infrastructure",
    ],
    problem: "Worried about server downtime or security?",
    solution: "We ensure your applications are always available, secure, and performing optimally.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero pt-24">
        <div className="container-width">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive digital solutions designed to help your business thrive in the modern world
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-width space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                {/* Icon & Title */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-cta">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    {service.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="mb-6 text-muted-foreground">
                  {service.description}
                </p>

                {/* Problem & Solution */}
                <div className="mb-6 rounded-xl border border-border bg-card p-4">
                  <p className="mb-2 font-medium text-foreground">
                    <span className="text-destructive">Problem:</span> {service.problem}
                  </p>
                  <p className="font-medium text-foreground">
                    <span className="text-accent">Solution:</span> {service.solution}
                  </p>
                </div>

                {/* CTA */}
                <Link to="/contact">
                  <Button variant="gradient" className="group">
                    Get Quote
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              {/* Benefits Card */}
              <div className={`rounded-xl border border-border bg-gradient-card p-6 shadow-card ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-width">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Not Sure What You Need?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Let's have a conversation. We'll help you identify the best solutions for your business goals.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="lg" className="group">
                Schedule a Free Consultation
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
