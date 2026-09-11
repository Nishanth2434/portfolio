'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { useReveal } from '@/hooks/useReveal';
import confetti from 'canvas-confetti';
import { CONTACT_CHANNELS } from '@/data/portfolioData';

const CHANNEL_ICONS: Record<string, React.ReactNode> = {
  Mail: <Mail className="w-5 h-5 text-mint-400" />,
  Github: <GithubIcon className="w-5 h-5 text-mint-400" />,
  Linkedin: <LinkedinIcon className="w-5 h-5 text-mint-400" />,
  Phone: <Phone className="w-5 h-5 text-mint-400" />,
};

export default function Contact() {
  const revealRef = useReveal(0.12);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopy = (label: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMessage(null);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '0ccbf3a0-e17f-47c7-9671-d89796cf1392';

    // If Web3Forms Access Key is configured, submit directly via Web3Forms API
    if (accessKey && accessKey.trim() !== '') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey.trim(),
            name: formData.name,
            email: formData.email,
            message: formData.message,
            from_name: `${formData.name} (Portfolio)`,
            subject: `New Portfolio Message from ${formData.name}`,
          }),
        });

        const result = await response.json();

        if (result.success) {
          setLoading(false);
          setSubmitted(true);
          try {
            confetti({
              particleCount: 60,
              spread: 55,
              origin: { y: 0.8 },
            });
          } catch {
            // fallback
          }
          return;
        } else {
          console.warn('Web3Forms returned non-success:', result);
          // Fallback to mailto
        }
      } catch (err) {
        console.error('Web3Forms network error:', err);
      }
    }

    // Direct mailto fallback so no message is ever lost
    const mailtoUrl = `mailto:nishanthbnishu24@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hello Nishanth,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from your portfolio website.`
    )}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 55,
          origin: { y: 0.8 },
        });
      } catch {
        // fallback
      }
    }, 400);
  };

  return (
    <section id="contact" className="container-px py-16 sm:py-24">
      <div ref={revealRef} className="reveal grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
        {/* Left Column */}
        <div>
          <p className="eyebrow mb-4">Get in Touch</p>
          <h2 className="section-heading">
            Let&apos;s Build <span className="text-mint-400">Something Together</span>
          </h2>
          <p className="section-sub">
            Have a project idea, want to collaborate on AI or software solutions, or just want to connect? My inbox is open.
          </p>

          {/* Contact Channels List */}
          <div className="mt-8 space-y-3">
            {CONTACT_CHANNELS.map((channel) => (
              <div
                key={channel.label}
                className="card p-4 flex items-center justify-between card-hover-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-10 h-10 rounded-xl bg-ink-850 border border-ink-border flex items-center justify-center shrink-0">
                    {CHANNEL_ICONS[channel.icon] || <Mail className="w-4 h-4 text-mint-400" />}
                  </span>
                  <div>
                    <span className="font-mono text-[11px] text-paper-500 uppercase tracking-wider block">
                      {channel.label}
                    </span>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-mono text-xs sm:text-sm text-paper-100 hover:text-mint-400 transition-colors block"
                    >
                      {channel.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleCopy(channel.label, channel.value)}
                    className="p-2 rounded-lg text-paper-500 hover:text-mint-400 transition-colors"
                    title={`Copy ${channel.label}`}
                  >
                    {copiedKey === channel.label ? (
                      <Check className="w-4 h-4 text-mint-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2 rounded-lg text-paper-500 hover:text-mint-400 transition-colors"
                    title="Open Link"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="card p-6 sm:p-8 card-hover-glow transition-all duration-300">
          <h3 className="font-display text-xl font-semibold text-paper-100 mb-2">
            Send a Message
          </h3>
          <p className="font-mono text-xs text-paper-500 mb-6">
            Fill out the form below to get in touch directly.
          </p>

          {submitted ? (
            <div className="p-8 text-center space-y-3 bg-mint-500/10 border border-mint-500/30 rounded-2xl animate-fade-up">
              <div className="w-12 h-12 rounded-full bg-mint-400/20 text-mint-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-display text-lg font-semibold text-paper-100">
                Message Sent Successfully!
              </h4>
              <p className="font-mono text-xs text-paper-300">
                Thank you, <strong>{formData.name}</strong>. I will get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="mt-4 px-4 py-2 rounded-full font-mono text-xs text-mint-400 border border-mint-500/30 hover:bg-mint-500/10 transition-colors"
              >
                Send another note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-paper-300 mb-1.5">
                  Your Name <span className="text-mint-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nishanth"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl bg-ink-850 border border-ink-border px-4 py-3 text-sm font-mono text-paper-100 placeholder:text-paper-500 outline-none form-hover-glow transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-paper-300 mb-1.5">
                  Your Email <span className="text-mint-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. contact@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl bg-ink-850 border border-ink-border px-4 py-3 text-sm font-mono text-paper-100 placeholder:text-paper-500 outline-none form-hover-glow transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-paper-300 mb-1.5">
                  Message <span className="text-mint-400">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project, idea, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl bg-ink-850 border border-ink-border px-4 py-3 text-sm font-mono text-paper-100 placeholder:text-paper-500 outline-none form-hover-glow transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold bg-mint-400 text-ink-950 hover:bg-mint-500 shadow-lg shadow-mint-500/20 hover:shadow-mint-500/35 transition-all duration-300 disabled:opacity-60"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
