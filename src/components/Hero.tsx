'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Download, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import Typewriter from './Typewriter';
import Marquee from './Marquee';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[36rem] h-[36rem] rounded-full bg-mint-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 -left-32 w-[24rem] h-[24rem] rounded-full bg-amber-500/5 blur-[100px]" />

      <div className="container-px relative grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="animate-fade-up">
          {/* Eyebrow */}
          <p className="eyebrow mb-6">
            Welcome to my portfolio
          </p>

          {/* Main Title */}
          <h1 className="font-display font-semibold text-[2.6rem] leading-[1.05] sm:text-6xl md:text-[4.2rem] text-paper-100 tracking-tight">
            Nishanth<br />
            <span className="bg-gradient-to-r from-mint-400 to-mint-600 bg-clip-text text-transparent">B.</span>
          </h1>

          {/* Typewriter line */}
          <div className="mt-6 h-8 font-mono text-lg sm:text-xl flex items-center">
            <span className="text-paper-500">&lt;&nbsp;</span>
            <Typewriter />
            <span className="text-paper-500">&nbsp;/&gt;</span>
          </div>

          {/* Subtitle paragraph */}
          <p className="section-sub mt-4 max-w-xl text-paper-500 text-base sm:text-lg leading-relaxed">
            I Build Practical Real-World Technology, Explore AI, and Turn Ideas into Scalable Applications with Clean, Maintainable Code.
          </p>

          {/* Action Buttons: Explore My Work + Download CV */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-mint-500 text-ink-950 font-semibold px-6 py-3.5 text-sm shadow-glow hover:bg-mint-400 transition-colors"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/Nishanth_B_Resume.pdf"
              download="Nishanth_B_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-border/40 text-paper-100 px-6 py-3.5 text-sm hover:border-mint-500/50 hover:text-mint-400 transition-colors"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Social Row: FIND ME ON */}
          <div className="mt-12 flex items-center gap-5">
            <span className="font-mono text-xs tracking-[0.2em] text-paper-500 uppercase">
              Find Me On
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Nishanth2434"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full border border-ink-border/40 flex items-center justify-center text-paper-300 hover:text-mint-400 hover:border-mint-400 transition-all duration-300 icon-hover-glow"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/nishanth-b-24b2006a"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full border border-ink-border/40 flex items-center justify-center text-paper-300 hover:text-mint-400 hover:border-mint-400 transition-all duration-300 icon-hover-glow"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:nishanthbnishu24@gmail.com"
                aria-label="Email Nishanth B."
                className="w-10 h-10 rounded-full border border-ink-border/40 flex items-center justify-center text-paper-300 hover:text-mint-400 hover:border-mint-400 transition-all duration-300 icon-hover-glow"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="tel:+916360997180"
                aria-label="Call Nishanth B."
                className="w-10 h-10 rounded-full border border-ink-border/40 flex items-center justify-center text-paper-300 hover:text-mint-400 hover:border-mint-400 transition-all duration-300 icon-hover-glow"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Live Concentric Orbit Rings + Developer Illustration + Floating Badges + whoami.js Card */}
        <div className="relative animate-fade-up [animation-delay:150ms] flex items-center justify-center">
          <div className="relative mx-auto max-w-sm sm:max-w-md aspect-square w-full flex items-center justify-center">
            {/* Ambient inner blur glow */}
            <div className="absolute inset-6 rounded-full bg-mint-500/20 blur-[70px] pointer-events-none" />

            {/* Inner dashed orbital ring (clockwise) */}
            <div className="absolute inset-0 rounded-full border border-dashed border-mint-500/25 animate-spin-slow pointer-events-none" />

            {/* Outer dashed orbital ring (counter-clockwise) */}
            <div className="absolute -inset-6 rounded-full border border-dashed border-ink-border/40 animate-spin-slow-reverse pointer-events-none" />

            {/* Center Developer Illustration */}
            <div className="relative z-10 w-[78%] aspect-square rounded-full overflow-hidden border border-mint-500/30 shadow-2xl bg-ink-850">
              <Image
                src="/hero.jpg"
                alt="Nishanth B. Developer Illustration"
                width={500}
                height={500}
                priority
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge 1: </> (Top Left) */}
            <span
              className="absolute top-2 left-0 sm:-left-2 card w-11 h-11 flex items-center justify-center font-mono text-xs text-mint-400 animate-float cursor-pointer hover:border-mint-400 hover:shadow-[0_0_12px_rgba(79,227,194,0.5),inset_0_0_12px_rgba(79,227,194,0.2)] transition-all duration-300 z-20"
              title="Code & Architecture"
            >
              &lt;/&gt;
            </span>

            {/* Floating Badge 2: { } (Right) */}
            <span
              className="absolute top-20 right-0 sm:-right-3 card w-11 h-11 flex items-center justify-center font-mono text-xs text-mint-400 animate-float cursor-pointer hover:border-mint-400 hover:shadow-[0_0_12px_rgba(79,227,194,0.5),inset_0_0_12px_rgba(79,227,194,0.2)] transition-all duration-300 z-20 [animation-delay:0.7s]"
              title="Data & Systems"
            >
              &#123; &#125;
            </span>

            {/* Floating Status Pill: Available for work (Top Right Orbit) */}
            <div className="absolute -top-4 -right-2 sm:right-2 flex items-center gap-2 card px-3.5 py-1.5 z-20 animate-float cursor-pointer hover:border-mint-400 hover:shadow-[0_0_12px_rgba(79,227,194,0.5),inset_0_0_12px_rgba(79,227,194,0.2)] transition-all duration-300">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint-500" />
              </span>
              <span className="font-mono text-[11px] text-paper-300 font-medium">
                Available for work
              </span>
            </div>

            {/* Floating whoami.js Code Card (Bottom Left of the Orbit) */}
            <div className="absolute -bottom-8 sm:-bottom-10 -left-4 sm:-left-8 w-64 sm:w-72 card p-4 animate-float [animation-delay:1s] z-20 cursor-pointer hover:border-mint-400 hover:shadow-[0_0_12px_rgba(79,227,194,0.5),inset_0_0_12px_rgba(79,227,194,0.2)] transition-all duration-300">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F2564C]" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-mint-500" />
                <span className="ml-2 font-mono text-[10px] text-paper-500">
                  whoami.js
                </span>
              </div>
              <p className="font-mono text-xs leading-relaxed text-paper-300">
                <span className="text-amber-400">const</span> dev = &#123;<br />
                &nbsp;&nbsp;name: <span className="text-mint-400">&quot;Nishanth B.&quot;</span>,<br />
                &nbsp;&nbsp;stack: <span className="text-mint-400">&quot;AI / Web / App&quot;</span>,<br />
                &nbsp;&nbsp;status: <span className="text-mint-400">&quot;Open to Work&quot;</span><br />
                &#125;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker directly integrated below Hero */}
      <div className="mt-24">
        <Marquee />
      </div>
    </section>
  );
}
