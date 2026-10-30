"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(`#${section}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D1C42]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(1,7,54,0.5)] border-b border-[#22396F]/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-[#FCF1D0]">F</span>
          <span className="text-[#22396F]">.</span>
        </motion.a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                  active === link.href
                    ? "text-[#FCF1D0]"
                    : "text-[#FCF1D0]/60 hover:text-[#FCF1D0]"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FCF1D0]"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 text-sm font-semibold bg-[#FCF1D0] text-[#010736] rounded-full hover:bg-[#22396F] hover:text-[#FCF1D0] transition-all duration-300"
        >
          Hire Me
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#FCF1D0] p-2"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D1C42]/95 backdrop-blur-xl border-t border-[#22396F]/30"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-sm font-medium tracking-wider uppercase text-[#FCF1D0]/80 hover:text-[#FCF1D0] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block mt-2 px-5 py-2.5 text-sm font-semibold bg-[#FCF1D0] text-[#010736] rounded-full text-center"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

