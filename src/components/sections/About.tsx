"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "../Reveal";
import { Download, Code2, Palette, Server, Users } from "lucide-react";

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Projects Built" },
  { value: 12, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

const traits = [
  "Creative Thinker",
  "Problem Solver",
  "Team Player",
  "Detail-Oriented",
  "Fast Learner",
  "Open Source Lover",
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target]);

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
                  Ahmad Fauzan
                </span>
                , a passionate developer.
              </h3>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[#FCF1D0]/70 leading-relaxed text-base">
                I&apos;m a Full Stack Developer based in Indonesia with a passion for building
                beautiful, performant, and accessible web applications. I specialize in the
                JavaScript ecosystem — from React and Next.js on the frontend to Node.js and
                databases on the backend.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-[#FCF1D0]/70 leading-relaxed text-base">
                When I&apos;m not coding, I love contributing to open-source projects, exploring
                new design trends, and mentoring junior developers. I believe great software
                is a blend of technical excellence and thoughtful design.
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

              {/* Center card */}
              <div className="relative w-52 h-52 bg-[#0D1C42] rounded-2xl border border-[#22396F]/40 flex items-center justify-center shadow-[0_0_60px_rgba(34,57,111,0.3)] rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="text-center space-y-2">
                  <div className="text-5xl font-black text-[#FCF1D0] gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                    F
                  </div>
                  <p className="text-[#FCF1D0]/60 text-xs tracking-widest uppercase">Full Stack</p>
                  <p className="text-[#FCF1D0]/60 text-xs tracking-widest uppercase">Developer</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 animate-float">
                <div className="flex items-center gap-2">
                  <Code2 size={14} className="text-[#FCF1D0]" />
                  <span className="text-[#FCF1D0] text-xs font-medium">Clean Code</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <Palette size={14} className="text-[#FCF1D0]" />
                  <span className="text-[#FCF1D0] text-xs font-medium">UI/UX Design</span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-12 glass rounded-xl px-3 py-2 animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <Server size={14} className="text-[#FCF1D0]" />
                  <span className="text-[#FCF1D0] text-xs font-medium">Backend</span>
                </div>
              </div>

              <div className="absolute top-1/2 -left-12 glass rounded-xl px-3 py-2 animate-float" style={{ animationDelay: "3s" }}>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-[#FCF1D0]" />
                  <span className="text-[#FCF1D0] text-xs font-medium">Team Lead</span>
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

