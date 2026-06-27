"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, ExternalLink } from "lucide-react";
import { profile, stats } from "@/lib/content";
import { PhysicsBackground } from "@/components/physics-background";
import { AnimatedCounter } from "@/components/animated";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36 md:pt-40 md:pb-28"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 -z-10 bg-spotlight" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" aria-hidden />
      <PhysicsBackground />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left — text */}
          <div className="flex flex-col items-start gap-6">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Available for international teaching roles
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              <span className="block">Turning Physics into</span>
              <span className="text-gradient">a way of thinking.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I&apos;m {profile.name} — a Physics educator with{" "}
              <strong className="font-semibold text-foreground">
                28+ years
              </strong>{" "}
              of classroom experience across Jordan and the UAE. I help students
              see the physics in everything — and help schools integrate
              technology, AI, and smart learning without losing the human core of
              teaching.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <button
                onClick={() =>
                  document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30 hover:brightness-105"
              >
                View Experience
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-primary/40 hover:bg-accent"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                href={profile.social.platform}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-sm font-semibold text-gold backdrop-blur transition-all hover:border-gold hover:bg-gold/20 hover:shadow-md hover:shadow-gold/20"
              >
                <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                Physics Platform
              </a>
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-primary/40 hover:bg-accent"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                · {profile.languages.join(" · ")}
              </span>
            </motion.div>
          </div>

          {/* Right — portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div className="relative">
              {/* gradient frame */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/30 via-primary/10 to-gold/30 opacity-70 blur-2xl" aria-hidden />
              <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-primary/40 to-gold/40" aria-hidden />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-2xl shadow-black/10">
                <Image
                  src={profile.portrait}
                  alt={`${profile.name} — ${profile.title}`}
                  fill
                  sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 20rem"
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" aria-hidden />
              </div>

              {/* floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -right-3 top-8 hidden rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:block"
              >
                <div className="font-display text-2xl font-bold text-primary">B.Sc.</div>
                <div className="text-[11px] text-muted-foreground">Physics · 1996</div>
                <div className="text-[11px] text-muted-foreground">Yarmouk University</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -left-3 bottom-10 hidden rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:block"
              >
                <div className="font-display text-2xl font-bold text-primary">28+</div>
                <div className="text-[11px] text-muted-foreground">Years of teaching</div>
                <div className="text-[11px] text-muted-foreground">Jordan · UAE</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:mt-20 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md sm:p-6"
            >
              <div className="absolute right-0 top-0 h-20 w-20 -translate-y-6 translate-x-6 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" aria-hidden />
              <div className="relative">
                <div className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">{s.label}</div>
                <div className="text-xs text-muted-foreground">{s.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
