import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Zap, Star, Quote, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export interface Testimonial {
  name: string;
  role: string;
  operation: string;
  quote: string;
  metric: string;
  metricLabel: string;
  volume: string;
}

export interface UseCase {
  title: string;
  scenario: string;
  action: string;
  result: string;
  segment: string;
}

export interface CommercialLandingProps {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
  };
  eyebrow: string;
  h1: string;
  subheadline: string;
  bullets: string[];
  benefits: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedPosts: { slug: string; label: string }[];
  internalLinks: { href: string; label: string }[];
  testimonials?: Testimonial[];
  useCases?: UseCase[];
  ctaPrimary?: string;
}

const CommercialLanding = ({
  seo,
  eyebrow,
  h1,
  subheadline,
  bullets,
  benefits,
  faqs,
  relatedPosts,
  internalLinks,
  testimonials,
  useCases,
  ctaPrimary = "Falar com o time no WhatsApp",
}: CommercialLandingProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: h1,
        description: seo.description,
        provider: { "@type": "Organization", name: "AD Scale" },
        areaServed: "BR",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container max-w-5xl px-4">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-foreground">{eyebrow}</li>
            </ol>
          </nav>

          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Star className="w-3 h-3" /> {eyebrow}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">{h1}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{subheadline}</p>

            <ul className="grid sm:grid-cols-2 gap-2 mt-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-7 py-3.5 rounded-lg transition-all hover:scale-105"
              >
                {ctaPrimary}
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 border border-border/60 px-7 py-3.5 rounded-lg text-foreground hover:border-primary/40 transition-colors"
              >
                Ver guias técnicos
              </Link>
            </div>
          </div>
        </section>

        <section className="container max-w-5xl px-4 mt-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Por que operações sérias escolhem a AD Scale</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="border border-border/50 bg-card/60 rounded-lg p-6">
                <ShieldCheck className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </section>

        {testimonials && testimonials.length > 0 && (
          <section className="container max-w-6xl px-4 mt-20" aria-labelledby="depoimentos-heading">
            <div className="flex flex-col gap-2 mb-8">
              <span className="text-sm text-primary font-semibold">Depoimentos</span>
              <h2 id="depoimentos-heading" className="font-display text-2xl md:text-3xl font-bold">
                Operações reais que escalam com AD Scale
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <article key={t.name} className="border border-border/50 bg-card/60 rounded-lg p-6 flex flex-col">
                  <Quote className="w-6 h-6 text-primary mb-3" />
                  <p className="text-sm text-foreground/90 leading-relaxed mb-5">"{t.quote}"</p>
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <div className="flex items-center gap-1 mb-2 text-primary">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} · {t.operation}</p>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="font-display text-lg font-bold text-primary">{t.metric}</span>
                      <span className="text-xs text-muted-foreground">{t.metricLabel}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Volume: {t.volume}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {useCases && useCases.length > 0 && (
          <section className="container max-w-6xl px-4 mt-20" aria-labelledby="casos-heading">
            <div className="flex flex-col gap-2 mb-8">
              <span className="text-sm text-primary font-semibold">Casos de uso reais</span>
              <h2 id="casos-heading" className="font-display text-2xl md:text-3xl font-bold">
                Como operações resolveram problemas críticos
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {useCases.map((c) => (
                <article key={c.title} className="border border-border/50 bg-card/60 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {c.segment}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">{c.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Cenário</p>
                      <p className="text-foreground/90 leading-relaxed">{c.scenario}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Ação</p>
                      <p className="text-foreground/90 leading-relaxed">{c.action}</p>
                    </div>
                    <div className="flex items-start gap-2 pt-3 border-t border-border/50">
                      <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-foreground font-medium leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="container max-w-3xl px-4 mt-20" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="font-display text-2xl md:text-3xl font-bold mb-8">Perguntas frequentes</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.question} className="group border border-border/50 rounded-lg p-5 bg-card/60">
                <summary className="cursor-pointer font-semibold text-foreground list-none flex items-start justify-between gap-4">
                  <span>{f.question}</span>
                  <Zap className="w-4 h-4 text-primary shrink-0 mt-1 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="container max-w-5xl px-4 mt-20">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border/50 rounded-lg p-6 bg-card/60">
              <h2 className="font-display text-xl font-bold mb-4">Leituras técnicas relacionadas</h2>
              <div className="flex flex-col gap-3 text-sm">
                {relatedPosts.map((r) => (
                  <Link key={r.slug} to={`/blog/${r.slug}`} className="text-primary hover:underline">
                    {r.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border border-border/50 rounded-lg p-6 bg-card/60">
              <h2 className="font-display text-xl font-bold mb-4">Outros serviços AD Scale</h2>
              <div className="flex flex-col gap-3 text-sm">
                {internalLinks.map((l) => (
                  <Link key={l.href} to={l.href} className="text-primary hover:underline">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container max-w-3xl px-4 mt-20">
          <div className="p-8 rounded-lg border border-primary/30 bg-primary/5 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Pronto para estabilizar sua operação no Meta e Facebook Ads?
            </h2>
            <p className="text-muted-foreground mb-6">
              Curadoria 1 a 1, ativos validados e suporte direto com nosso time.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-8 py-3.5 rounded-lg transition-all hover:scale-105"
            >
              {ctaPrimary}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default CommercialLanding;
