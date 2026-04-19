// import { Link } from "react-router-dom";
// import { Instagram, Mail, MapPin, Phone } from "lucide-react";
// import logo from "@/assets/yhs-logo2.png";

// const Footer = () => {
//   const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="relative mt-24 bg-background text-foreground border-t border-border overflow-hidden">
//       <div className="relative container-px py-16">
//         <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 lg:grid-cols-4">
//           <div>
//             <div className="inline-block">
//               <img src={logo} alt="Yadvi Hybrid Seeds" className="h-14 w-auto" />
//             </div>
//             <p className="mt-5 text-sm leading-relaxed text-foreground/75">
//               Premium hybrid &amp; research seeds engineered for the modern Indian
//               farmer. Higher yield, stronger plants, healthier harvests.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               {[
//                 { to: "/", label: "Home" },
//                 { to: "/about", label: "About Us" },
//                 { to: "/products", label: "Products" },
//                 { to: "/cart", label: "Cart" },
//                 { to: "/contact", label: "Contact" },
//               ].map((l) => (
//                 <li key={l.to}>
//                   <Link
//                     to={l.to}
//                     onClick={scrollTop}
//                     className="text-foreground/75 hover:text-foreground transition-all"
//                   >
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-start gap-3">
//                 <Phone className="h-4 w-4 mt-1 shrink-0 text-foreground" />
//                 <a href="tel:+919052110028" className="text-foreground/80 hover:text-foreground transition-colors">
//                   +91 90521 10028
//                 </a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Mail className="h-4 w-4 mt-1 shrink-0 text-foreground" />
//                 <a
//                   href="mailto:yadvihybridseeds@gmail.com"
//                   className="text-foreground/80 hover:text-foreground transition-colors break-all"
//                 >
//                   yadvihybridseeds@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <MapPin className="h-4 w-4 mt-1 shrink-0 text-foreground" />
//                 <span className="text-foreground/80">Andhra Pradesh, India</span>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
//             <div className="flex gap-3">
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="h-11 w-11 grid place-items-center rounded-full border border-border text-foreground hover:bg-foreground hover:text-background hover:scale-110 transition-all"
//               >
//                 <Instagram className="h-5 w-5" />
//               </a>
//               <a
//                 href="https://wa.me/919052110028"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="WhatsApp"
//                 className="h-11 w-11 grid place-items-center rounded-full border border-border text-foreground hover:bg-foreground hover:text-background hover:scale-110 transition-all"
//               >
//                 <Phone className="h-5 w-5" />
//               </a>
//             </div>
//             <p className="mt-6 text-xs text-foreground/60">Mon – Sat · 10 AM – 6 PM</p>
//           </div>
//         </div>

//         <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-foreground/70">
//           <p>© {new Date().getFullYear()} Yadvi Hybrid Seeds Pvt. Ltd. All rights reserved.</p>
//           <p>Crafted for farmers, by agronomists.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone, Heart } from "lucide-react";
import logo from "@/assets/yhs-logo2.png";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-24 bg-background text-foreground border-t border-border overflow-hidden">
      <div className="relative container-px py-16">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-block">
              <img src={logo} alt="Yadvi Hybrid Seeds" className="h-14 w-auto" />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-foreground/75">
              Premium hybrid &amp; research seeds engineered for the modern Indian
              farmer. Higher yield, stronger plants, healthier harvests.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/cart", label: "Cart" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={scrollTop}
                    className="text-foreground/75 hover:text-foreground transition-all"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 shrink-0 text-foreground" />
                <a href="tel:+919052110028" className="text-foreground/80 hover:text-foreground transition-colors">
                  +91 90521 10028
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 shrink-0 text-foreground" />
                <a
                  href="mailto:yadvihybridseeds@gmail.com"
                  className="text-foreground/80 hover:text-foreground transition-colors break-all"
                >
                  yadvihybridseeds@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-foreground" />
                <span className="text-foreground/80">Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-11 w-11 grid place-items-center rounded-full border border-border text-foreground hover:bg-foreground hover:text-background hover:scale-110 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919052110028"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-11 w-11 grid place-items-center rounded-full border border-border text-foreground hover:bg-foreground hover:text-background hover:scale-110 transition-all"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 text-xs text-foreground/60">Mon – Sat · 10 AM – 6 PM</p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-foreground/70">
          <p>© {new Date().getFullYear()} Yadvi Hybrid Seeds Pvt. Ltd. All rights reserved.</p>
          
          <div className="flex justify-center items-center gap-1">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline font-medium"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>

          <p>Crafted for farmers, by agronomists.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;