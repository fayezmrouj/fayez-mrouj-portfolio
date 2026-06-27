"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Youtube, Facebook } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated";
import { Icon } from "@/components/icon";
import { innovationPillars, technologySkills, profile } from "@/lib/content";

export function Innovation() {
  return (
    <section
      id="innovation"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* distinctive dark gradient background — this is the "wow" section */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/8 via-background to-gold/8" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" aria-hidden />
      <div className="absolute -top-24 left-1/2 -z-10 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Educational Innovation"
          title="The frontier of teaching — and I am on it."
          description="Most Physics teachers with 28 years of experience rest on the tradition that made them. I have spent the last five years mastering AI, smart learning, hybrid classrooms, and digital assessment — because that is where teaching is going."
        />

        {/* Hero callout */}
        <AnimatedSection className="mt-12">
          <div className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-6 shadow-lg transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl sm:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-12 translate-x-12 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" aria-hidden />
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary transition-transform group-hover:scale-105">
                  <Sparkles className="h-3.5 w-3.5" />
                  Differentiator
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Certified in Prompt Engineering &amp; ChatGPT for Smart Learning.
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  I am one of the few senior Physics educators who has formally
                  certified in AI-in-education tooling. I use generative AI
                  daily — for lesson scaffolding, differentiation, formative
                  feedback, and assessment design — and I mentor colleagues on
                  doing the same responsibly.
                </p>
              </div>
              <button
                onClick={() =>
                  document
                    .getElementById("certifications")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group/btn inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:brightness-105 sm:self-center"
              >
                See the certifications
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured: Interactive Physics Platform — Fayez's own product */}
        <AnimatedSection delay={0.1} className="mt-6">
          <div className="group relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/5 via-card to-primary/5 p-6 shadow-lg transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl sm:p-8">
            <div className="absolute right-0 top-0 h-48 w-48 -translate-y-12 translate-x-12 rounded-full bg-gold/15 blur-3xl transition-all group-hover:bg-gold/25" aria-hidden />
            <div className="absolute left-0 bottom-0 h-40 w-40 translate-y-12 -translate-x-12 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" aria-hidden />
            <div className="relative grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold transition-transform group-hover:scale-105">
                  <Sparkles className="h-3.5 w-3.5" />
                  Flagship Project · Built by Fayez
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Interactive Physics Platform
                  <span className="ml-2 text-base font-normal text-muted-foreground" dir="rtl">منصة الفيزياء التفاعلية</span>
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  A full interactive learning platform I designed and built for
                  Physics students in Grades 9 and 10 — aligned with the official
                  curriculum. Students study units and lessons, explore formulas
                  and worked examples, and test themselves with interactive
                  quizzes. It is the proof that I do not just teach Physics — I
                  build for it.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded-md border border-gold/20 bg-gold/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">Interactive</span>
                  <span className="rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">Curriculum-Aligned</span>
                  <span className="rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">Grades 9–10</span>
                  <span className="rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">Quizzes · Examples · Units</span>
                </div>
              </div>
              <a
                href={profile.social.platform}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-2 self-start rounded-full bg-gold px-5 py-2.5 text-sm font-semibold shadow-md transition-all hover:shadow-lg hover:brightness-105 sm:self-center"
                style={{ color: "var(--background)" }}
              >
                Visit Platform
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Educational Content Channels — YouTube + Facebook */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* YouTube Channel */}
          <AnimatedSection delay={0.05}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-red-500/40 hover:shadow-lg">
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-red-500/10 blur-3xl transition-all group-hover:bg-red-500/20" aria-hidden />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 ring-1 ring-red-500/15 transition-transform group-hover:scale-110">
                  <Youtube className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-red-500/20 bg-red-500/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-red-500">
                  Video Lessons
                </span>
              </div>

              <h3 className="relative mt-4 font-display text-lg font-bold text-foreground">
                Physics &amp; Science YouTube
              </h3>
              <p className="relative mt-1 text-xs text-muted-foreground">@FayezMrouj</p>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                A dedicated YouTube channel where I publish Physics and Science
                explainer videos — making difficult concepts visible, step by
                step, for students and fellow educators.
              </p>

              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="rounded-md border border-red-500/15 bg-red-500/5 px-2 py-0.5 text-[10px] font-medium text-red-500">Physics</span>
                <span className="rounded-md border border-red-500/15 bg-red-500/5 px-2 py-0.5 text-[10px] font-medium text-red-500">Science</span>
                <span className="rounded-md border border-red-500/15 bg-red-500/5 px-2 py-0.5 text-[10px] font-medium text-red-500">Bilingual</span>
              </div>

              <div className="relative mt-5">
                <a
                  href={profile.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-105"
                >
                  Visit Channel
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Facebook Page */}
          <AnimatedSection delay={0.1}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg">
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-blue-500/10 blur-3xl transition-all group-hover:bg-blue-500/20" aria-hidden />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 ring-1 ring-blue-500/15 transition-transform group-hover:scale-110">
                  <Facebook className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-600">
                  Community
                </span>
              </div>

              <h3 className="relative mt-4 font-display text-lg font-bold text-foreground">
                Physics &amp; Math Page
              </h3>
              <p className="relative mt-1 text-xs text-muted-foreground">/PhyAndMath</p>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                A Facebook page dedicated to Physics and Mathematics — sharing
                bite-size explanations, problem-solving tips, and classroom
                resources with students, parents, and the wider learning
                community.
              </p>

              <div className="relative mt-4 flex flex-wrap gap-1.5">
                <span className="rounded-md border border-blue-500/15 bg-blue-500/5 px-2 py-0.5 text-[10px] font-medium text-blue-600">Physics</span>
                <span className="rounded-md border border-blue-500/15 bg-blue-500/5 px-2 py-0.5 text-[10px] font-medium text-blue-600">Mathematics</span>
                <span className="rounded-md border border-blue-500/15 bg-blue-500/5 px-2 py-0.5 text-[10px] font-medium text-blue-600">Resources</span>
              </div>

              <div className="relative mt-5">
                <a
                  href={profile.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-105"
                >
                  Visit Page
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Innovation pillars */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {innovationPillars.map((p, i) => (
            <AnimatedSection
              key={p.title}
              delay={(i % 4) * 0.05}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-6"
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-gold/10 blur-2xl transition-all group-hover:bg-gold/20" aria-hidden />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-gold/15 text-primary ring-1 ring-primary/15 transition-transform group-hover:scale-110">
                  <Icon name={p.icon} className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-primary/15 bg-primary/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Technology skills */}
        <div className="mt-20">
          <AnimatedSection className="mb-8 max-w-2xl">
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Technology I use daily
            </h3>
            <p className="mt-2 text-muted-foreground">
              Not a list of buzzwords — these are the tools that show up in my
              lesson plans, my assessments, and my students&apos; work every
              week.
            </p>
          </AnimatedSection>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {technologySkills.map((t, i) => (
              <AnimatedSection
                key={t.title}
                delay={(i % 5) * 0.03}
                className="group rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={t.icon} className="h-4 w-4" />
                </div>
                <h4 className="mt-3 font-display text-sm font-semibold text-foreground">
                  {t.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
