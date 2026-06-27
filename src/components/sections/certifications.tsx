"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Award, X } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated";
import {
  certifications,
  certificationCategories,
  type Certification,
} from "@/lib/content";
import { cn } from "@/lib/utils";

export function Certifications() {
  const [activeCat, setActiveCat] = React.useState<string>("All");
  const [query, setQuery] = React.useState("");
  const [selected, setSelected] = React.useState<Certification | null>(null);

  const filtered = React.useMemo(() => {
    return certifications.filter((c) => {
      const catOk = activeCat === "All" || c.category === activeCat;
      const qOk =
        !query ||
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.issuer.toLowerCase().includes(query.toLowerCase());
      return catOk && qOk;
    });
  }, [activeCat, query]);

  return (
    <section id="certifications" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="100+ professional development courses — and counting."
          description="Every certification below is documented and verifiable. The most recent ones are from November 2025. Use the filters to explore by domain."
        />

        {/* Highlighted certifications — featured row */}
        <AnimatedSection className="mt-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications
              .filter((c) => c.highlighted)
              .map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelected(c)}
                  className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-gold/5 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" aria-hidden />
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-semibold text-foreground">
                        {c.name}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {c.issuer} · {c.year}
                      </div>
                      <div className="mt-2 inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                        {c.category}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </AnimatedSection>

        {/* Filter bar */}
        <AnimatedSection className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-1.5">
            {certificationCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                  activeCat === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search certifications..."
              className="h-10 w-full rounded-full border border-border bg-card pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <motion.button
                key={c.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: (i % 8) * 0.02 }}
                onClick={() => setSelected(c)}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    {c.category}
                  </span>
                  <span className="text-[10px] text-muted-foreground">{c.year}</span>
                </div>
                <div className="mt-2.5 font-display text-sm font-semibold leading-snug text-foreground">
                  {c.name}
                </div>
                <div className="mt-1.5 text-xs text-muted-foreground">{c.issuer}</div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            No certifications match your filter.
          </div>
        )}

        <div className="mt-6 text-xs text-muted-foreground">
          Showing {filtered.length} of {certifications.length} certifications.
          The full collection exceeds 100 — these are the ones most relevant to
          international Physics teaching roles.
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            >
              <div className="relative bg-gradient-to-br from-primary/10 via-card to-gold/10 p-6">
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-background/70 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
                  <Award className="h-6 w-6" />
                </div>
                <div className="mt-4 inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                  {selected.category}
                </div>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                  {selected.name}
                </h3>
                {selected.nameAr && (
                  <p className="mt-1 text-sm text-muted-foreground" dir="rtl">
                    {selected.nameAr}
                  </p>
                )}
              </div>
              <div className="space-y-3 p-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Issued by
                  </div>
                  <div className="mt-1 text-sm text-foreground">{selected.issuer}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Year
                  </div>
                  <div className="mt-1 text-sm text-foreground">
                    {selected.year === "—" ? "On record (year not specified)" : selected.year}
                  </div>
                </div>
                <div className="rounded-lg border border-dashed border-border bg-muted/30 p-3 text-xs text-muted-foreground">
                  Full certificate scan available on request. The original PDF
                  collection contains 100+ scanned certificates across all
                  categories shown here.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
