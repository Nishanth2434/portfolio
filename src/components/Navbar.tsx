'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import nishanthAvatar from '@/assets/nishanth.jpg';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full overflow-x-clip transition-all duration-300 ${
        scrolled
          ? 'bg-ink-900/90 backdrop-blur-md border-b border-ink-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-20 w-full min-w-0">
        {/* Brand: matching screenshot */}
        <a href="#home" className="flex items-center gap-3 group min-w-0">
          <span className="relative w-11 h-11 flex-shrink-0 rounded-xl overflow-hidden border-2 border-mint-400 shadow-[0_0_15px_rgba(79,227,194,0.35)] bg-ink-800 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
            <Image
              src={nishanthAvatar}
              alt="Nishanth B."
              width={48}
              height={48}
              priority
              className="w-full h-full object-cover object-top"
            />
          </span>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider text-paper-100 uppercase">
              N. NISHANTH
            </span>
            <span className="font-mono text-[10px] text-paper-500 uppercase tracking-wider">
              CSE STUDENT · DEV
            </span>
          </div>
        </a>

        {/* Desktop Links: exactly matching screenshot */}
        <div className="hidden lg:flex items-center gap-7 font-mono text-xs">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors relative py-1 ${
                  isActive
                    ? 'text-mint-400 font-semibold'
                    : 'text-paper-300 hover:text-mint-400'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-mint-400 rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Actions: Theme Toggle, Download CV & Let's Talk button */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />

          <a
            href="/Nishanth_B_Resume.pdf"
            download="Nishanth_B_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-mint-400/50 text-mint-400 text-xs font-mono font-medium hover:bg-mint-400/10 hover:border-mint-400 hover:shadow-[0_0_12px_rgba(79,227,194,0.3)] transition-all duration-300"
            title="Download Nishanth's Resume (PDF)"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-ink-border text-paper-100 text-xs font-mono font-medium hover:border-mint-400 hover:text-mint-400 hover:shadow-[0_0_12px_rgba(79,227,194,0.3)] transition-all duration-300 icon-hover-glow"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-full border border-ink-border flex items-center justify-center text-paper-300 hover:text-mint-400 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5 text-mint-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-ink-900/98 backdrop-blur-xl border-t border-ink-border lg:hidden flex flex-col justify-between p-6 animate-fade-up">
          <div className="space-y-1">
            <p className="font-mono text-[11px] uppercase tracking-widest text-paper-500 px-3 mb-3">
              Navigation
            </p>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-display text-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-mint-500/10 text-mint-400 border border-mint-500/20'
                      : 'text-paper-300 hover:text-paper-100 hover:bg-ink-800'
                  }`}
                >
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-ink-border space-y-3">
            <p className="font-mono text-xs text-paper-500 text-center">
              Mandya, Karnataka, India
            </p>
            <a
              href="tel:+916360997180"
              className="block font-mono text-xs text-mint-400 text-center hover:underline"
            >
              +91 63609 97180
            </a>
            <a
              href="/Nishanth_B_Resume.pdf"
              download="Nishanth_B_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-mono text-xs uppercase tracking-wider border border-mint-400/50 text-mint-400 font-semibold hover:bg-mint-400/10 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center py-3.5 rounded-full font-mono text-xs uppercase tracking-wider bg-mint-400 text-ink-950 font-bold hover:bg-mint-500 transition-colors"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
