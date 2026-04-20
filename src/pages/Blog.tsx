import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

type FunnelFilter = "Todos" | "Topo de funil" | "Meio de funil" | "Fundo de funil";

const FILTERS: { label: string; value: FunnelFilter; short: string; slug: string }[] = [
  { label: "Todos", value: "Todos", short: "Todos", slug: "todos" },
  { label: "Topo de funil (ToF)", value: "Topo de funil", short: "ToF", slug: "tof" },
  { label: "Meio de funil (MoF)", value: "Meio de funil", short: "MoF", slug: "mof" },
  { label: "Fundo de funil (BoF)", value: "Fundo de funil", short: "BoF", slug: "bof" },
];

const SLUG_TO_FILTER: Record<string, FunnelFilter> = FILTERS.reduce(
  (acc, f) => ({ ...acc, [f.slug]: f.value }),
  {} as Record<string, FunnelFilter>,
);

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const funnelParam = (searchParams.get("funil") || "todos").toLowerCase();
  const filter: FunnelFilter = SLUG_TO_FILTER[funnelParam] ?? "Todos";
  const filterSlug = FILTERS.find((f) => f.value === filter)?.slug ?? "todos";

  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const requestedPage = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;

  const sortedPosts = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
    [],
  );

  const filteredPosts = useMemo<BlogPost[]>(
    () => (filter === "Todos" ? sortedPosts : sortedPosts.filter((p) => p.category === filter)),
    [filter, sortedPosts],
  );

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const updateParams = (next: { funnel?: FunnelFilter; page?: number }) => {
    const newParams = new URLSearchParams(searchParams);
    if (next.funnel !== undefined) {
      const slug = FILTERS.find((f) => f.value === next.funnel)?.slug ?? "todos";
      if (slug === "todos") newParams.delete("funil");
      else newParams.set("funil", slug);
      newParams.delete("page");
    }
    if (next.page !== undefined) {
      if (next.page <= 1) newParams.delete("page");
      else newParams.set("page", String(next.page));
    }
    setSearchParams(newParams, { replace: false });
  };

  const goToPage = (p: number) => {
    updateParams({ page: p });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const counts = useMemo(() => {
    const base = { Todos: sortedPosts.length, "Topo de funil": 0, "Meio de funil": 0, "Fundo de funil": 0 };
    sortedPosts.forEach((p) => {
      base[p.category] = (base[p.category] || 0) + 1;
    });
    return base as Record<FunnelFilter, number>;
  }, [sortedPosts]);

  const featuredCategories = [
    {
      title: "Bloqueios e recuperação",
      description: "Guias para reduzir downtime, responder revisões e proteger a operação em picos de risco.",
      href: "/blog/bloqueio-conta-anuncio-meta-como-evitar",
    },
    {
      title: "BM verificada e Trust Score",
      description: "Conteúdo para entender reputação de ativos, verificação e estabilidade de escala.",
      href: "/blog/o-que-e-business-manager-verificada-meta",
    },
    {
      title: "Infraestrutura de contingência",
      description: "Arquitetura, warm-up, fingerprint e ativos aged para sustentar volume no Meta Ads.",
      href: "/blog/arquitetura-contingencia-meta-ads-operacao-alto-volume",
    },
  ];

  // Dynamic SEO: only the unfiltered page 1 is the canonical/indexable version.
  // Filtered or paginated views point canonical back to /blog and are noindex,follow.
  const isCanonicalView = filter === "Todos" && currentPage === 1;
  const filterLabel = filter === "Todos" ? "" : ` — ${filter}`;
  const pageLabel = currentPage > 1 ? ` (página ${currentPage})` : "";
  const seoTitle = isCanonicalView
    ? "Blog Meta Ads: contingência, BM verificada e Trust Score | AD Scale"
    : `Blog AD Scale${filterLabel}${pageLabel} | Meta Ads e Facebook Ads`;
  const seoDescription = isCanonicalView
    ? "Aprenda sobre contingência no Meta Ads, bloqueio de conta, BM verificada, Trust Score, perfis aged, Pixel, CAPI e estrutura de escala."
    : `Artigos de ${filter === "Todos" ? "Meta Ads" : filter.toLowerCase()} sobre contingência, BM verificada, Trust Score e Facebook Ads.${pageLabel}`;
  const canonicalPath = "/blog";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog AD Scale — Contingência e Meta Ads",
    description:
      "Conteúdo técnico sobre ativos de contingência, BMs Verificadas, Trust Score e operação profissional em Meta Ads.",
    url: "https://adscale.app/blog",
    blogPost: sortedPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.publishedAt,
      url: `https://adscale.app/blog/${p.slug}`,
    })),
  };

  // Build a compact pagination range with ellipsis
  const paginationRange = useMemo<(number | "ellipsis")[]>(() => {
    const range: (number | "ellipsis")[] = [];
    const delta = 1;
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    range.push(1);
    if (left > 2) range.push("ellipsis");
    for (let i = left; i <= right; i++) range.push(i);
    if (right < totalPages - 1) range.push("ellipsis");
    if (totalPages > 1) range.push(totalPages);

    return range;
  }, [currentPage, totalPages]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={[
          "blog meta ads",
          "blog facebook ads",
          "contingência meta ads",
          "bloqueio conta meta ads",
          "BM verificada",
          "trust score meta",
          "perfil aged facebook",
          "pixel vs capi",
          "warm up meta ads",
        ]}
        canonical={canonicalPath}
        noIndex={!isCanonicalView}
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <header className="text-center mb-16">
            <div className="badge-pill mb-4 mx-auto">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Conteúdo técnico para gestores de tráfego
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Blog <span className="text-gradient">AD Scale</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conteúdo educacional e estratégico para reduzir bloqueios, elevar o Trust Score e operar com mais
              previsibilidade no Meta Ads.
            </p>
          </header>

          <section aria-labelledby="clusters-heading" className="mb-12">
            <h2 id="clusters-heading" className="font-display text-2xl md:text-3xl font-bold mb-6">
              Comece pelos temas mais buscados
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {featuredCategories.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="border border-border/50 bg-card/60 hover:border-primary/40 transition-colors p-5 rounded-lg"
                >
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="filtros-heading" className="mb-8">
            <h2 id="filtros-heading" className="sr-only">
              Filtrar artigos por etapa do funil
            </h2>
            <div
              role="tablist"
              aria-label="Filtrar por etapa do funil"
              className="flex flex-wrap gap-2 justify-center"
            >
              {FILTERS.map((f) => {
                const active = filter === f.value;
                return (
                  <Button
                    key={f.value}
                    role="tab"
                    aria-selected={active}
                    variant={active ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateParams({ funnel: f.value })}
                    className="rounded-full"
                  >
                    <span className="hidden sm:inline">{f.label}</span>
                    <span className="sm:hidden">{f.short}</span>
                    <span
                      className={`ml-2 inline-flex items-center justify-center min-w-[1.5rem] h-5 px-1.5 rounded-full text-xs ${
                        active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {counts[f.value] ?? 0}
                    </span>
                  </Button>
                );
              })}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Mostrando {paginatedPosts.length} de {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "artigo" : "artigos"}
              {filter !== "Todos" && <> em <span className="text-foreground font-medium">{filter}</span></>}
            </p>
          </section>

          <section aria-labelledby="artigos-heading" className="grid gap-6">
            <h2 id="artigos-heading" className="sr-only">
              Artigos
            </h2>

            {paginatedPosts.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-border/50 rounded-lg">
                <p className="text-muted-foreground">Nenhum artigo encontrado nesta categoria ainda.</p>
              </div>
            ) : (
              paginatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block rounded-lg border border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all overflow-hidden"
                >
                  <div className="grid md:grid-cols-[280px_1fr] gap-0">
                    <div className="aspect-[1200/630] md:aspect-auto md:h-full overflow-hidden bg-background">
                      <img
                        src={post.ogImage}
                        alt={post.title}
                        loading="lazy"
                        width={1200}
                        height={630}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-3 text-xs">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {post.readingTime}
                        </span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{post.description}</p>
                      <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                        Ler artigo completo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </section>

          {totalPages > 1 && (
            <nav aria-label="Paginação dos artigos" className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      aria-disabled={currentPage === 1}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) goToPage(currentPage - 1);
                      }}
                    />
                  </PaginationItem>

                  {paginationRange.map((item, idx) =>
                    item === "ellipsis" ? (
                      <PaginationItem key={`e-${idx}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    ) : (
                      <PaginationItem key={item}>
                        <PaginationLink
                          href="#"
                          isActive={item === currentPage}
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            goToPage(item);
                          }}
                        >
                          {item}
                        </PaginationLink>
                      </PaginationItem>
                    ),
                  )}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      aria-disabled={currentPage === totalPages}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) goToPage(currentPage + 1);
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </nav>
          )}
        </div>
      </main>

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Blog;
