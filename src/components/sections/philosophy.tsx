"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated";
import { Icon } from "@/components/icon";
import { philosophyPillars } from "@/lib/content";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Teaching Philosophy"
          title="Nine convictions that shape every lesson I teach."
          description="This is not theory. This is the operating system that runs underneath every lesson plan, every assessment, and every conversation with a student."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {philosophyPillars.map((p, i) => (
            <AnimatedSection
              key={p.title}
              delay={(i % 3) * 0.05}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-primary/5 blur-3xl transition-all group-hover:bg-primary/10" aria-hidden />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-transform group-hover:scale-110">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </div>
                  <div className="font-display text-sm font-semibold uppercase tracking-wider text-primary/70">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* closing quote */}
        <AnimatedSection className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-gold/5 p-8 sm:p-12">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
            <div className="absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-gold/10 blur-3xl" aria-hidden />
            <div className="relative mx-auto max-w-3xl text-center">
              <div className="font-display text-5xl font-bold text-primary/20">&ldquo;</div>
              <p className="mt-2 font-display text-xl font-semibold leading-relaxed text-foreground sm:text-2xl sm:leading-relaxed">
                Physics is not a body of facts; it is a method. I want students
                to leave my class able to form a hypothesis, design a test,
                interpret data, and revise their thinking — whatever field they
                go into.
              </p>
              <div className="mt-5 text-sm font-medium text-muted-foreground">
                — {`Fayez Ahmad Mrouj`}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
