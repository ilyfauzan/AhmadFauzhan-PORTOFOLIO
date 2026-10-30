"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Reveal from "../Reveal";

interface Skill {
  name: string;
  icon: string;
  level: number;
}

const frontendSkills: Skill[] = [
  { name: "React / Next.js", icon: "⚛️", level: 92 },
  { name: "TypeScript", icon: "🔷", level: 88 },
  { name: "Tailwind CSS", icon: "🎨", level: 95 },
  { name: "Framer Motion", icon: "✨", level: 80 },
  { name: "HTML5 / CSS3", icon: "🌐", level: 97 },
  { name: "Vue.js", icon: "💚", level: 72 },
];

const backendSkills: Skill[] = [
  { name: "Node.js / Express", icon: "🟢", level: 85 },
  { name: "PostgreSQL", icon: "🐘", level: 80 },
  { name: "MongoDB", icon: "🍃", level: 82 },
  { name: "REST API / GraphQL", icon: "🔗", level: 87 },
  { name: "Docker", icon: "🐳", level: 70 },
  { name: "AWS / Cloud", icon: "☁️", level: 65 },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className="group p-4 bg-[#0D1C42]/60 rounded-xl border border-[#22396F]/20 hover:border-[#22396F]/60 transition-all duration-300 hover:-translate-y-0.5"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <span className="text-[#FCF1D0] text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-[#FCF1D0]/50 text-xs font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-[#22396F]/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#22396F] to-[#FCF1D0]/80 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isInView ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

const tools = [
  { name: "VS Code", icon: "💻" },
  { name: "Figma", icon: "🎭" },
  { name: "Git / GitHub", icon: "🔧" },
  { name: "Postman", icon: "📬" },
  { name: "Vercel", icon: "▲" },
  { name: "Linux", icon: "🐧" },
  { name: "Jest", icon: "🃏" },
  { name: "Prisma", icon: "🔺" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0D1C42] relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#22396F] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#22396F] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#FCF1D0]/50 mb-3">What I can do</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#FCF1D0]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            My Skills
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-[#22396F]" />
            <div className="w-2 h-2 rounded-full bg-[#FCF1D0]" />
            <div className="h-px w-12 bg-[#22396F]" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend */}
          <div>
            <Reveal delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#22396F]/30 border border-[#22396F]/50 flex items-center justify-center text-sm">
                  🖥️
                </div>
                <h3 className="text-lg font-semibold text-[#FCF1D0]">Frontend Development</h3>
              </div>
            </Reveal>
            <div className="space-y-3">
              {frontendSkills.map((skill, i) => (
                <Reveal key={skill.name} delay={0.1 + i * 0.05}>
                  <SkillBar skill={skill} delay={i * 100} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <Reveal delay={0.2}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#22396F]/30 border border-[#22396F]/50 flex items-center justify-center text-sm">
                  ⚙️
                </div>
                <h3 className="text-lg font-semibold text-[#FCF1D0]">Backend Development</h3>
              </div>
            </Reveal>
            <div className="space-y-3">
              {backendSkills.map((skill, i) => (
                <Reveal key={skill.name} delay={0.2 + i * 0.05}>
                  <SkillBar skill={skill} delay={i * 100} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <Reveal delay={0.3} className="mt-16">
          <h3 className="text-center text-lg font-semibold text-[#FCF1D0]/70 mb-8 tracking-wider uppercase text-sm">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-[#22396F]/30 hover:border-[#FCF1D0]/30 transition-all duration-300 hover:-translate-y-1 text-[#FCF1D0]/80 hover:text-[#FCF1D0] text-sm"
              >
                <span>{tool.icon}</span>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

