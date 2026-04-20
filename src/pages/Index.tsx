import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PainPointsSection from "@/components/PainPointsSection";
import ComparisonSection from "@/components/ComparisonSection";
import AssetsSection from "@/components/AssetsSection";
import QualitySection from "@/components/QualitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  const featuredGuides = [
    "o-que-e-business-manager-verificada-meta",
    "bloqueio-conta-anuncio-meta-como-evitar",
    "arquitetura-contingencia-meta-ads-operacao-alto-volume",
  ].map((slug) => blogPosts.find((p) => p.slug === slug)).filter(Boolean);

  const faqEntities = [
    {
      "@type": "Question",
      name: "O que fazer quando a conta de anúncio bloqueia no Meta Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ative uma estrutura de contingência com BM verificada em standby, preserve o histórico de pagamento, evite mudanças bruscas e abra revisão com documentação completa.",
      },
    },
    {
      "@type": "Question",
      name: "BM verificada realmente melhora a estabilidade da operação?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. BMs verificadas tendem a ter maior previsibilidade operacional, melhor governança de ativos e recuperação mais rápida em cenários de revisão.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a diferença entre BM antiga e BM verificada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BM antiga prioriza histórico e idade do ativo. BM verificada prioriza validação documental da empresa. Operações maduras combinam as duas para reduzir risco.",
      },
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Ativos de contingência para Meta Ads",
        serviceType: "Ativos de contingência para Meta Ads",
        provider: { "@type": "Organization", name: "AD Scale" },
        areaServed: "BR",
        description:
          "Comercialização de BMs Verificadas, BMs antigas, perfis e páginas com alto Trust Score no Meta para operações profissionais de Meta Ads.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqEntities,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      <SEO
        title="Contingência Meta Ads e Facebook Ads: BM Verificada | AD Scale"
        description="Ativos de contingência para Meta Ads e Facebook Ads: BM Verificada com selo azul, BM antiga, perfil aged e página antiga com Trust Score alto."
        keywords={[
          "contingência meta ads",
          "contingência facebook ads",
          "bm verificada facebook",
          "bm verificada meta",
          "comprar bm verificada",
          "bm antiga facebook",
          "trust score meta",
          "trust score facebook ads",
          "perfil aged facebook",
          "página antiga facebook",
          "estrutura de contingência facebook",
          "bloqueio conta de anúncio facebook",
          "bloqueio meta ads",
          "consultoria meta ads",
          "consultoria facebook ads",
          "gestor de tráfego facebook",
          "escalar meta ads",
          "escalar facebook ads",
        ]}
        canonical="/"
        jsonLd={jsonLd}
      />
      <Navbar />
      <HeroSection />
      <TrustBar />
      <PainPointsSection />
      <ComparisonSection />
      <AssetsSection />
      <QualitySection />
      <TestimonialsSection />
      <ProcessSection />

      <section className="section-padding" aria-labelledby="guias-estrategicos-heading">
        <div className="container max-w-5xl">
          <div className="flex flex-col gap-3 mb-8">
            <p className="text-sm text-primary font-semibold">Conteúdo estratégico</p>
            <h2 id="guias-estrategicos-heading" className="font-display text-3xl md:text-4xl font-bold">
              Guias para operar com mais previsibilidade no Meta Ads
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              Aprofunde em bloqueio, estrutura de contingência e ativos com Trust Score alto.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredGuides.map((post) => (
              <Link
                key={post!.slug}
                to={`/blog/${post!.slug}`}
                className="border border-border/50 bg-card/60 hover:border-primary/40 transition-colors p-5 rounded-lg"
              >
                <h3 className="font-display text-lg font-semibold mb-2">{post!.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{post!.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
