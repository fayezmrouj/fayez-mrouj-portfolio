"use client";

import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated";
import { Icon } from "@/components/icon";
import { resources } from "@/lib/content";

export function Resources() {
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
      </div>
    </section>
  );
}
