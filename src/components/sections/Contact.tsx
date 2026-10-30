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
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmdfauzanrr@gmail.com",
      href: "mailto:ahmdfauzanrr@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "081243096168",
      href: "https://wa.me/6281243096168",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Makassar, Sulawesi Selatan",
      href: null,
    },
  ];

  const socials = [
    { icon: GithubIcon, href: "https://github.com/ilyfauzan/", label: "GitHub" },
    { icon: InstagramIcon, href: "https://www.instagram.com/znfaauzan", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-24 bg-[#010736] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#22396F]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0D1C42]/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#FCF1D0]/50 mb-3">Let&apos;s talk</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#FCF1D0]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get In Touch
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-[#22396F]" />
            <div className="w-2 h-2 rounded-full bg-[#FCF1D0]" />
            <div className="h-px w-12 bg-[#22396F]" />
          </div>
          <p className="text-[#FCF1D0]/50 mt-6 text-sm max-w-md mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            Send me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left: Contact info */}
          <div className="md:col-span-2 space-y-6">
            <Reveal direction="left">
              <h3 className="text-xl font-semibold text-[#FCF1D0] mb-6">
                Contact Information
              </h3>
            </Reveal>

            {contactInfo.map((info, i) => (
              <Reveal key={i} delay={i * 0.1} direction="left">
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#0D1C42] border border-[#22396F]/40 flex items-center justify-center flex-shrink-0 group-hover:border-[#FCF1D0]/30 transition-all duration-300">
                    <info.icon size={18} className="text-[#FCF1D0]/70" />
                  </div>
                  <div>
                    <p className="text-[#FCF1D0]/40 text-xs uppercase tracking-wider">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-[#FCF1D0] text-sm font-medium hover:text-[#FCF1D0]/70 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#FCF1D0] text-sm font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Social links */}
            <Reveal delay={0.3} direction="left">
              <div className="mt-8 pt-6 border-t border-[#22396F]/20">
                <p className="text-[#FCF1D0]/40 text-xs uppercase tracking-wider mb-4">
                  Follow Me
                </p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label}
                      className="w-10 h-10 rounded-xl bg-[#0D1C42] border border-[#22396F]/40 flex items-center justify-center text-[#FCF1D0]/60 hover:text-[#FCF1D0] hover:border-[#FCF1D0]/30 hover:-translate-y-1 transition-all duration-300"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal delay={0.2} direction="right" className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-[#0D1C42]/60 rounded-2xl border border-[#22396F]/20 p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-[#FCF1D0]/50 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[#010736] border border-[#22396F]/30 rounded-xl text-[#FCF1D0] placeholder-[#FCF1D0]/20 text-sm focus:outline-none focus:border-[#FCF1D0]/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#FCF1D0]/50 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@email.com"
                    className="w-full px-4 py-3 bg-[#010736] border border-[#22396F]/30 rounded-xl text-[#FCF1D0] placeholder-[#FCF1D0]/20 text-sm focus:outline-none focus:border-[#FCF1D0]/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#FCF1D0]/50 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project collaboration"
                  className="w-full px-4 py-3 bg-[#010736] border border-[#22396F]/30 rounded-xl text-[#FCF1D0] placeholder-[#FCF1D0]/20 text-sm focus:outline-none focus:border-[#FCF1D0]/50 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs text-[#FCF1D0]/50 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-[#010736] border border-[#22396F]/30 rounded-xl text-[#FCF1D0] placeholder-[#FCF1D0]/20 text-sm focus:outline-none focus:border-[#FCF1D0]/50 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#FCF1D0] text-[#010736] font-semibold rounded-xl hover:bg-[#22396F] hover:text-[#FCF1D0] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#010736]/30 border-t-[#010736] rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

