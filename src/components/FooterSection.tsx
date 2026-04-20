import Logo from "./Logo";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const navLinks = [
  { href: "/bm-verificada", label: "Comprar BM Verificada" },
  { href: "/contingencia-meta-ads", label: "Contingência Meta Ads" },
  { href: "/consultoria-meta-ads", label: "Consultoria Meta Ads" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
];

const FooterSection = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Comercialização de ativos de contingência premium para operações
              profissionais de mídia paga no Meta Ads e Facebook Ads.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Navegação
            </h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Contato
            </h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                📱 WhatsApp comercial
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AD Scale — Premium Contingency Assets.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
