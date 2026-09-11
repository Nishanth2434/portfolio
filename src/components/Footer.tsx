'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import nishanthPhoto from '@/assets/nishanth.jpg';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-ink-border overflow-hidden bg-ink-900">
      <div className="container-px py-16 sm:py-20 relative grid sm:grid-cols-3 gap-12 sm:gap-20 items-center z-10">
        {/* Navigation Column */}
        <nav className="grid grid-cols-2 gap-x-8 gap-y-3 font-mono text-xs sm:text-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-paper-500 hover:text-mint-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Center Developer Spotlight */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-mint-400 shadow-lg shadow-mint-500/20 mb-3 bg-ink-800">
            <Image
              src={nishanthPhoto}
              alt="Nishanth B."
              width={64}
              height={64}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <p className="font-display text-lg font-semibold text-paper-100">
            Nishanth B.
          </p>
          <p className="font-mono text-xs text-mint-400 uppercase tracking-wide mt-1">
            CSE Student · Developer · AI Enthusiast
          </p>
          <p className="text-paper-500 text-xs sm:text-sm italic mt-2">
            &ldquo;Building practical technology &amp; real-world solutions.&rdquo;
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center justify-center sm:justify-end gap-3">
          <a
            href="https://github.com/Nishanth2434"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full border border-ink-border flex items-center justify-center text-paper-300 hover:text-mint-400 hover:border-mint-400 transition-all duration-300 icon-hover-glow"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/nishanth-b-24b2006a"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full border border-ink-border flex items-center justify-center text-paper-300 hover:text-mint-400 hover:border-mint-400 transition-all duration-300 icon-hover-glow"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="mailto:nishanthbnishu24@gmail.com"
            aria-label="Email Nishanth B."
            className="w-10 h-10 rounded-full border border-ink-border flex items-center justify-center text-paper-300 hover:text-mint-400 hover:border-mint-400 transition-all duration-300 icon-hover-glow"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href="tel:+916360997180"
            aria-label="Call Nishanth B."
            className="w-10 h-10 rounded-full border border-ink-border flex items-center justify-center text-paper-300 hover:text-mint-400 hover:border-mint-400 transition-all duration-300 icon-hover-glow"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-10 h-10 rounded-full border border-ink-border flex items-center justify-center text-paper-300 hover:text-mint-400 hover:border-mint-400 transition-all duration-300 icon-hover-glow"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Copyright Notice */}
      <p className="relative container-px pb-8 text-center font-mono text-xs text-paper-500 z-10">
        © 2026 Nishanth B. All rights reserved. Built with Next.js, React &amp; Tailwind CSS.
      </p>

      {/* Large Ambient Watermark strictly in background */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold text-[18vw] leading-none whitespace-nowrap z-0 footer-watermark"
      >
        NISHANTH
      </div>
    </footer>
  );
}
