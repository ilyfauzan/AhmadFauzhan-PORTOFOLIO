"use client";

import { useState, useRef } from "react";
import Reveal from "../Reveal";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../SocialIcons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Submit handler
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const contactInfo = [
    {
      label: "Email",
      value: "ahmdfauzanrr@gmail.com",
      href: "mailto:ahmdfauzanrr@gmail.com",
    },
    {
      label: "Telepon / WhatsApp",
      value: "081243096168",
      href: "https://wa.me/6281243096168",
    },
    {
      label: "Lokasi",
      value: "Makassar, Sulawesi Selatan, Indonesia",
      href: null,
    },
    {
      label: "GitHub",
      value: "github.com/ilyfauzan",
      href: "https://github.com/ilyfauzan/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0D1C42]/50 border-b border-[#22396F]/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#FCF1D0]/60 mb-2 font-mono">Komunikasi &amp; Kolaborasi</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#FCF1D0]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hubungi Saya
          </h2>
          <p className="text-[#FCF1D0]/70 text-sm mt-3 max-w-xl leading-relaxed">
            Terbuka untuk diskusi proyek web front-end, kolaborasi riset, maupun peluang magang dan karir profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left: Contact info */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-base font-semibold text-[#FCF1D0] mb-4">
              Informasi Kontak Langsung
            </h3>

            {contactInfo.map((info, i) => (
              <div key={i} className="p-3.5 rounded-lg bg-[#010736] border border-[#22396F]/40">
                <p className="text-xs text-[#FCF1D0]/60 font-mono uppercase">{info.label}</p>
                {info.href ? (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#FCF1D0] hover:underline mt-1 inline-block"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-[#FCF1D0] mt-1">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right: Form */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#010736] rounded-xl border border-[#22396F]/40 p-6 sm:p-7 space-y-4"
            >
              <h3 className="text-base font-semibold text-[#FCF1D0] mb-2">
                Kirim Pesan
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#FCF1D0]/70 mb-1.5">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nama Anda"
                    className="w-full px-3.5 py-2.5 bg-[#0D1C42] border border-[#22396F]/50 rounded-lg text-[#FCF1D0] placeholder-[#FCF1D0]/30 text-sm focus:outline-none focus:border-[#FCF1D0]/70 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#FCF1D0]/70 mb-1.5">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@domain.com"
                    className="w-full px-3.5 py-2.5 bg-[#0D1C42] border border-[#22396F]/50 rounded-lg text-[#FCF1D0] placeholder-[#FCF1D0]/30 text-sm focus:outline-none focus:border-[#FCF1D0]/70 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#FCF1D0]/70 mb-1.5">
                  Subjek
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subjek keperluan / proyek"
                  className="w-full px-3.5 py-2.5 bg-[#0D1C42] border border-[#22396F]/50 rounded-lg text-[#FCF1D0] placeholder-[#FCF1D0]/30 text-sm focus:outline-none focus:border-[#FCF1D0]/70 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#FCF1D0]/70 mb-1.5">
                  Pesan
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tuliskan pesan atau kebutuhan Anda..."
                  className="w-full px-3.5 py-2.5 bg-[#0D1C42] border border-[#22396F]/50 rounded-lg text-[#FCF1D0] placeholder-[#FCF1D0]/30 text-sm focus:outline-none focus:border-[#FCF1D0]/70 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className="w-full py-3 bg-[#FCF1D0] text-[#010736] text-sm font-semibold rounded-lg hover:bg-[#22396F] hover:text-[#FCF1D0] transition-colors disabled:opacity-60"
              >
                {sent ? "Pesan Terkirim!" : sending ? "Mengirimkan..." : "Kirimkan Pesan"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

