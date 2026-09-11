'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    const prefersLight = saved
      ? saved === 'light'
      : window.matchMedia('(prefers-color-scheme: light)').matches;

    setIsLight(prefersLight);
    if (prefersLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle('light', next);
    localStorage.setItem('theme', next ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-full border border-ink-border ${className}`} />
    );
  }

  return (
    <button
      type="button"
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      onClick={toggleTheme}
      className={`w-10 h-10 rounded-full border border-ink-border flex items-center justify-center text-paper-300 hover:text-mint-400 transition-all duration-300 icon-hover-glow ${className}`}
    >
      {isLight ? (
        <Moon className="w-4 h-4 text-paper-100" />
      ) : (
        <Sun className="w-4 h-4 text-paper-100" />
      )}
    </button>
  );
}
