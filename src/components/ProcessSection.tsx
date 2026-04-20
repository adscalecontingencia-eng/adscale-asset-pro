import { MessageCircle, ClipboardCheck, PackageCheck, Rocket } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: "Briefing técnico",
    description:
      "Falamos diretamente com o head de mídia. Mapeamos vertical, ticket, CPA alvo, volume diário e nível de abrasividade da oferta.",
  },
  {
    number: 2,
    icon: ClipboardCheck,
    title: "Match de ativo",
    description:
      "Selecionamos ativos com fingerprint, idade e Trust Score compatíveis. Sem catálogo público — cada combinação é única.",
  },
  {
    number: 3,
    icon: PackageCheck,
    title: "Handover seguro",
    description:
      "Entrega via canal criptografado, com walkthrough técnico de vinculação, configuração de pixel e estratégia de warm-up.",
  },
  {
    number: 4,
    icon: Rocket,
    title: "Escala em produção",
    description:
      "Você liga campanha sabendo que o ativo aguenta o leilão. Suporte técnico ativo nas primeiras 72h de operação.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="section-padding">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <div className="badge-pill mx-auto mb-8">COMO OPERAMOS</div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Processo de aquisição{" "}
            <span className="text-gradient italic">profissional</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Para quem opera de verdade. Sem catálogo, sem revenda em escala —
            curadoria 1 a 1.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="section-card relative group">
              <div className="relative w-14 h-14 mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-primary text-primary-foreground font-bold px-10 py-5 rounded-xl text-lg transition-all hover:scale-105 animate-pulse-glow"
          >
            <MessageCircle className="w-5 h-5" />
            INICIAR BRIEFING NO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
