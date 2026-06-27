"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Send, Clock, Globe, Youtube, Facebook, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated";
import { profile } from "@/lib/content";

export function Contact() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = React.useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Submission failed");
      }
      toast.success(data.message || "Message sent. Thank you!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      toast.error(err?.message || "Could not send. Please email directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-spotlight" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about teaching."
          description="Recruiters, school leaders, fellow educators, and students are all welcome. I read every message personally and reply within 48 hours."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
          {/* Contact info */}
          <AnimatedSection className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Direct contact
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                The fastest way to reach me is by email.
              </p>

              <div className="mt-5 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 p-3 transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="truncate text-sm font-medium text-foreground">
                      {profile.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${profile.emailAlt}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 p-3 transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">Alt Email</div>
                    <div className="truncate text-sm font-medium text-foreground">
                      {profile.emailAlt}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${profile.phoneJOR1.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 p-3 transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Phone (Jordan)</div>
                    <div className="text-sm font-medium text-foreground">
                      {profile.phoneJOR1}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="text-sm font-medium text-foreground">
                      {profile.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-background/60 p-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Globe className="h-3.5 w-3.5 text-primary" />
                    Languages
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground">
                    Arabic · English
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-background/60 p-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    Reply time
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground">
                    Within 48 hours
                  </div>
                </div>
              </div>

              <a
                href={profile.cvUrl}
                download
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-105"
              >
                <Download className="h-4 w-4" />
                Download Full CV
              </a>

              {/* Social Media */}
              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-3">
                  Follow & Connect
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {profile.social.youtube && (
                    <a
                      href={profile.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-center gap-1.5 rounded-xl border border-border bg-background/60 p-3 transition-all hover:-translate-y-0.5 hover:border-red-500/40 hover:bg-accent hover:shadow-md"
                    >
                      <Youtube className="h-5 w-5 text-red-500 transition-transform group-hover:scale-110" />
                      <span className="text-[11px] font-medium text-foreground">YouTube</span>
                      <span className="text-[9px] text-muted-foreground">@FayezMrouj</span>
                    </a>
                  )}
                  {profile.social.facebook && (
                    <a
                      href={profile.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-center gap-1.5 rounded-xl border border-border bg-background/60 p-3 transition-all hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-accent hover:shadow-md"
                    >
                      <Facebook className="h-5 w-5 text-blue-600 transition-transform group-hover:scale-110" />
                      <span className="text-[11px] font-medium text-foreground">Facebook</span>
                      <span className="text-[9px] text-muted-foreground">Fayez Mrouj</span>
                    </a>
                  )}
                  {profile.social.platform ? (
                    <a
                      href={profile.social.platform}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-center gap-1.5 rounded-xl border border-primary/30 bg-primary/5 p-3 transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 hover:shadow-md"
                    >
                      <ExternalLink className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                      <span className="text-[11px] font-medium text-foreground">Physics Platform</span>
                      <span className="text-[9px] text-primary">Interactive · Grades 9–10</span>
                    </a>
                  ) : (
                    <div
                      className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-border bg-background/40 p-3 opacity-70"
                      title="Coming soon"
                    >
                      <ExternalLink className="h-5 w-5 text-muted-foreground" />
                      <span className="text-[11px] font-medium text-muted-foreground">Physics Hub</span>
                      <span className="text-[9px] text-muted-foreground">Coming soon</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-card">
              <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                <MapPin className="h-8 w-8 text-primary/60" />
                <div className="text-sm font-medium text-foreground">
                  Irbid, Jordan
                </div>
                <div className="text-xs text-muted-foreground">
                  Interactive map to be embedded
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Send a message
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tell me about the role, the school, or the question you have.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-foreground">
                    Full name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-foreground">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@school.com"
                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-medium text-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Physics teaching opportunity"
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="flex-1 space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-foreground">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="I'm reaching out about..."
                  rows={6}
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground">
                By submitting this form, you agree to be contacted at the email
                address provided. Your information is never shared.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
