'use client';

import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle,
  Layers,
  AlertCircle,
  Lightbulb,
  ShieldCheck,
  Laptop,
} from 'lucide-react';
import { GithubIcon } from './icons';
import { Project } from '@/data/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink-900/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl my-auto card bg-ink-900 border border-ink-border shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-fade-up">
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-ink-850 border-b border-ink-border">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full border border-ink-border bg-ink-800 text-paper-300 hover:text-mint-400 hover:border-mint-400 transition-all focus:outline-none icon-hover-glow"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="pr-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-ink-800 text-paper-300 border border-ink-border">
                {project.categoryLabel}
              </span>
              {project.featuredBadge && (
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-mint-500/10 text-mint-400 border border-mint-500/30">
                  {project.featuredBadge}
                </span>
              )}
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-paper-100">
              {project.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-paper-300 leading-relaxed">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-paper-300 text-sm leading-relaxed">
          {/* Overview */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-mint-400 font-semibold mb-2 flex items-center gap-2">
              <Laptop className="w-4 h-4" />
              <span>Project Overview</span>
            </h4>
            <p className="text-paper-100 leading-relaxed text-sm sm:text-base">
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card p-4 border border-ink-border bg-ink-850">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs sm:text-sm text-paper-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="card p-4 border border-ink-border bg-ink-850">
              <div className="flex items-center gap-2 text-mint-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
                <Lightbulb className="w-4 h-4 shrink-0" />
                <span>Engineering Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-paper-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-mint-400 font-semibold mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Key Features &amp; Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-ink-850 border border-ink-border"
                >
                  <CheckCircle className="w-4 h-4 text-mint-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-paper-100">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UI Design Preview Card */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-mint-400 font-semibold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Interface &amp; Visual Design</span>
            </h4>
            <div className="rounded-xl border border-ink-border bg-ink-850 p-5">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-ink-border text-xs font-mono text-paper-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-mint-400" />
                  {project.title} · Application UI Preview
                </span>
                <span className="text-[11px]">Responsive Architecture</span>
              </div>
              <div className="h-32 rounded-lg bg-ink-800 border border-ink-border flex flex-col items-center justify-center text-center p-4">
                <p className="text-xs font-medium text-paper-100 font-mono">
                  {project.title} Prototype &amp; Production Layout
                </p>
                <p className="text-[11px] text-paper-500 mt-1 max-w-sm font-mono">
                  Engineered for seamless user workflows and intuitive interaction.
                </p>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-mint-400 font-semibold mb-3">
              Technologies &amp; Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-ink-850 text-mint-400 border border-ink-border badge-hover-glow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-ink-850 border-t border-ink-border flex flex-wrap items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-full text-xs font-mono text-paper-300 hover:text-paper-100 bg-ink-800 border border-ink-border transition-colors"
          >
            Close
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono text-paper-100 bg-ink-800 border border-ink-border hover:border-mint-400 hover:text-mint-400 transition-all icon-hover-glow"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Repository</span>
          </a>

          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-mint-400 text-ink-950 hover:bg-mint-500 shadow-lg shadow-mint-500/20 transition-all"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
