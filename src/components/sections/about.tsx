"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated";
import { Icon } from "@/components/icon";
import { aboutBio, strengths, values, workApproach } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="A teacher who never stopped being a student."
          description="Twenty-eight years into this career, I still redesign my own practice every term. Here is what I have learned about teaching Physics — and about the people I teach it to."
        />

        {/* Bio */}
        <AnimatedSection className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.75]">
            {aboutBio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={i === 0 ? "text-foreground" : ""}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* side cards */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Personal Mission
              </div>
              <p className="mt-3 font-display text-lg leading-snug text-foreground">
                To make Physics feel less like a subject and more like a way of
                seeing the world — for every student I teach.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Signature Quote
              </div>
              <p className="mt-3 font-display text-lg leading-snug text-foreground">
                &ldquo;The lesson is not a performance by the teacher; it is an
                experience designed for the learner.&rdquo;
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-gold/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Vision
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground">
                A classroom where rigorous Physics, modern technology, and human
                respect meet — and where every student leaves a little more
                curious than they arrived.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Strengths */}
        <div className="mt-20">
          <AnimatedSection className="mb-8">
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What I bring to a school
            </h3>
            <p className="mt-2 text-muted-foreground">
              The combination of subject mastery, bilingual delivery, and
              technology fluency is rare — and it is the product of decades of
              deliberate practice.
            </p>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s, i) => (
              <AnimatedSection
                key={s.title}
                delay={i * 0.05}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md sm:p-6"
              >
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" aria-hidden />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-semibold text-foreground">
                      {s.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Work approach */}
        <div className="mt-20">
          <AnimatedSection className="mb-8">
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How I work — a four-step rhythm
            </h3>
            <p className="mt-2 text-muted-foreground">
              The same loop, repeated every unit, every term, every year. It is
              the discipline behind the experience.
            </p>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workApproach.map((step, i) => (
              <AnimatedSection
                key={step.step}
                delay={i * 0.05}
                className="relative rounded-2xl border border-border bg-card p-5 sm:p-6"
              >
                <div className="font-display text-5xl font-extrabold text-primary/15">
                  {step.step}
                </div>
                <h4 className="mt-2 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <AnimatedSection className="mb-8">
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Professional values
            </h3>
            <p className="mt-2 text-muted-foreground">
              The non-negotiables. Everything else is a design choice; these are
              not.
            </p>
          </AnimatedSection>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <AnimatedSection
                key={v.title}
                delay={i * 0.04}
                className="group rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/40 hover:bg-card"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon name={v.icon} className="h-4 w-4" />
                  </div>
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    {v.title}
                  </h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
