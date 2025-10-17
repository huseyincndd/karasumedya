"use client";

import React, { useEffect, useRef } from "react";

type Point = { x: number; y: number };

const isTouchDevice = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
};

const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export default function CustomCursor(): JSX.Element | null {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const targetRef = useRef<Point>({ x: 0, y: 0 });
  const currentRef = useRef<Point>({ x: 0, y: 0 });
  const hoveringRef = useRef<boolean>(false);
  const visibleRef = useRef<boolean>(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isTouchDevice() || prefersReducedMotion()) return;

    document.documentElement.setAttribute("data-has-custom-cursor", "true");

    const handleMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      visibleRef.current = true;

      const el = e.target as HTMLElement | null;
      const interactive = el?.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer'
      );
      hoveringRef.current = Boolean(interactive);
    };

    const handleLeave = () => {
      visibleRef.current = false;
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseout", handleLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove as any);
      window.removeEventListener("mouseout", handleLeave as any);
      document.documentElement.removeAttribute("data-has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion()) return;
    let raf = 0;
    const stiffness = 0.22; // smoothing factor

    // cache last applied values to avoid redundant style writes
    let last = {
      x: -1,
      y: -1,
      size: 0,
      ringSize: 0,
      opacity: -1,
      hovering: false,
    };

    const animate = () => {
      const tx = targetRef.current.x;
      const ty = targetRef.current.y;
      const cx = currentRef.current.x + (tx - currentRef.current.x) * stiffness;
      const cy = currentRef.current.y + (ty - currentRef.current.y) * stiffness;
      currentRef.current.x = cx;
      currentRef.current.y = cy;

      const hovering = hoveringRef.current;
      const visible = visibleRef.current;
      const size = hovering ? 18 : 12;
      const ringSize = hovering ? 44 : 32;
      const opacity = visible ? 1 : 0;

      if (cursorRef.current) {
        if (cx !== last.x || cy !== last.y) {
          cursorRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
        }
        if (size !== last.size) {
          cursorRef.current.style.width = `${size}px`;
          cursorRef.current.style.height = `${size}px`;
          cursorRef.current.style.marginLeft = `${-size / 2}px`;
          cursorRef.current.style.marginTop = `${-size / 2}px`;
          cursorRef.current.style.borderRadius = `${size}px`;
        }
        if (opacity !== last.opacity) {
          cursorRef.current.style.opacity = String(opacity);
        }
        if (hovering !== last.hovering) {
          cursorRef.current.style.background = hovering
            ? "radial-gradient(circle at 30% 30%, #a855f7, #2563eb)"
            : "radial-gradient(circle at 30% 30%, #2563eb, #7c3aed)";
          cursorRef.current.style.boxShadow = hovering
            ? "0 0 20px rgba(124, 58, 237, 0.28)"
            : "0 0 14px rgba(37, 99, 235, 0.22)";
        }
      }

      if (ringRef.current) {
        if (cx !== last.x || cy !== last.y) {
          ringRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
        }
        if (ringSize !== last.ringSize) {
          ringRef.current.style.width = `${ringSize}px`;
          ringRef.current.style.height = `${ringSize}px`;
          ringRef.current.style.marginLeft = `${-ringSize / 2}px`;
          ringRef.current.style.marginTop = `${-ringSize / 2}px`;
          ringRef.current.style.borderRadius = `${ringSize}px`;
        }
        if (opacity !== last.opacity) {
          ringRef.current.style.opacity = String(opacity);
        }
      }

      last = { x: cx, y: cy, size, ringSize, opacity, hovering };
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (isTouchDevice() || prefersReducedMotion()) return null;

  // Static elements; styles are updated imperatively in rAF loop
  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
        style={{
          opacity: 0,
          width: 12,
          height: 12,
          marginLeft: -6,
          marginTop: -6,
          borderRadius: 12,
          background: "radial-gradient(circle at 30% 30%, #2563eb, #7c3aed)",
          boxShadow: "0 0 14px rgba(37, 99, 235, 0.22)",
          transition: "opacity 200ms ease",
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] will-change-transform"
        style={{
          opacity: 0,
          width: 32,
          height: 32,
          marginLeft: -16,
          marginTop: -16,
          borderRadius: 32,
          background:
            "conic-gradient(from 0deg, rgba(99,102,241,0.0), rgba(99,102,241,0.35), rgba(147,51,234,0.35), rgba(99,102,241,0.0))",
          boxShadow: "0 0 24px rgba(99, 102, 241, 0.22)",
          mixBlendMode: "screen",
          // Removed backdrop-filter for better performance
          transition: "opacity 200ms ease",
        }}
      />
    </>
  );
}


