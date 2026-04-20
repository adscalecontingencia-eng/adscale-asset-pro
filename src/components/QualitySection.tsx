import { Fingerprint, ShieldCheck, Activity, Lock, History, Layers } from "lucide-react";

const items = [
  {
    icon: Fingerprint,
    title: "Fingerprint validado um a um",
    description:
      "Conferimos device, IP, cookie e padrão de navegação antes da entrega. O mesmo ativo nunca roda em duas operações ao mesmo tempo.",
  },
  {
    icon: History,
    title: "Idade real, sem maquiagem",
    description:
      "Idade comprovada pelo próprio histórico do Meta. Nada de perfil 'envelhecido' em 30 dias — aqui é ativo legítimo, com tempo de vida de verdade.",
  },
  {
    icon: Activity,
    title: "Trust Score que a gente comprova",
    description:
      "Avaliamos strikes, restrições anteriores, engajamento orgânico e padrão de gasto. Você sabe exatamente o que está recebendo antes de começar.",
  },
  {
    icon: ShieldCheck,
    title: "Verificação Meta de verdade",
    description:
      "Verificação feita pelo processo oficial, com documentação válida. Sem brecha, sem atalho que cai na próxima atualização da plataforma.",
  },
  {
    icon: Layers,
    title: "Stack que conversa entre si",
    description:
      "Perfil, BM e página entregues com fingerprint coerente — prontos pra vincular sem acender alerta de auditoria cruzada.",
  },
  {
    icon: Lock,
    title: "Atendimento técnico direto",
    description:
      "Conversa com quem entende, ativos rastreados e suporte ao seu lado nas primeiras ativações. Se travar, a gente resolve junto.",
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
            <span className="text-gradient">premium</span> de um descartável
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A gente só trabalha com ativos que aguentam review automática,
            scaling agressivo e os nichos mais pesados do Meta.
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
