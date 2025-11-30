"use client";

import React, { useEffect, useRef } from "react";

interface ReactLenisProps {
  children: React.ReactNode;
  root?: boolean;
}

/**
 * Minimal ReactLenis implementation that smooths wheel scrolling with rAF while avoiding heavy processing on mobile or reduced-motion setups.
 */
export function ReactLenis({ children }: ReactLenisProps) {
  const frameRef = useRef<number | null>(null);
  const targetScroll = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;
    targetScroll.current = window.scrollY;
    const syncTarget = () => {
      targetScroll.current = window.scrollY;
    };

    const step = () => {
      const current = window.scrollY;
      const delta = targetScroll.current - current;
      const eased = delta * 0.12;

      if (Math.abs(delta) > 0.5) {
        window.scrollTo({ top: current + eased, behavior: "auto" });
        frameRef.current = requestAnimationFrame(step);
      } else {
        window.scrollTo({ top: targetScroll.current, behavior: "auto" });
        frameRef.current = null;
      }
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      targetScroll.current = Math.min(maxScroll(), Math.max(0, targetScroll.current + event.deltaY));
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", syncTarget, { passive: true });
    const originalDocBehavior = document.documentElement.style.scrollBehavior;
    const originalBodyBehavior = document.body.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.scrollBehavior = "auto";

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", syncTarget);
      document.documentElement.style.scrollBehavior = originalDocBehavior;
      document.body.style.scrollBehavior = originalBodyBehavior;
    };
  }, []);

  return <>{children}</>;
}
