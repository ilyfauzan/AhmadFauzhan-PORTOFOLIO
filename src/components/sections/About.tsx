"use client";

import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0D1C42]/50 border-t border-b border-[#22396F]/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#FCF1D0]/60 mb-2 font-mono">Profil Singkat</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#FCF1D0]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tentang Saya
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left: Bio info */}
          <div className="md:col-span-7 space-y-5 text-[#FCF1D0]/80 leading-relaxed text-sm sm:text-base">
            <p>
              Halo, saya <span className="text-[#FCF1D0] font-semibold">Ahmad Fauzhan</span>, mahasiswa S1 Sistem Informasi Universitas Hasanuddin angkatan 2022 (IPK 3.78) yang berdomisili di Makassar, Sulawesi Selatan.
            </p>
            <p>
              Fokus utama saya adalah perancangan antarmuka web (front-end development), integrasi REST API, dan perpaduan antarmuka dengan teknologi kecerdasan buatan serta sistem berbasis data.
            </p>
            <p>
              Saya menyukai eksplorasi teknologi baru, menulis kode yang terstruktur, dan mengubah kebutuhan pengguna menjadi produk web fungsional yang mudah digunakan.
            </p>

            <div className="pt-3">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FCF1D0] text-[#010736] text-sm font-semibold rounded-lg hover:bg-[#22396F] hover:text-[#FCF1D0] transition-colors"
              >
                <Download size={15} />
                Unduh Curriculum Vitae
              </a>
            </div>
          </div>

          {/* Right: Foto asli */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-56 sm:w-64 rounded-xl border border-[#22396F]/60 bg-[#010736] p-3 shadow-md">
              <img
                src="/fotosayabaru.png"
                alt="Ahmad Fauzhan"
                className="w-full h-72 object-cover object-top rounded-lg bg-[#0D1C42]"
              />
              <div className="pt-3 text-center">
                <p className="text-sm font-semibold text-[#FCF1D0]">Ahmad Fauzhan</p>
                <p className="text-xs text-[#FCF1D0]/60 font-mono mt-0.5">S1 Sistem Informasi UNHAS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fact Sheet: Info akademik nyata, bukan counter palsu */}
        <div className="mt-14 pt-8 border-t border-[#22396F]/30 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-[#010736]/60 border border-[#22396F]/40">
            <p className="text-xs text-[#FCF1D0]/60 uppercase font-mono">Pendidikan</p>
            <p className="text-base font-semibold text-[#FCF1D0] mt-1">S1 Sistem Informasi</p>
            <p className="text-xs text-[#FCF1D0]/70 mt-0.5">Universitas Hasanuddin</p>
          </div>
          <div className="p-4 rounded-lg bg-[#010736]/60 border border-[#22396F]/40">
            <p className="text-xs text-[#FCF1D0]/60 uppercase font-mono">Indeks Prestasi Kumulatif</p>
            <p className="text-xl font-bold text-[#FCF1D0] mt-1">3.78</p>
            <p className="text-xs text-[#FCF1D0]/70 mt-0.5">Skala 4.00</p>
          </div>
          <div className="p-4 rounded-lg bg-[#010736]/60 border border-[#22396F]/40">
            <p className="text-xs text-[#FCF1D0]/60 uppercase font-mono">Tahun Angkatan</p>
            <p className="text-base font-semibold text-[#FCF1D0] mt-1">2022 &ndash; 2026</p>
            <p className="text-xs text-[#FCF1D0]/70 mt-0.5">Mahasiswa Aktif</p>
          </div>
          <div className="p-4 rounded-lg bg-[#010736]/60 border border-[#22396F]/40">
            <p className="text-xs text-[#FCF1D0]/60 uppercase font-mono">Domisili</p>
            <p className="text-base font-semibold text-[#FCF1D0] mt-1">Makassar</p>
            <p className="text-xs text-[#FCF1D0]/70 mt-0.5">Sulawesi Selatan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

