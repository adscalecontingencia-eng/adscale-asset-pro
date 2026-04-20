import { ArrowRight } from "lucide-react";
import DotGlobe from "./DotGlobe";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden w-full">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(125_100%_45%/0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(125_100%_45%/0.03),transparent_60%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-28 pb-16">
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-center">
          <div className="max-w-xl">
            <div
              className="badge-pill mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Ativos de Contingência · Trust Score Alto
            </div>

            <p
              className="text-muted-foreground uppercase tracking-widest text-sm mb-3 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              PARA OPERAÇÕES DE ALTO VOLUME NO META
            </p>

            <h1
              className="font-display text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              ATIVOS QUE NÃO{" "}
              <span className="text-gradient">CAEM NA PRIMEIRA RAJADA.</span>
            </h1>

            <p
              className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.25s" }}
            >
              BMs Verificadas, BMs Antigas, Perfis Maduros e Páginas Aged com
              alto Trust Score dentro do ecossistema Meta. Estrutura para quem
              opera volume real e não pode parar de escalar.
            </p>

            <div
              className="flex flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.35s" }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 animate-pulse-glow"
              >
                FALAR COM O TIME
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#ativos"
                className="inline-flex items-center justify-center gap-2 border border-border/50 bg-card/60 px-8 py-4 rounded-xl text-lg font-medium text-foreground transition-all hover:border-primary/50"
              >
                <span className="w-0 h-0 border-l-[8px] border-l-primary border-y-[5px] border-y-transparent" />
                Ver Ativos
              </a>
            </div>

            <div
              className="mt-12 flex flex-wrap items-center gap-6 md:gap-10 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-bold">High</span>
                <span className="text-muted-foreground text-sm">Trust Score</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-bold">Aged</span>
                <span className="text-muted-foreground text-sm">BMs &amp; Perfis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-bold">Verified</span>
                <span className="text-muted-foreground text-sm">Business Manager</span>
              </div>
            </div>
          </div>

          <div
            className="flex items-center justify-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <DotGlobe size={480} />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col items-center md:hidden">
          <div
            className="w-full flex justify-center mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <DotGlobe size={200} />
          </div>

          <div className="w-full text-center">
            <div
              className="badge-pill mb-3 animate-fade-in-up mx-auto"
              style={{ animationDelay: "0.15s" }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Ativos High Trust
            </div>

            <p
              className="text-muted-foreground uppercase tracking-widest text-xs mb-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              OPERAÇÕES DE ALTO VOLUME NO META
            </p>

            <h1
              className="font-display text-2xl font-bold leading-[1.1] mb-3 animate-fade-in-up"
              style={{ animationDelay: "0.25s" }}
            >
              ATIVOS QUE NÃO{" "}
              <span className="text-gradient">CAEM NA PRIMEIRA RAJADA.</span>
            </h1>

            <p
              className="text-muted-foreground text-sm mb-4 leading-relaxed animate-fade-in-up px-2"
              style={{ animationDelay: "0.3s" }}
            >
              BMs Verificadas, BMs Antigas, Perfis Maduros e Páginas Aged com
              alto Trust Score dentro do ecossistema Meta.
            </p>

            <div
              className="flex flex-col gap-3 animate-fade-in-up"
              style={{ animationDelay: "0.35s" }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-6 py-3.5 rounded-xl text-base transition-all hover:scale-105 animate-pulse-glow"
              >
                FALAR COM O TIME
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#ativos"
                className="inline-flex items-center justify-center gap-2 border border-border/50 bg-card/60 px-6 py-3.5 rounded-xl text-base font-medium text-foreground transition-all hover:border-primary/50"
              >
                <span className="w-0 h-0 border-l-[8px] border-l-primary border-y-[5px] border-y-transparent" />
                Ver Ativos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
