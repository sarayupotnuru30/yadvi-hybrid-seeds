import { Heart } from "lucide-react";
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
      {/* Hero */}
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
            className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Yadvi Hybrid Seeds Pvt Ltd is a dedicated agricultural seed company
            committed to delivering high-quality hybrid seeds that empower
            farmers to achieve better productivity and sustainable growth.
          </p>
        </div>
      </section>

      {/* Company narrative */}
      <section className="container-px pb-20">
        <div className="mx-auto max-w-4xl space-y-6 text-base sm:text-lg leading-relaxed text-foreground/85">
          <p data-aos="fade-up">
            With a strong focus on innovation, quality, and farmer satisfaction,
            we strive to support modern agriculture with reliable and
            performance-driven seed solutions.
          </p>
          <p data-aos="fade-up">
            Our company works closely with farmers, dealers, and agricultural
            experts to understand field conditions and provide seeds that
            perform consistently across different environments. Through
            continuous research and strict quality control, we ensure that every
            seed meets high standards of purity, germination, and yield
            potential.
          </p>
          <p data-aos="fade-up">
            At Yadvi Hybrid Seeds Pvt Ltd, we believe that farmers are the
            backbone of our nation. Our goal is not just to sell seeds, but to
            build long-term relationships by offering trust, guidance, and
            dependable products that contribute to farmers' success.
          </p>
          <p data-aos="fade-up">
            We are committed to promoting sustainable farming practices and
            contributing to increased agricultural productivity, helping create
            a better future for farmers and society.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container-px pb-20">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
          <div
            data-aos="fade-up"
            className="bg-card p-10 border border-border/60 shadow-card hover:shadow-elegant transition-all"
          >
            <h3 className="font-display text-3xl font-semibold">
              🌱 Our Vision
            </h3>
            <p className="mt-4 text-lg italic text-foreground/85 leading-relaxed">
              "To expand globally as a recognized brand in hybrid seeds,
              ensuring food security and agricultural excellence."
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="120"
            className="bg-card p-10 border border-border/60 shadow-card hover:shadow-elegant transition-all"
          >
            <h3 className="font-display text-3xl font-semibold">
              🌱 Our Mission
            </h3>
            <p className="mt-4 text-lg italic text-foreground/85 leading-relaxed">
              "To provide high-quality, reliable hybrid seeds through continuous
              research, innovation, and farmer support — helping farmers achieve
              better yields, improved income, and sustainable agriculture."
            </p>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="container-px pb-20">
        <div className="mx-auto max-w-4xl">
          <div
            data-aos="fade-up"
            className="bg-card p-10 border border-border/60 shadow-card text-center"
          >
            <div className="mx-auto h-14 w-14 bg-gradient-leaf grid place-items-center text-primary-foreground shadow-soft">
              <Heart className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold">Our Promise</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Premium genetics, transparent dealings, and a relationship that
              lasts beyond a single harvest.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="bg-gradient-warm py-24 container-px">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent" /> Founder's Note
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">
              A message from <span className="text-gradient-accent">our founder</span>
            </h2>
          </div>

          <div
            className="grid md:grid-cols-[280px_1fr] gap-10 items-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-card border border-border/60 shadow-card overflow-hidden">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img
                  src={surendra}
                  alt="Madineni Surendra Kumar — Founder of Yadvi Hybrid Seeds"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5 text-center">
                <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold">
                  Founder & CEO
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold">
                  Madineni Surendra Kumar
                </h3>
              </div>
            </div>

            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-foreground/85">
              <p>
                I am <strong>Madineni Surendra Kumar</strong>, the founder of
                Yadvi Hybrid Seeds Pvt Ltd, driven by a deep passion for
                agriculture and farmer development. Coming from a background
                closely connected to farming, I understand the real challenges
                faced by farmers in achieving better yields and stable income.
              </p>
              <p>
                With a vision to make a meaningful difference in the
                agricultural sector, I established Yadvi Hybrid Seeds Pvt Ltd
                to provide high-quality, reliable hybrid seeds that farmers can
                trust. My focus has always been on quality, innovation, and
                building long-term relationships with farmers and dealers.
              </p>
              <p>
                I strongly believe that the success of agriculture begins with
                the quality of seeds. Through continuous learning, field
                experience, and commitment to excellence, I aim to support
                farmers with better solutions that improve productivity and
                sustainability.
              </p>
              <p>
                My goal is to grow Yadvi Hybrid Seeds Pvt Ltd into a trusted
                and leading seed company, contributing to the progress of
                farmers and the agricultural economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-px py-24">
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
                className="group relative bg-card overflow-hidden shadow-card border border-border/60 hover:shadow-elegant hover:-translate-y-2 transition-all duration-500"
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
      <section className="container-px pb-24">
        <div className="mx-auto max-w-7xl">
          <div
            className="bg-earth text-earth-foreground p-12 md:p-16 relative overflow-hidden"
            data-aos="zoom-in"
          >
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sun/30 blur-3xl" />
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
              {[
                { n: "100+", l: "Hybrid Varieties" },
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
