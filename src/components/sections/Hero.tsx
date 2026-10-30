"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../SocialIcons";
import ParticlesBackground from "../ParticlesBackground";

const roles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Open Source Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 40);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/ilyfauzan", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
    { icon: Mail, href: "mailto:ilyfauzan@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#010736]"
    >
      <ParticlesBackground />

      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22396F]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0D1C42]/30 rounded-full blur-[80px] pointer-events-none" />

      {/* Decorative geometric lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-5" viewBox="0 0 1440 900">
          <line x1="0" y1="450" x2="1440" y2="450" stroke="#FCF1D0" strokeWidth="0.5" />
          <line x1="720" y1="0" x2="720" y2="900" stroke="#FCF1D0" strokeWidth="0.5" />
          <circle cx="720" cy="450" r="200" stroke="#22396F" strokeWidth="0.5" fill="none" />
          <circle cx="720" cy="450" r="350" stroke="#22396F" strokeWidth="0.3" fill="none" />
          <circle cx="720" cy="450" r="450" stroke="#22396F" strokeWidth="0.2" fill="none" />
        </svg>
      </div>

      {/* Social links — left side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute left-8 bottom-1/3 hidden lg:flex flex-col gap-4 items-center"
      >
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className="text-[#FCF1D0]/40 hover:text-[#FCF1D0] transition-all duration-300 hover:-translate-y-1"
          >
            <Icon size={20} />
          </a>
        ))}
        <div className="w-px h-20 bg-gradient-to-b from-[#FCF1D0]/40 to-transparent mt-2" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.4em] uppercase text-[#FCF1D0]/60 mb-6 font-medium"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="gradient-text">AHMAD FAUZAN</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6 h-10"
        >
          <span className="text-lg sm:text-2xl text-[#FCF1D0]/70 font-light">I&apos;m a</span>
          <span className="text-lg sm:text-2xl text-[#FCF1D0] font-semibold">
            {displayText}
          </span>
          <span className="text-[#FCF1D0] text-2xl animate-blink">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-[#FCF1D0]/50 text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Crafting seamless digital experiences where elegant design meets powerful functionality.
          Let&apos;s build something extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 bg-[#FCF1D0] text-[#010736] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(252,241,208,0.3)]"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-[#22396F] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="absolute inset-0 flex items-center justify-center text-[#FCF1D0] translate-x-full group-hover:translate-x-0 transition-transform duration-300 font-semibold">
              View My Work
            </span>
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3.5 border border-[#FCF1D0]/30 text-[#FCF1D0] font-semibold rounded-full hover:border-[#FCF1D0] hover:bg-[#FCF1D0]/5 transition-all duration-300"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#FCF1D0]/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-[#FCF1D0]/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

