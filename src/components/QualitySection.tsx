import { Fingerprint, ShieldCheck, Activity, Lock, History, Layers } from "lucide-react";

const items = [
  {
    icon: Fingerprint,
    title: "Curadoria por fingerprint",
    description:
      "Validamos device, IP, cookie e padrão de navegação antes da entrega. Ativo nunca circula em duas operações simultâneas.",
  },
  {
    icon: History,
    title: "Idade real auditada",
    description:
      "Confirmação de timestamp via histórico do Meta. Sem perfil 'envelhecido' artificialmente em 30 dias — só ativo legítimo.",
  },
  {
    icon: Activity,
    title: "Trust Score documentado",
    description:
      "Scoring interno baseado em strikes, restrições prévias, engajamento orgânico e padrão de gasto histórico.",
  },
  {
    icon: ShieldCheck,
    title: "BM com verificação real",
    description:
      "Verificação executada via documentação válida e processo oficial Meta. Sem workaround, sem brecha temporária.",
  },
  {
    icon: Layers,
    title: "Stack consistente",
    description:
      "Perfil + BM + Página entregues com fingerprint coerente, prontos para vincular sem disparar auditoria cruzada.",
  },
  {
    icon: Lock,
    title: "Entrega sob NDA",
    description:
      "Atendimento técnico direto, ativos rastreados e suporte para troubleshooting na primeira ativação.",
  },
];

const QualitySection = () => {
  return (
    <section id="qualidade" className="section-padding bg-card/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <div className="badge-pill mx-auto mb-8">PADRÃO DE QUALIDADE</div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            O que separa um ativo{" "}
            <span className="text-gradient">premium</span> do descartável
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trabalhamos exclusivamente com ativos que sobrevivem a revisão
            automática, scaling vertical e nichos de alta abrasividade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((b, i) => (
            <div key={i} className="section-card group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {b.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
