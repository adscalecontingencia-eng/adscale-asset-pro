import { AlertTriangle, Ban, Flame, TrendingDown, XCircle } from "lucide-react";

const painChips = [
  "BM 273 / 368",
  "Perfil zerado",
  "Página unpublished",
  "Pixel sem histórico",
];

const pains = [
  {
    icon: Ban,
    title: "Ativo virgem não aguenta volume.",
    description:
      "Conta nova com pixel sem histórico, BM sem verificação, perfil recém-criado. Você sobe campanha agressiva e o algoritmo do Meta liga o radar — restrição em horas, não em dias.",
  },
  {
    icon: TrendingDown,
    title: "Reset de aprendizado a cada queda.",
    description:
      "Perdeu a BM no meio da escala? Perdeu o pixel maduro, o lookalike custom, o histórico de conversão. CPM dispara, ROAS desaba e a operação volta para a estaca zero.",
  },
  {
    icon: Flame,
    title: "Ativo barato é o mais caro do mercado.",
    description:
      "BM revendida em massa, perfil reciclado, página com flag interna. Você paga pouco, queima em 48h e perde a janela de venda. O custo não é o ativo — é a oportunidade evaporada.",
  },
  {
    icon: AlertTriangle,
    title: "Cada hora offline custa cinco dígitos.",
    description:
      "Operações que rodam 30k, 50k, 100k+ por dia não podem depender de fornecedor amador. Ativo fraco quebra exatamente no pico — quando o CPA estava no mínimo e a conversão no máximo.",
  },
];

const PainPointsSection = () => {
  return (
    <section
      id="problemas"
      className="section-padding"
      aria-label="Problemas com ativos de contingência fracos no Meta Ads"
    >
      <div className="container max-w-5xl text-center">
        <div className="badge-pill mx-auto mb-8">
          <XCircle className="w-4 h-4" />
          O QUE TRAVA SUA ESCALA
        </div>

        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          O Meta não bloqueia performance.
          <br />
          <span className="text-gradient">Bloqueia ativo fraco.</span>
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Se o Trust Score do seu ativo é baixo, qualquer review automática vira
          banimento. Não importa o criativo, não importa a oferta — a conta cai.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {painChips.map((chip, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border border-destructive/30 rounded-full px-5 py-2.5 text-sm text-destructive"
            >
              <XCircle className="w-3.5 h-3.5" />
              {chip}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {pains.map((pain, i) => (
            <div key={i} className="section-card text-left group">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                <pain.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {pain.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
