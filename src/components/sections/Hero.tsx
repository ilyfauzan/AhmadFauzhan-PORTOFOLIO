"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../SocialIcons";
import ParticlesBackground from "../ParticlesBackground";

const roles = [
  "Front End Developer",
  "Tech Enthusiast",
  "Web Developer",
  "Information Systems Student",
];

export default function Hero() {
  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/ilyfauzan/", label: "GitHub" },
    { icon: InstagramIcon, href: "https://www.instagram.com/znfaauzan", label: "Instagram" },
    { icon: Mail, href: "mailto:ahmdfauzanrr@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center bg-[#010736] pt-24 pb-16"
    >
      <ParticlesBackground />

      {/* Main content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
        <p className="text-xs sm:text-sm font-mono tracking-wider text-[#FCF1D0]/70 mb-4">
          Makassar, Sulawesi Selatan &middot; S1 Sistem Informasi UNHAS
        </p>

        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FCF1D0] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ahmad Fauzhan
        </h1>

        <p className="text-lg sm:text-xl text-[#FCF1D0]/90 font-medium mb-4">
          Front End Developer &amp; Tech Enthusiast
        </p>

        <p className="text-sm sm:text-base text-[#FCF1D0]/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Mengembangkan aplikasi web interaktif, sistem antarmuka berbasis data, serta integrasi machine learning dan API cuaca hingga sistem deteksi proteksi digital.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#FCF1D0] text-[#010736] text-sm font-semibold rounded-lg hover:bg-[#22396F] hover:text-[#FCF1D0] transition-colors duration-200"
          >
            Lihat Proyek
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 border border-[#22396F] bg-[#0D1C42]/50 text-[#FCF1D0] text-sm font-medium rounded-lg hover:border-[#FCF1D0]/60 hover:bg-[#0D1C42] transition-colors duration-200"
          >
            Unduh CV (PDF)
          </a>
        </div>

        {/* Social connections */}
        <div className="flex justify-center items-center gap-6 pt-4 border-t border-[#22396F]/30 text-xs text-[#FCF1D0]/70">
          <span>Temukan saya di:</span>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="flex items-center gap-1.5 text-[#FCF1D0]/80 hover:text-[#FCF1D0] transition-colors"
              >
                <Icon size={16} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

