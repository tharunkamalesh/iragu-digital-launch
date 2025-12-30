import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageCircle, Send, MapPin, User, AtSign, HelpCircle, ExternalLink } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", inquiryType: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24">
        <div className="container-width section-padding !pb-8">
          {/* Hero Card with Tech Background */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-card border border-border p-8 text-center md:p-12">
            {/* Tech Pattern Background */}
            <div className="absolute inset-0 opacity-30">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.4) 0%, transparent 40%),
                                   radial-gradient(circle at 70% 80%, hsl(var(--accent) / 0.3) 0%, transparent 40%)`,
                }}
              />
              {/* Grid Lines */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                                   linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>

            <div className="relative">
              <h1 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
                Get in Touch
              </h1>
              <p className="text-muted-foreground">
                We are here to help you transform your business with intelligent IT solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container-width section-padding !py-0">
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Email Card */}
          <a
            href="mailto:hello@iragu.com"
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email Support</p>
              <p className="font-semibold text-foreground">hello@iragu.com</p>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+15550123456"
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20">
              <Phone className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Call Us</p>
              <p className="font-semibold text-foreground">+1 (555) 012-3456</p>
            </div>
          </a>
        </div>

        {/* Address Card */}
        <div className="mt-4 flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Main Office</p>
            <p className="font-semibold text-foreground">
              123 Innovation Blvd, Tech District, San Francisco, CA 94103
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container-width section-padding">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
            <MessageCircle className="h-4 w-4 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Send us a message</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12 rounded-xl border-border bg-card pl-11"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Email Address
            </Label>
            <div className="relative">
              <AtSign className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12 rounded-xl border-border bg-card pl-11"
              />
            </div>
          </div>

          {/* Inquiry Type */}
          <div className="space-y-2">
            <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Inquiry Type
            </Label>
            <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
              <SelectTrigger className="h-12 rounded-xl border-border bg-card">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="General Inquiry" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="project">New Project</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="rounded-xl border-border bg-card resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="gradient"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </section>

      {/* Location Section */}
      <section className="container-width section-padding !pt-0">
        <h2 className="mb-4 text-xl font-bold text-foreground">Our Location</h2>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center">
          {/* Map Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at center, hsl(var(--primary) / 0.2) 0%, transparent 60%)`,
              }}
            />
            {/* Grid */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--muted-foreground) / 0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, hsl(var(--muted-foreground) / 0.1) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />
          </div>

          <div className="relative">
            {/* Pin Icon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <MapPin className="h-7 w-7 text-primary-foreground" />
            </div>

            {/* Open in Maps Button */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Open in Maps
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="container-width section-padding !pt-0 pb-24">
        <div className="rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 p-6 text-center">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Prefer a Quick Chat?
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Get in touch with us on WhatsApp for instant responses.
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Now
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
