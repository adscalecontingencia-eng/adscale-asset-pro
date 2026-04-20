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

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ativos de contingência para Meta Ads",
    provider: { "@type": "Organization", name: "AD Scale" },
    areaServed: "BR",
    description:
      "Comercialização de BMs Verificadas, BMs antigas, perfis e páginas com alto Trust Score no Meta para operações profissionais de Meta Ads.",
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      <SEO
        title="AD Scale — Ativos de Contingência para Meta Ads | BMs Verificadas e Antigas"
        description="Compre BMs Verificadas, BMs antigas, perfis e páginas com Trust Score alto no Meta. Ativos de contingência para operações de alto volume em Meta Ads."
        keywords={[
          "ativos de contingência meta ads",
          "BM verificada",
          "BM antiga",
          "trust score meta",
          "perfil aged facebook",
          "página antiga facebook",
          "comprar BM verificada",
          "estrutura de contingência facebook ads",
          "anti-bloqueio meta",
          "gestor de tráfego",
          "escalar meta ads",
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
      <FAQSection />
      <CTASection />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
