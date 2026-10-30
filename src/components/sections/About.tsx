"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "../Reveal";
import { Download, Code2, Palette, Server, Users } from "lucide-react";

const stats = [
  { value: 3.78, suffix: "", label: "IPK / GPA (Unhas)" },
  { value: 6, suffix: "+", label: "Featured Projects" },
  { value: 4, suffix: " Years", label: "Academic Journey" },
  { value: 100, suffix: "%", label: "Passion & Dedication" },
];

const traits = [
  "Front End Specialist",
  "Tech Enthusiast",
  "Sistem Informasi Unhas",
  "Continuous Learner",
  "Problem Solver",
  "Detail-Oriented",
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isFloat = target % 1 !== 0;

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const steps = 50;
    const step = target / steps;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isFloat ? Number(start.toFixed(2)) : Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target, isFloat]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#010736] overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0D1C42]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <Reveal className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#FCF1D0]/50 mb-3">Get to know me</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#FCF1D0]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Me
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-[#22396F]" />
            <div className="w-2 h-2 rounded-full bg-[#FCF1D0]" />
            <div className="h-px w-12 bg-[#22396F]" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <h3
                className="text-2xl sm:text-3xl font-semibold text-[#FCF1D0]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Hi! I&apos;m{" "}
                <span className="text-[#FCF1D0] underline decoration-[#22396F] underline-offset-4">
                  Ahmad Fauzhan
                </span>
                , a passionate Front End Developer.
              </h3>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[#FCF1D0]/70 leading-relaxed text-base">
                Saya mahasiswa S1 Sistem Informasi di Universitas Hasanuddin (2022 – 2026) dengan IPK 3.78, berbasis di Makassar, Sulawesi Selatan. Saya memiliki ketertarikan mendalam dalam dunia front-end development, integrasi API, dan teknologi modern.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-[#FCF1D0]/70 leading-relaxed text-base">
                Berpengalaman membangun beragam proyek web mulai dari landing page, sistem berbasis cuaca terintegrasi Machine Learning, web aplikasi administratif, platform rekomendasi pariwisata, hingga sistem deteksi dini online grooming berbasis AI.
              </p>
            </Reveal>

            {/* Traits */}
            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-2 pt-2">
                {traits.map((trait, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium bg-[#0D1C42] border border-[#22396F]/50 text-[#FCF1D0]/80 rounded-full hover:border-[#FCF1D0]/50 hover:text-[#FCF1D0] transition-all duration-300"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#FCF1D0] text-[#010736] font-semibold rounded-full hover:bg-[#22396F] hover:text-[#FCF1D0] transition-all duration-300 group"
              >
                <Download size={16} className="group-hover:animate-bounce" />
                Download CV
              </a>
            </Reveal>
          </div>

          {/* Right: Visual */}
          <Reveal delay={0.3} direction="right">
            <div className="relative flex items-center justify-center">
              {/* Rotating ring */}
              <div className="absolute w-72 h-72 rounded-full border border-dashed border-[#22396F]/40 animate-spin-slow" />
              <div className="absolute w-56 h-56 rounded-full border border-[#22396F]/20" />

              {/* Center card with photo */}
              <div className="relative w-56 sm:w-64 h-72 sm:h-80 bg-gradient-to-b from-[#0D1C42] to-[#010736] rounded-3xl border border-[#22396F]/50 overflow-hidden shadow-[0_0_60px_rgba(34,57,111,0.4)] group hover:border-[#FCF1D0]/40 transition-all duration-500">
                <img
                  src="/fotosayabaru.png"
                  alt="Ahmad Fauzhan"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010736] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-0 right-0 text-center px-2">
                  <p className="text-sm font-semibold text-[#FCF1D0]">Ahmad Fauzhan</p>
                  <p className="text-[#FCF1D0]/60 text-xs tracking-wider uppercase">Front End Developer</p>
                </div>
              </div>

              {/* Floating badges - hidden on very small screens, visible on sm+ */}
              <div className="hidden sm:flex absolute -top-4 -right-4 glass rounded-xl px-3 py-2 animate-float">
                <div className="flex items-center gap-2">
                  <Code2 size={14} className="text-[#FCF1D0]" />
                  <span className="text-[#FCF1D0] text-xs font-medium">Clean Code</span>
                </div>
              </div>

              <div className="hidden sm:flex absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <Palette size={14} className="text-[#FCF1D0]" />
                  <span className="text-[#FCF1D0] text-xs font-medium">UI/UX Design</span>
                </div>
              </div>

              <div className="hidden lg:flex absolute top-1/2 -right-12 glass rounded-xl px-3 py-2 animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <Server size={14} className="text-[#FCF1D0]" />
                  <span className="text-[#FCF1D0] text-xs font-medium">Web Dev</span>
                </div>
              </div>

              <div className="hidden lg:flex absolute top-1/2 -left-12 glass rounded-xl px-3 py-2 animate-float" style={{ animationDelay: "3s" }}>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-[#FCF1D0]" />
                  <span className="text-[#FCF1D0] text-xs font-medium">Team Player</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="text-center p-6 bg-[#0D1C42]/60 rounded-2xl border border-[#22396F]/30 hover:border-[#22396F] transition-all duration-300 group hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl font-black text-[#FCF1D0] gradient-text mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[#FCF1D0]/50 text-xs sm:text-sm tracking-wide">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

