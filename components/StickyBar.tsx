'use client';

import { useActiveSection } from '@/hooks/useActivionSection';
import { useStickyBar } from '@/hooks/useStickyBar';

export default function StickyBar() {
  const visible = useStickyBar();
  const currentSection = useActiveSection();

  return (
    <aside
      aria-label="Barra de navegação rápida"
      className={`
        fixed bottom-0 left-0 right-0 z-50
        border-t border-border-light
        bg-surface
        transition-transform duration-500

        ${visible ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      <div
        className="
          mx-auto flex max-w-[1160px]
          items-center justify-between
          px-6 py-4 lg:px-10
        "
      >
        <p
          className="
            hidden text-sm text-text-secondary
            sm:block
          "
        >
          <strong className="text-text-primary">Frilic Growth System</strong> —
          Sistema completo de aquisição em 4 fases
        </p>

        <div className="flex items-center gap-6">
          <span
            aria-live="polite"
            aria-label={`Seção atual: ${currentSection}`}
            className="
              text-[10px]
              uppercase
              tracking-[0.14em]
              text-text-muted
            "
          >
            {currentSection}
          </span>

          <a
            href="#cta"
            aria-label="Ir para a seção Próximo passo"
            className="
              bg-accent px-8 py-4
              text-[12px] font-medium
              uppercase tracking-[0.12em]
              text-background

              transition-opacity duration-200
              hover:opacity-85

              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-accent
            "
          >
            Quero começar
          </a>
        </div>
      </div>
    </aside>
  );
}
