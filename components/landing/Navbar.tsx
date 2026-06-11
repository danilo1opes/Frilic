'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrolled(scrollTop > 40);
      setProgress(scrollProgress);
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Bar of progression */}
      <div className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent">
        <div
          className="h-full bg-accent transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        className={`
          fixed left-0 right-0 top-0 z-50
          flex items-center justify-between
          px-10 py-5
          backdrop-blur-[14px]
          transition-all duration-300
          ${
            scrolled
              ? 'border-b border-border bg-background/85 shadow-[0_20px_80px_rgba(0,0,0,0.45)]'
              : 'border-b border-transparent bg-background/70'
          }
        `}
      >
        <Link
          href="/"
          className="
            font-heading text-xl font-medium tracking-[0.04em]
            text-text-primary no-underline
          "
        >
          Frilic<span className="text-accent">.</span>
        </Link>

        <Link
          href="#cta"
          className="
            hidden sm:inline-block
            bg-accent px-6 py-2.5
            text-xs font-medium uppercase tracking-[0.12em]
            text-background no-underline
            transition-opacity duration-200
            hover:opacity-85
          "
        >
          Falar com especialista
        </Link>
      </nav>
    </>
  );
}
