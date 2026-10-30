"use client";

import { Mail, Heart } from "lucide-react";
import { GithubIcon, InstagramIcon } from "./SocialIcons";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { icon: GithubIcon, href: "https://github.com/ilyfauzan/", label: "GitHub" },
  { icon: InstagramIcon, href: "https://www.instagram.com/znfaauzan", label: "Instagram" },
  { icon: Mail, href: "mailto:ahmdfauzanrr@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0D1C42] border-t border-[#22396F]/20 py-12 px-6">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#22396F] to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-3xl font-black text-[#FCF1D0] gradient-text"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              AF.
            </a>
            <p className="text-[#FCF1D0]/40 text-xs mt-1 tracking-wide">
              Front End Developer &amp; Tech Enthusiast
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#FCF1D0]/50 hover:text-[#FCF1D0] text-xs uppercase tracking-widest transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="w-9 h-9 rounded-lg bg-[#010736] border border-[#22396F]/30 flex items-center justify-center text-[#FCF1D0]/50 hover:text-[#FCF1D0] hover:border-[#FCF1D0]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-[#22396F]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#FCF1D0]/30 text-xs">
            © {new Date().getFullYear()} Ahmad Fauzhan. All rights reserved.
          </p>
          <p className="text-[#FCF1D0]/30 text-xs flex items-center gap-1">
            Built with <Heart size={10} className="text-[#FCF1D0]/50" fill="currentColor" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

