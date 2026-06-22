'use client';

import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import Link from 'next/link';

export default function Navbar() {
  const { scrolled, progress } = useNavbarScroll();

  return (
    <>
      <div className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent">
        <div
          className="
      h-full origin-left bg-accent
      transition-transform duration-300 ease-out
      will-change-transform
    "
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <nav
        className={`
          fixed left-0 right-0 top-0 z-50
          flex items-center justify-between
          px-6 py-4 lg:px-10 lg:py-5
          backdrop-blur-[14px]
          will-change-transform
          transition-[background-color,border-color,box-shadow,padding]
          duration-500 ease-out

          ${
            scrolled
              ? 'border-b border-border bg-background/90 shadow-[0_20px_80px_rgba(0,0,0,0.45)]'
              : 'border-b border-transparent bg-background/70 shadow-none'
          }
        `}
      >
        <Link
          href="/"
          className="
            font-heading text-xl font-medium tracking-[0.04em]
            text-text-primary no-underline
            transition-opacity duration-300
            hover:opacity-80
          "
        >
          Frilic<span className="text-accent">.</span>
        </Link>

        <a
          href="#cta"
          className="
            hidden sm:inline-block
            bg-accent px-6 py-2.5
            text-xs font-medium uppercase tracking-[0.12em]
            text-background no-underline
            transition-[opacity,transform] duration-300 ease-out
            hover:-translate-y-0.5 hover:opacity-85
          "
        >
          Falar com especialista
        </a>
      </nav>
    </>
  );
}
