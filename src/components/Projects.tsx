'use client';

import React, { useState } from 'react';
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  LayoutList,
  LayoutGrid,
  Bot,
  Sprout,
  CheckCircle,
} from 'lucide-react';
import { GithubIcon } from './icons';
import { useReveal } from '@/hooks/useReveal';
import { PROJECTS } from '@/data/portfolioData';
import { Project, ProjectCategory } from '@/data/types';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const revealRef = useReveal(0.12);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="container-px py-16 sm:py-24">
      <div ref={revealRef} className="reveal">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">My Work</p>
            <h2 className="section-heading">
              Featured <span className="text-mint-400">Projects</span>
            </h2>
            <p className="section-sub">
              Selected builds and practical real-world applications across AI, Web Development, and Systems.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <div className="card p-1 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg font-mono text-xs flex items-center gap-1.5 transition-colors ${
                  viewMode === 'list'
                    ? 'bg-mint-500/20 text-mint-400 font-semibold'
                    : 'text-paper-500 hover:text-paper-300'
                }`}
                title="List View (Reference Style)"
              >
                <LayoutList className="w-4 h-4" />
                <span className="hidden sm:inline">List</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg font-mono text-xs flex items-center gap-1.5 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-mint-500/20 text-mint-400 font-semibold'
                    : 'text-paper-500 hover:text-paper-300'
                }`}
                title="Card Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">Cards</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-300 ${
              activeCategory === 'all'
                ? 'border-mint-400 bg-mint-400 text-ink-950 font-bold shadow-md shadow-mint-500/20'
                : 'border-ink-border text-paper-300 hover:border-mint-400 hover:text-mint-400'
            }`}
          >
            All Builds ({PROJECTS.length})
          </button>

          <button
            onClick={() => setActiveCategory('ai')}
            className={`font-mono text-xs px-4 py-2 rounded-full border flex items-center gap-1.5 transition-all duration-300 ${
              activeCategory === 'ai'
                ? 'border-mint-400 bg-mint-400 text-ink-950 font-bold shadow-md shadow-mint-500/20'
                : 'border-ink-border text-paper-300 hover:border-mint-400 hover:text-mint-400'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Spotlights (2)</span>
          </button>

          <button
            onClick={() => setActiveCategory('web')}
            className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-300 ${
              activeCategory === 'web'
                ? 'border-mint-400 bg-mint-400 text-ink-950 font-bold shadow-md shadow-mint-500/20'
                : 'border-ink-border text-paper-300 hover:border-mint-400 hover:text-mint-400'
            }`}
          >
            Web &amp; Platforms (3)
          </button>

          <button
            onClick={() => setActiveCategory('apps-systems')}
            className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-300 ${
              activeCategory === 'apps-systems'
                ? 'border-mint-400 bg-mint-400 text-ink-950 font-bold shadow-md shadow-mint-500/20'
                : 'border-ink-border text-paper-300 hover:border-mint-400 hover:text-mint-400'
            }`}
          >
            Apps &amp; Productivity (2)
          </button>
        </div>

        {/* LIST VIEW (Exact reference site style) */}
        {viewMode === 'list' && (
          <div className="mt-12 divide-y divide-ink-border border-y border-ink-border">
            {filteredProjects.map((project, idx) => {
              const formattedIndex = String(idx + 1).padStart(2, '0');
              const isAi = project.category === 'ai';

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group grid sm:grid-cols-[auto_1fr_auto] items-center gap-6 py-8 cursor-pointer hover:bg-ink-800/40 px-3 sm:px-4 rounded-xl transition-all duration-300"
                >
                  {/* Project Index */}
                  <span className="font-mono text-sm text-paper-500 group-hover:text-mint-400 transition-colors">
                    {formattedIndex}
                  </span>

                  {/* Project Details */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-paper-100 group-hover:text-mint-400 transition-colors">
                        {project.title}
                      </h3>

                      {project.featuredBadge && (
                        <span
                          className={`font-mono text-[10px] uppercase tracking-wide px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                            project.id === 'krishimitra-ai'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                              : 'bg-mint-500/10 text-mint-400 border border-mint-500/30'
                          }`}
                        >
                          {project.id === 'krishimitra-ai' ? (
                            <Sprout className="w-3 h-3" />
                          ) : (
                            <Bot className="w-3 h-3" />
                          )}
                          {project.featuredBadge}
                        </span>
                      )}
                    </div>

                    <p className="text-paper-500 text-sm mt-2 max-w-2xl leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] text-paper-500 bg-ink-850 px-2 py-0.5 rounded border border-ink-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div
                    className="flex items-center gap-3 self-end sm:self-center pt-2 sm:pt-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-ink-border flex items-center justify-center text-paper-300 hover:text-mint-400 hover:border-mint-400 transition-all icon-hover-glow"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-ink-border flex items-center justify-center text-paper-300 hover:text-mint-400 hover:border-mint-400 transition-all icon-hover-glow"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink-800 hover:bg-mint-500/20 text-paper-100 hover:text-mint-400 text-xs font-mono border border-ink-border hover:border-mint-400 transition-all"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card p-6 flex flex-col justify-between card-hover-glow card-hover-scale transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-paper-500 uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>

                    {project.featuredBadge && (
                      <span className="font-mono text-[10px] uppercase tracking-wide bg-mint-500/10 text-mint-400 border border-mint-500/30 px-2.5 py-0.5 rounded-full">
                        {project.featuredBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-paper-100 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-paper-500 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                    {project.tagline}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {project.keyFeatures.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-paper-300">
                        <CheckCircle className="w-3.5 h-3.5 text-mint-400 shrink-0 mt-0.5" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] text-paper-500 bg-ink-850 px-2 py-0.5 rounded border border-ink-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-ink-border flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-mint-400 hover:underline flex items-center gap-1"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-ink-border text-paper-500 hover:text-mint-400 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-ink-border text-paper-500 hover:text-mint-400 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
