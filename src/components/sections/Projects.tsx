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
  tech: string[];
  category: string;
  github: string;
  demo?: string;
  role: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cegah Grooming (AI-Based)",
    description: "Sistem deteksi dini online grooming yang menganalisis alur percakapan digital secara kontekstual untuk mengenali indikasi manipulasi predator terhadap anak.",
    tech: ["Python", "Natural Language Processing", "Machine Learning", "Web Architecture"],
    category: "AI & ML",
    role: "Pengembang Model & Integrasi",
    github: "https://github.com/ilyfauzan/CegahGrooming",
  },
  {
    id: 2,
    title: "EcoActivity",
    description: "Aplikasi yang memberikan rekomendasi aktivitas berdasarkan kondisi cuaca langsung (Weather API) yang dipadukan dengan model klasifikasi machine learning.",
    tech: ["Python", "Machine Learning", "REST API", "Weather API"],
    category: "AI & ML",
    role: "Integrasi API & Algoritma",
    github: "https://github.com/ilyfauzan/EcoActivity",
  },
  {
    id: 3,
    title: "Zolve Digital",
    description: "Platform web penyedia format dan template kerja administratif terstruktur untuk mempercepat pembuatan dokumen operasional secara efisien dan rapi.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    category: "Web Dev",
    role: "Front-End Developer",
    github: "https://github.com/ilyfauzan/ZolveDigital",
  },
  {
    id: 4,
    title: "TrekkerTech",
    description: "Sistem web rekomendasi pariwisata yang memudahkan wisatawan menjelajahi destinasi liburan beserta fasilitas, ulasan, dan detail akses lokasi.",
    tech: ["JavaScript", "Web Application", "UI/UX Implementation"],
    category: "Web Dev",
    role: "Front-End & Flow Design",
    github: "https://github.com/ilyfauzan/TrekkerTech",
  },
  {
    id: 5,
    title: "Mini Ecommerce",
    description: "Aplikasi belanja berbasis web menggunakan arsitektur MVC Laravel dengan manajemen katalog produk, sesi keranjang belanja, dan sistem checkout.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    category: "Web Dev",
    role: "Full-Stack Developer",
    github: "https://github.com/ilyfauzan/Mini-Ecommerce",
  },
  {
    id: 6,
    title: "Landing Page NFT",
    description: "Antarmuka landing page responsif bertema Web3 yang menyajikan pengenalan ekosistem NFT serta tata cara pemesanan aset digital secara terarah.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend",
    role: "UI Developer",
    github: "https://github.com/ilyfauzan/ilyfauzan.github.io",
    demo: "https://ilyfauzan.github.io",
  },
];

const categories = ["Semua", "Web Dev", "AI & ML", "Frontend"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = activeCategory === "Semua"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-[#0D1C42]/50 border-b border-[#22396F]/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#FCF1D0]/60 mb-2 font-mono">Portofolio Kerja</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#FCF1D0]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Proyek yang Dikerjakan
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-[#FCF1D0] text-[#010736]"
                    : "bg-[#010736] text-[#FCF1D0]/70 border border-[#22396F]/50 hover:border-[#FCF1D0]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 rounded-xl bg-[#010736] border border-[#22396F]/40 hover:border-[#FCF1D0]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono text-[#FCF1D0]/60">{project.category}</span>
                  <span className="text-[#FCF1D0]/50">{project.role}</span>
                </div>

                <h3 className="text-lg font-semibold text-[#FCF1D0] mb-2.5">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#FCF1D0]/70 leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded bg-[#0D1C42] border border-[#22396F]/40 text-[#FCF1D0]/75 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-[#22396F]/30 text-xs">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#FCF1D0]/80 hover:text-[#FCF1D0] font-medium transition-colors"
                  >
                    <GithubIcon size={14} />
                    <span>Kode Repositori</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[#FCF1D0]/80 hover:text-[#FCF1D0] font-medium transition-colors"
                    >
                      <ExternalLink size={13} />
                      <span>Demo Langsung</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/ilyfauzan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#FCF1D0]/80 hover:text-[#FCF1D0] font-medium transition-colors"
          >
            <span>Seluruh repositori dan source code terbuka dapat dilihat di GitHub @ilyfauzan</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

