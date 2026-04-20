export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: "Topo de funil" | "Meio de funil" | "Fundo de funil";
  readingTime: string;
  publishedAt: string;
  /** Markdown-like content rendered by BlogPost page */
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "o-que-e-business-manager-verificada-meta",
    title: "O que é uma Business Manager Verificada e por que ela importa em 2025",
    description: "Entenda como funciona a verificação de BM no Meta, quais critérios o Facebook avalia e por que ter uma BM Verificada é essencial para operações de alto volume em Meta Ads.",
    keywords: ["BM verificada", "business manager verificada", "verificação meta business", "como verificar BM facebook", "BM verificada meta ads"],
    category: "Topo de funil",
    readingTime: "6 min",
    publishedAt: "2025-01-08",
    content: `
A Business Manager (BM) é o coração de qualquer operação séria dentro do Meta Ads. Ela centraliza contas de anúncio, páginas, pixels, catálogos e permissões de equipe. Quando essa BM passa pelo processo oficial de verificação de negócio do Meta, ela recebe um selo interno conhecido no mercado como **BM Verificada** — e isso muda completamente como o algoritmo do Meta enxerga a sua estrutura.

## O que significa "verificada" para o Meta

Segundo a documentação oficial do Meta Business Help Center, a verificação de negócio confirma que existe uma empresa real por trás da conta: CNPJ ativo, documentos compatíveis, endereço comercial e domínio próprio. Esse processo libera funcionalidades sensíveis (como acesso a APIs avançadas, WhatsApp Business API, catálogos completos) e, na prática, eleva o **Trust Score** interno do ativo.

## Por que isso impacta sua operação de mídia

- **Limites de gasto maiores e mais estáveis** — Spending caps iniciais costumam ser maiores em BMs verificadas.
- **Menor probabilidade de revisões automáticas agressivas** — O Meta tende a confiar mais em estruturas com histórico documental validado.
- **Recuperação mais rápida em caso de bloqueio** — O fluxo de appeal abre caminhos extras quando a empresa está verificada.
- **Acesso a recursos avançados** — Conversões offline, CAPI, ofertas dinâmicas, integrações com CRM.

## Quando faz sentido comprar uma BM Verificada pronta

Para operações que rodam **R$ 50 mil ou mais por dia**, esperar dias ou semanas pelo processo de verificação significa perder leilão. Por isso, gestores experientes mantêm uma frota de BMs verificadas como camada de contingência — pronta para subir no instante em que uma estrutura principal sofre review.

## Cuidados ao adquirir

Nem toda BM "verificada" no mercado é legítima. Antes de comprar, exija:

1. Histórico real de uso (não apenas verificação fresca).
2. Domínio verificado dentro da BM.
3. Origem rastreável e briefing técnico de handover.
4. Suporte para configurar fingerprint e warm-up corretos.

> **Resumindo:** uma BM Verificada não é luxo, é infraestrutura. Operações que escalam de verdade tratam contingência como linha de produção, não como solução de emergência.
`,
  },
  {
    slug: "trust-score-meta-ads-como-funciona",
    title: "Trust Score no Meta Ads: o sinal invisível que decide se você escala",
    description: "Aprenda como o Meta calcula o Trust Score de contas, perfis e BMs, quais sinais elevam ou derrubam essa pontuação e como proteger seus ativos.",
    keywords: ["trust score meta", "trust score facebook ads", "como funciona trust score", "score de confiança meta", "reputação conta facebook ads"],
    category: "Meio de funil",
    readingTime: "8 min",
    publishedAt: "2025-01-12",
    content: `
"Trust Score" é o termo de mercado para o **score interno de confiança** que o Meta atribui a cada ativo da plataforma — perfis pessoais, páginas, contas de anúncio e BMs. Embora o Meta não publique a fórmula, o comportamento da plataforma e a documentação oficial deixam claros os sinais que pesam nessa pontuação.

## Sinais que elevam o Trust Score

- **Idade do ativo** — Perfis e páginas com anos de atividade orgânica são vistos como mais legítimos.
- **Histórico de gasto consistente** — Contas que gastaram volume sem disputas ou reembolsos têm peso positivo.
- **Verificação de negócio** — BMs verificadas elevam toda a hierarquia abaixo delas.
- **Fingerprint estável** — IP, navegador, dispositivo e fuso horário consistentes ao longo do tempo.
- **Engajamento orgânico real** — Páginas com seguidores, posts e interações reais (não compradas) têm score mais alto.
- **Conformidade com políticas** — Zero advertências, disputas ganhas, criativos dentro das diretrizes.

## Sinais que derrubam o Trust Score

- Login em IPs de risco (proxies residenciais mal configurados, VPNs públicas).
- Trocas frequentes de método de pagamento.
- Picos abruptos de gasto sem warm-up.
- Criativos com termos sensíveis (saúde, finanças, before/after).
- Disputas de cartão de crédito.
- Acesso compartilhado por muitos usuários em pouco tempo.

## Como proteger o Trust Score na prática

1. **Warm-up disciplinado**: comece com R$ 50–100/dia e dobre a cada 48–72h.
2. **Fingerprint dedicado**: cada ativo deve ter seu próprio ambiente (perfil de navegador, IP residencial, dispositivo).
3. **Não misture nichos sensíveis na mesma BM**.
4. **Documente tudo**: comprovantes de pagamento, NFs, identidade — para defender em revisões.
5. **Diversifique a frota** — não rode 100% do orçamento em uma única BM.

## Por que isso importa para contingência

Quando você compra um ativo de contingência, está comprando **Trust Score** — não só uma BM ou perfil. Ativos antigos, com histórico orgânico real e fingerprint limpo, sustentam volume onde contas novas seriam derrubadas no primeiro pico de leilão.
`,
  },
  {
    slug: "bloqueio-conta-anuncio-meta-como-evitar",
    title: "Bloqueio de conta de anúncio no Meta: causas reais e como evitar",
    description: "Conheça os principais motivos de bloqueio de contas no Meta Ads segundo a documentação oficial e descubra como estruturar contingência profissional.",
    keywords: ["bloqueio conta meta ads", "conta facebook bloqueada", "como evitar bloqueio meta", "anti-bloqueio facebook ads", "conta de anúncio inativada"],
    category: "Meio de funil",
    readingTime: "7 min",
    publishedAt: "2025-01-15",
    content: `
Toda operação séria no Meta Ads vai sofrer bloqueio em algum momento. A diferença entre um operador iniciante e um gestor sênior é **quanto tempo ele leva pra voltar ao ar**. Este artigo detalha as causas reais de bloqueio segundo o Meta e como construir uma estrutura que aguenta.

## Tipos de bloqueio no Meta

### 1. Bloqueio de conta de anúncio
A conta específica é desabilitada, mas a BM continua ativa. Costuma vir após violações de política em criativos.

### 2. Bloqueio de BM
A Business Manager inteira é desabilitada — todas as contas de anúncio dentro dela param. Geralmente associado a histórico ruim acumulado.

### 3. Restrição de perfil pessoal
O perfil que administra a BM é restringido. Sem perfil, sem acesso à BM. Esse é o cenário mais devastador.

### 4. Restrições de página
A fan page é restringida de anunciar — geralmente por reclamações repetidas ou conteúdo sinalizado.

## Causas mais comuns segundo a documentação do Meta

- **Violação de políticas de anúncio** (saúde, finanças, dating, before/after, claims falsas).
- **Atividade incomum na conta** (login de geolocalizações distintas em curto intervalo).
- **Pagamentos não autorizados ou disputas** repetidas.
- **Identidade não confirmada** quando solicitada.
- **Atividade em massa** (muitas mudanças simultâneas em campanhas/criativos).
- **Reincidência** após advertências.

## A estrutura de contingência que funciona

Operações profissionais não tentam "evitar" bloqueio — elas se preparam para ele. A arquitetura padrão de contingência inclui:

| Camada | Quantidade típica | Função |
|---|---|---|
| BMs Verificadas em standby | 3–10 | Substituem a BM principal em minutos |
| BMs antigas (aged) | 5–15 | Cama de spending warm-up imediato |
| Perfis aged | 10–20 | Administradores com histórico real |
| Páginas antigas | 5–10 | Continuidade de social proof |

Sem essa frota, você passa dias reconstruindo o que levou meses pra montar.

## O custo real de não ter contingência

Para uma operação que fatura **R$ 80 mil/dia**, cada hora parada equivale a milhares em receita perdida — sem contar a queda de aprendizado das campanhas. Investir em ativos de contingência premium (BM verificada, perfis e páginas aged) deixa de ser custo e vira **proteção de cash flow**.
`,
  },
  {
    slug: "warm-up-conta-anuncio-meta-passo-a-passo",
    title: "Warm-up de conta de anúncio no Meta: protocolo passo a passo",
    description: "Aprenda o protocolo completo de aquecimento de contas no Meta Ads para evitar bloqueios precoces e construir histórico de gasto sólido.",
    keywords: ["warm-up conta meta ads", "aquecimento conta facebook ads", "spending limit meta", "como aquecer conta de anúncio", "D0 facebook ads"],
    category: "Meio de funil",
    readingTime: "9 min",
    publishedAt: "2025-01-18",
    content: `
Warm-up (aquecimento) é o processo de gastar de forma gradual e controlada nos primeiros dias de uma conta de anúncio para que o Meta a reconheça como conta confiável. Pular essa etapa é o erro mais caro que um gestor pode cometer — mesmo com ativo aged.

## Por que warm-up importa mesmo em conta antiga

Mesmo uma BM Verificada com 5 anos de idade tem **D0 spending cap** quando você sobe a primeira campanha. O Meta avalia comportamento recente, não só histórico. Disparar R$ 5 mil no primeiro dia em uma conta zerada é o caminho mais rápido para revisão automática.

## Protocolo de warm-up em 7 dias

### D0 (dia da estreia)
- 1 campanha CBO ou ABO simples
- Orçamento: **R$ 50–80**
- Objetivo: Tráfego ou Engajamento (não Conversão ainda)
- 1 conjunto, 2–3 criativos validados

### D1
- Mesmo orçamento
- Adicione 1 conjunto novo (não duplique)

### D2–D3
- Suba para **R$ 150–200/dia**
- Migre para Conversão se a conversão estiver mapeada
- Mantenha CBO

### D4–D5
- **R$ 400–600/dia**
- Comece a usar criativos novos junto com os validados

### D6–D7
- **R$ 800–1.200/dia**
- A partir daqui, escala segue a mecânica natural da operação

## Regras inegociáveis durante o warm-up

1. **Nunca duplique conjuntos no D0–D2** — o Meta interpreta como bot.
2. **Não pause e reative campanhas no mesmo dia.**
3. **Evite edições em massa** — mude um parâmetro por vez.
4. **Use o mesmo navegador, IP e dispositivo** durante toda a semana.
5. **Pague com cartão real e nominal**, sem trocar de método.
6. **Não suba criativo polêmico no D0** — guarde para depois do D7.

## Sinais de que o warm-up está funcionando

- CPMs estáveis ou em queda.
- Aprovação de criativos sem revisão manual.
- Spending cap diário aumenta organicamente.
- Sem notificações de "atividade incomum".

## Quando algo dá errado

Se aparecer "conta em revisão" no D2 ou D3:
- **Não pause campanhas.** Deixe rodar dentro do limite.
- **Não mude pagamento.** Qualquer alteração agora é gatilho.
- Aguarde 24–48h. Se for review automática, geralmente libera.

Warm-up bem feito é o que separa uma frota de contingência **durável** de uma queimadeira de ativos.
`,
  },
  {
    slug: "como-escolher-fornecedor-bm-verificada",
    title: "Como escolher fornecedor de BM Verificada: 9 critérios técnicos",
    description: "Guia técnico para gestores de tráfego avaliarem fornecedores de ativos de contingência: o que perguntar, o que evitar e o que exigir.",
    keywords: ["comprar BM verificada", "fornecedor de contas facebook ads", "onde comprar BM antiga", "fornecedor ativos meta ads", "comprar conta facebook ads"],
    category: "Fundo de funil",
    readingTime: "8 min",
    publishedAt: "2025-01-22",
    content: `
O mercado de ativos de contingência cresceu — e com ele, fornecedores improvisados que entregam BM "verificada" feita na semana, perfis sem histórico real e zero suporte pós-venda. Para um gestor que opera **R$ 100 mil/dia ou mais**, escolher mal aqui custa caro.

## Os 9 critérios que importam

### 1. Origem rastreável do ativo
Pergunte: **"Qual a origem desse ativo? Como ele foi cultivado?"**
Resposta evasiva = passe adiante. Fornecedor sério explica.

### 2. Idade real e comprovável
Não basta dizer "BM antiga". Exija screenshot do histórico de criação dentro do Business Settings.

### 3. Histórico de gasto documentado
BMs com track record de gasto valem 3–5x mais. Peça print do histórico.

### 4. Verificação de domínio
A BM deve ter pelo menos 1 domínio já verificado dentro dela. Isso atesta que a verificação é genuína.

### 5. Briefing técnico de handover
Fornecedor profissional entrega:
- Configuração de fingerprint recomendada
- Tipo de IP (residencial/móvel) compatível
- Cronograma de warm-up sugerido
- Lista de "do's and don'ts" específicos do ativo

### 6. Suporte pós-venda
O que acontece se a BM bloquear no D3? Tem reposição? Tem orientação técnica? Tem grupo de comunicação direto?

### 7. Política de exclusividade
Cada ativo deve ser **vendido uma única vez**. Pergunte explicitamente.

### 8. Curadoria por nicho
Ativo bom para e-commerce físico não é o mesmo que bom para infoproduto. Fornecedor sênior pergunta antes de oferecer.

### 9. Tempo de mercado e referências
Quanto tempo o fornecedor opera? Tem clientes-referência que você pode validar?

## Bandeiras vermelhas

- Preço muito abaixo da média (BM verificada legítima não é barata).
- "BM verificada em 24h" — verificação real leva dias.
- Catálogo público com estoque "infinito".
- Pagamento exclusivamente em cripto, sem CNPJ.
- Sem briefing, sem suporte, sem garantias.

## Pergunta final que filtra fornecedor amador

> *"Qual configuração de fingerprint você recomenda para esse ativo específico, e por quê?"*

Se ele não souber responder, ele não cultivou o ativo — está revendendo.
`,
  },
  {
    slug: "perfil-aged-facebook-por-que-administrador-importa",
    title: "Perfil aged no Facebook: por que o administrador da BM define sua estabilidade",
    description: "Entenda o papel do perfil pessoal antigo (aged) na operação de Meta Ads e por que ele é tão crítico quanto a própria BM Verificada.",
    keywords: ["perfil aged facebook", "perfil antigo facebook ads", "perfil administrador BM", "conta pessoal facebook ads", "perfil para business manager"],
    category: "Meio de funil",
    readingTime: "6 min",
    publishedAt: "2025-01-25",
    content: `
A maior parte dos operadores foca obsessivamente na BM e na conta de anúncio — e esquece que **toda BM precisa de um perfil pessoal administrando**. Esse perfil é o ponto mais frágil (e mais ignorado) da arquitetura de contingência.

## O que é um perfil "aged"

Perfil aged é uma conta pessoal do Facebook com:
- **Idade real de 2+ anos** (preferencialmente 5+).
- Histórico de uso orgânico (posts, fotos, amigos, grupos).
- Sem histórico de violações.
- Verificação de identidade quando solicitada.
- Pagamentos e logins consistentes ao longo do tempo.

## Por que o perfil é o calcanhar de Aquiles

- Se o perfil cai, **toda BM administrada por ele perde acesso simultaneamente**.
- Perfil novo administrando BM antiga = sinal vermelho para o Meta.
- Trocar administrador rapidamente é gatilho de revisão.
- Perfil sem histórico orgânico não consegue passar pela checagem de identidade do Meta.

## Como o Meta avalia um perfil

Segundo padrões observáveis na plataforma:
- Tempo desde a criação.
- Volume e qualidade de conexões (amigos reais).
- Atividade orgânica (posts, comments, reactions).
- Consistência de localização e dispositivo.
- Histórico em grupos e páginas.
- Confirmações de identidade no passado.

## Boas práticas para perfis administradores

1. **Não rode anúncios diretamente do perfil** — administre apenas a BM.
2. **Mantenha atividade orgânica leve mas constante** (1–2 interações/semana).
3. **Cada perfil deve ter ambiente dedicado** — fingerprint próprio, IP residencial fixo.
4. **Não administre dezenas de BMs com o mesmo perfil** — distribua.
5. **Confirme identidade quando solicitado** — perfil que falha em ID-check fica marcado.

## Quando comprar perfil aged

- Quando você precisa de um administrador limpo para uma BM nova.
- Quando seu perfil principal sofreu restrição.
- Quando você quer **isolar operações** (não misturar BMs do mesmo cliente sob o mesmo perfil).

Operações sérias mantêm uma reserva de **5 a 20 perfis aged** prontos pra entrar como administrador no momento em que um perfil principal falha.
`,
  },
  {
    slug: "pagina-antiga-facebook-impacto-na-performance",
    title: "Página antiga no Facebook: o impacto real na performance dos seus anúncios",
    description: "Por que páginas (fan pages) com idade real performam melhor, têm menos restrições e como integrá-las à sua estrutura de contingência.",
    keywords: ["página antiga facebook", "fan page aged", "página facebook ads", "página antiga para anúncios", "social proof facebook"],
    category: "Topo de funil",
    readingTime: "5 min",
    publishedAt: "2025-01-28",
    content: `
A página (fan page) que aparece como remetente do anúncio carrega muito mais peso do que a maioria dos gestores imagina. Ela influencia CTR, qualidade percebida, custo por resultado e — especialmente — a probabilidade de restrições.

## Por que página antiga performa melhor

### 1. Social proof imediato
Páginas com seguidores, avaliações e posts antigos transmitem legitimidade no primeiro impacto. Isso reduz o atrito do scroll e aumenta CTR.

### 2. Menor probabilidade de restrição
O Meta correlaciona idade da página com confiabilidade. Páginas novas anunciando volume alto são vistas com mais suspeita.

### 3. Algoritmo trata como entidade estabelecida
Páginas antigas com histórico de engajamento orgânico tendem a ter melhor entrega inicial em campanhas — especialmente em objetivos como Engajamento e Tráfego.

### 4. Continuidade em caso de bloqueio
Quando a BM principal cai, ter páginas antigas em standby permite continuar operando sem perder histórico de social proof.

## O que faz uma página ser de qualidade

- Idade de 2+ anos.
- Categoria coerente com o nicho que vai anunciar.
- Pelo menos algumas centenas de seguidores reais.
- Posts orgânicos antigos (não apagados).
- Sem histórico de violações ou advertências.
- Username (vanity URL) já configurado.

## O que NÃO importa tanto

- Quantidade massiva de seguidores (10k de seguidores comprados pesa contra).
- Avaliações 5 estrelas todas no mesmo dia (suspeito).
- Página em nicho totalmente diferente do que vai anunciar (gera estranhamento).

## Como integrar páginas antigas à sua frota

1. **Reserve uma página por vertical** — não use a mesma página para nichos conflitantes.
2. **Mantenha postagem orgânica leve** — 1 post por semana já basta.
3. **Faça crossposting com páginas backup** — assim quando uma cai, o conteúdo persiste.
4. **Tenha 2–3 páginas alternativas por operação** — rotacione se sentir queda de entrega.

Página antiga é ativo. Ativo gera resultado. Tratar página como descartável é jogar performance fora.
`,
  },
  {
    slug: "arquitetura-contingencia-meta-ads-operacao-alto-volume",
    title: "Arquitetura de contingência no Meta Ads para operações de alto volume",
    description: "Modelo completo de estrutura de contingência para operações que rodam R$ 50k+/dia: camadas, redundâncias e fluxo de troca em caso de bloqueio.",
    keywords: ["arquitetura de contingência meta ads", "estrutura de contingência facebook", "operação alto volume meta", "contingência profissional meta ads", "frota de BMs"],
    category: "Fundo de funil",
    readingTime: "10 min",
    publishedAt: "2025-02-01",
    content: `
Operação amadora trata bloqueio como acidente. Operação profissional trata como **evento esperado** e arquiteta a estrutura para absorver. Este artigo detalha o modelo de contingência usado por gestores que operam volumes acima de R$ 50 mil/dia.

## A regra dos 3 níveis

### Nível 1 — Operação principal (live)
- 1–3 BMs verificadas rodando ativamente
- Contas de anúncio com histórico de gasto
- Páginas estabelecidas com social proof real
- Aqui mora 70% do orçamento diário

### Nível 2 — Hot standby (substituição imediata)
- 3–5 BMs verificadas warmed-up, prontas pra subir em <30 min
- Perfis administradores aged já configurados
- Páginas backup com fingerprint próprio
- Pixels e domínios já verificados em paralelo

### Nível 3 — Cold reserve (reposição estratégica)
- 5–15 BMs em estágios variados de aging/warm-up
- Perfis aged sem operação atual
- Páginas em maturação para uso futuro

## Fluxo de troca quando uma BM cai

1. **Detecção (0–5 min)** — alerta automático ou monitoramento manual identifica bloqueio.
2. **Pause global** — pausar todas as campanhas da BM caída antes de qualquer ação.
3. **Subir hot standby** — ativar BM em standby, importar criativos validados.
4. **Warm-up acelerado** — começar com 50% do orçamento normal, subir em 24h.
5. **Análise de causa** — identificar gatilho (criativo? pagamento? IP? disputa?).
6. **Ajuste estrutural** — aplicar correção antes de retornar à operação plena.
7. **Reposição da reserva** — comprar/cultivar nova BM para repor o nível 2.

## Métricas para acompanhar a saúde da frota

| Métrica | Meta saudável |
|---|---|
| Tempo médio de vida da BM | 60+ dias |
| % de BMs ativas vs em revisão | 85%+ |
| Tempo de troca em caso de bloqueio | <2h |
| % do orçamento concentrado em 1 BM | <40% |
| BMs em hot standby vs em uso | 1.5x |

## Erros que destroem operações grandes

- **Concentrar 100% do gasto em 1–2 BMs** — quando cai, cai tudo.
- **Não ter perfis backup** — perfil é o ponto único de falha mais comum.
- **Comprar tudo do mesmo fornecedor** — exposição a fingerprint similar entre ativos.
- **Não documentar setup de cada ativo** — quando o gestor sai, ninguém sabe configurar.
- **Tratar contingência como custo** — é seguro de receita, não despesa.

## Investimento típico em contingência

Para uma operação de **R$ 100 mil/dia**, o investimento mensal saudável em estrutura de contingência (BMs, perfis, páginas) costuma ficar entre **2% e 5% do faturamento** — número que se paga em uma única substituição rápida bem feita.

## Resumindo

Contingência não é plano B. É infraestrutura. Operações que escalam de verdade gastam tempo e dinheiro construindo a frota antes de precisar dela — porque quando o bloqueio chega, não tem mais tempo de comprar BM.
`,
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
