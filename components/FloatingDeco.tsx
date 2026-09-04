"use client";

import { useEffect, useRef } from "react";

const shapes = [
  { shape: "★", color: "#4ade80", size: 28, x: 0.08, y: 0.10, depth: 0.04 },
  { shape: "◆", color: "#34d399", size: 36, x: 0.88, y: 0.18, depth: 0.07 },
  { shape: "●", color: "#5eead4", size: 22, x: 0.05, y: 0.58, depth: 0.03 },
  { shape: "▲", color: "#86efac", size: 30, x: 0.90, y: 0.72, depth: 0.06 },
  { shape: "◯", color: "#6ee7b7", size: 20, x: 0.03, y: 0.38, depth: 0.05 },
  { shape: "✦", color: "#4ade80", size: 18, x: 0.92, y: 0.30, depth: 0.08 },
  { shape: "◆", color: "#2dd4bf", size: 16, x: 0.12, y: 0.82, depth: 0.04 },
  { shape: "★", color: "#a7f3d0", size: 24, x: 0.82, y: 0.50, depth: 0.06 },
];

export default function FloatingDeco() {
  const containerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(shapes.map((s) => ({ x: 0, y: 0, tx: 0, ty: 0 })));
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top)  / rect.height,
      };
    };

    el.addEventListener("mousemove", onMove);

    // init positions
    shapes.forEach((s, i) => {
      posRef.current[i].x = s.x * (el.offsetWidth  || 600);
      posRef.current[i].y = s.y * (el.offsetHeight || 400);
      posRef.current[i].tx = posRef.current[i].x;
      posRef.current[i].ty = posRef.current[i].y;
    });

    const spans = el.querySelectorAll<HTMLSpanElement>(".deco-shape");

    const tick = () => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const mx = mouseRef.current.x * w;
      const my = mouseRef.current.y * h;

      shapes.forEach((s, i) => {
        // target = base position + mouse offset scaled by depth
        posRef.current[i].tx = s.x * w + (mx - w * 0.5) * s.depth * 6;
        posRef.current[i].ty = s.y * h + (my - h * 0.5) * s.depth * 6;

        // lerp toward target
        posRef.current[i].x += (posRef.current[i].tx - posRef.current[i].x) * 0.06;
        posRef.current[i].y += (posRef.current[i].ty - posRef.current[i].y) * 0.06;

        if (spans[i]) {
          spans[i].style.transform = `translate(${posRef.current[i].x}px, ${posRef.current[i].y}px)`;
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((s, i) => (
        <span
          key={i}
          className="deco-shape absolute left-0 top-0 select-none will-change-transform"
          style={{
            fontSize: s.size,
            color: s.color,
            opacity: 0.45,
            // initial position set by JS after mount
            transform: `translate(${s.x * 100}%, ${s.y * 100}%)`,
          }}
        >
          {s.shape}
        </span>
      ))}
    </div>
  );
}
