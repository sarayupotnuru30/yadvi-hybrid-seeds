import { FormEvent, useState } from "react";
import { Clock, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you! We'll get back to you within 24 hours.");
      (e.currentTarget as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      <section className="container-px pt-12 pb-10">
        <div className="mx-auto max-w-5xl text-center">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent"
            data-aos="fade-up"
          >
            <span className="h-px w-8 bg-accent" /> Get in Touch
          </span>
          <h1
            className="mt-5 font-display text-5xl sm:text-6xl font-bold leading-[1.05]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We'd love to hear
            <span className="block text-gradient-leaf italic">from you.</span>
          </h1>
          <p
            className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Questions about a hybrid? Bulk orders? Distributor enquiry? Reach out —
            our team is happy to help.
          </p>
        </div>
      </section>

      <section className="container-px pb-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <div
            className="lg:col-span-2 bg-gradient-leaf text-primary-foreground rounded-3xl p-8 lg:p-10 shadow-elegant relative overflow-hidden"
            data-aos="fade-right"
          >
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sun/25 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />

            <div className="relative">
              <h2 className="font-display text-3xl font-bold">Contact Information</h2>
              <p className="mt-3 text-primary-foreground/85">
                Reach us through any of the channels below.
              </p>

              <ul className="mt-10 space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 90521 10028",
                    href: "tel:+919052110028",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "yadvihybridseeds@gmail.com",
                    href: "mailto:yadvihybridseeds@gmail.com",
                  },
                  {
                    icon: Clock,
                    label: "Business Hours",
                    value: "Mon – Sat · 10 AM – 6 PM",
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "Andhra Pradesh, India",
                    href: "https://maps.google.com/?q=Yadvi+Hybrid+Seeds",
                  },
                ].map((c) => {
                  const Inner = (
                    <>
                      <div className="h-11 w-11 rounded-xl bg-background/15 grid place-items-center shrink-0">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] opacity-75">{c.label}</p>
                        <p className="mt-0.5 font-semibold break-all">{c.value}</p>
                      </div>
                    </>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="flex items-start gap-4 group hover:opacity-90 transition-opacity"
                        >
                          {Inner}
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">{Inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-12">
                <p className="text-xs uppercase tracking-[0.2em] opacity-75 mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="h-11 w-11 rounded-full bg-background/15 grid place-items-center hover:bg-background hover:text-primary transition-all hover:scale-110"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://wa.me/919052110028"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="h-11 w-11 rounded-full bg-background/15 grid place-items-center hover:bg-background hover:text-primary transition-all hover:scale-110"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 bg-card rounded-3xl p-8 lg:p-10 shadow-card border border-border/60"
            data-aos="fade-left"
          >
            <h2 className="font-display text-3xl font-bold">Send us a message</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form and we'll respond within 24 hours.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" placeholder="Your full name" required />
              <Field label="Phone" name="phone" type="tel" placeholder="+91 ..." />
              <div className="sm:col-span-2">
                <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="sm:col-span-2">
                <Field label="Subject" name="subject" placeholder="How can we help?" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your enquiry..."
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-shine mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold shadow-soft hover:shadow-glow transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-wait"
            >
              {submitting ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Map */}
        <div
          className="mx-auto max-w-7xl mt-10 rounded-3xl overflow-hidden shadow-card border border-border/60 h-[420px]"
          data-aos="fade-up"
        >
          <iframe
            title="Yadvi Hybrid Seeds location"
            src="https://www.google.com/maps?q=Andhra+Pradesh+India&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-semibold text-foreground mb-2">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
    />
  </div>
);

export default Contact;
