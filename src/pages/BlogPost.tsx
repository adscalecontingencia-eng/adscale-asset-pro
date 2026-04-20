import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPosts from "@/components/RelatedPosts";
import TableOfContents, { extractTocFromMarkdown } from "@/components/TableOfContents";
import { getPostBySlug } from "@/data/blogPosts";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import pedroPhoto from "@/assets/pedro-lucas-fundador.jpg";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

/** Markdown renderer — handles h2/h3 (with anchor IDs), lists, tables, blockquotes, paragraphs, bold. */
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
      ),
    );
  };

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      const text = line.slice(3);
      blocks.push(
        <h2
          key={i}
          id={slugify(text)}
          className="font-display text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 scroll-mt-24"
        >
          {text}
        </h2>,
      );
      i++;
    } else if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={i} className="font-display text-xl font-bold text-foreground mt-8 mb-3">
          {line.slice(4)}
        </h3>,
      );
      i++;
    } else if (line.startsWith("> ")) {
      blocks.push(
        <blockquote
          key={i}
          className="border-l-4 border-primary bg-primary/5 px-5 py-3 my-6 rounded-r-lg italic text-foreground/90"
        >
          {inline(line.slice(2))}
        </blockquote>,
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
        </ul>,
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
        </ol>,
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
          </div>,
        );
      }
    } else {
      blocks.push(
        <p key={i} className="text-muted-foreground leading-relaxed my-4">
          {inline(line)}
        </p>,
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
      text: "Veja o artigo completo para a explicação detalhada, contexto técnico e recomendações práticas para operações de Meta Ads e Facebook Ads.",
    },
  }));
};

const isHowToPost = (slug: string) =>
  /(passo-a-passo|como-|recuperar|configurar|warm-up|checklist|auditoria)/.test(slug);

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const toc = extractTocFromMarkdown(post.content);
  const faqEntities = extractFaqs(post.content);
  const dateModified = post.publishedAt; // future: editable per post
  const formattedPublished = new Date(post.publishedAt).toLocaleDateString("pt-BR");
  const formattedModified = new Date(dateModified).toLocaleDateString("pt-BR");

  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.category, href: `/blog?funil=${post.category === "Topo de funil" ? "tof" : post.category === "Meio de funil" ? "mof" : "bof"}` },
    { label: post.title },
  ];

  const articleSchema: Record<string, unknown> = {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: "Pedro Lucas",
      url: "https://adscalecontingencia.com/autor/pedro-lucas",
      image: "https://adscalecontingencia.com/autores/pedro-lucas.jpg",
    },
    publisher: {
      "@type": "Organization",
      name: "AD Scale",
      logo: {
        "@type": "ImageObject",
        url: "https://adscalecontingencia.com/og/og-default.jpg",
      },
    },
    keywords: post.keywords.join(", "),
    image: {
      "@type": "ImageObject",
      url: `https://adscalecontingencia.com${post.ogImage}`,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://adscalecontingencia.com/blog/${post.slug}`,
    },
  };

  const graph: Record<string, unknown>[] = [articleSchema];
  if (faqEntities.length) {
    graph.push({ "@type": "FAQPage", mainEntity: faqEntities });
  }
  if (isHowToPost(post.slug) && toc.length >= 3) {
    graph.push({
      "@type": "HowTo",
      name: post.title,
      description: post.description,
      step: toc.slice(0, 8).map((t, idx) => ({
        "@type": "HowToStep",
        position: idx + 1,
        name: t.label,
        url: `https://adscalecontingencia.com/blog/${post.slug}#${t.id}`,
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

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
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o blog
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{post.category}</span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="w-3 h-3" />
                Publicado em {formattedPublished}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <RefreshCw className="w-3 h-3" />
                Atualizado em {formattedModified}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">{post.description}</p>

            <Link
              to="/autor/pedro-lucas"
              className="inline-flex items-center gap-3 mb-6 group"
              aria-label="Ver perfil do autor Pedro Lucas"
            >
              <img
                src={pedroPhoto}
                alt="Pedro Lucas, fundador da AD Scale"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover border border-border/50"
                loading="lazy"
              />
              <span className="text-sm">
                <span className="block text-foreground font-medium group-hover:text-primary transition-colors">
                  Por Pedro Lucas
                </span>
                <span className="block text-xs text-muted-foreground">Fundador da AD Scale</span>
              </span>
            </Link>

            <img
              src={post.ogImage}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full rounded-lg border border-border/50"
              loading="eager"
            />
          </header>

          <TableOfContents items={toc} />

          <div className="prose-content">{renderMarkdown(post.content)}</div>

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

          <RelatedPosts currentSlug={post.slug} category={post.category} />
        </div>
      </article>

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default BlogPost;
