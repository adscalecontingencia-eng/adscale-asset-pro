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
    title: "Ativo novo não aguenta o tranco.",
    description:
      "Conta sem histórico, BM sem verificação e perfil recém-criado. Você sobe um budget mais agressivo e o Meta acende o alerta — a restrição vem em horas, não em dias.",
  },
  {
    icon: TrendingDown,
    title: "Toda queda zera seu aprendizado.",
    description:
      "Quando a BM cai no meio da escala, vai junto o pixel maduro, o lookalike que estava performando e o histórico de conversão. CPM sobe, ROAS desaba — e você recomeça do zero.",
  },
  {
    icon: Flame,
    title: "Ativo barato sai caro lá na frente.",
    description:
      "BM revendida pra todo mundo, perfil reciclado, página com flag. Custou pouco, queimou em 48h e a janela de venda foi embora. O prejuízo não é o ativo — é o faturamento que ficou na mesa.",
  },
  {
    icon: AlertTriangle,
    title: "Hora offline em pico custa caro.",
    description:
      "Quem roda 30k, 50k, 100k por dia não pode depender de fornecedor amador. O ativo fraco sempre quebra na pior hora — bem quando o CPA está baixo e a conversão a mil.",
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
          O Meta não bloqueia campanha.
          <br />
          <span className="text-gradient">Bloqueia ativo fraco.</span>
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Quando o Trust Score do ativo é baixo, qualquer review automática vira
          BAN. Não adianta criativo bom nem oferta validada — se a base não
          aguenta, a conta cai.
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
