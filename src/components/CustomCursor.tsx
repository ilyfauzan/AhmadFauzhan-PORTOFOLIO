"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const links = document.querySelectorAll("a, button, [data-cursor='pointer']");
    links.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setTrail(pos), 80);
    return () => clearTimeout(timeout);
  }, [pos]);

  return (
    <>
      {/* Trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#FCF1D0]/30"
        animate={{
          x: trail.x - 20,
          y: trail.y - 20,
          width: hovering ? 56 : 40,
          height: hovering ? 56 : 40,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#FCF1D0]"
        animate={{
          x: pos.x - 5,
          y: pos.y - 5,
          scale: clicked ? 0.5 : 1,
          width: 10,
          height: 10,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
}

