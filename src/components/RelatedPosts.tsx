import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

interface RelatedPostsProps {
  currentSlug: string;
  category?: BlogPost["category"];
  limit?: number;
}

const RelatedPosts = ({ currentSlug, category, limit = 3 }: RelatedPostsProps) => {
  const sameCategory = blogPosts.filter((p) => p.slug !== currentSlug && (!category || p.category === category));
  const fallback = blogPosts.filter((p) => p.slug !== currentSlug);
  const pool = sameCategory.length >= limit ? sameCategory : [...sameCategory, ...fallback.filter((p) => !sameCategory.includes(p))];
  const related = pool.slice(0, limit);

  if (related.length === 0) return null;

  return (
    <section className="mt-16" aria-labelledby="related-posts-heading">
      <h2 id="related-posts-heading" className="font-display text-2xl font-bold mb-2">
        Artigos relacionados
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        Continue aprofundando o tema com leituras conectadas.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {related.map((r) => (
          <Link
            key={r.slug}
            to={`/blog/${r.slug}`}
            className="group flex flex-col p-5 rounded-lg border border-border/50 bg-card/60 hover:border-primary/40 transition-all"
          >
            <span className="text-xs text-primary font-medium mb-2">{r.category}</span>
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
              {r.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">{r.description}</p>
            <span className="inline-flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {r.readingTime}
              </span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
