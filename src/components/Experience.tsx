'use client';

import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Code2, Sparkles, Cpu } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const EXPERIENCES = [
  {
    role: 'AI & Intelligent Systems Exploration',
    period: 'Current Focus',
    badge: 'Core Focus',
    icon: Sparkles,
    description:
      'Designing and developing practical AI-powered solutions, including agricultural decision systems (KrishiMitra AI) and intelligent interview preparation engines (Interview AI).',
    highlights: [
      'Integrating LLM APIs and prompt workflows for real-world utility',
      'Engineered localized crop recommendation and farmer-friendly advisories',
      'Built automated performance feedback and mock interview question generation',
    ],
  },
  {
    role: 'Full-Stack & Web Application Engineering',
    period: 'Continuous Practice',
    badge: 'Projects',
    icon: Code2,
    description:
      'Architecting responsive, high-performance web applications using Next.js, React, TypeScript, and modern component systems.',
    highlights: [
      'Developed Smart Campus Portal to unify fragmented campus communication',
      'Constructed complete e-commerce flow with reactive state and checkout UX',
      'Crafted collaborative Kanban board application for agile project management',
    ],
  },
  {
    role: 'IoT & Hardware Prototyping',
    period: 'Hands-on Labs',
    badge: 'Embedded',
    icon: Cpu,
    description:
      'Interfacing microcontrollers with sensors and displays to bridge software logic with the physical world.',
    highlights: [
      'Programmed ESP32 microcontrollers with PlatformIO and C++',
      'Simulated sensor circuitry and OLED display interfaces on Wokwi',
      'Implemented real-time sensor data polling and state feedback',
    ],
  },
];

export default function Experience() {
  const revealRef = useReveal(0.12);

  return (
    <section id="experience" className="container-px py-16 sm:py-24">
      <div ref={revealRef} className="reveal">
        <p className="eyebrow mb-4">Where I Focus</p>
        <h2 className="section-heading">
          Experience <span className="text-mint-400">Log</span>
        </h2>
        <p className="section-sub">
          Practical builds, real-world problem solving, and hands-on technical projects created throughout my engineering journey.
        </p>

        <div className="mt-14 space-y-6">
          {EXPERIENCES.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="card p-6 sm:p-8 card-hover-glow card-hover-scale transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-mint-500/10 border border-mint-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-mint-400" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-paper-100">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-mono text-xs text-mint-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="text-paper-500 font-mono text-xs">·</span>
                        <span className="font-mono text-[10px] uppercase tracking-wide bg-mint-500/10 text-mint-400 px-2 py-0.5 rounded-full border border-mint-500/20">
                          {exp.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-paper-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="grid sm:grid-cols-3 gap-2.5 pt-4 border-t border-ink-border">
                  {exp.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-ink-850 border border-ink-border text-xs text-paper-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-mint-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
