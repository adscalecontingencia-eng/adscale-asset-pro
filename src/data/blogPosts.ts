export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: "Topo de funil" | "Meio de funil" | "Fundo de funil";
  readingTime: string;
  publishedAt: string;
  /** OG/social share image path under /og */
  ogImage: string;
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
    ogImage: "/og/og-bm-verificada.jpg",
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
    ogImage: "/og/og-trust-score.jpg",
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
    ogImage: "/og/og-bloqueio.jpg",
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
    ogImage: "/og/og-warmup.jpg",
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
    ogImage: "/og/og-fornecedor.jpg",
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
    ogImage: "/og/og-perfil-aged.jpg",
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
    ogImage: "/og/og-pagina-antiga.jpg",
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
    ogImage: "/og/og-arquitetura.jpg",
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
  {
    slug: "glossario-meta-ads-termos-essenciais-gestor-trafego",
    title: "Glossário do Meta Ads: 25 termos que todo gestor de tráfego precisa dominar",
    description: "Do CBO ao CAPI, do Trust Score ao spending cap — entenda os termos técnicos do Meta Ads que aparecem no dia a dia de quem opera volume de verdade.",
    keywords: [
      "glossário meta ads",
      "termos facebook ads",
      "CBO meta ads",
      "CAPI facebook",
      "spending cap meta",
      "ROAS meta ads",
      "termos técnicos tráfego pago",
    ],
    category: "Topo de funil",
    readingTime: "9 min",
    publishedAt: "2025-02-05",
    ogImage: "/og/og-glossario.jpg",
    content: `
Meta Ads tem um vocabulário próprio. Quando o gestor sênior fala sobre "estourar o spending cap por causa de um CBO mal estruturado que matou o ROAS depois do warm-up", o iniciante sente que entrou no meio de outro idioma. Este glossário organiza os 25 termos mais usados na operação profissional — do básico ao avançado.

## Estrutura de campanhas

### CBO (Campaign Budget Optimization)
Otimização de orçamento no nível da campanha. O Meta distribui o budget automaticamente entre os conjuntos com melhor performance.

### ABO (Ad Set Budget Optimization)
Orçamento definido manualmente em cada conjunto. Dá mais controle, mas exige mais gestão.

### Conjunto de anúncios (Ad Set)
Camada onde você define público, posicionamentos, otimização e orçamento (no ABO).

### Criativo
A peça em si — imagem, vídeo ou carrossel + copy + CTA.

## Identidade e estrutura

### BM (Business Manager)
Painel central que organiza todas as suas contas de anúncio, páginas, pixels e usuários.

### BM Verificada
BM que passou pela verificação oficial de negócio do Meta — recebe selo interno e libera funcionalidades avançadas.

### Conta de anúncio (Ad Account)
Onde os anúncios efetivamente rodam. Uma BM pode ter várias.

### Pixel
Código de rastreamento instalado no site que envia eventos para o Meta.

### CAPI (Conversions API)
API de conversões — envia eventos diretamente do servidor para o Meta, sem depender do navegador.

## Sinais de saúde

### Trust Score
Pontuação interna de confiança que o Meta atribui a perfis, páginas, contas e BMs.

### Spending Cap (D0, D7, D30)
Limite de gasto diário/acumulado que o Meta impõe nos primeiros dias da conta.

### Warm-up
Aquecimento gradual de uma conta nova para construir histórico de gasto e elevar o spending cap.

### Fingerprint
Conjunto de sinais (IP, navegador, dispositivo, fuso) que identifica de forma única quem opera o ativo.

## Performance

### CPM (Custo por Mil impressões)
Quanto custa entregar 1.000 impressões. Métrica de leilão.

### CPC (Custo por Clique)
Quanto custa cada clique. Útil pra avaliar criativo e segmentação.

### CTR (Click-Through Rate)
Taxa de cliques sobre impressões. Mede atratividade do criativo.

### CPA (Custo por Aquisição)
Custo de cada conversão (compra, lead, etc.).

### ROAS (Return on Ad Spend)
Retorno sobre o investimento em anúncios. Receita ÷ gasto.

### Frequência
Quantas vezes em média cada pessoa viu seu anúncio.

## Segmentação

### Lookalike (LAL)
Público parecido construído a partir de uma audiência semente.

### Custom Audience
Público customizado a partir de pixel, lista, engajamento, etc.

### Públicos amplos (Broad)
Sem restrição de interesse — deixa o algoritmo encontrar.

## Risco e operação

### Restrição
Limitação parcial — geralmente afeta uma campanha ou conta específica.

### Bloqueio (Disabled)
Conta, BM ou perfil completamente desabilitado.

### Appeal
Pedido formal de revisão de bloqueio dentro do Meta Business Help.

### Contingência
Frota de ativos em standby pronta pra substituir o que cai.

---

Domínio do vocabulário é o primeiro passo pra escalar com segurança. Quem fala a língua do Meta opera melhor.
`,
  },
  {
    slug: "fingerprint-ip-residencial-meta-ads",
    title: "Fingerprint, IP residencial e isolamento de ambiente no Meta Ads",
    description: "Por que o Meta enxerga muito além do login e como gestores profissionais isolam fingerprint, IP e dispositivo para proteger suas BMs.",
    keywords: [
      "fingerprint meta ads",
      "IP residencial facebook ads",
      "antidetect browser meta",
      "isolamento de conta facebook ads",
      "proxy residencial meta",
      "ambiente seguro facebook ads",
    ],
    category: "Topo de funil",
    readingTime: "8 min",
    publishedAt: "2025-02-08",
    ogImage: "/og/og-fingerprint.jpg",
    content: `
Quando você acessa o Meta, ele coleta muito mais do que seu e-mail e senha. O que o algoritmo realmente avalia é seu **fingerprint** — uma assinatura digital composta por dezenas de sinais que identifica unicamente quem você é, mesmo sem login. Entender isso é o que separa quem perde BMs em série de quem opera com estabilidade.

## O que compõe um fingerprint

- **IP e ASN** — provedor, tipo (residencial, móvel, datacenter), geolocalização.
- **User Agent** — navegador, versão, sistema operacional.
- **Resolução de tela e profundidade de cor**.
- **Timezone e idioma do sistema**.
- **Fontes instaladas** — combinação única em cada máquina.
- **Canvas/WebGL fingerprint** — renderização gráfica única.
- **Cookies, localStorage e IndexedDB** persistentes.
- **Padrão de digitação e movimento de mouse** (mais avançado).

## Por que isso quebra operações

O Meta correlaciona fingerprints. Se duas BMs diferentes acessam do mesmo conjunto IP+navegador+canvas, a plataforma trata como **mesma operação** — e quando uma cai, todas caem juntas.

Cenário típico:
- Operador roda 5 BMs do mesmo notebook
- Mesmo Chrome, mesmo IP residencial, mesmo perfil
- Uma BM viola política e é bloqueada
- O algoritmo mapeia o fingerprint compartilhado
- As outras 4 BMs caem em cascata em 24-48h

## A regra de ouro: 1 ativo = 1 ambiente

Cada BM importante deve ter:

1. **Navegador antidetect próprio** (Multilogin, GoLogin, AdsPower, Dolphin)
2. **IP residencial dedicado** — não compartilhar entre ativos
3. **Perfil de cookies isolado**
4. **User agent fixo e consistente** (não trocar a cada sessão)
5. **Timezone coerente com o IP** (IP brasileiro + timezone BRT)

## Tipos de IP e quando usar

| Tipo | Uso | Risco |
|---|---|---|
| Datacenter | Nunca | Altíssimo — Meta detecta na hora |
| VPN pública | Nunca | Alto — IPs queimados |
| Residencial dedicado | Operação principal | Baixo — recomendado |
| Residencial rotativo | Apenas para tarefas pontuais | Médio |
| Móvel (4G/5G) | Operações sensíveis | Baixo — alta confiança |

## Boas práticas operacionais

- **Não mude IP depois de configurar a BM**. Estabilidade > sofisticação.
- **Acesse sempre do mesmo perfil de navegador**.
- **Não copie/cole sessão entre máquinas** — quebra fingerprint.
- **Evite ferramentas de automação visíveis** (extensões agressivas).
- **Configure o timezone do navegador igual ao do IP**.

## Por que ativos premium já vêm com setup pronto

Fornecedores sérios entregam ativos de contingência **com briefing de fingerprint específico**: qual região o IP deve ser, qual user agent foi usado no warm-up, qual timezone. Isso reduz drasticamente o risco de queda nos primeiros 30 dias.

Comprar um ativo aged sem setup correto é como comprar carro de corrida e instalar pneu careca. Os melhores resultados vêm da combinação **ativo de qualidade + ambiente isolado correto**.
`,
  },
  {
    slug: "pixel-vs-capi-conversions-api-meta-ads",
    title: "Pixel vs CAPI: por que operações sérias rodam os dois (e como configurar)",
    description: "Diferença real entre Pixel e Conversions API, como funcionam juntos, e por que essa configuração é mandatória para operações de alto volume.",
    keywords: [
      "pixel vs CAPI",
      "conversions API meta",
      "configurar CAPI facebook",
      "pixel facebook ads",
      "tracking server-side meta",
      "deduplicação eventos meta",
    ],
    category: "Fundo de funil",
    readingTime: "9 min",
    publishedAt: "2025-02-12",
    ogImage: "/og/og-pixel-capi.jpg",
    content: `
Em 2024 o Meta passou a tratar contas que rodam **somente Pixel** como sinal de operação amadora. A documentação oficial recomenda explicitamente o uso combinado de Pixel + CAPI — e essa configuração impacta diretamente atribuição, otimização e até a estabilidade da conta. Operação de alto volume sem CAPI hoje é dinheiro deixado na mesa.

## O problema do Pixel sozinho

O Pixel funciona via JavaScript no navegador. Em 2025, isso significa:

- **iOS 14.5+ ATT** — usuários Apple bloqueiam tracking nativamente
- **Safari ITP** — Intelligent Tracking Prevention apaga cookies em 7 dias
- **Ad blockers** — bloqueiam o Pixel antes de carregar
- **Modo anônimo** — sem persistência
- **Conexões instáveis** — o evento se perde

Resultado: você está perdendo **20% a 40% dos eventos de conversão**, e o algoritmo do Meta otimiza com dados incompletos.

## O que a CAPI resolve

A Conversions API envia o evento **direto do seu servidor** para o Meta — sem depender do navegador do usuário. Isso significa:

- Eventos chegam mesmo com ad blocker.
- Funciona com iOS 14.5+ sem perda significativa.
- Mais preciso (você controla os parâmetros enviados).
- Permite enviar eventos pós-checkout (assinatura recorrente, upsell offline).

## Como funcionam juntos

A configuração ideal envia o evento pelos **dois canais simultaneamente** com um identificador único (\`event_id\`). O Meta deduplica automaticamente — se chegou pelos dois caminhos, conta uma única vez. Se chegou só pela CAPI (porque o Pixel falhou), você não perde o evento.

## Eventos críticos para enviar via CAPI

1. **PageView** — base de retargeting.
2. **ViewContent** — quem viu produto.
3. **AddToCart** — meio de funil.
4. **InitiateCheckout** — alta intenção.
5. **Purchase** — o evento mais importante para otimização.
6. **Lead** — para operações B2B/educacional.
7. **CompleteRegistration**.

## Parâmetros que aumentam a qualidade do match

Quanto mais parâmetros você envia, melhor o Meta consegue atribuir o evento ao usuário certo:

- \`em\` — email hashed (SHA256)
- \`ph\` — telefone hashed
- \`fn\`, \`ln\` — primeiro/último nome hashed
- \`ge\`, \`db\` — gênero, data nascimento
- \`ct\`, \`st\`, \`zp\`, \`country\` — cidade, estado, CEP, país
- \`client_ip_address\`, \`client_user_agent\` — sinais técnicos
- \`fbc\`, \`fbp\` — cookies do Pixel (passados via CAPI)

> Quanto mais parâmetros enviados (com hash correto), mais alto o **EMQ (Event Match Quality)** — métrica que o Meta usa pra ranquear a qualidade dos seus eventos.

## Como configurar (caminhos possíveis)

### Opção 1 — Plugin oficial
Para WooCommerce, Shopify (oficial parou), o Meta tem integrações diretas. Mais simples, menos controle.

### Opção 2 — Gateway server-side
Stape.io, Server-Side GTM, ou seu próprio backend recebem o evento e repassam pra CAPI. Mais controle, melhor EMQ.

### Opção 3 — Desenvolvimento customizado
Para operações com stack próprio: implementar SDK Node/PHP/Python da Meta diretamente. Máximo controle.

## Sinais de que sua CAPI está bem configurada

- **EMQ acima de 7.0** em todos os eventos críticos.
- **Taxa de match acima de 70%** no Events Manager.
- **Deduplicação acima de 95%** entre Pixel e CAPI.
- **Latência média do evento abaixo de 5 segundos**.

## Por que isso protege a estabilidade da conta

O Meta interpreta contas com tracking de qualidade como **operadores sérios**. Eventos consistentes, EMQ alto e deduplicação correta são sinais positivos no Trust Score. Contas que rodam só Pixel mal configurado são tratadas com mais suspeita — o que aumenta probabilidade de revisão.

CAPI deixou de ser opcional. É infraestrutura padrão para operação profissional.
`,
  },
  {
    slug: "calcular-roi-investimento-contingencia-meta-ads",
    title: "Como calcular o ROI real do investimento em contingência no Meta Ads",
    description: "Modelo financeiro prático para justificar o investimento em ativos de contingência: custo de hora parada, probabilidade de bloqueio e payback.",
    keywords: [
      "ROI contingência meta ads",
      "calcular custo bloqueio facebook",
      "investimento ativos contingência",
      "ROI BM verificada",
      "custo de oportunidade meta ads",
      "payback contingência",
    ],
    category: "Fundo de funil",
    readingTime: "10 min",
    publishedAt: "2025-02-15",
    ogImage: "/og/og-roi-contingencia.jpg",
    content: `
Toda decisão de compra grande precisa de número. Quando você apresenta investimento em estrutura de contingência para um sócio, CFO ou cliente, "porque é importante" não vence objeção — modelo financeiro vence. Este artigo monta o cálculo real de ROI da contingência no Meta Ads.

## Os 4 componentes do custo do bloqueio

### 1. Receita parada
Operação que fatura **R$ 100 mil/dia** com ROAS 2.5 representa **R$ 40 mil/dia de gasto em mídia**. Se a operação para 3 dias enquanto você reconstrói a estrutura, perde-se **R$ 300 mil de faturamento bruto**.

### 2. Custo de aprendizado perdido
Campanhas otimizadas têm CPA 30-50% menor que campanhas zeradas. Subir tudo de novo significa **2-7 dias gastando mais por conversão** até o algoritmo reaprender. Estime 15% de gasto desperdiçado durante o re-aprendizado.

### 3. Custo operacional emergencial
Time correndo, fornecedor de emergência (mais caro), criativos sendo refeitos, novas verificações. Estime **R$ 5 mil a R$ 20 mil por evento** dependendo da operação.

### 4. Custo psicológico/relacional
Quando o cliente percebe operação parada, o churn aumenta. Difícil precificar mas real.

## Modelando o cenário base

Vamos usar uma operação real:

| Variável | Valor |
|---|---|
| Faturamento diário | R$ 100.000 |
| Gasto diário em ads | R$ 40.000 |
| Margem operacional | 25% |
| Lucro diário | R$ 25.000 |
| Tempo médio de bloqueio (sem contingência) | 4 dias |
| Frequência de bloqueio (sem contingência) | A cada 45 dias |

**Custo de cada bloqueio (sem contingência):**
- Receita perdida: 4 × R$ 100.000 = **R$ 400.000**
- Lucro perdido: 4 × R$ 25.000 = **R$ 100.000**
- Re-aprendizado: 15% × 5 dias × R$ 40.000 = **R$ 30.000**
- Operacional emergencial: **R$ 10.000**
- **Total por evento: ~R$ 140.000 de impacto direto no lucro**

**Em 12 meses:** 12 × (365÷45) ≈ 8 eventos × R$ 140.000 = **R$ 1.120.000 de prejuízo anual**.

## Cenário com contingência

Mesma operação, com frota saudável:

| Variável | Valor |
|---|---|
| Tempo médio de troca | 2 horas |
| Frequência de bloqueio efetivo (resolvido com troca) | A cada 60 dias |

**Custo por evento (com contingência):**
- Receita perdida: 0,08 × R$ 100.000 = **R$ 8.000**
- Re-aprendizado leve: 5% × 2 dias × R$ 40.000 = **R$ 4.000**
- Operacional: **R$ 1.000**
- **Total por evento: ~R$ 13.000**

**Em 12 meses:** 6 eventos × R$ 13.000 = **R$ 78.000**

## Calculando o ROI

| | Sem contingência | Com contingência |
|---|---|---|
| Prejuízo anual | R$ 1.120.000 | R$ 78.000 |
| Investimento anual em frota | R$ 0 | ~R$ 60.000 |
| **Custo total** | **R$ 1.120.000** | **R$ 138.000** |

**Economia anual: R$ 982.000**
**ROI sobre o investimento em contingência: ~16x**

## Como adaptar o modelo à sua operação

Substitua estes 4 valores pelos seus números reais:

1. **Faturamento diário médio**
2. **Margem operacional verdadeira** (não bruta)
3. **Frequência histórica de bloqueio** (olhe os últimos 6 meses)
4. **Tempo médio que você leva pra voltar ao ar hoje**

Mesmo operações pequenas (R$ 10k/dia) costumam ter ROI positivo em contingência — porque o impacto relativo do bloqueio é proporcionalmente maior em operações sem reserva.

## Quando NÃO compensa

Honestidade técnica: nem toda operação precisa de frota grande de contingência.

- **Operações abaixo de R$ 5k/dia consistente** — geralmente o investimento mínimo de uma frota saudável (R$ 20-30k inicial) leva mais de 12 meses pra pagar.
- **Operações sazonais** que rodam só em datas comerciais — calcule pelo período ativo.
- **Operações com baixíssima frequência de bloqueio** (alguns nichos têm 0 bloqueios em 12 meses).

Para o restante — especialmente quem opera **R$ 30k+/dia** ou trabalha em nichos sensíveis (dropshipping, infoproduto, finanças, suplementos) — contingência tem ROI matemático de 5-20x. Não é despesa: é o investimento de melhor retorno da operação.
`,
  },
  {
    slug: "trust-score-facebook-ads-como-meta-avalia-conta",
    title: "Trust Score no Facebook Ads: como o Meta avalia sua conta em 2026",
    description: "Entenda o que é Trust Score no Facebook Ads e Meta, quais sinais elevam ou derrubam sua pontuação interna e como proteger contas para escalar com previsibilidade.",
    keywords: ["trust score facebook ads", "trust score meta", "como funciona trust score", "score de confiança facebook", "reputação conta facebook ads", "como meta avalia conta"],
    category: "Topo de funil",
    readingTime: "7 min",
    publishedAt: "2026-04-22",
    ogImage: "/og/og-trust-score-facebook.jpg",
    content: `
O Trust Score é o "score de crédito" interno do Meta. Ele não aparece no Gerenciador, mas decide silenciosamente quem escala e quem trava no Facebook Ads.

## O que é Trust Score no Facebook Ads

É uma pontuação interna que o Meta atribui a cada ativo — conta de anúncio, BM, perfil, página, pixel — com base em centenas de sinais comportamentais, técnicos e documentais. Quanto maior o score, maior a confiança do algoritmo: mais limite, menos revisão, menos bloqueio.

## Os 5 grupos de sinais que mais pesam

### 1. Identidade e verificação
- Verificação de negócio ativa
- Domínio verificado
- Documentos compatíveis com CNPJ
- Selo azul (quando aplicável)

### 2. Comportamento de pagamento
- Histórico longo sem chargeback
- Cartão consistente, idealmente empresarial
- Pagamentos em dia, sem fraudes

### 3. Fingerprint técnico
- IP residencial coerente com o país do anunciante
- Mesmo dispositivo e navegador ao longo do tempo
- Ausência de sinais de automação ou VPNs suspeitas

### 4. Histórico de criativos
- Baixa taxa de reprovação
- Ausência de termos sensíveis recorrentes
- Landing pages compatíveis com políticas

### 5. Comportamento da conta
- Crescimento gradual de gasto (warm-up)
- Sem mudanças bruscas de nicho ou país
- Página com engajamento real

## Por que isso importa para Facebook Ads e Meta Ads

Contas com Trust Score alto recebem **limites de gasto maiores**, **menos revisões automáticas**, **recuperação mais rápida em appeals** e **acesso prioritário a recursos avançados** como CAPI, catálogos e WhatsApp Business API.

## Como aumentar Trust Score sem cair em armadilhas

> **Regra de ouro:** Trust Score se constrói com tempo e consistência. Não existe atalho técnico que substitua histórico real.

1. Faça **warm-up disciplinado** das contas novas
2. Mantenha **fingerprint estável** (mesmo IP, dispositivo)
3. Verifique **domínio e negócio** assim que possível
4. Evite criar e deletar ativos em sequência
5. Considere ativos com histórico já maduro para acelerar

## Conexão com contingência

Operações sérias não dependem de uma única conta com Trust Score alto. Elas mantêm **uma frota de ativos com score elevado em standby** — exatamente o que uma estrutura de contingência profissional entrega.

Se você quer eliminar a aposta no Trust Score isolado, conheça [a estrutura de contingência para Meta Ads](/contingencia-meta-ads) ou avalie [adquirir BM Verificada com histórico real](/bm-verificada).
`,
  },
  {
    slug: "recuperar-conta-anuncio-bloqueada-facebook-ads",
    title: "Como recuperar conta de anúncio bloqueada no Facebook Ads: passo a passo",
    description: "Guia técnico para recuperar conta de anúncio bloqueada no Facebook e Meta Ads: fluxo de appeal, prazos reais, erros comuns e quando partir para contingência.",
    keywords: ["recuperar conta de anúncio facebook", "conta de anúncio bloqueada", "desbloqueio facebook ads", "appeal facebook ads", "como desbloquear bm facebook", "recuperar bm meta"],
    category: "Meio de funil",
    readingTime: "9 min",
    publishedAt: "2026-04-25",
    ogImage: "/og/og-recuperar-conta-bloqueada.jpg",
    content: `
Bloqueio no Facebook Ads não é se, é quando. O que separa operações que voltam ao ar em horas das que ficam dias paradas é o processo de recuperação.

## O que aconteceu: tipos de bloqueio

Antes de qualquer ação, identifique exatamente o que foi restringido:

| Tipo | Sinal no Gerenciador | Gravidade |
|---|---|---|
| **Conta de anúncio desativada** | "Sua conta de anúncio foi desativada" | Média |
| **BM restrita** | "Acesso limitado ao Business Manager" | Alta |
| **Perfil pessoal bloqueado** | "Você não pode anunciar" | Crítica |
| **Página com violação** | Aviso na página, não na conta | Média |
| **Pagamento recusado** | "Não foi possível cobrar" | Baixa (não é bloqueio real) |

Cada tipo tem um fluxo de appeal diferente.

## Passo 1 — Não toque em nada nas primeiras 2h

Erros mais comuns nas primeiras horas:
- Criar nova conta de anúncio na mesma BM
- Trocar método de pagamento na pressa
- Pedir appeal antes de entender o motivo
- Criar nova BM com o mesmo perfil

Cada uma dessas ações pode **agravar a restrição** ou propagá-la para outros ativos.

## Passo 2 — Identifique o motivo real

Vá em **Qualidade da Conta** (Account Quality) e leia a notificação completa. Os motivos mais comuns no Facebook Ads:

1. Política de produto/serviço (especialmente saúde, finanças, dropshipping)
2. Página de destino fora de conformidade
3. Pagamento suspeito
4. Atividade incomum (mudança de IP, dispositivo, país)
5. Violação por criativo aprovado anteriormente (revisão retroativa)

## Passo 3 — Abra o appeal correto

> **Importante:** o botão "Solicitar revisão" só pode ser usado **uma vez** na maioria dos casos. Não chute.

Estrutura de appeal eficaz:
- **1 parágrafo** explicando o contexto da operação
- **Documentação anexa** (CNPJ, contrato social, comprovante de domínio)
- **Linguagem objetiva**, sem emoção
- **Em inglês** quando possível (acelera triagem)

## Passo 4 — Prazos reais (não os oficiais)

| Cenário | Prazo médio real |
|---|---|
| Appeal de conta de anúncio | 24h a 7 dias |
| Appeal de BM | 3 a 14 dias |
| Appeal de perfil pessoal | 7 a 21 dias |
| Casos com selo azul | Geralmente <48h |

## Passo 5 — Plano B: ativar contingência

Se o appeal demorar mais de **48h** e sua operação roda **R$ 20k+/dia**, o ROI de esperar despenca. É a hora de:

1. Subir uma BM reserva já verificada
2. Migrar pixel/CAPI espelhado
3. Reativar campanhas com mesma estrutura
4. Manter o appeal correndo em paralelo

## Erros que destroem a recuperação

- Usar a mesma página em várias BMs novas em sequência
- Trocar de cartão sem warm-up
- Criar perfis novos a partir do mesmo dispositivo bloqueado
- Apagar criativos antes da análise

## Quando recuperação não vale o esforço

Em alguns casos (perfil banido por reincidência, página com violação grave), insistir é desperdício. Migrar para uma estrutura limpa com [contingência profissional](/contingencia-meta-ads) é mais rápido e barato.

## Conclusão

Recuperação de conta no Facebook Ads é processo, não sorte. Quem trata bloqueio como incidente operacional — com fluxo, contingência e disciplina — perde horas. Quem improvisa, perde semanas e faturamento.

Para entender a arquitetura completa, veja também [como evitar bloqueio de conta de anúncio no Meta](/blog/bloqueio-conta-anuncio-meta-como-evitar).
`,
  },
  {
    slug: "quanto-custa-bm-verificada-facebook-2026",
    title: "Quanto custa uma BM Verificada Facebook em 2026: preço, riscos e o que avaliar",
    description: "Faixa de preço real de BM Verificada Facebook e Meta em 2026, o que diferencia ativos baratos dos premium, riscos comuns e checklist para comprar com segurança.",
    keywords: ["quanto custa bm verificada", "preço bm verificada facebook", "comprar bm verificada", "valor business manager verificada", "bm verificada facebook preço", "comprar bm meta verificada"],
    category: "Fundo de funil",
    readingTime: "8 min",
    publishedAt: "2026-04-29",
    ogImage: "/og/og-quanto-custa-bm-verificada.jpg",
    content: `
"Quanto custa uma BM Verificada?" é a pergunta mais frequente de quem busca contingência para Facebook Ads. A resposta honesta: depende do que está dentro dela.

## Faixa de preço real de mercado em 2026

| Tipo de BM Verificada | Faixa de preço | Para quem |
|---|---|---|
| **Verificação fresca, sem histórico** | R$ 800 – R$ 2.000 | Operações iniciantes (alto risco) |
| **Verificada com histórico de gasto baixo** | R$ 2.500 – R$ 5.000 | Operações em crescimento |
| **Verificada com histórico alto + selo azul** | R$ 6.000 – R$ 15.000 | Operações de alto volume |
| **Pacote contingência (BM + perfil aged + página)** | R$ 8.000 – R$ 25.000 | Operações profissionais |

> **Atenção:** ofertas abaixo de R$ 800 quase sempre escondem BMs com histórico ruim, perfis suspeitos ou ativos prestes a cair.

## O que define o preço de verdade

### 1. Histórico documental
BM verificada há 6 meses vale mais que verificada ontem. O Meta dá peso à **maturidade da verificação**, não só ao status atual.

### 2. Histórico de gasto
Uma BM que já gastou R$ 50k+ sem incidente tem Trust Score muito superior à zero-spend.

### 3. Selo azul de página
Páginas com selo azul vinculadas elevam o pacote em 2-3x o preço — e em estabilidade real.

### 4. Domínio e CAPI configurados
BMs entregues prontas (domínio verificado, pixel + CAPI funcionando) economizam dias de setup.

### 5. Perfil administrador
O perfil que controla a BM é tão importante quanto a BM. Perfis aged reais elevam preço e estabilidade.

## Por que BM barata sai caro

Cálculo prático para operação de R$ 50k/dia:

- **BM barata (R$ 1.000)** caindo em 5 dias = **R$ 250k de receita perdida** no período
- **BM premium (R$ 8.000)** rodando 60 dias = **R$ 3M de receita protegida**

A diferença de R$ 7.000 vira ROI de **400x** em proteção operacional.

## Checklist antes de comprar

✅ Vendedor mostra histórico de gasto e idade da verificação?
✅ Domínio já está verificado dentro da BM?
✅ Perfil administrador é aged ou recém-criado?
✅ Há briefing técnico de handover (IP, fingerprint, warm-up)?
✅ Suporte pós-venda existe ou só "vendeu, sumiu"?
✅ Pacote inclui página, pixel e CAPI configurados?

Se 3+ dessas respostas forem "não", o preço baixo é armadilha.

## Onde mora o golpe

- **BM "verificada" reciclada** que cairá em dias
- **Verificação obtida com documento de terceiros** (revertida quando descoberto)
- **BM clonada** vendida para múltiplos compradores
- **Selo azul falso** (alegado mas não comprovado)

## Quanto vale para sua operação

Regra prática de orçamento:

- **Operação até R$ 10k/dia:** invista 1-2% do faturamento mensal em ativos
- **R$ 10k–R$ 50k/dia:** 0,5-1% do faturamento mensal
- **R$ 50k+/dia:** 0,3-0,5% do faturamento mensal

Para operações sérias, o investimento em BM Verificada premium tem retorno em **menos de 7 dias** comparado ao custo de uma única parada operacional.

## Próximos passos

Se quer evitar o risco do mercado paralelo, [conheça nossa curadoria 1 a 1 de BM Verificada](/bm-verificada) — com handover técnico real, suporte e reposição garantida.

Para entender a estrutura completa, veja também [como escolher fornecedor de BM verificada](/blog/como-escolher-fornecedor-bm-verificada) e [a arquitetura de contingência para alto volume](/blog/arquitetura-contingencia-meta-ads-operacao-alto-volume).
`,
  },
  {
    slug: "limite-de-gasto-facebook-ads-como-aumentar",
    title: "Limite de gasto no Facebook Ads: como aumentar e por que sua conta não escala",
    description: "Por que o Facebook Ads e Meta limitam o gasto da sua conta, como o spending cap funciona e o passo a passo técnico para aumentar limite com segurança.",
    keywords: ["limite de gasto facebook ads", "spending cap facebook", "aumentar limite facebook ads", "conta não escala facebook", "limite diário facebook ads", "limite meta ads"],
    category: "Meio de funil",
    readingTime: "7 min",
    publishedAt: "2026-05-02",
    ogImage: "/og/og-limite-gasto-facebook.jpg",
    content: `
Se sua conta de Facebook Ads "não escala" mesmo com criativo bom e oferta validada, provavelmente o gargalo não é estratégico — é o **limite de gasto interno** que o Meta impôs.

## O que é spending cap (limite de gasto)

O Meta aplica dois tipos de limite:

1. **Limite de conta (account spending limit):** definido pelo anunciante
2. **Limite interno do Meta:** invisível, definido pelo algoritmo com base em Trust Score, histórico e risco

O segundo é o que mais trava operações em escala — e ninguém te avisa.

## Por que o Meta limita sua conta

- Conta nova sem histórico de pagamento
- Aumento brusco de gasto (de R$ 100 para R$ 5.000/dia em poucos dias)
- Cartão sem histórico anterior
- Perfil administrador com pouca idade
- Mudança de país, IP ou dispositivo
- BM não verificada
- Setor de risco (saúde, finanças, dropshipping)

## Sinais de que você bateu o teto invisível

- CPM dispara sem motivo aparente
- Campanhas "saem do leilão" no meio do dia
- Entregas erráticas mesmo com budget aumentado
- Pagamento processa, mas anúncios não rodam
- Mensagem genérica "houve um problema com seu pagamento"

## Como aumentar limite no Facebook Ads: passo a passo

### 1. Faça warm-up real
Não pule etapas. Sequência típica para conta nova:
- **Dias 1-3:** R$ 30/dia
- **Dias 4-7:** R$ 100/dia
- **Dias 8-14:** R$ 300/dia
- **Dias 15-30:** R$ 800/dia
- **30+ dias:** crescimento de 30-50% por semana

### 2. Pague antes de ser cobrado
Pagamento manual antecipado (prepago) sinaliza solvência. Faça pagamentos parciais no meio do ciclo.

### 3. Verifique negócio e domínio
BM verificada + domínio verificado liberam limites maiores naturalmente.

### 4. Mantenha fingerprint estável
Mesmo IP, mesmo dispositivo, mesmo navegador. Evite logar de múltiplos lugares.

### 5. Cartão empresarial coerente
Cartão da empresa que está no CNPJ da BM verificada = sinal forte de legitimidade.

### 6. Solicite aumento manual (quando aplicável)
Em conta de anúncio: **Configurações → Limite de gasto da conta → Alterar**. Para limites internos, abra ticket com Meta Business Support apresentando histórico.

## Quando o limite não sobe — e o que fazer

Algumas contas simplesmente **não saem de R$ 1k–R$ 5k/dia** mesmo com warm-up perfeito. Geralmente porque:

- Trust Score do perfil administrador é baixo
- BM tem histórico ruim anterior
- IP/fingerprint sinaliza risco

Nesses casos, o caminho mais rápido é **migrar para um ativo com histórico maduro** ao invés de tentar reabilitar o atual.

## Como contingência destrava escala

Operações em escala mantêm múltiplas BMs com Trust Score alto rodando em paralelo. O limite "agregado" da operação vira a soma dos limites individuais — e cada conta entrega o que pode sem forçar.

> **Estratégia comum em alto volume:** 4 BMs verificadas a R$ 50k/dia cada = R$ 200k/dia totais, sem nenhuma forçar limite.

## Próximos passos

Se sua conta travou em um teto invisível, [uma consultoria técnica](/consultoria-meta-ads) pode mapear se o gargalo é warm-up, fingerprint, BM ou estratégia. Para destravar via ativos, [conheça as BMs Verificadas com limites maiores](/bm-verificada).
`,
  },
  {
    slug: "dominio-verificado-facebook-como-configurar-ios14",
    title: "Domínio verificado no Facebook: como configurar e impacto em iOS 14+",
    description: "Guia técnico para verificar domínio no Facebook Business: métodos DNS, meta tag e arquivo HTML, priorização de eventos e impacto direto em iOS 14+ e CAPI.",
    keywords: ["domínio verificado facebook", "verificar domínio meta", "ios 14 facebook ads", "domain verification facebook", "configurar domínio business manager", "priorização de eventos meta"],
    category: "Topo de funil",
    readingTime: "8 min",
    publishedAt: "2026-05-06",
    ogImage: "/og/og-dominio-verificado-facebook.jpg",
    content: `
Verificar domínio no Facebook deixou de ser opcional desde a atualização do iOS 14. Hoje é pré-requisito para qualquer operação séria de Meta Ads.

## O que é verificação de domínio

É o processo pelo qual você prova ao Meta que controla um domínio específico. Após verificado, **só esse domínio pode configurar e priorizar eventos** de conversão associados ao Pixel e à CAPI.

## Por que se tornou obrigatório com iOS 14+

Com a App Tracking Transparency (ATT) da Apple, o Meta criou o **Aggregated Event Measurement (AEM)** — que limita a 8 eventos priorizados por domínio. Sem domínio verificado:

- Você não pode priorizar eventos
- Conversões em iOS são severamente subreportadas
- CAPI perde poder de matching
- Otimização de campanha fica cega

## Os 3 métodos de verificação

### 1. Meta tag (mais rápido)
- Vá em **Business Settings → Brand Safety → Domains**
- Adicione o domínio
- Copie a meta tag fornecida
- Cole no head da home do site
- Clique em **Verify**

### 2. Arquivo HTML
- Baixe o arquivo .html fornecido pelo Meta
- Hospede em seudominio.com/nome-do-arquivo.html
- Clique em **Verify**

### 3. Registro DNS TXT (mais robusto)
- Adicione um registro TXT no painel DNS:
  - Nome: @
  - Valor: facebook-domain-verification=ABC123...
- Aguarde propagação (até 72h)
- Clique em **Verify**

> **Recomendação técnica:** prefira **DNS TXT**. É o método mais resistente a mudanças no site (troca de tema, migração de CMS, etc).

## Priorização de eventos: o que fazer depois

Após verificar o domínio:

1. Vá em **Events Manager → Aggregated Event Measurement**
2. Selecione o domínio verificado
3. Liste os 8 eventos por ordem de valor para o negócio
4. Coloque conversão de maior valor (Purchase) no topo

Em e-commerce típico:
1. Purchase
2. Initiate Checkout
3. Add to Cart
4. View Content
5. Add Payment Info
6. Search
7. Lead
8. Contact

## Erros comuns

- **Verificar domínio em BM errada** — só uma BM pode verificar cada domínio. Decida com cuidado.
- **Subdomínios** — loja.seudominio.com precisa de verificação separada da raiz
- **Apex vs www** — verifique a forma que aparece no anúncio
- **Múltiplos domínios** — cada loja precisa do próprio processo

## Impacto em CAPI e matching

Domínio verificado + CAPI corretamente configurada eleva o **Event Match Quality (EMQ)** acima de 8/10. Isso significa:

- Audiências mais precisas
- Lookalikes mais qualificados
- Otimização de algoritmo mais rápida
- ROAS reportado mais próximo do real

## Próximos passos

Se você opera múltiplas lojas ou clientes, entender em **qual BM verificar** é estratégico. [Uma consultoria técnica](/consultoria-meta-ads) ajuda a desenhar essa arquitetura. Veja também [Pixel vs CAPI no Meta Ads](/blog/pixel-vs-capi-conversions-api-meta-ads) para complementar a stack.
`,
  },
  {
    slug: "consultoria-meta-ads-vs-curso-quando-contratar",
    title: "Consultoria Meta Ads vs curso: quando contratar especialista em Facebook Ads",
    description: "Quando consultoria de Meta Ads e Facebook Ads supera curso: critérios objetivos, comparativo de custo-benefício e perfil de operação que justifica especialista.",
    keywords: ["consultoria meta ads", "consultor facebook ads", "especialista em facebook ads", "consultoria vs curso meta", "vale a pena consultoria meta ads", "contratar consultor facebook"],
    category: "Fundo de funil",
    readingTime: "8 min",
    publishedAt: "2026-05-09",
    ogImage: "/og/og-consultoria-meta-ads-vs-curso.jpg",
    content: `
Curso ensina o caminho geral. Consultoria resolve o seu caminho. Saber quando trocar um pelo outro pode significar meses de tentativa e erro evitados em Meta Ads e Facebook Ads.

## A diferença real entre os dois formatos

| | Curso | Consultoria |
|---|---|---|
| **Conteúdo** | Genérico, escalável | Sob medida, do seu ativo |
| **Foco** | Aprender o conceito | Resolver o problema |
| **Tempo até resultado** | Semanas/meses | Dias |
| **Custo** | R$ 500 – R$ 5.000 | R$ 3.000 – R$ 30.000+ |
| **Quem se beneficia** | Iniciantes/intermediários | Operações em escala/em crise |

## Quando curso resolve

- Você está começando e ainda não opera com volume
- Quer entender fundamentos (criativo, leilão, segmentação)
- Tem tempo para testar e errar
- Operação está abaixo de R$ 5k/dia consistente

Para esse perfil, gastar com consultoria é desperdício. O retorno do conhecimento básico vem de praticar, não de pagar diagnóstico.

## Quando consultoria é a única saída

### 1. Sua operação travou em escala
Você roda R$ 30k+/dia mas não consegue passar disso há semanas. Provavelmente o gargalo é técnico (Trust Score, fingerprint, CAPI, BM) — não estratégico.

### 2. Bloqueios estão te custando faturamento
Se cada bloqueio te custa R$ 50k+ de receita parada, qualquer hora de especialista paga 10x.

### 3. Você não sabe por que CAC subiu
Curso não vai te explicar **o seu** caso. Diagnóstico técnico sim.

### 4. Você opera múltiplas contas/clientes (agência)
Padronizar arquitetura e governança é trabalho de consultoria, não de aula gravada.

### 5. Você está lançando algo de alto risco
Lançamento de R$ 1M+ não é hora de testar conhecimento de curso — é hora de blindar com quem já fez 50 lançamentos.

## O que uma boa consultoria de Facebook Ads entrega

- **Auditoria técnica** de BM, perfis, páginas, pixel, CAPI
- **Diagnóstico de Trust Score** e fingerprint
- **Plano de contingência** sob medida
- **Roadmap priorizado** de ajustes
- **Acompanhamento técnico** opcional

Tudo isso entregue em **dias**, não em **meses de curso**.

## Como avaliar um consultor

✅ Já operou alto volume na prática?
✅ Mostra casos reais com números?
✅ Entende infraestrutura (BM, CAPI, fingerprint), não só criativo?
✅ Entrega checklist executável, não slide motivacional?
✅ Tem opinião técnica clara, mesmo desconfortável?

## ROI matemático

Operação rodando R$ 50k/dia com CAC mal calibrado:

- **Curso de R$ 2.000:** você aprende em 60 dias, melhora marginal de 5%
- **Consultoria de R$ 8.000:** diagnóstico em 7 dias, melhora de 15-25%

Em 30 dias, a consultoria gera entre **R$ 75k e R$ 375k** a mais em margem. ROI de 10-50x.

## Quando os dois fazem sentido juntos

Operações maduras combinam:
- **Curso** para o time interno aprender fundamentos
- **Consultoria** para resolver gargalos técnicos pontuais
- **Mentoria contínua** para otimização recorrente

## Próximos passos

Se sua operação travou em escala, sofre bloqueios recorrentes ou está sem clareza técnica, [agende uma consultoria Meta Ads e Facebook Ads](/consultoria-meta-ads) com diagnóstico real. Para entender a base estrutural, leia também [como evitar bloqueio de conta de anúncio](/blog/bloqueio-conta-anuncio-meta-como-evitar).
`,
  },
  {
    slug: "checklist-auditoria-bm-facebook-18-itens",
    title: "Checklist de auditoria de BM Facebook: 18 itens antes de escalar",
    description: "Checklist completo de auditoria de Business Manager Facebook em 18 itens técnicos: verificação, perfis, páginas, pixel, CAPI, contingência e governança.",
    keywords: ["auditoria de bm facebook", "checklist business manager", "auditoria facebook ads", "como auditar bm meta", "diagnóstico bm facebook", "checklist meta ads"],
    category: "Meio de funil",
    readingTime: "9 min",
    publishedAt: "2026-05-13",
    ogImage: "/og/og-checklist-auditoria-bm.jpg",
    content: `
Antes de escalar gasto no Facebook Ads, audite a infraestrutura. Esses 18 itens revelam 90% dos problemas que travam operações em alto volume.

## Bloco 1 — Identidade e verificação (itens 1-4)

### 1. BM tem verificação de negócio ativa
- ✅ Documentos compatíveis com CNPJ
- ✅ Endereço comercial validado
- ✅ Status verde em **Business Settings → Business Info**

### 2. Domínio verificado
- ✅ Pelo menos um domínio verificado por DNS TXT
- ✅ Apex e www consistentes
- ✅ Subdomínios principais verificados

### 3. Página com selo (quando aplicável)
- ✅ Selo azul em páginas de marca
- ✅ Categoria correta
- ✅ Avaliações ativas

### 4. Documento da empresa coerente
- ✅ CNPJ ativo na Receita
- ✅ Razão social bate com o que aparece na BM
- ✅ Sem pendências fiscais

## Bloco 2 — Perfis administradores (itens 5-7)

### 5. Perfis admin são aged
- ✅ Mínimo 6 meses de idade
- ✅ Histórico de uso real (posts, amigos, interações)
- ✅ Sem flags anteriores

### 6. Permissões corretamente atribuídas
- ✅ Princípio do menor privilégio
- ✅ Admins essenciais identificados
- ✅ Sem ex-funcionários ainda com acesso

### 7. 2FA ativo em todos os perfis
- ✅ Autenticação em dois fatores obrigatória
- ✅ Backup codes guardados
- ✅ Telefone de recuperação atualizado

## Bloco 3 — Estrutura de ativos (itens 8-11)

### 8. Contas de anúncio organizadas
- ✅ Nomenclatura padrão (cliente, vertical, país)
- ✅ Sem contas zombies
- ✅ Limite de gasto coerente com histórico

### 9. Pixel único e bem configurado
- ✅ 1 pixel principal por loja/marca
- ✅ Eventos padrão (Purchase, ATC, ViewContent) ativos
- ✅ Sem eventos duplicados

### 10. CAPI funcionando com EMQ alto
- ✅ Event Match Quality > 7/10
- ✅ Deduplicação Pixel + CAPI ativa
- ✅ Server-side coberto

### 11. Catálogo (se e-commerce) saudável
- ✅ Feed atualizado nas últimas 24h
- ✅ Menos de 5% de itens reprovados
- ✅ Eventos do catálogo associados

## Bloco 4 — Governança e contingência (itens 12-15)

### 12. Existe plano de contingência documentado
- ✅ Pelo menos 1 BM reserva pronta
- ✅ Fluxo de migração escrito
- ✅ Responsável definido

### 13. Backup de criativos e estruturas
- ✅ Criativos salvos fora da plataforma
- ✅ Configurações de campanha exportadas
- ✅ Públicos salvos

### 14. Acessos de fornecedores externos limitados
- ✅ Apenas o necessário
- ✅ Revisão trimestral
- ✅ Logs de atividade monitorados

### 15. Histórico de bloqueios mapeado
- ✅ Documentação de cada incidente
- ✅ Padrões identificados
- ✅ Aprendizados aplicados

## Bloco 5 — Saúde técnica (itens 16-18)

### 16. Fingerprint estável
- ✅ Mesmo IP residencial coerente com país
- ✅ Mesmo dispositivo principal
- ✅ Sem mudanças bruscas no último ano

### 17. Pagamento limpo
- ✅ Cartão empresarial alinhado ao CNPJ
- ✅ Histórico sem chargebacks
- ✅ Pagamentos em dia

### 18. Trust Score percebido alto
- ✅ Sem revisões frequentes
- ✅ Limites crescendo organicamente
- ✅ Aprovações de criativo rápidas

## Como usar o checklist

1. Faça a auditoria **uma vez por trimestre**
2. Mantenha planilha viva com status de cada item
3. Trate qualquer "não" como prioridade técnica
4. Documente incidentes para aprender padrões

## Quando contratar especialista

Se você marcou "não" em **5+ itens** ou opera **R$ 30k+/dia**, [uma consultoria técnica](/consultoria-meta-ads) acelera a correção. Para reforço de contingência, conheça [a estrutura completa para alto volume](/contingencia-meta-ads).

Veja também: [como escolher fornecedor de BM verificada](/blog/como-escolher-fornecedor-bm-verificada).
`,
  },
  {
    slug: "bloqueio-conta-nova-facebook-ads-7-motivos",
    title: "Por que contas novas de Facebook Ads bloqueiam tão rápido: 7 motivos reais",
    description: "Os 7 motivos técnicos mais comuns pelos quais contas novas de Facebook Ads e Meta bloqueiam nos primeiros dias e como evitar cada um deles.",
    keywords: ["bloqueio conta nova facebook ads", "conta nova bloqueada", "facebook bloqueia conta nova", "porque conta de anúncio bloqueia", "conta nova meta ads bloqueada", "evitar bloqueio conta nova"],
    category: "Topo de funil",
    readingTime: "7 min",
    publishedAt: "2026-05-16",
    ogImage: "/og/og-bloqueio-conta-nova.jpg",
    content: `
Criou conta de Facebook Ads ontem e ela já bloqueou? Não é azar — é padrão. Conta nova é tratada com desconfiança máxima pelo Meta, e existem 7 motivos técnicos que explicam quase tudo.

## 1. Trust Score inicial é zero

O Meta começa cada conta nova com pontuação de risco alta. Qualquer comportamento "fora do esperado para iniciante" dispara revisão automática.

**Como evitar:** trate as primeiras 2 semanas como warm-up real, não como produção.

## 2. Fingerprint inconsistente

Logar de múltiplos dispositivos, IPs ou países nas primeiras horas é o sinal de alarme mais forte.

**Erros típicos:**
- Criar BM em casa, configurar no escritório, anunciar do celular
- Usar VPN de país diferente do anunciante
- Compartilhar acesso com vários colaboradores cedo demais

**Como evitar:** mantenha **um único fingerprint** (IP residencial + dispositivo + navegador) nas primeiras 4 semanas.

## 3. Pagamento sem histórico

Cartão recém-criado, virtual ou pré-pago em conta nova = bandeira vermelha.

**Como evitar:** use cartão da empresa com **histórico de pelo menos 6 meses** de uso anterior, mesmo que em outras plataformas.

## 4. Aumento brusco de gasto

Subir de R$ 50/dia para R$ 2.000/dia em 48h é o gatilho clássico de bloqueio.

**Curva saudável de warm-up:**
- Semana 1: R$ 30-50/dia
- Semana 2: R$ 100-200/dia
- Semana 3: R$ 300-500/dia
- Semana 4+: crescimento de até 50% por semana

## 5. Criativo agressivo no início

Conta nova roda criativo conservador. Começar com promessas exageradas, headlines polêmicas ou claims de saúde/finanças = bloqueio quase certo.

**Como evitar:** primeiros 14 dias com criativo institucional ou genérico, mesmo que converta menos. Depois sim, escala criativo agressivo.

## 6. BM não verificada com nicho de risco

Setores como dropshipping, suplementos, finanças, infoproduto e adulto sofrem revisão muito mais rigorosa em BM não verificada.

**Como evitar:** se você está nesses nichos, **comece já com BM verificada** ou pague o preço do bloqueio repetido.

## 7. Página de destino fora de conformidade

Antes de aprovar o anúncio, o Meta varre sua landing. Problemas comuns:
- Pop-up agressivo
- Falta de política de privacidade
- Termos proibidos no copy
- Redirecionamento suspeito
- Ausência de informações de contato

**Como evitar:** faça **auditoria de landing** antes de subir campanha — não depois.

## O ciclo vicioso da conta nova

| Dia | O que costuma acontecer |
|---|---|
| 1 | Cria conta, sobe gasto |
| 2 | Aprovação de anúncio com warning |
| 3 | Pico de entrega, gasto sobe |
| 4 | Conta entra em revisão |
| 5 | Bloqueio temporário |
| 7 | Cria nova conta na mesma BM |
| 8 | BM cai em conjunto |

Esse ciclo destrói **dezenas de operações novas por mês** no Brasil.

## Como quebrar o ciclo

1. **Paciência no warm-up** (não há atalho)
2. **BM verificada desde o dia 1** (ou histórico maduro)
3. **Fingerprint estável** (mesmo IP, dispositivo)
4. **Pagamento com histórico** (não cartão recém-emitido)
5. **Plano de contingência** (1 BM reserva já pronta)

## Quando usar contingência ao invés de conta nova

Se você precisa **escalar rápido** e não tem 30 dias para warm-up, comprar ativos com histórico maduro é matemática:

- Custo de 1 BM verificada premium: R$ 5k–R$ 10k
- Custo de 30 dias de warm-up: 30 dias de leilão perdido + risco de bloqueio

Para a maioria das operações sérias, **ativo pronto vence warm-up**.

## Próximos passos

Para evitar o ciclo do bloqueio recorrente, [conheça a estrutura de contingência para Meta e Facebook Ads](/contingencia-meta-ads) ou [adquira BM Verificada com histórico real](/bm-verificada).

Veja também: [como recuperar conta de anúncio bloqueada](/blog/recuperar-conta-anuncio-bloqueada-facebook-ads).
`,
  },
];


export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
