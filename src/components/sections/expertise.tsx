"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated";
import { Icon } from "@/components/icon";
import { expertiseAreas, skillGroups, teachingApproach } from "@/lib/content";

function SkillBar({
  name,
  level,
  delay = 0,
}: {
  name: string;
  level: number;
  delay?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-foreground/90">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-primary/70"
        />
      </div>
    </div>
  );
}

export function Expertise() {
  return (
    <section id="expertise" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Areas of Expertise"
          title="Where I have built real depth."
          description="Ten domains where 28 years of teaching, 100+ certifications, and active practice across two national systems have produced genuine mastery."
        />

        {/* Expertise cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {expertiseAreas.map((e, i) => (
            <AnimatedSection
              key={e.title}
              delay={(i % 5) * 0.04}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-transform group-hover:scale-110">
                <Icon name={e.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display text-sm font-semibold text-foreground">
                {e.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {e.body}
              </p>
            </AnimatedSection>
          ))}
        </div>

        {/* Core skills */}
        <div className="mt-20">
          <AnimatedSection className="mb-8 max-w-2xl">
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Core skills, grouped
            </h3>
            <p className="mt-2 text-muted-foreground">
              Self-assessed after 28 years of practice and 100+ professional
              certifications. Numbers reflect confidence in delivery, not just
              exposure.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <AnimatedSection
                key={group.title}
                delay={(i % 3) * 0.05}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Icon name={group.icon} className="h-5 w-5" />
                  </div>
                  <h4 className="font-display text-base font-semibold text-foreground">
                    {group.title}
                  </h4>
                </div>
                <div className="mt-5 space-y-3.5">
                  {group.skills.map((s, j) => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      level={s.level}
                      delay={j * 0.05}
                    />
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Teaching approach */}
        <div className="mt-20">
          <AnimatedSection className="mb-8 max-w-2xl">
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Teaching approach
            </h3>
            <p className="mt-2 text-muted-foreground">
              The eight strategies I draw from — usually in combination, never
              in isolation.
            </p>
          </AnimatedSection>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {teachingApproach.map((a, i) => (
              <AnimatedSection
                key={a.title}
                delay={(i % 4) * 0.04}
                className="group rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/40 hover:bg-card"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={a.icon} className="h-4 w-4" />
                </div>
                <h4 className="mt-3 font-display text-sm font-semibold text-foreground">
                  {a.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
