"use client";

import Reveal from "../Reveal";

const experiences = [
  {
    type: "work",
    role: "Coding Camp Front-End and Back-End Developer",
    division: "TEKNOLOGI INFORMASI DAN KOMUNIKASI",
    company: "Dicoding x DBS Foundation",
    duration: "Februari 2025 – Juni 2025",
    description:
      "Coding Camp Front-End and Back-End Developer merupakan program pelatihan intensif yang diselenggarakan oleh Dicoding bersama DBS Foundation untuk mengembangkan keterampilan talenta digital Indonesia di bidang rekayasa perangkat lunak. Program ini dirancang untuk membekali peserta dengan kompetensi komprehensif dalam pengembangan aplikasi web modern, mulai dari perancangan antarmuka pengguna (front-end) hingga logika sisi server dan basis data (back-end) sesuai standar kebutuhan industri teknologi.",
    tags: [
      "Front-End",
      "Back-End",
      "Dicoding",
      "DBS Foundation",
      "Software Engineering",
    ],
    icon: "🏛️",
  },
  {
    type: "education",
    role: "S1 Sistem Informasi",
    division: "FAKULTAS MATEMATIKA DAN ILMU PENGETAHUAN ALAM",
    company: "Universitas Hasanuddin (Unhas)",
    duration: "2022 – 2026",
    description:
      "Menempuh pendidikan sarjana Sistem Informasi dengan IPK 3.78. Aktif mengembangkan keterampilan di bidang pemrograman web, machine learning, basis data, dan analisis sistem informasi.",
    tags: ["Sistem Informasi", "IPK 3.78", "Unhas", "Makassar"],
    icon: "🎓",
  },
  {
    type: "work",
    role: "Front End & Web Developer",
    division: "PORTFOLIO & PROJECTS",
    company: "Personal & Academic Projects",
    duration: "2022 – Present",
    description:
      "Merancang dan mengembangkan berbagai aplikasi web interaktif, sistem deteksi dini online grooming berbasis AI, integrasi API cuaca real-time, landing page NFT, dan platform rekomendasi wisata.",
    tags: ["HTML/CSS/JS", "Python", "API", "Laravel", "MySQL"],
    icon: "💻",
  },
];

const typeColors = {
  work: "bg-[#22396F]/20 border-[#22396F]/40 text-[#FCF1D0]",
  education: "bg-[#0D1C42]/60 border-[#22396F]/40 text-[#FCF1D0]",
  achievement: "bg-[#010736]/60 border-[#22396F]/40 text-[#FCF1D0]",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0D1C42] relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#22396F] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#22396F] to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#FCF1D0]/50 mb-3">My journey</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#FCF1D0]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experience
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-[#22396F]" />
            <div className="w-2 h-2 rounded-full bg-[#FCF1D0]" />
            <div className="h-px w-12 bg-[#22396F]" />
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#22396F] via-[#22396F]/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <Reveal
                key={i}
                delay={i * 0.1}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  {/* Connector dot */}
                  <div
                    className={`absolute top-6 hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-[#FCF1D0] border-4 border-[#0D1C42] ${
                      i % 2 === 0 ? "-right-[calc(2rem+0.5rem)]" : "-left-[calc(2rem+0.5rem)]"
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`p-6 rounded-2xl border ${typeColors[exp.type as keyof typeof typeColors]} hover:border-[#FCF1D0]/30 transition-all duration-300 group hover:-translate-y-1`}
                  >
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{exp.icon}</span>
                        <div>
                          <h3 className="font-semibold text-[#FCF1D0] text-base">{exp.role}</h3>
                          <p className="text-[#FCF1D0]/80 text-xs tracking-wider uppercase font-medium">{exp.division}</p>
                          <p className="text-[#FCF1D0]/60 text-sm">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-xs text-[#FCF1D0]/60 font-mono bg-[#22396F]/30 border border-[#22396F]/40 px-3 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-[#FCF1D0]/70 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-[#22396F]/20 text-[#FCF1D0]/60 rounded border border-[#22396F]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

