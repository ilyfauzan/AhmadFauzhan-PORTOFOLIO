"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "../SocialIcons";

interface Project {
  id: number;
  title: string;
  description: string;
  longDesc: string;
  tech: string[];
  category: string;
  gradient: string;
  icon: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ahmad Fauzan Portfolio",
    description: "Personal modern portfolio website built with Next.js, Tailwind CSS, Framer Motion, and aesthetic color palette.",
    longDesc: "Full-stack personal portfolio showcasing web development skills, live projects, timeline experience, interactive particle background, and modern glassmorphic UI.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    gradient: "from-[#22396F] to-[#010736]",
    icon: "✨",
    github: "https://github.com/ilyfauzan/AhmadFauzhan-PORTOFOLIO",
    demo: "#",
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "A collaborative productivity app with real-time sync, drag-and-drop, and team workspaces.",
    longDesc: "Real-time collaborative task management with WebSocket integration, drag-and-drop Kanban boards, team collaboration features, notifications system, and detailed analytics for productivity tracking.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    category: "Full Stack",
    gradient: "from-[#0D1C42] to-[#22396F]",
    icon: "📋",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A stunning personal portfolio with smooth animations, dark navy aesthetic, and great UX.",
    longDesc: "Designed and developed this portfolio featuring particle animations, smooth scroll-triggered animations with Framer Motion, custom cursor, glassmorphism design, and fully responsive layout.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    category: "Frontend",
    gradient: "from-[#010736] to-[#0D1C42]",
    icon: "🎨",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "AI Chat Application",
    description: "An AI-powered chat app integrating multiple LLM models with conversation history.",
    longDesc: "Chat application integrated with OpenAI and Google Gemini APIs, featuring conversation branching, context management, markdown rendering, code highlighting, and export functionality.",
    tech: ["Next.js", "OpenAI", "Vercel AI SDK", "Supabase", "Tailwind"],
    category: "AI / ML",
    gradient: "from-[#22396F] to-[#0D1C42]",
    icon: "🤖",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "Real Estate Dashboard",
    description: "An analytics dashboard for real estate agents with interactive maps and market data.",
    longDesc: "Data visualization dashboard featuring interactive maps using Mapbox, property analytics, market trends, client management CRM, automated reporting, and export to PDF functionality.",
    tech: ["React", "D3.js", "Mapbox", "Express", "PostgreSQL"],
    category: "Full Stack",
    gradient: "from-[#0D1C42] to-[#010736]",
    icon: "🏡",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 6,
    title: "Open Source CLI Tool",
    description: "A developer CLI tool for scaffolding projects with custom templates and configs.",
    longDesc: "Node.js CLI tool with 2000+ npm downloads that helps developers scaffold new projects with custom templates, opinionated configs, Git hooks setup, and CI/CD pipeline generation.",
    tech: ["Node.js", "TypeScript", "Commander.js", "npm"],
    category: "Open Source",
    gradient: "from-[#010736] to-[#22396F]",
    icon: "⚡",
    github: "https://github.com",
    demo: "https://npmjs.com",
  },
];

const categories = ["All", "Full Stack", "Frontend", "AI / ML", "Open Source"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#010736] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal className="text-center mb-6">
          <p className="text-xs tracking-[0.4em] uppercase text-[#FCF1D0]/50 mb-3">What I&apos;ve built</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#FCF1D0]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Featured Projects
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-[#22396F]" />
            <div className="w-2 h-2 rounded-full bg-[#FCF1D0]" />
            <div className="h-px w-12 bg-[#22396F]" />
          </div>
        </Reveal>

        {/* Filter tabs */}
        <Reveal delay={0.2} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#FCF1D0] text-[#010736]"
                  : "bg-[#0D1C42] text-[#FCF1D0]/60 hover:text-[#FCF1D0] border border-[#22396F]/30 hover:border-[#22396F]"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative bg-[#0D1C42] rounded-2xl border border-[#22396F]/20 overflow-hidden hover:border-[#22396F]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(34,57,111,0.3)]"
              >
                {/* Card banner */}
                <div className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <span className="text-5xl z-10">{project.icon}</span>
                  {/* Decorative circles */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#FCF1D0]/5" />
                  <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-[#FCF1D0]/5" />
                  {/* Category badge */}
                  <span className="absolute top-3 right-3 px-2 py-0.5 bg-[#FCF1D0]/10 backdrop-blur-sm text-[#FCF1D0]/80 text-xs rounded-full border border-[#FCF1D0]/20">
                    {project.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#FCF1D0] mb-2 group-hover:text-[#FCF1D0]">
                    {project.title}
                  </h3>

                  <AnimatePresence mode="wait">
                    {hovered === project.id ? (
                      <motion.p
                        key="long"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[#FCF1D0]/60 text-sm leading-relaxed mb-4"
                      >
                        {project.longDesc}
                      </motion.p>
                    ) : (
                      <motion.p
                        key="short"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[#FCF1D0]/60 text-sm leading-relaxed mb-4"
                      >
                        {project.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-[#22396F]/20 text-[#FCF1D0]/70 text-xs rounded border border-[#22396F]/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#FCF1D0]/60 hover:text-[#FCF1D0] transition-colors duration-300 font-medium"
                    >
                      <GithubIcon size={14} />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#FCF1D0]/60 hover:text-[#FCF1D0] transition-colors duration-300 font-medium"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View more */}
        <Reveal delay={0.3} className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#FCF1D0]/60 hover:text-[#FCF1D0] transition-colors duration-300 text-sm font-medium group"
          >
            View all projects on GitHub
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

