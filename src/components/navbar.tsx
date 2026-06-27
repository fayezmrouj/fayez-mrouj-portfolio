"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/lib/content";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>("home");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section observer
  React.useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={cn(
        "no-print fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2.5" : "py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-2xl px-4 transition-all duration-300 sm:px-5",
            scrolled
              ? "glass h-14 shadow-sm shadow-black/5"
              : "h-14 bg-transparent"
          )}
        >
          {/* Logo + name */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              go("home");
            }}
            className="flex items-center gap-2.5 group"
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-primary/10 ring-1 ring-primary/20">
              <Image
                src={profile.logo}
                alt={`${profile.name} logo`}
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-sm font-bold text-foreground">
                {profile.name}
              </span>
              <span className="text-[11px] text-muted-foreground">
                Physics Educator
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                data-active={active === link.id}
                className={cn(
                  "animated-underline relative px-3 py-2 text-sm font-medium transition-colors",
                  active === link.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <a
              href={profile.cvUrl}
              download
              className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-105 sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5" />
              CV
            </a>
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur transition-colors hover:bg-accent lg:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="glass mt-2 rounded-2xl p-3">
                <div className="grid grid-cols-2 gap-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => go(link.id)}
                      className={cn(
                        "rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors",
                        active === link.id
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-accent"
                      )}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
                <a
                  href={profile.cvUrl}
                  download
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
