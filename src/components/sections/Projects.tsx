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
    title: "Cegah Grooming (AI-Based)",
    description: "Sistem deteksi dini online grooming berbasis AI untuk mengenali pola manipulasi predator anak di platform digital.",
    longDesc: "Sistem deteksi dini online grooming berbasis AI yang menganalisis alur percakapan secara kontekstual untuk mengenali pola manipulasi psikologis predator anak di platform digital.",
    tech: ["AI / NLP", "Python", "Machine Learning", "Web App"],
    category: "AI & ML",
    gradient: "from-[#22396F] to-[#010736]",
    icon: "🛡️",
    github: "https://github.com/ilyfauzan/CegahGrooming",
    demo: "https://github.com/ilyfauzan/CegahGrooming",
  },
  {
    id: 2,
    title: "EcoActivity",
    description: "Aplikasi rekomendasi kegiatan berbasis cuaca real-time dengan integrasi model Machine Learning.",
    longDesc: "Aplikasi yang merekomendasikan jenis kegiatan berdasarkan cuaca. Data kegiatan ditraining menggunakan machine learning, dan data cuaca diambil secara langsung dari API.",
    tech: ["Python", "Machine Learning", "Weather API", "Web"],
    category: "AI & ML",
    gradient: "from-[#0D1C42] to-[#22396F]",
    icon: "🌱",
    github: "https://github.com/ilyfauzan/EcoActivity",
    demo: "https://github.com/ilyfauzan/EcoActivity",
  },
  {
    id: 3,
    title: "Zolve Digital",
    description: "Web responsif penyedia template pekerjaan administratif untuk efisiensi dan profesionalitas dokumen.",
    longDesc: "Web responsif yang menyediakan template untuk pekerjaan administratif, membantu Kamu menghemat waktu, mengurangi kesalahan, dan membuat dokumen lebih profesional.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "Web Dev",
    gradient: "from-[#010736] to-[#0D1C42]",
    icon: "📑",
    github: "https://github.com/ilyfauzan/ZolveDigital",
    demo: "https://github.com/ilyfauzan/ZolveDigital",
  },
  {
    id: 4,
    title: "TrekkerTech",
    description: "Aplikasi rekomendasi destinasi wisata untuk membantu menemukan lokasi liburan terbaik.",
    longDesc: "Aplikasi rekomendasi destinasi wisata yang dibangun untuk membantu pengguna menemukan lokasi wisata terbaik dengan fitur-fitur unggulan dan informasi lengkap.",
    tech: ["Web App", "JavaScript", "API Integration", "UI/UX"],
    category: "Web Dev",
    gradient: "from-[#22396F] to-[#0D1C42]",
    icon: "🏔️",
    github: "https://github.com/ilyfauzan/TrekkerTech",
    demo: "https://github.com/ilyfauzan/TrekkerTech",
  },
  {
    id: 5,
    title: "Mini Ecommerce",
    description: "Proyek mini ecommerce scalable yang dikembangkan menggunakan framework Laravel.",
    longDesc: "Proyek mini ecommerce yang dibangun menggunakan Laravel, menunjukkan kemampuan untuk mengembangkan aplikasi web yang skalabel dan kaya fitur seperti katalog, cart, dan checkout.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    category: "Web Dev",
    gradient: "from-[#0D1C42] to-[#010736]",
    icon: "🛒",
    github: "https://github.com/ilyfauzan/Mini-Ecommerce",
    demo: "https://github.com/ilyfauzan/Mini-Ecommerce",
  },
  {
    id: 6,
    title: "Landing Page NFT",
    description: "Landing page modern & edukatif untuk pemesanan NFT dengan antarmuka yang intuitif.",
    longDesc: "Landing page sederhana yang dirancang untuk menjelaskan NFT, fitur-fiturnya, dan memungkinkan pengguna untuk memesan NFT dengan antarmuka yang mudah dipahami.",
    tech: ["HTML", "CSS", "JavaScript", "Web3 UI"],
    category: "Frontend",
    gradient: "from-[#010736] to-[#22396F]",
    icon: "🎨",
    github: "https://github.com/ilyfauzan/ilyfauzan.github.io",
    demo: "https://ilyfauzan.github.io",
  },
];

const categories = ["All", "Web Dev", "AI & ML", "Frontend"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

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
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group flex flex-col bg-[#0D1C42] rounded-2xl border border-[#22396F]/30 overflow-hidden hover:border-[#FCF1D0]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(34,57,111,0.35)]"
              >
                {/* Card banner */}
                <div className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden flex-shrink-0`}>
                  <span className="text-5xl z-10 transition-transform duration-300 group-hover:scale-110">{project.icon}</span>
                  {/* Decorative circles */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#FCF1D0]/5" />
                  <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-[#FCF1D0]/5" />
                  {/* Category badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#010736]/70 backdrop-blur-md text-[#FCF1D0]/80 text-xs rounded-full border border-[#22396F]/40">
                    {project.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#FCF1D0] mb-2 group-hover:text-[#FCF1D0]">
                      {project.title}
                    </h3>

                    <p className="text-[#FCF1D0]/70 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-[#22396F]/30 text-[#FCF1D0]/80 text-xs rounded border border-[#22396F]/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-3 border-t border-[#22396F]/30">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[#FCF1D0]/70 hover:text-[#FCF1D0] transition-colors duration-200 font-medium"
                      >
                        <GithubIcon size={14} />
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[#FCF1D0]/70 hover:text-[#FCF1D0] transition-colors duration-200 font-medium"
                      >
                        <ExternalLink size={14} />
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View more */}
        <Reveal delay={0.3} className="text-center mt-12">
          <a
            href="https://github.com/ilyfauzan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#FCF1D0]/60 hover:text-[#FCF1D0] transition-colors duration-300 text-sm font-medium group"
          >
            Lihat semua repository di GitHub @ilyfauzan
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

