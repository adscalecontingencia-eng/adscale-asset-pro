import { Link } from "react-router-dom";
import { Linkedin, MapPin, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import pedroPhoto from "@/assets/pedro-lucas-fundador.jpg";

const Sobre = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: "Sobre a AD Scale",
        url: "https://adscalecontingencia.com/sobre",
        description:
          "Conheça a AD Scale e Pedro Lucas, fundador especialista em contingência de Meta Ads, BMs Verificadas e operação de alto volume em Facebook Ads.",
      },
      {
        "@type": "Organization",
        name: "AD Scale",
        url: "https://adscalecontingencia.com",
        logo: "https://adscalecontingencia.com/og/og-default.jpg",
        founder: {
          "@type": "Person",
          name: "Pedro Lucas",
          url: "https://adscalecontingencia.com/autor/pedro-lucas",
        },
        areaServed: "BR",
        knowsAbout: [
          "Meta Ads",
          "Facebook Ads",
          "Business Manager Verificada",
          "Trust Score",
          "Contingência de Meta Ads",
          "Consultoria Meta Ads",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="Sobre a AD Scale e Pedro Lucas, fundador | Meta Ads de alto volume"
        description="Conheça a história da AD Scale e Pedro Lucas, fundador especialista em Meta Ads, BMs Verificadas e contingência para operações de Facebook Ads de alto volume."
        keywords={["sobre AD Scale", "Pedro Lucas Meta Ads", "fundador AD Scale", "especialista Facebook Ads", "consultor Meta Ads"]}
        canonical="/sobre"
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Sobre" }]} className="mb-8" />

          <header className="text-center mb-12">
            <div className="badge-pill mb-4 mx-auto">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Quem está por trás da AD Scale
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Sobre a <span className="text-gradient">AD Scale</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Infraestrutura, ativos e consultoria para operações sérias de Meta Ads e Facebook Ads.
            </p>
          </header>

          <section className="grid md:grid-cols-[280px_1fr] gap-8 items-start mb-16 p-8 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm">
            <div>
              <img
                src={pedroPhoto}
                alt="Pedro Lucas, fundador da AD Scale, especialista em Meta Ads"
                width={280}
                height={280}
                className="w-full aspect-square object-cover rounded-2xl border border-border/50"
                loading="eager"
              />
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Minas Gerais, Brasil
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  Falar comigo no WhatsApp
                </a>
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-primary font-semibold">Fundador</span>
              <h2 className="font-display text-3xl font-bold mt-1 mb-4">Pedro Lucas</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tenho 25 anos, sou natural de <strong className="text-foreground">Minas Gerais</strong> e fundei a AD
                Scale para resolver um problema que vivi de perto: gestores de tráfego sérios perdiam dias de operação
                por causa de bloqueios injustos no Meta Ads, sem ter para onde correr.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A AD Scale nasceu como infraestrutura de contingência — Business Managers Verificadas, perfis aged,
                páginas com histórico real e consultoria técnica para sustentar operações que rodam volume todos os
                dias no Facebook Ads.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoje atendo gestores e agências que precisam de previsibilidade: ativos com Trust Score alto, suporte
                de handover técnico e processo de auditoria para reduzir downtime ao mínimo possível.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-4 mb-16">
            {[
              { num: "500+", label: "Ativos entregues" },
              { num: "60+ dias", label: "Estabilidade média pós-handover" },
              { num: "1 a 1", label: "Curadoria e suporte técnico" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl border border-border/50 bg-card/40">
                <div className="font-display text-3xl font-bold text-gradient mb-1">{stat.num}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">No que a AD Scale acredita</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Contingência é infraestrutura, não emergência",
                  body: "Operações sérias mantêm uma frota de BMs e perfis de backup prontos antes do bloqueio acontecer.",
                },
                {
                  title: "Trust Score se constrói, não se compra",
                  body: "Por isso curamos cada ativo com histórico real, fingerprint estável e warm-up técnico.",
                },
                {
                  title: "Handover técnico vale mais que o ativo",
                  body: "Entregamos com briefing, configuração de domínio, pixel/CAPI e recomendações de uso.",
                },
                {
                  title: "Transparência radical",
                  body: "Você sabe a origem do ativo, o histórico e os limites antes de qualquer pagamento.",
                },
              ].map((p) => (
                <div key={p.title} className="p-5 rounded-lg border border-border/50 bg-card/40">
                  <h3 className="font-display font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center p-10 rounded-2xl border border-primary/30 bg-primary/5">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Quer conversar sobre sua operação?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Em 10 minutos no WhatsApp eu entendo o seu cenário e digo se faz sentido seguirmos.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-8 py-3.5 rounded-lg transition-all hover:scale-105"
            >
              Falar no WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="mt-6 text-sm">
              <Link to="/blog" className="text-primary hover:underline">
                Ou explore o blog técnico →
              </Link>
            </div>
          </section>
        </div>
      </main>

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Sobre;
