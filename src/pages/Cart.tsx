import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

const WHATSAPP_NUMBER = "919052110028";

const Cart = () => {
  const { items, count, updateQuantity, removeFromCart, clear } = useCart();

  const buildWhatsAppLink = () => {
    const lines = [
      "Hello Yadvi Hybrid Seeds! 👋",
      "I'd like to enquire about the following items:",
      "",
      ...items.map(
        (i, idx) => `${idx + 1}. ${i.name} — Qty: ${i.quantity}`,
      ),
      "",
      "Please share pricing and availability. Thank you!",
    ];
    const msg = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  };

  return (
    <section className="container-px py-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-10" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" /> Your Enquiry
          </span>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight">
            Review &amp; <span className="text-gradient-leaf">send your enquiry</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Confirm your selection below and send your enquiry via WhatsApp —
            our team will share pricing, availability and delivery details
            within business hours.
          </p>
        </div>

        {items.length === 0 ? (
          <div
            className="rounded-3xl bg-card border border-border/60 p-16 text-center shadow-soft"
            data-aos="fade-up"
          >
            <div className="mx-auto h-20 w-20 rounded-full bg-primary/10 grid place-items-center text-primary mb-6">
              <ShoppingBag className="h-9 w-9" />
            </div>
            <h2 className="font-display text-2xl font-semibold">Your cart is empty</h2>
            <p className="mt-2 text-muted-foreground">
              Browse our hybrid seed catalogue to start building your enquiry.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, i) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                  className="flex gap-4 sm:gap-6 items-center bg-card rounded-3xl p-4 sm:p-5 border border-border/60 shadow-soft"
                >
                  <div className="h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-2xl overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                      {item.category}
                    </p>
                    <h3 className="font-display text-lg font-semibold leading-tight truncate">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                      {item.short}
                    </p>

                    <div className="mt-3 flex items-center gap-3 flex-wrap">
                      <div className="inline-flex items-center rounded-full border border-border bg-background overflow-hidden">
                        <button
                          aria-label="Decrease"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-9 w-9 grid place-items-center hover:bg-muted transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-9 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          aria-label="Increase"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-9 w-9 grid place-items-center hover:bg-muted transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-muted-foreground hover:text-destructive flex items-center gap-1 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={clear}
                className="text-sm text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear cart
              </button>
            </div>

            {/* Summary */}
            <aside
              className="lg:sticky lg:top-28 self-start bg-gradient-leaf text-primary-foreground rounded-3xl p-7 shadow-elegant"
              data-aos="fade-left"
            >
              <h2 className="font-display text-2xl font-semibold">Enquiry Summary</h2>
              <p className="mt-2 text-sm text-primary-foreground/85">
                Pricing &amp; availability will be shared by our team via WhatsApp.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between opacity-90">
                  <span>Unique Products</span>
                  <span className="font-semibold">{items.length}</span>
                </div>
                <div className="flex justify-between opacity-90">
                  <span>Total Packets</span>
                  <span className="font-semibold">{count}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                <p className="text-xs uppercase tracking-[0.2em] opacity-75">Next Step</p>
                <p className="mt-1 font-display text-xl">Send your enquiry on WhatsApp</p>
              </div>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 btn-shine inline-flex w-full items-center justify-center gap-2 rounded-full bg-background text-primary px-6 py-4 font-semibold shadow-soft hover:shadow-glow transition-all hover:scale-[1.02]"
              >
                Order via WhatsApp
                <ArrowRight className="h-5 w-5" />
              </a>

              <p className="mt-4 text-xs text-primary-foreground/80 text-center leading-relaxed">
                Pre-filled message with your selected items will open in WhatsApp.
                Our team will confirm pricing &amp; delivery.
              </p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
