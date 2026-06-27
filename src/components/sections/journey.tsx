"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated";
import { journey } from "@/lib/content";

export function Journey() {
  // sort chronologically (startYear asc); current role last
  const sorted = [...journey].sort((a, b) => a.startYear - b.startYear);

  return (
    <section id="journey" className="relative py-20 sm:py-28">
      {/* soft background */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Educational Journey"
          title="From a Jordanian classroom in 1996 to the smart-learning era."
          description="Six chapters across two countries and five institutions. Each one taught me something I still carry into the classroom today."
        />

        <div className="relative mt-16">
          {/* vertical line */}
          <div
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden
          />

          <div className="space-y-8 sm:space-y-12">
            {sorted.map((entry, idx) => {
              const isLeft = idx % 2 === 0;
              const isCurrent = entry.endYear === null;
              return (
                <AnimatedSection
                  key={entry.id}
                  className="relative pl-12 sm:pl-0"
                >
                  {/* node */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    className="absolute left-4 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-background sm:left-1/2"
                  >
                    <span
                      className={`h-3 w-3 rounded-full ${
                        isCurrent ? "bg-primary ring-4 ring-primary/20" : "bg-primary/60"
                      }`}
                    />
                    {isCurrent && (
                      <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-primary opacity-60" />
                    )}
                  </motion.span>

                  {/* card */}
                  <div
                    className={`sm:grid sm:grid-cols-2 sm:gap-8 ${
                      isLeft ? "" : "sm:[direction:rtl]"
                    }`}
                  >
                    <div className={`sm:[direction:ltr] ${isLeft ? "sm:col-start-1" : "sm:col-start-2"}`}>
                      <motion.article
                        whileHover={{ y: -3 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
                      >
                        <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" aria-hidden />

                        <div className="relative flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {entry.period}
                          </span>
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                              Current
                            </span>
                          )}
                        </div>

                        <h3 className="mt-3 font-display text-lg font-bold text-foreground sm:text-xl">
                          {entry.institution}
                        </h3>
                        {entry.institutionAr && (
                          <p className="mt-0.5 text-sm text-muted-foreground" dir="rtl">
                            {entry.institutionAr}
                          </p>
                        )}

                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                          <span className="font-medium text-foreground">{entry.role}</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {entry.country}
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {entry.summary}
                        </p>

                        <ul className="mt-4 space-y-1.5">
                          {entry.achievements.map((a, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-foreground/80"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                              {a}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {entry.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-border bg-background/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <a
                          href={entry.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary/80"
                        >
                          Visit institution
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </motion.article>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
