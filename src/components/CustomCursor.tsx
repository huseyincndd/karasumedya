"use client";

import React, { useEffect, useRef, useCallback } from "react";

type Point = { x: number; y: number };

const isTouchDevice = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
};

const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Performance check for low-end devices
const isLowEndDevice = () => {
  if (typeof window === "undefined") return false;
  return navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
};

// Throttle function to limit mouse event frequency
const throttle = <T extends unknown[]>(fn: (...args: T) => void, limit: number): ((...args: T) => void) => {
  let inThrottle = false;
  let pendingArgs: T | null = null;

  return (...args: T) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
        if (pendingArgs) {
          fn(...pendingArgs);
          pendingArgs = null;
        }
      }, limit);
    } else {
      pendingArgs = args;
    }
  };
};

export default function CustomCursor(): React.JSX.Element | null {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const targetRef = useRef<Point>({ x: 0, y: 0 });
  const currentRef = useRef<Point>({ x: 0, y: 0 });
  const hoveringRef = useRef<boolean>(false);
  const visibleRef = useRef<boolean>(false);
  const animationRef = useRef<number | null>(null);
  const lastUpdateRef = useRef<number>(0);

  // Throttled mouse move handler
  const handleMove = useCallback((e: MouseEvent) => {
    targetRef.current.x = e.clientX;
    targetRef.current.y = e.clientY;
    visibleRef.current = true;

    const el = e.target as HTMLElement | null;
    const interactive = el?.closest(
      'a, button, input, textarea, select, [role="button"], .cursor-pointer'
    );
    hoveringRef.current = Boolean(interactive);
  }, []);

  const handleLeave = useCallback(() => {
    visibleRef.current = false;
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isTouchDevice() || prefersReducedMotion() || isLowEndDevice()) return;

    document.documentElement.setAttribute("data-has-custom-cursor", "true");

    // Throttle mouse events to 60fps max
    const throttledHandleMove = throttle(handleMove, 16);

    window.addEventListener("mousemove", throttledHandleMove, { passive: true });
    window.addEventListener("mouseout", handleLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", throttledHandleMove);
      window.removeEventListener("mouseout", handleLeave);
      document.documentElement.removeAttribute("data-has-custom-cursor");
    };
  }, [handleMove, handleLeave]);

  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion() || isLowEndDevice()) return;
    
    const stiffness = 0.22; // smoothing factor
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    // cache last applied values to avoid redundant style writes
    let last = {
      x: -1,
      y: -1,
      size: 0,
      ringSize: 0,
      opacity: -1,
      hovering: false,
    };

    const animate = (timestamp: number) => {
      // Limit animation to target FPS
      if (timestamp - lastUpdateRef.current < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastUpdateRef.current = timestamp;

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

      // Only update cursor if values changed
      if (cursorRef.current) {
        if (Math.abs(cx - last.x) > 0.1 || Math.abs(cy - last.y) > 0.1) {
          cursorRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
        }
        if (size !== last.size) {
          cursorRef.current.style.width = `${size}px`;
          cursorRef.current.style.height = `${size}px`;
          cursorRef.current.style.marginLeft = `${-size / 2}px`;
          cursorRef.current.style.marginTop = `${-size / 2}px`;
          cursorRef.current.style.borderRadius = `${size}px`;
        }
        if (Math.abs(opacity - last.opacity) > 0.01) {
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

      // Only update ring if values changed
      if (ringRef.current) {
        if (Math.abs(cx - last.x) > 0.1 || Math.abs(cy - last.y) > 0.1) {
          ringRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
        }
        if (ringSize !== last.ringSize) {
          ringRef.current.style.width = `${ringSize}px`;
          ringRef.current.style.height = `${ringSize}px`;
          ringRef.current.style.marginLeft = `${-ringSize / 2}px`;
          ringRef.current.style.marginTop = `${-ringSize / 2}px`;
          ringRef.current.style.borderRadius = `${ringSize}px`;
        }
        if (Math.abs(opacity - last.opacity) > 0.01) {
          ringRef.current.style.opacity = String(opacity);
        }
      }

      last = { x: cx, y: cy, size, ringSize, opacity, hovering };
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  if (isTouchDevice() || prefersReducedMotion() || isLowEndDevice()) return null;

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
          transition: "opacity 200ms ease, width 150ms ease, height 150ms ease, background 150ms ease, box-shadow 150ms ease",
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
          transition: "opacity 200ms ease, width 150ms ease, height 150ms ease",
        }}
      />
    </>
  );
}


