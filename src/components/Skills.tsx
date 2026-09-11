'use client';

import React from 'react';
import { Code, Sparkles, Cpu, Wrench } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { SKILL_CATEGORIES } from '@/data/portfolioData';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5 text-mint-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-mint-400" />,
  Cpu: <Cpu className="w-5 h-5 text-mint-400" />,
  Wrench: <Wrench className="w-5 h-5 text-mint-400" />,
};

export default function Skills() {
  const revealRef = useReveal(0.12);

  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="container-px">
        <div ref={revealRef} className="reveal">
          <p className="eyebrow mb-4">Skill Set</p>
          <h2 className="section-heading">
            Tools of the <span className="text-mint-400">Trade</span>
          </h2>
          <p className="section-sub">
            A practical technical toolkit built through computer science coursework, self-directed experimentation, and building real-world projects.
          </p>

          {/* 4 Skill Cards */}
          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="card p-6 sm:p-7 card-hover-glow card-hover-scale transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-mono text-[11px] text-paper-500 uppercase tracking-wider">
                    {category.title}
                  </p>
                  <span className="w-8 h-8 rounded-lg bg-mint-500/10 border border-mint-500/20 flex items-center justify-center">
                    {CATEGORY_ICONS[category.iconName] || <Code className="w-4 h-4 text-mint-400" />}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-semibold text-paper-100 mb-2">
                  {category.subtitle}
                </h3>

                <div className="flex flex-wrap gap-2 mt-6">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-300 badge-hover-glow ${
                        skill.highlight
                          ? 'border-mint-500/30 bg-mint-500/10 text-mint-400 font-medium'
                          : 'border-ink-border bg-ink-850 text-paper-300 hover:text-paper-100'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note on extensibility */}
          <div className="mt-8 flex items-center justify-between font-mono text-xs text-paper-500 pt-4 border-t border-ink-border">
            <span>Easily editable in <code className="text-mint-400">src/data/portfolioData.ts</code></span>
            <span className="text-mint-400">Continuous Learner</span>
          </div>
        </div>
      </div>
    </section>
  );
}
