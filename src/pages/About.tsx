import { Layout } from "@/components/layout/Layout";
import { Target, Lightbulb, Users, Heart, Award, Sparkles, Shield } from "lucide-react";

const values = [
  { icon: Heart, title: "Integrity", desc: "Honest and transparent" },
  { icon: Award, title: "Quality", desc: "Excellence in every project" },
  { icon: Sparkles, title: "Innovation", desc: "Embracing new ideas" },
  { icon: Shield, title: "Partnership", desc: "Lasting relationships" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero pt-24">
        <div className="container-width">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              About <span className="text-gradient">IRAGU</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A growing IT solutions agency focused on delivering reliable, scalable, and affordable digital solutions for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="mx-auto max-w-4xl">
            {/* Main About Card */}
            <div className="mb-8 rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Who We Are
              </h2>
              <p className="mb-4 text-muted-foreground">
                IRAGU is an emerging IT solutions agency with a mission to make technology accessible and impactful for businesses of all sizes. We understand that in today's digital-first world, having the right technology partner can make all the difference.
              </p>
              <p className="text-muted-foreground">
                We combine technical expertise with a genuine understanding of business needs to deliver solutions that drive real results. Whether you're a startup looking to establish your digital presence or an established business seeking to modernize your operations, we're here to help you succeed.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To help businesses grow through technology-driven solutions that are reliable, scalable, and tailored to their unique needs.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Our Vision
                </h3>
                <p className="text-muted-foreground">
                  To become a trusted technology partner for businesses worldwide, known for innovation, reliability, and exceptional client service.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-foreground">Our Values</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-xs text-muted-foreground">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder Section */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground">Meet the Founder</h2>
              <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-gradient-card p-8 sm:flex-row sm:items-start">
                {/* Avatar */}
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                  <Users className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="text-center sm:text-left">
                  <h3 className="mb-1 text-xl font-bold text-foreground">
                    Tharun
                  </h3>
                  <p className="mb-4 text-sm font-medium text-primary">
                    Founder & Tech Lead
                  </p>
                  <p className="text-muted-foreground">
                    With a passion for technology and a vision to help businesses succeed, Tharun founded IRAGU to bridge the gap between complex technology and practical business solutions. His expertise spans web development, cloud infrastructure, and business automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
