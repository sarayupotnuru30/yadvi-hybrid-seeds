import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, ShoppingBag, X } from "lucide-react";
import logo from "@/assets/yhs-logo.png";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/cart", label: "Cart" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container-px">
        <div
          className={cn(
            "mx-auto max-w-7xl flex items-center justify-between rounded-full transition-all duration-500",
            scrolled
              ? "glass shadow-soft border border-border/60 px-4 py-2"
              : "bg-transparent px-4 py-2",
          )}
        >
          <Link to="/" className="flex items-center gap-3 group" aria-label="Yadvi Hybrid Seeds home">
            <img
              src={logo}
              alt="Yadvi Hybrid Seeds logo"
              className="h-11 w-auto transition-transform duration-500 group-hover:scale-105"
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-bold text-accent text-lg">Yadvi Hybrid Seeds</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-secondary">Private Limited</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-primary/10" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/cart"
              className="relative h-11 w-11 grid place-items-center rounded-full bg-primary text-primary-foreground shadow-soft hover:shadow-glow transition-all hover:scale-105"
              aria-label={`Cart with ${count} items`}
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-accent text-accent-foreground text-[10px] font-bold grid place-items-center animate-scale-in">
                  {count}
                </span>
              )}
            </Link>

            <button
              className="lg:hidden h-11 w-11 grid place-items-center rounded-full bg-background border border-border"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-3 mx-auto max-w-7xl glass border border-border/60 rounded-3xl p-4 shadow-elegant animate-fade-up">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-3 rounded-2xl text-base font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-muted",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
