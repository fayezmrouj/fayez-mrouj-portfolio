"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated";
import { Icon } from "@/components/icon";
import { galleryCategories, testimonials } from "@/lib/content";
import { cn } from "@/lib/utils";

export function GalleryTestimonials() {
  const [activeT, setActiveT] = React.useState(0);
  const [dir, setDir] = React.useState(0);

  const go = (d: number) => {
    setDir(d);
    setActiveT((p) => (p + d + testimonials.length) % testimonials.length);
  };

  return (
    <section id="gallery" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Gallery */}
        <SectionHeading
          eyebrow="Gallery"
          title="A window into the classroom."
          description="Placeholders ready for the moments that define a teaching career — lab sessions, school events, workshops, and recognition. Captions will be added as photographs become available."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryCategories.map((g, i) => (
            <AnimatedSection
              key={g.title}
              delay={(i % 4) * 0.04}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted/60 to-card"
            >
              {/* placeholder pattern */}
              <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden />

              <div className="relative flex h-full flex-col justify-between p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/80 text-primary backdrop-blur ring-1 ring-primary/15 transition-transform group-hover:scale-110">
                  <Icon name={g.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {g.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{g.body}</p>
                  <div className="mt-2 inline-flex items-center gap-1 rounded-md bg-background/70 px-2 py-0.5 text-[10px] font-medium text-muted-foreground backdrop-blur">
                    Photos to be added
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="Testimonials"
            title="What others say — soon to be filled."
            description="Recommendations from principals, supervisors, colleagues, students, and parents will appear here. The structure is ready; the words will come from those who know my work best."
          />

          <AnimatedSection className="mt-12">
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute -left-3 -top-3 h-16 w-16 rounded-full bg-primary/10 blur-2xl" aria-hidden />
              <div className="absolute -right-3 -bottom-3 h-16 w-16 rounded-full bg-gold/10 blur-2xl" aria-hidden />

              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
                <Quote className="h-10 w-10 text-primary/20" />

                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={activeT}
                    custom={dir}
                    initial={{ opacity: 0, x: dir === 0 ? 0 : dir * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dir * -40 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <p className="mt-4 font-display text-lg leading-relaxed text-foreground sm:text-xl sm:leading-relaxed">
                      {testimonials[activeT].quote}
                    </p>
                    <div className="mt-6">
                      <div className="text-sm font-semibold text-foreground">
                        {testimonials[activeT].name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonials[activeT].role}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setDir(i > activeT ? 1 : -1);
                          setActiveT(i);
                        }}
                        aria-label={`Testimonial ${i + 1}`}
                        className={cn(
                          "h-1.5 rounded-full transition-all",
                          i === activeT
                            ? "w-8 bg-primary"
                            : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        )}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => go(-1)}
                      aria-label="Previous testimonial"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition-colors hover:border-primary/40 hover:bg-accent"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => go(1)}
                      aria-label="Next testimonial"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition-colors hover:border-primary/40 hover:bg-accent"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
