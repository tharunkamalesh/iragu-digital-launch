import { Layout } from "@/components/layout/Layout";
import { Target, Lightbulb, Users } from "lucide-react";

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
            {/* Main About */}
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
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
            <div className="mb-16 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-gradient-card p-6 shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To help businesses grow through technology-driven solutions that are reliable, scalable, and tailored to their unique needs.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-gradient-card p-6 shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Our Vision
                </h3>
                <p className="text-muted-foreground">
                  To become a trusted technology partner for businesses worldwide, known for innovation, reliability, and exceptional client service.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
                Our Values
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { title: "Integrity", desc: "Honest and transparent in all dealings" },
                  { title: "Quality", desc: "Commitment to excellence in every project" },
                  { title: "Innovation", desc: "Embracing new technologies and ideas" },
                  { title: "Partnership", desc: "Building lasting client relationships" },
                ].map((value) => (
                  <div key={value.title} className="rounded-lg border border-border bg-card p-4 text-center">
                    <h4 className="mb-1 font-semibold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder Section */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
                Meet the Founder
              </h2>
              <div className="flex flex-col items-center gap-6 rounded-xl border border-border bg-gradient-card p-8 shadow-card sm:flex-row sm:items-start">
                {/* Avatar Placeholder */}
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-gradient-cta">
                  <Users className="h-10 w-10 text-primary-foreground" />
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
