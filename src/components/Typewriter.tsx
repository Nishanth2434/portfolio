'use client';

import React, { useState, useEffect } from 'react';

const WORDS = [
  'Software Developer',
  'AI Enthusiast',
  'Web Developer',
  'App Developer',
  'CSE Student',
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = WORDS[index];
    const speed = isDeleting ? 45 : 85;
    const pauseTime = 1400;

    if (!isDeleting && currentText === fullWord) {
      const timer = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timer);
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % WORDS.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting
          ? fullWord.slice(0, prev.length - 1)
          : fullWord.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, index]);

  return (
    <span className="font-mono text-mint-400 font-semibold inline-flex items-center">
      {currentText}
      <span className="inline-block w-[2px] h-[1em] bg-mint-400 ml-1 align-middle animate-blink" />
    </span>
  );
}
