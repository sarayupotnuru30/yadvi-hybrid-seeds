import { Plus } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: string;
  imageHeightClass?: string;
}

const ProductCard = ({ product, className, imageHeightClass = "h-64" }: Props) => {
  const { addToCart } = useCart();
  return (
    <article
      className={cn(
        "group relative bg-card rounded-3xl overflow-hidden shadow-card border border-border/50 transition-all duration-500 hover:shadow-elegant hover:-translate-y-1",
        className,
      )}
    >
      <div className={cn("relative overflow-hidden", imageHeightClass)}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-background/90 backdrop-blur text-primary shadow-soft">
          {product.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground leading-snug">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.short}</p>

        {product.details && (
          <ul className="mt-4 space-y-1.5">
            {product.details.slice(0, 3).map((d) => (
              <li key={d} className="flex items-start gap-2 text-xs text-foreground/70">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">From</p>
            <p className="font-display text-2xl font-bold text-accent">
              ₹{product.price}
              <span className="text-xs text-muted-foreground font-sans font-normal ml-1">
                /pkt
              </span>
            </p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="btn-shine group/btn inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold shadow-soft hover:shadow-glow transition-all hover:scale-105"
          >
            <Plus className="h-4 w-4 transition-transform group-hover/btn:rotate-90" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
