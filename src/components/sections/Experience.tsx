"use client";

interface ExperienceItem {
  role: string;
  division: string;
  company: string;
  duration: string;
  description: string;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Coding Camp Front-End and Back-End Developer",
    division: "Teknologi Informasi dan Komunikasi",
    company: "Dicoding x DBS Foundation",
    duration: "Februari 2025 – Juni 2025",
    description:
      "Program pelatihan intensif rekayasa perangkat lunak modern untuk menguasai kompetensi front-end dan back-end web development sesuai standar industri teknologi.",
    tags: ["Front-End", "Back-End", "Dicoding", "DBS Foundation", "Web Engineering"],
  },
  {
    role: "S1 Sistem Informasi",
    division: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
    company: "Universitas Hasanuddin (Unhas)",
    duration: "2022 – 2026",
    description:
      "Menempuh pendidikan sarjana Sistem Informasi dengan IPK 3.78. Mendalami rekayasa web, manajemen basis data, algoritma machine learning, serta tata kelola sistem informasi.",
    tags: ["Sistem Informasi", "IPK 3.78", "Universitas Hasanuddin", "Makassar"],
  },
  {
    role: "Front End & Web Project Developer",
    division: "Academic & Personal Projects",
    company: "Portofolio Mandiri",
    duration: "2022 – Sekarang",
    description:
      "Membangun berbagai solusi web fungsional mencakup sistem deteksi manipulasi online grooming anak berbasis AI, integrasi API cuaca dinamis, web administratif Zolve Digital, dan arsitektur Laravel MVC.",
    tags: ["Next.js", "JavaScript", "Python AI", "Laravel", "REST API", "MySQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#010736] border-b border-[#22396F]/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#FCF1D0]/60 mb-2 font-mono">Riwayat &amp; Pelatihan</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#FCF1D0]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pengalaman &amp; Pendidikan
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-[#22396F]/40 bg-[#0D1C42]/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#FCF1D0]">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-mono text-[#FCF1D0]/70 mt-0.5">
                    {exp.company} &middot; <span className="text-[#FCF1D0]/50">{exp.division}</span>
                  </p>
                </div>
                <span className="text-xs font-mono text-[#FCF1D0]/70 bg-[#010736] px-2.5 py-1 rounded border border-[#22396F]/50 w-fit">
                  {exp.duration}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#FCF1D0]/80 leading-relaxed my-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#22396F]/25">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs bg-[#010736] text-[#FCF1D0]/70 rounded font-mono border border-[#22396F]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

