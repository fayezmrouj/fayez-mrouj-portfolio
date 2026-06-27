"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated";
import { Icon } from "@/components/icon";
import { resources, blogPosts } from "@/lib/content";

export function ResourcesBlog() {
  return (
    <section id="resources" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Educational Resources */}
        <SectionHeading
          eyebrow="Educational Resources"
          title="A growing library — built for the classroom."
          description="The structure is ready. As lesson plans, worksheets, presentations, experiments, and videos are finalised, they will appear here — free for any teacher to use."
          align="left"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((r, i) => (
            <AnimatedSection
              key={r.title}
              delay={(i % 4) * 0.04}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-transform group-hover:scale-110">
                  <Icon name={r.icon} className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  {r.count}
                </span>
              </div>
              <h3 className="mt-3 font-display text-sm font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {r.body}
              </p>
            </AnimatedSection>
          ))}
        </div>

        {/* Blog */}
        <div id="blog" className="mt-24 scroll-mt-24">
          <SectionHeading
            eyebrow="Blog"
            title="Writing about teaching — soon."
            description="The topics below are queued. The first posts will cover making Physics accessible, critical thinking in the classroom, AI in education, and lessons kept from distance learning."
            align="left"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((p, i) => (
              <AnimatedSection
                key={p.title}
                delay={(i % 3) * 0.05}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    {p.tag}
                  </span>
                  <span className="text-[10px] text-muted-foreground">{p.readTime}</span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary opacity-60">
                    Coming soon
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
