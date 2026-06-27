"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight animated physics background.
 * - Orbiting electrons around an invisible nucleus
 * - A few drifting "particles" representing free motion
 * Pure canvas, no dependencies, respects prefers-reduced-motion.
 */
export function PhysicsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // 3 orbit centres, each with electrons
    const orbits = [
      { x: 0.18, y: 0.35, r: 70, electrons: 2, speed: 0.012 },
      { x: 0.78, y: 0.55, r: 110, electrons: 3, speed: 0.008 },
      { x: 0.55, y: 0.82, r: 55, electrons: 1, speed: 0.018 },
    ];

    // free particles
    const particles = Array.from({ length: 28 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      r: Math.random() * 1.5 + 0.6,
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 1;

      // primary emerald accent (CSS var fallback)
      const accent =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--primary")
          .trim() || "#10b981";
      const gold =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--gold")
          .trim() || "#d4af37";

      // free particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `color-mix(in oklch, ${accent} 35%, transparent)`;
        ctx.fill();
      });

      // orbits
      orbits.forEach((o, idx) => {
        const cx = o.x * w;
        const cy = o.y * h;

        // orbit ring
        ctx.beginPath();
        ctx.arc(cx, cy, o.r, 0, Math.PI * 2);
        ctx.strokeStyle = `color-mix(in oklch, ${accent} 18%, transparent)`;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        // nucleus
        ctx.beginPath();
        ctx.arc(cx, cy, 3, 0, Math.PI * 2);
        ctx.fillStyle = `color-mix(in oklch, ${accent} 70%, transparent)`;
        ctx.fill();

        // electrons
        for (let i = 0; i < o.electrons; i++) {
          const angle =
            t * o.speed + (i / o.electrons) * Math.PI * 2 * (idx % 2 === 0 ? 1 : -1);
          const ex = cx + Math.cos(angle) * o.r;
          const ey = cy + Math.sin(angle) * o.r;

          // electron trail
          ctx.beginPath();
          ctx.arc(ex, ey, 4, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(ex, ey, 0, ex, ey, 8);
          grad.addColorStop(0, `color-mix(in oklch, ${accent} 80%, transparent)`);
          grad.addColorStop(1, "transparent");
          ctx.fillStyle = grad;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(ex, ey, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = idx === 1 ? gold : accent;
          ctx.fill();
        }
      });

      raf = requestAnimationFrame(draw);
    };

    if (!prefersReduced) {
      raf = requestAnimationFrame(draw);
    } else {
      // draw a single static frame
      draw();
      cancelAnimationFrame(raf);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    />
  );
}
