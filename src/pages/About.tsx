import { Award, Heart, Leaf, Target } from "lucide-react";
import surendra from "@/assets/team/surendra.jpeg";
import subbareddy from "@/assets/team/subbareddy.jpeg";
import brahmaiah from "@/assets/team/brahmaiah.jpeg";
import jayachandra from "@/assets/team/jayachandra.jpeg";

const team = [
  {
    name: "Madineni Surendra Kumar",
    role: "Founder & CEO",
    img: surendra,
    bio: "Visionary leader driving Yadvi's mission to transform Indian agriculture through superior hybrid genetics.",
  },
  {
    name: "A. V. Subbareddy",
    role: "Director",
    img: subbareddy,
    bio: "Strategic operations leader ensuring quality seed delivery across regions.",
  },
  {
    name: "C. Brahmaiah",
    role: "Director",
    img: brahmaiah,
    bio: "Field expert and farmer-relations head with deep on-ground experience.",
  },
  {
    name: "M. Jayachandra Reddy",
    role: "Director",
    img: jayachandra,
    bio: "Drives research, partnerships, and the company's long-term vision.",
  },
];

const About = () => {
  return (
    <>
      <section className="container-px pt-12 pb-16">
        <div className="mx-auto max-w-5xl text-center">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent"
            data-aos="fade-up"
          >
            <span className="h-px w-8 bg-accent" /> About Us <span className="h-px w-8 bg-accent" />
          </span>
          <h1
            className="mt-5 font-display text-5xl sm:text-6xl font-bold leading-[1.05]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Cultivating prosperity from
            <span className="block text-gradient-leaf italic">a single seed.</span>
          </h1>
          <p
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Yadvi Hybrid Seeds Pvt. Ltd. is a farmer-first seed company combining
            decades of agronomic experience with modern plant breeding science.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="container-px pb-20">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To empower every farmer with hybrid seeds that maximise yield, resilience, and profitability — season after season.",
            },
            {
              icon: Leaf,
              title: "Our Vision",
              desc: "To become India's most trusted hybrid seed brand, rooted in research and respected for honesty.",
            },
            {
              icon: Heart,
              title: "Our Promise",
              desc: "Premium genetics, transparent pricing, and a relationship that lasts beyond a single harvest.",
            },
          ].map((b, i) => (
            <div
              key={b.title}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="bg-card rounded-3xl p-8 border border-border/50 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-leaf grid place-items-center text-primary-foreground shadow-soft">
                <b.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{b.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-gradient-warm py-24 container-px">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent" /> Leadership
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">
              The minds behind <span className="text-gradient-accent">Yadvi</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              A team rooted in agriculture, driven by research, and dedicated to
              the success of every farmer we serve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <article
                key={m.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group relative bg-card rounded-3xl overflow-hidden shadow-card border border-border/50 hover:shadow-elegant hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={m.img}
                    alt={`Portrait of ${m.name}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-background">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-sun font-semibold">
                      {m.role}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold leading-tight">
                      {m.name}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {m.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="container-px py-24">
        <div className="mx-auto max-w-7xl">
          <div
            className="rounded-[2.5rem] bg-earth text-earth-foreground p-12 md:p-16 relative overflow-hidden"
            data-aos="zoom-in"
          >
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sun/30 blur-3xl" />
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
              {[
                { n: "30+", l: "Hybrid Varieties" },
                { n: "10K+", l: "Farmer Network" },
                { n: "12+", l: "States Served" },
                { n: "100%", l: "Quality Assured" },
              ].map((s, i) => (
                <div key={s.l} data-aos="fade-up" data-aos-delay={i * 100}>
                  <p className="font-display text-5xl md:text-6xl font-bold text-sun">{s.n}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] opacity-80">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
