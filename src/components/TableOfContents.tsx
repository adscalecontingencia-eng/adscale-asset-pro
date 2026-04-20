import { useEffect, useMemo, useState } from "react";

interface TocItem {
  id: string;
  label: string;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const extractTocFromMarkdown = (md: string): TocItem[] =>
  md
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const label = line.slice(3).trim();
      return { id: slugify(label), label };
    });

interface TableOfContentsProps {
  items: TocItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");

  const ids = useMemo(() => items.map((i) => i.id), [items]);

  useEffect(() => {
    if (ids.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  if (items.length < 3) return null;

  return (
    <nav
      aria-label="Sumário do artigo"
      className="my-8 p-5 rounded-lg border border-border/50 bg-card/40 backdrop-blur-sm"
    >
      <h2 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
        Neste artigo
      </h2>
      <ol className="space-y-2 text-sm">
        {items.map((item, idx) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`flex gap-2 leading-relaxed transition-colors ${
                activeId === item.id ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="opacity-60">{String(idx + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;
