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

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
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
