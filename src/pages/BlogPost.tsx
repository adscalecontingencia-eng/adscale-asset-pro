import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import { WHATSAPP_URL } from "@/lib/whatsapp";

/** Tiny markdown renderer — handles h2/h3, lists, tables, blockquotes, paragraphs, bold. */
const renderMarkdown = (md: string) => {
  const lines = md.trim().split("\n");
  const blocks: JSX.Element[] = [];
  let i = 0;

  const inline = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((p, idx) =>
      p.startsWith("**") && p.endsWith("**") ? (
        <strong key={idx} className="text-foreground font-semibold">
          {p.slice(2, -2)}
        </strong>
      ) : (
        <span key={idx}>{p}</span>
      )
    );
  };

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={i} className="font-display text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
          {line.slice(3)}
        </h2>
      );
      i++;
    } else if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={i} className="font-display text-xl font-bold text-foreground mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
      i++;
    } else if (line.startsWith("> ")) {
      blocks.push(
        <blockquote key={i} className="border-l-4 border-primary bg-primary/5 px-5 py-3 my-6 rounded-r-lg italic text-foreground/90">
          {inline(line.slice(2))}
        </blockquote>
      );
      i++;
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 space-y-2 my-4 text-muted-foreground">
          {items.map((it, idx) => (
            <li key={idx}>{inline(it)}</li>
          ))}
        </ul>
      );
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push(
        <ol key={`ol-${i}`} className="list-decimal pl-6 space-y-2 my-4 text-muted-foreground">
          {items.map((it, idx) => (
            <li key={idx}>{inline(it)}</li>
          ))}
        </ol>
      );
    } else if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      if (tableLines.length >= 2) {
        const headers = tableLines[0].split("|").slice(1, -1).map((c) => c.trim());
        const rows = tableLines.slice(2).map((r) => r.split("|").slice(1, -1).map((c) => c.trim()));
        blocks.push(
          <div key={`tbl-${i}`} className="overflow-x-auto my-6">
            <table className="w-full border border-border/50 rounded-lg overflow-hidden text-sm">
              <thead className="bg-muted/30">
                <tr>
                  {headers.map((h, idx) => (
                    <th key={idx} className="px-4 py-3 text-left font-semibold text-foreground">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rIdx) => (
                  <tr key={rIdx} className="border-t border-border/50">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 text-muted-foreground">
                        {inline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    } else {
      blocks.push(
        <p key={i} className="text-muted-foreground leading-relaxed my-4">
          {inline(line)}
        </p>
      );
      i++;
    }
  }

  return blocks;
};

const extractFaqs = (content: string) => {
  const questions = content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("## ") && /\?|como|por que|o que|quando|qual/i.test(line));

  return questions.slice(0, 4).map((question) => ({
    "@type": "Question",
    name: question.replace(/^##\s*/, ""),
    acceptedAnswer: {
      "@type": "Answer",
      text: "Veja o artigo completo para a explicação detalhada, contexto técnico e recomendações práticas para operações de Meta Ads.",
    },
  }));
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const faqEntities = extractFaqs(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: { "@type": "Organization", name: "AD Scale" },
        publisher: { "@type": "Organization", name: "AD Scale" },
        keywords: post.keywords.join(", "),
        image: `https://adscale.app${post.ogImage}`,
        mainEntityOfPage: `https://adscale.app/blog/${post.slug}`,
      },
      ...(faqEntities.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqEntities,
            },
          ]
        : []),
    ],
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      <SEO
        title={`${post.title} | AD Scale`}
        description={post.description}
        keywords={post.keywords}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        publishedAt={post.publishedAt}
        image={post.ogImage}
        jsonLd={jsonLd}
      />
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li>/</li>
              <li className="text-foreground">{post.title}</li>
            </ol>
          </nav>

          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o blog
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
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
              <span className="text-muted-foreground">Atualizado em {new Date(post.publishedAt).toLocaleDateString("pt-BR")}</span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {post.description}
            </p>
            <img
              src={post.ogImage}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full rounded-lg border border-border/50"
            />
          </header>

          <div className="prose-content">{renderMarkdown(post.content)}</div>

          <section aria-labelledby="cta-links-heading" className="mt-12 border border-border/50 bg-card/60 rounded-lg p-6">
            <h2 id="cta-links-heading" className="font-display text-xl font-bold mb-4">Leituras complementares</h2>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/blog/o-que-e-business-manager-verificada-meta" className="text-primary hover:underline">
                Entenda o papel da BM verificada na estabilidade da operação
              </Link>
              <Link to="/blog/trust-score-meta-ads-como-funciona" className="text-primary hover:underline">
                Veja como o Trust Score impacta escala e bloqueios
              </Link>
              <Link to="/blog/arquitetura-contingencia-meta-ads-operacao-alto-volume" className="text-primary hover:underline">
                Conheça a arquitetura de contingência para operações de alto volume
              </Link>
            </div>
          </section>

          <div className="mt-16 p-8 rounded-lg border border-primary/30 bg-primary/5 text-center">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-3">
              Precisa de ativos de contingência reais para sua operação?
            </h2>
            <p className="text-muted-foreground mb-6">
              BMs Verificadas, BMs antigas, perfis e páginas com Trust Score alto. Curadoria 1 a 1.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-8 py-3.5 rounded-lg transition-all hover:scale-105"
            >
              Falar com o time
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <section className="mt-16" aria-labelledby="continue-lendo-heading">
            <h2 id="continue-lendo-heading" className="font-display text-xl font-bold mb-6">Continue lendo</h2>
            <div className="grid gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group block p-5 rounded-lg border border-border/50 bg-card/60 hover:border-primary/40 transition-all"
                >
                  <span className="text-xs text-primary font-medium">{r.category}</span>
                  <h3 className="font-semibold text-foreground mt-1 mb-1 group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{r.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default BlogPost;
