import { BadgeCheck, Building2, UserCircle2, FileText, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const assets = [
  {
    icon: BadgeCheck,
    tag: "VERIFIED",
    title: "BM Verificada",
    description:
      "Business Manager com selo de verificação ativo no Meta. Limite de gastos elevado desde a primeira impressão, melhor priorização no leilão e blindagem contra reviews automáticas.",
    bullets: [
      "Verificação Meta ativa",
      "Cap de gasto alto desde D0",
      "Pronta para escala agressiva",
    ],
  },
  {
    icon: Building2,
    tag: "AGED",
    title: "BM Antiga",
    description:
      "BMs com 2+ anos de histórico, gastos consistentes e zero strike na ficha. Resistência comprovada a auditorias, ideal para nichos sensíveis e operações de alto ticket.",
    bullets: [
      "Idade real comprovada",
      "Histórico de gastos limpo",
      "Resiliência em nichos cinza",
    ],
  },
  {
    icon: UserCircle2,
    tag: "MATURE",
    title: "Perfil Antigo",
    description:
      "Perfis pessoais farmados com timeline real, conexões orgânicas e atividade contínua. A base que sustenta toda BM e suporta gerência de múltiplas contas sem trigger de fingerprint.",
    bullets: [
      "Timeline orgânica",
      "Trust Score consolidado",
      "Suporte a multi-account",
    ],
  },
  {
    icon: FileText,
    tag: "AGED",
    title: "Página Antiga",
    description:
      "Fanpages com idade real, engajamento histórico e nicho compatível com a oferta. Reduz drasticamente o risco de derrubada por denúncia e sustenta lookalikes mais precisos.",
    bullets: [
      "Idade + engajamento real",
      "Pronta para vincular criativo",
      "Compatibilidade por nicho",
    ],
  },
];

const AssetsSection = () => {
  return (
    <section id="ativos" className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="badge-pill mx-auto mb-8">🛡️ ATIVOS DISPONÍVEIS</div>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Ativos comercializados sob{" "}
            <span className="text-gradient">curadoria técnica</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            Cada ativo passa por validação de fingerprint, score, idade e
            histórico antes de ser entregue. Nada de revenda em massa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {assets.map((a, i) => (
            <div key={i} className="section-card group">
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <a.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-primary border border-primary/30 rounded-full px-3 py-1">
                  {a.tag}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-3">
                {a.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {a.description}
              </p>
              <ul className="space-y-2 mb-6">
                {a.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Consultar disponibilidade
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl py-5 px-8 text-center">
          <p className="text-primary-foreground font-display text-lg md:text-xl font-bold">
            Operação séria exige ativo sério. Preço sob consulta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AssetsSection;
