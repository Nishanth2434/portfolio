'use client';

import React from 'react';
import Image from 'next/image';
import nishanthPhoto from '@/assets/nishanth.jpg';
import {
  Code2,
  Sparkles,
  MapPin,
  GraduationCap,
  Brain,
  Globe,
  Smartphone,
  Cpu,
  Rocket,
  Zap,
  Flame,
  RefreshCw,
  Lightbulb,
  Users,
  BookOpen,
  Palette,
  Hammer,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { PERSONAL_DETAILS, STRENGTHS } from '@/data/portfolioData';

const INTEREST_ICONS: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-4 h-4 text-mint-400" />,
  Code2: <Code2 className="w-4 h-4 text-mint-400" />,
  Globe: <Globe className="w-4 h-4 text-mint-400" />,
  Smartphone: <Smartphone className="w-4 h-4 text-mint-400" />,
  Sparkles: <Sparkles className="w-4 h-4 text-mint-400" />,
  Cpu: <Cpu className="w-4 h-4 text-mint-400" />,
  Rocket: <Rocket className="w-4 h-4 text-mint-400" />,
};

const STRENGTH_ICONS: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-4 h-4 text-amber-400" />,
  Flame: <Flame className="w-4 h-4 text-orange-400" />,
  RefreshCw: <RefreshCw className="w-4 h-4 text-mint-400" />,
  Lightbulb: <Lightbulb className="w-4 h-4 text-yellow-400" />,
  Users: <Users className="w-4 h-4 text-cyan-400" />,
  BookOpen: <BookOpen className="w-4 h-4 text-emerald-400" />,
  Palette: <Palette className="w-4 h-4 text-purple-400" />,
  Hammer: <Hammer className="w-4 h-4 text-rose-400" />,
};

export default function About() {
  const revealRef = useReveal(0.12);

  return (
    <section id="about" className="container-px py-16 sm:py-24">
      <div ref={revealRef} className="reveal grid lg:grid-cols-[0.85fr,1.15fr] gap-16 items-center">
        {/* Left: Spinning Orbit Visual & Developer Profile Badge */}
        <div className="relative mx-auto lg:mx-0 max-w-xs w-full">
          {/* Outer spinning orbit ring */}
          <div className="absolute -inset-6 rounded-full border-2 border-mint-500/30 animate-[spin_25s_linear_infinite] pointer-events-none" />
          <div className="absolute -inset-3 rounded-full border border-mint-500/20 pointer-events-none" />

          {/* Central Visual Badge with Nishanth's Photograph */}
          <div className="relative rounded-full border-2 border-mint-500/40 aspect-square shadow-xl shadow-mint-500/10 image-border-glow bg-gradient-to-br from-ink-800 to-ink-900 p-2 text-center transition-all duration-300 overflow-hidden group">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src={nishanthPhoto}
                alt="Nishanth B."
                fill
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                <h3 className="font-display font-semibold text-base sm:text-lg text-paper-100 drop-shadow">
                  Nishanth B.
                </h3>
                <p className="font-mono text-[11px] text-mint-400">
                  4th-Sem CSE · Mandya
                </p>
              </div>
            </div>
          </div>

          {/* Floating Orbiting Badges */}
          <div className="absolute -top-3 -right-3 card px-3.5 py-1.5 flex items-center gap-2 animate-float float-paused float-on-hover cursor-pointer hover:border-mint-400 hover:shadow-[0_0_12px_rgba(79,227,194,0.5),inset_0_0_12px_rgba(79,227,194,0.2)] transition-all duration-300 z-10">
            <Sparkles className="w-3.5 h-3.5 text-mint-400" />
            <span className="font-mono text-[11px] text-paper-300 font-medium">AI &amp; Models</span>
          </div>

          <div className="absolute -bottom-3 -left-3 card px-3.5 py-1.5 flex items-center gap-2 animate-float float-paused float-on-hover [animation-delay:0.8s] cursor-pointer hover:border-mint-400 hover:shadow-[0_0_12px_rgba(79,227,194,0.5),inset_0_0_12px_rgba(79,227,194,0.2)] transition-all duration-300 z-10">
            <GraduationCap className="w-3.5 h-3.5 text-mint-400" />
            <span className="font-mono text-[11px] text-paper-300 font-medium">B.E. Computer Science</span>
          </div>
        </div>

        {/* Right: Narrative & Content */}
        <div>
          <p className="eyebrow mb-4">About Me</p>
          <h2 className="section-heading">
            Behind the <span className="text-mint-400">Terminal</span>
          </h2>

          <div className="mt-6 space-y-4 text-paper-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a <strong>Computer Science and Engineering</strong> student interested in software development, Artificial Intelligence, app development, web development, and building practical real-world technology projects.
            </p>
            <p>
              I enjoy learning new technologies, experimenting with AI, and transforming ideas into useful applications. I am a quick learner, hardworking, adaptable, and interested in solving real-world problems through technology.
            </p>
          </div>

          {/* Areas of Interest with badge-hover-glow */}
          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-wider text-paper-500 mb-3">
              Areas of Interest
            </p>
            <div className="flex flex-wrap gap-2.5">
              {PERSONAL_DETAILS.areasOfInterest.map((interest) => (
                <div
                  key={interest.title}
                  className="card px-3.5 py-2 rounded-xl flex items-center gap-2 badge-hover-glow cursor-default transition-all duration-300"
                >
                  {INTEREST_ICONS[interest.icon] || <Sparkles className="w-4 h-4 text-mint-400" />}
                  <span className="font-mono text-xs text-paper-300">{interest.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Strengths Grid */}
          <div className="mt-8 pt-8 border-t border-ink-border">
            <p className="font-mono text-xs uppercase tracking-wider text-paper-500 mb-4">
              Core Strengths
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STRENGTHS.map((strength) => (
                <div
                  key={strength.title}
                  className="card p-3 card-hover-glow transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-1">
                    {STRENGTH_ICONS[strength.iconName] || <Zap className="w-3.5 h-3.5 text-mint-400" />}
                    <h4 className="font-display text-xs font-semibold text-paper-100 truncate">
                      {strength.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-paper-500 line-clamp-2 leading-normal">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
