"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUp, Youtube, Facebook, ExternalLink } from "lucide-react";
import { profile, navLinks } from "@/lib/content";

export function Footer() {
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="no-print relative mt-auto overflow-hidden border-t border-border bg-card">
      <div className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_0%,transparent_60%)]" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + mission */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <Image
                  src={profile.logo}
                  alt={`${profile.name} logo`}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </span>
              <div>
                <div className="font-display text-base font-bold text-foreground">
                  {profile.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {profile.title}
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-md font-display text-lg leading-relaxed text-foreground">
              &ldquo;{profile.tagline}&rdquo;
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
              >
                <Mail className="h-3.5 w-3.5 text-primary" />
                Email
              </a>
              <a
                href={`tel:${profile.phoneJOR1.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
              >
                <Phone className="h-3.5 w-3.5 text-primary" />
                Call
              </a>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {profile.location}
              </span>
            </div>

            {/* Social icons */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Follow:
              </span>
              <a
                href={profile.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 transition-all hover:-translate-y-0.5 hover:border-red-500/50 hover:bg-accent hover:shadow-md"
              >
                <Youtube className="h-4 w-4 text-red-500" />
              </a>
              <a
                href={profile.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 transition-all hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-accent hover:shadow-md"
              >
                <Facebook className="h-4 w-4 text-blue-600" />
              </a>
              <a
                href={profile.social.platform}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Interactive Physics Platform"
                className="inline-flex h-9 items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 hover:shadow-md"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Physics Platform
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Navigate
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Profile
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground">{profile.degree}</span>
              </li>
              <li>
                <span className="text-foreground">28+ years</span> teaching
                experience
              </li>
              <li>
                <span className="text-foreground">5 institutions</span> across
                Jordan &amp; UAE
              </li>
              <li>
                <span className="text-foreground">100+</span> professional
                certifications
              </li>
              <li>
                Languages:{" "}
                <span className="text-foreground">Arabic · English</span>
              </li>
            </ul>

            <a
              href={profile.cvUrl}
              download
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-105"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with care · Next.js · Tailwind CSS · Framer Motion
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80"
          >
            Back to top
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
