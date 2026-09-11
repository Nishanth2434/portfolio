'use client';

import React from 'react';

const TECH_ITEMS = [
  'Artificial Intelligence',
  'Software Development',
  'Web Development',
  'App Development',
  'AI-Powered Applications',
  'IoT & Embedded Systems',
  'ESP32',
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'VS Code',
  'PlatformIO',
  'Wokwi',
  'Git & GitHub',
  'Real-World Tech Solutions',
];

export default function Marquee() {
  const displayItems = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="border-y border-ink-border py-5 overflow-hidden marquee-container select-none">
      <div className="flex w-max animate-marquee gap-10 font-mono text-xs sm:text-sm text-paper-500">
        {displayItems.map((item, idx) => (
          <span key={`${item}-${idx}`} className="flex items-center gap-10 shrink-0">
            <span className="hover:text-mint-400 transition-colors cursor-default">
              {item}
            </span>
            <span className="text-mint-500/60 font-bold">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
