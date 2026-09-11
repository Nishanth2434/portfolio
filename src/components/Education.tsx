'use client';

import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Layers } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { EDUCATION_DATA } from '@/data/portfolioData';

export default function Education() {
  const revealRef = useReveal(0.12);

  return (
    <section id="education" className="container-px py-16 sm:py-24">
      <div ref={revealRef} className="reveal">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-4 justify-center">My Education</p>
          <h2 className="section-heading">
            Learning <span className="text-mint-400">Journey</span>
          </h2>
          <p className="section-sub mx-auto">
            A focused academic path in Computer Science and Engineering shaping how I approach building practical technology.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="mt-16 max-w-5xl mx-auto space-y-8">
          {/* Milestone Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {EDUCATION_DATA.timeline.map((item, idx) => (
              <div
                key={idx}
                className="card p-6 flex flex-col justify-between card-hover-glow card-hover-scale transition-all duration-300 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-9 h-9 rounded-xl bg-mint-500/10 border border-mint-500/30 flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-mint-400" />
                    </span>
                    <span className="font-mono text-[11px] text-mint-400 border border-mint-500/30 px-2.5 py-0.5 rounded-full bg-mint-500/10 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-semibold text-paper-100 leading-snug">
                    {item.degree}
                  </h3>
                  <p className="font-mono text-xs text-mint-400 mt-1 font-medium">
                    {item.institution}
                  </p>
                  <p className="font-mono text-[11px] text-paper-500 mt-1">
                    {item.board}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-ink-border flex items-center justify-between">
                  <div className="flex items-center gap-1 font-mono text-[11px] text-paper-500">
                    <MapPin className="w-3 h-3 text-mint-400" />
                    <span>{item.location}</span>
                  </div>
                  {item.score ? (
                    <span className="font-mono text-xs font-bold text-mint-400 px-2 py-0.5 rounded bg-mint-500/10 border border-mint-500/20">
                      {item.score}
                    </span>
                  ) : (
                    <span className="font-mono text-[11px] text-paper-400">
                      Pursuing
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Core Foundations & Coursework Banner */}
          <div className="card p-6 sm:p-8 card-hover-glow transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-mint-500/10 border border-mint-500/30 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-mint-400" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-paper-100">
                    Engineering Foundations &amp; Core Coursework
                  </h3>
                  <p className="font-mono text-xs text-paper-500">
                    Theoretical computer science rigorously applied to production code
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-mint-400 self-start sm:self-auto">
                <Layers className="w-3.5 h-3.5" />
                <span>4th-Sem CSE Focus</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2 border-t border-ink-border">
              {EDUCATION_DATA.focusAreas.map((topic, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-ink-800/80 border border-ink-border text-xs font-mono text-paper-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-mint-400 shrink-0" />
                  <span className="truncate">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
