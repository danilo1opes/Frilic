'use client';

import { useEffect, useState } from 'react';

const sectionLabels: Record<string, string> = {
  problem: 'O problema',
  consequences: 'As consequências',
  presentation: 'A solução',
  phases: 'As 4 fases',
  process: 'Como começar',
  audience: 'Para quem é',
  authority: 'Sobre a Frilic',
  clients: 'Nossos clientes',
  risk: 'Sem risco',
  cta: 'Próximo passo',
};

export function useActiveSection() {
  const [currentSection, setCurrentSection] = useState('Lendo agora');

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          const key = section.dataset.section;

          if (entry.isIntersecting && key && sectionLabels[key]) {
            setCurrentSection(sectionLabels[key]);
          }
        });
      },
      {
        threshold: 0.35,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return currentSection;
}
