import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  FlaskConical,
  Leaf,
  ShieldCheck,
  Sprout,
  Sun,
  TrendingUp,
} from "lucide-react";
import heroImg from "@/assets/hero/hero-field.jpg";
import aboutImg from "@/assets/hero/about-farm.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const featured = [
  "surya-bitter",
  "kanaka-999",
  "kubera-watermelon",
  "yh-222-okra",
];

const Home = () => {
  const featuredProducts = products.filter((p) => featured.includes(p.id));

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-24 min-h-[100vh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Lush hybrid seed field at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />

        {/* Floating decorations */}
        <div className="absolute top-32 right-12 hidden md:block animate-float-slow">
          <div className="h-20 w-20 rounded-full bg-sun/30 backdrop-blur-sm border border-sun/40" />
        </div>
        <div className="absolute bottom-1/3 left-8 hidden md:block animate-float">
          <Leaf className="h-12 w-12 text-primary-glow/70 -rotate-12" />
        </div>

        <div className="relative container-px pb-20 pt-40 w-full">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur-md border border-background/30 px-4 py-2 text-background text-xs font-medium uppercase tracking-[0.2em] animate-fade-up"
              >
                <Sprout className="h-3.5 w-3.5" />
                Trusted hybrid seeds since day one
              </div>

              <h1
                className="mt-6 font-display font-bold text-background text-5xl sm:text-6xl lg:text-7xl leading-[1.05]"
                data-aos="fade-up"
              >
                Sowing Tomorrow's
                <span className="block text-sun italic">Harvest Today.</span>
              </h1>

              <p
                className="mt-6 text-lg text-background/90 max-w-xl leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Premium hybrid &amp; research seeds bred for higher yield, disease
                resistance, and the soil of the modern Indian farmer.
              </p>

              <div
                className="mt-10 flex flex-wrap items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link
                  to="/products"
                  className="btn-shine group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold shadow-elegant hover:shadow-glow transition-all hover:scale-105"
                >
                  Explore Products
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur-md border border-background/40 text-background px-7 py-4 font-semibold hover:bg-background hover:text-foreground transition-all"
                >
                  Our Story
                </Link>
              </div>

              {/* stats */}
              <div
                className="mt-14 grid grid-cols-3 gap-6 max-w-xl"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                {[
                  { n: "30+", l: "Hybrid Varieties" },
                  { n: "10K+", l: "Happy Farmers" },
                  { n: "100%", l: "Quality Tested" },
                ].map((s) => (
                  <div key={s.l} className="text-background">
                    <p className="font-display text-3xl sm:text-4xl font-bold text-sun">{s.n}</p>
                    <p className="text-xs sm:text-sm opacity-80 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Curve into next section */}
        <svg
          className="absolute bottom-0 inset-x-0 w-full h-12 fill-background"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" />
        </svg>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 container-px">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-sun/40 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant">
              <img
                src={aboutImg}
                alt="Healthy hybrid tomato plants"
                loading="lazy"
                className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-card rounded-3xl shadow-elegant p-6 border border-border/50 max-w-[260px]">
              <Award className="h-10 w-10 text-accent mb-3" />
              <p className="font-display text-xl font-semibold leading-tight">
                Research-driven seed innovation
              </p>
            </div>
          </div>

          <div data-aos="fade-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent" /> About Yadvi
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
              Where <span className="text-gradient-leaf">science meets soil</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Yadvi Hybrid Seeds Pvt. Ltd. is a research-led seed company committed
              to empowering farmers with hybrids that deliver visible, measurable
              results — from chillies and gourds to maize, tomato, and marigold.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every seed we sell is backed by rigorous field trials, agronomy
              support, and a promise of premium genetics.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: FlaskConical, t: "R&D Backed", d: "Multi-season field trials" },
                { icon: ShieldCheck, t: "Quality Assured", d: "Lab-tested germination" },
              ].map((f) => (
                <div
                  key={f.t}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-muted/40 border border-border/50"
                >
                  <div className="h-10 w-10 grid place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{f.t}</p>
                    <p className="text-sm text-muted-foreground">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
            >
              Discover our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 bg-gradient-warm">
        <div className="container-px">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div data-aos="fade-up" className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  <span className="h-px w-8 bg-accent" /> Featured Hybrids
                </span>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
                  Bestsellers from our <span className="text-gradient-leaf">research fields</span>
                </h2>
              </div>
              <Link
                to="/products"
                data-aos="fade-up"
                className="inline-flex self-start md:self-auto items-center gap-2 rounded-full border-2 border-foreground/10 px-6 py-3 font-semibold hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((p, i) => (
                <div key={p.id} data-aos="fade-up" data-aos-delay={i * 80}>
                  <ProductCard product={p} imageHeightClass="h-56" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 container-px">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent" /> Why Choose Us <span className="h-px w-8 bg-accent" />
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
              Built for the farmer's
              <span className="text-gradient-leaf"> success</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Four pillars that make Yadvi the seed brand farmers trust season
              after season.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sprout,
                title: "Premium Genetics",
                desc: "Hybrid lines bred for vigour, uniformity, and yield potential.",
                color: "from-primary to-primary-glow",
              },
              {
                icon: ShieldCheck,
                title: "Disease Resistant",
                desc: "Tolerance to leaf curl, mildews, and major field pathogens.",
                color: "from-secondary to-primary",
              },
              {
                icon: TrendingUp,
                title: "Higher Yield",
                desc: "Outperforms standard varieties in multi-location trials.",
                color: "from-accent to-accent",
              },
              {
                icon: Sun,
                title: "Climate Smart",
                desc: "Adapted to diverse Indian agro-climates and soil types.",
                color: "from-sun to-accent",
              },
            ].map((f, i) => (
              <div
                key={f.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group relative bg-card rounded-3xl p-7 shadow-card border border-border/50 hover:shadow-elegant hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className={`h-14 w-14 rounded-2xl grid place-items-center bg-gradient-to-br ${f.color} text-primary-foreground shadow-soft mb-5 group-hover:scale-110 transition-transform duration-500`}
                >
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="container-px pb-24">
        <div
          className="mx-auto max-w-7xl relative overflow-hidden rounded-[2.5rem] bg-gradient-leaf p-10 md:p-16 shadow-elegant"
          data-aos="zoom-in-up"
        >
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-sun/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />

          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
                Ready to grow with the best?
              </h3>
              <p className="mt-4 text-primary-foreground/90 text-lg max-w-xl">
                Browse our full catalogue or talk to our agronomy team — we'll help
                you choose the right hybrid for your land.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-background text-primary px-6 py-3.5 font-semibold shadow-soft hover:shadow-glow transition-all hover:scale-105"
              >
                Shop Seeds <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-background/15 border border-background/40 text-primary-foreground px-6 py-3.5 font-semibold hover:bg-background hover:text-primary transition-all"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
