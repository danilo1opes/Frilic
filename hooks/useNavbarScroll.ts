'use client';

import { useEffect, useRef, useState } from 'react';

export function useNavbarScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    function updateScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const nextProgress = docHeight > 0 ? scrollTop / docHeight : 0;

      setScrolled(scrollTop > 40);
      setProgress(nextProgress);

      frameRef.current = null;
    }

    function handleScroll() {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(updateScroll);
    }

    updateScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return { scrolled, progress };
}
