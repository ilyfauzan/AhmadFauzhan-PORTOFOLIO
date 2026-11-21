"use client";

interface SkillCategory {
  category: string;
  description: string;
  items: { name: string; focus: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Bahasa Pemrograman & Web",
    description: "Bahasa utama yang digunakan untuk membangun logika antarmuka dan backend.",
    items: [
      { name: "HTML5 & CSS3", focus: "Semantic markup, responsive layout, modern styling" },
      { name: "JavaScript", focus: "ES6+, DOM manipulation, asynchronous flow" },
      { name: "Python", focus: "Machine learning integration, script processing" },
      { name: "Java", focus: "Object-oriented programming, data structures" },
    ],
  },
  {
    category: "Framework & Database",
    description: "Framework pendukung arsitektur web dan manajemen data relasional.",
    items: [
      { name: "Next.js & React", focus: "Component architecture, routing, UI state" },
      { name: "Tailwind CSS", focus: "Utility-first design system, responsive styling" },
      { name: "Laravel", focus: "Full-stack MVC development, routing, backend services" },
      { name: "MySQL", focus: "Relational database design, query optimization, CRUD" },
    ],
  },
  {
    category: "Alat Pengembangan & Produktivitas",
    description: "Software dan environment kerja harian untuk kolaborasi dan dokumentasi.",
    items: [
      { name: "Git & GitHub", focus: "Version control, branching, repository management" },
      { name: "Visual Studio Code", focus: "Primary code editor, debugging, extension ecosystem" },
      { name: "Microsoft Office Suite", focus: "Word, Excel, PowerPoint untuk pelaporan dan data" },
      { name: "Google Workspace", focus: "Docs, Sheets, Slides untuk kolaborasi daring" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#010736] border-b border-[#22396F]/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#FCF1D0]/60 mb-2 font-mono">Kompetensi Teknis</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#FCF1D0]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Keahlian &amp; Perangkat
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-xl bg-[#0D1C42]/50 border border-[#22396F]/40 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-[#FCF1D0] mb-2">{cat.category}</h3>
                <p className="text-xs text-[#FCF1D0]/70 mb-5 leading-relaxed">{cat.description}</p>

                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item.name} className="pb-2.5 border-b border-[#22396F]/25 last:border-none last:pb-0">
                      <p className="text-sm font-medium text-[#FCF1D0]">{item.name}</p>
                      <p className="text-xs text-[#FCF1D0]/60 mt-0.5">{item.focus}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

