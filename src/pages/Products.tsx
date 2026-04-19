import { useMemo, useState } from "react";
import { products, productCategories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";

const Products = () => {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(
    () => (filter === "All" ? products : products.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <section className="container-px pt-12 pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent" /> Our Catalogue
            </span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl font-bold leading-[1.05]">
              Hybrid &amp; research seeds
              <span className="block text-gradient-leaf italic">for every season.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              Browse our complete range of high-yielding hybrids — from chillies
              and gourds to maize, tomato, and ornamental flowers.
            </p>
          </div>

          {/* Filters */}
          <div
            className="mt-10 flex flex-wrap gap-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {["All", ...productCategories].map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "px-5 py-2.5 text-sm font-semibold transition-all border",
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary shadow-soft scale-105"
                    : "bg-card text-foreground/80 border-border hover:border-primary/50 hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid layout — 9:16 portrait cards with sharp edges */}
      <section className="container-px pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                data-aos="fade-up"
                data-aos-delay={(i % 6) * 60}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">
              No products in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
