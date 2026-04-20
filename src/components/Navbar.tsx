import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const navLinks = [
  { href: "/bm-verificada", label: "BM Verificada" },
  { href: "/contingencia-meta-ads", label: "Contingência" },
  { href: "/consultoria-meta-ads", label: "Consultoria" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 py-3"
          : "py-5"
      }`}
    >
      <div className="container max-w-6xl flex items-center justify-between px-4">
        <Link to="/">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-primary text-primary-foreground font-bold px-6 py-2.5 rounded-full text-sm transition-all hover:scale-105 hover:shadow-[0_0_20px_hsl(125_100%_45%/0.4)]"
          >
            Adquirir Ativos
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 mt-2 mx-4 rounded-2xl p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-foreground text-lg"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-gradient-primary text-primary-foreground font-bold px-6 py-3 rounded-full text-sm w-full"
          >
            Adquirir Ativos
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
