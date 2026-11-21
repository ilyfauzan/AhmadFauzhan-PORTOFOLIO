"use client";

import { Mail } from "lucide-react";
import { GithubIcon, InstagramIcon } from "./SocialIcons";

const navLinks = [
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Keahlian" },
  { href: "#projects", label: "Proyek" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#contact", label: "Kontak" },
];

const socials = [
  { icon: GithubIcon, href: "https://github.com/ilyfauzan/", label: "GitHub" },
  { icon: InstagramIcon, href: "https://www.instagram.com/znfaauzan", label: "Instagram" },
  { icon: Mail, href: "mailto:ahmdfauzanrr@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0D1C42] border-t border-[#22396F]/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Identity */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-[#FCF1D0]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              AF.
            </a>
            <p className="text-[#FCF1D0]/60 text-xs mt-1">
              Ahmad Fauzhan · Sistem Informasi UNHAS
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#FCF1D0]/60 hover:text-[#FCF1D0] text-xs uppercase tracking-wider transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="w-8 h-8 rounded bg-[#010736] border border-[#22396F]/40 flex items-center justify-center text-[#FCF1D0]/70 hover:text-[#FCF1D0] hover:border-[#FCF1D0]/50 transition-colors duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-6 border-t border-[#22396F]/20 text-center">
          <p className="text-[#FCF1D0]/40 text-xs">
            © {new Date().getFullYear()} Ahmad Fauzhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
