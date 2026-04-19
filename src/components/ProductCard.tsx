import { Plus } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: Props) => {
  const { addToCart } = useCart();
  return (
    <article
      className={cn(
        "group relative bg-card overflow-hidden shadow-card border border-border/60 transition-all duration-500 hover:shadow-elegant hover:-translate-y-1 flex flex-col",
        className,
      )}
    >
      {/* 9:16 portrait image */}
      <div className="relative overflow-hidden aspect-[9/16]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-background/90 backdrop-blur text-primary shadow-soft">
          {product.category}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-semibold text-foreground leading-snug">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{product.short}</p>

        {product.details && (
          <ul className="mt-4 space-y-1.5">
            {product.details.slice(0, 4).map((d) => (
              <li key={d} className="flex items-start gap-2 text-xs text-foreground/70">
                <span className="mt-1.5 h-1 w-1 bg-primary shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 pt-2 flex items-center justify-between gap-3 mt-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 bg-primary-glow animate-pulse" />
            In stock
          </span>
          <button
            onClick={() => addToCart(product)}
            className="btn-shine group/btn inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-soft hover:shadow-glow transition-all hover:scale-105"
          >
            <Plus className="h-4 w-4 transition-transform group-hover/btn:rotate-90" />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
