import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisonPoints = [
    {
      label: "Idade do ativo",
      common: "Perfil recém-criado",
      adscale: "Idade real + warm-up consistente",
    },
    {
      label: "Trust Score no Meta",
      common: "Low / Médio (susceptível a revista)",
      adscale: "High Score (resistência natural)",
    },
    {
      label: "Histórico de gasto",
      common: "Sem histórico",
      adscale: "Spending track D0–30 cap estendido",
    },
    {
      label: "Fingerprints e configurações",
      common: "Genérica ou automatizada",
      adscale: "Manual, única e criptografada",
    },
    {
      label: "Suporte pós-venda",
      common: "Inexistente ou demorado",
      adscale: "Briefing técnico 1 a 1 incluso",
    },
    {
      label: "Troca em caso de bloqueio",
      common: "Sem cobertura",
      adscale: "Avaliação caso a caso",
    },
  ];

  return (
    <section id="comparacao" className="py-24 bg-card/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="badge-pill mb-4 mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Por que profissionais confiam nos nossos ativos
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Ativo comum vs. <span className="text-gradient">Ativo Adscale</span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm">
          {/* Header */}
          <div className="grid grid-cols-[1fr,1fr,1fr] border-b border-border/50 bg-muted/30">
            <div className="p-6 text-left font-semibold text-muted-foreground text-sm uppercase tracking-wider">
              Característica
            </div>
            <div className="p-6 text-center font-semibold text-muted-foreground text-sm uppercase tracking-wider border-x border-border/50">
              Ativo Comum
            </div>
            <div className="p-6 text-center font-semibold text-primary text-sm uppercase tracking-wider">
              Ativo Adscale
            </div>
          </div>

          {/* Rows */}
          {comparisonPoints.map((point, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr,1fr,1fr] border-b border-border/50 last:border-b-0"
            >
              <div className="p-6 text-left text-foreground font-medium flex items-center">
                {point.label}
              </div>
              <div className="p-6 text-center border-x border-border/50 flex items-center justify-center gap-2 text-muted-foreground">
                <X className="w-4 h-4 text-destructive shrink-0" />
                <span className="text-sm">{point.common}</span>
              </div>
              <div className="p-6 text-center flex items-center justify-center gap-2 bg-primary/5">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{point.adscale}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6">
          Todos os ativos são curados individualmente para operações de alto volume.
        </p>
      </div>
    </section>
  );
};

export default ComparisonSection;
