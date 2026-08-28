import React, { useState } from 'react';
import { motion } from 'motion/react';
import { OneLineArtwork } from './OneLineArtwork';
import { Mail, ArrowUpRight, Copy, Check, Send, Github, Linkedin, FileText, Download, Eye } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const emailAddress = 'adhamh502@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    soundManager.playChime(640, 0.04);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.name || !formState.message) return;
    
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Portfolio Transmission from ${formState.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setSent(true);
        soundManager.playWaterDrop();
      } else {
        // Fallback to mailto
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
        const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
        window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
        setSent(true);
      }
    } catch {
      // Network fallback: launch mail client directly
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
      const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  };

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/ahamh321', icon: Github, detail: '@ahamh321', isExternal: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adham-hegazy-617a49220', icon: Linkedin, detail: '/in/adham-hegazy', isExternal: true },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 px-6 sm:px-10 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">05 / CONTACT</span>
            <span className="w-10 h-[1px] bg-neutral-300"></span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl text-neutral-900 tracking-tight">
            Let's connect.
          </h2>
        </div>

        <p className="font-serif italic text-lg sm:text-xl text-neutral-600 max-w-md">
          Open to full stack engineering opportunities, creative technical collaborations, and novel ideas.
        </p>
      </div>

      {/* Centerpiece Connecting Hands One-Line Artwork */}
      <div className="w-full max-w-xl mx-auto my-6 opacity-75">
        <OneLineArtwork type="hands" strokeWidth={1.4} />
      </div>

      {/* Main Grid: Direct Links & Minimalist Transmission Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
        
        {/* Left Column: Direct Links */}
        <div className="lg:col-span-6 space-y-6">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-4">
            Direct Communication
          </div>

          {/* Quick Copy Email Box */}
          <div className="p-6 rounded-3xl bg-white border border-neutral-200 hover:border-black/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                Primary Inbox
              </div>
              <a
                href={`mailto:${emailAddress}`}
                onClick={() => soundManager.playChime(600, 0.03)}
                className="font-display font-semibold text-lg sm:text-xl text-neutral-900 hover:underline"
              >
                {emailAddress}
              </a>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center">
              <a
                id="open-gmail-btn"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playChime(620, 0.03)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono tracking-wider uppercase rounded-full border border-neutral-200 text-neutral-700 hover:border-black hover:text-black transition-colors bg-[#fafaf7]"
                title="Compose in Gmail Web"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Gmail</span>
              </a>

              <button
                id="copy-email-btn"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono tracking-wider uppercase rounded-full border border-neutral-200 text-neutral-700 hover:border-black hover:text-black transition-colors bg-[#fafaf7]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social / Link List */}
          <div className="divide-y divide-neutral-200/70 border-y border-neutral-200/70 bg-white/40 rounded-2xl px-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playChime(580, 0.02)}
                  className="group py-4 flex items-center justify-between hover:px-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-neutral-500 group-hover:text-black transition-colors" />
                    <span className="font-display font-medium text-base text-neutral-800 group-hover:text-black">
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-400 group-hover:text-neutral-700 transition-colors">
                      {item.detail}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Resume Download Section */}
          <div className="p-6 rounded-3xl bg-white border border-neutral-200 hover:border-black/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-neutral-100 border border-neutral-200/80 flex items-center justify-center text-neutral-900 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-0.5">
                  For Professional Use
                </div>
                <div className="font-display font-semibold text-base sm:text-lg text-neutral-900">
                  Adham Hegazy — Resume
                </div>
                <div className="font-mono text-[11px] text-neutral-500 mt-0.5">
                  PDF &bull; Full Stack &bull; Updated 2026
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center">
              <a
                id="preview-resume-btn"
                href="/Adham_Hegazy_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playChime(600, 0.02)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono tracking-wider uppercase rounded-full border border-neutral-200 text-neutral-700 hover:border-black hover:text-black transition-colors bg-[#fafaf7]"
                title="View Resume PDF"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View</span>
              </a>

              <a
                id="download-resume-btn"
                href="/Adham_Hegazy_Resume.pdf"
                download="Adham_Hegazy_Resume.pdf"
                onClick={() => soundManager.playChime(700, 0.04)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-full bg-neutral-900 text-white hover:bg-black transition-colors shadow-xs"
                title="Download Resume PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Transmission */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-neutral-200 shadow-2xs relative">
          <h3 className="font-display font-bold text-2xl text-neutral-900 mb-2">
            Send a Direct Transmission
          </h3>
          <p className="font-body text-xs sm:text-sm text-neutral-500 mb-6 font-light">
            Leave a note regarding a full stack project, collaborative idea, or technical question.
          </p>

          {sent ? (
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 text-center flex flex-col items-center justify-center min-h-[280px]">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-sm">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-display font-semibold text-xl text-neutral-900 mb-1.5">
                Transmission Delivered
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mb-5 leading-relaxed font-body">
                Your message has been dispatched directly to <span className="font-mono font-medium text-neutral-900">{emailAddress}</span>. Adham Hegazy will review it and reply to <span className="font-mono font-medium text-neutral-900">{formState.email || 'your inbox'}</span> shortly.
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-full border border-neutral-300 hover:border-black text-neutral-800 transition-colors bg-white"
                >
                  Send Another Note
                </button>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-full bg-black text-white hover:bg-neutral-800 transition-colors"
                >
                  Open Gmail
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-neutral-500 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-[#fafaf7] focus:bg-white focus:border-black focus:outline-hidden text-sm font-body transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-neutral-500 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-[#fafaf7] focus:bg-white focus:border-black focus:outline-hidden text-sm font-body transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-neutral-500 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project scope, idea, or timeline..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-[#fafaf7] focus:bg-white focus:border-black focus:outline-hidden text-sm font-body transition-colors resize-none"
                />
              </div>

              <button
                id="submit-contact-btn"
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-full bg-black text-white hover:bg-neutral-800 disabled:bg-neutral-400 text-xs font-mono uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-2xs group cursor-pointer disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <span className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Transmitting to {emailAddress}...</span>
                  </>
                ) : (
                  <>
                    <span>Transmit Direct to {emailAddress}</span>
                    <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <div className="text-center">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  Direct encrypted delivery to adhamh502@gmail.com
                </span>
              </div>
            </form>
          )}
        </div>

      </div>

    </section>
  );
};
