'use client';

import { useEffect, useState } from 'react';

export function useStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const cta = document.getElementById('cta');

      if (!hero || !cta) return;

      const heroBottom = hero.getBoundingClientRect().bottom;

      const ctaTop = cta.getBoundingClientRect().top;

      setVisible(heroBottom < 0 && ctaTop > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return visible;
}
