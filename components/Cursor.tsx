"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const interactiveSelector = "a,button,input,textarea";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isTextInputFocused, setIsTextInputFocused] = useState(false);

  // Raw mouse values (instant)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring values for ring (trailing effect)
  const springConfig = { damping: 25, stiffness: 300 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setEnabled(true);

    const handleMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const updateInteractiveState = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(interactiveSelector);
      setIsHoveringInteractive(Boolean(interactive));
    };

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const textInput = target.closest("input,textarea");
      setIsTextInputFocused(Boolean(textInput));
    };

    const handleFocusOut = () => {
      setIsTextInputFocused(false);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", updateInteractiveState);
    window.addEventListener("pointerdown", updateInteractiveState);
    window.addEventListener("pointerup", updateInteractiveState);
    window.addEventListener("focusin", handleFocusIn);
    window.addEventListener("focusout", handleFocusOut);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", updateInteractiveState);
      window.removeEventListener("pointerdown", updateInteractiveState);
      window.removeEventListener("pointerup", updateInteractiveState);
      window.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("focusout", handleFocusOut);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    if (enabled && !isTextInputFocused) {
      root.dataset.customCursor = "enabled";
    } else {
      root.removeAttribute("data-custom-cursor");
    }

    return () => {
      root.removeAttribute("data-custom-cursor");
    };
  }, [enabled, isTextInputFocused]);

  if (!enabled) return null;

  const hidden = isTextInputFocused;

  return (
    <>
      {/* INNER DOT: instant follow */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-3 w-3 rounded-full bg-accent mix-blend-difference cursor-animated"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHoveringInteractive ? 2 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* OUTER RING: trailing effect */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-40 h-8 w-8 rounded-full border border-accent mix-blend-difference cursor-animated"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHoveringInteractive ? 1.5 : 1,
          opacity: hidden ? 0 : isHoveringInteractive ? 0.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 500 }}
      />
    </>
  );
}
