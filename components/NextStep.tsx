'use client';

import { useRotatingText } from '@/hooks/useRotatingText';

export default function NextStep() {
  const { currentText, currentIndex } = useRotatingText(
    ['Vamos conversar.', 'Comece agora.', 'Dê o próximo passo.'],
    2500,
  );

  return (
    <section
      id="cta"
      data-section="cta"
      aria-labelledby="next-step-title"
      className="
        relative overflow-hidden border-b border-border
        bg-background py-28 text-center lg:py-40
      "
    >
      <div
        aria-hidden="true"
        className="
          absolute inset-0 opacity-[0.22]
          bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-1/2
          h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(200,184,154,0.06)_0%,transparent_70%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1160px] px-6 lg:px-10">
        <p
          className="
            mb-8 text-[11px] font-normal uppercase
            tracking-[0.2em] text-text-muted
          "
        >
          Próximo passo
        </p>

        <h2
          id="next-step-title"
          className="
            mx-auto mb-7 max-w-[800px]
            font-heading text-[44px] font-light leading-[1.05]
            text-white sm:text-6xl lg:text-[88px]
          "
        >
          Chega de mês bom
          <br />
          e mês ruim.
          <br />
          <span
            aria-live="polite"
            aria-atomic="true"
            className="block min-h-[1.1em] italic text-accent"
          >
            <span
              key={currentIndex}
              className="block animate-[fadeUp_0.8s_ease]"
            >
              {currentText}
            </span>
          </span>
        </h2>

        <p
          className="
            mx-auto mb-14 max-w-[480px]
            text-[17px] font-normal leading-[1.7]
            text-text-secondary
          "
        >
          Uma conversa de 30 minutos para entender onde sua empresa está e o que
          seria necessário para clientes novos chegarem todo mês. Sem
          compromisso, sem pitch de vendas.
        </p>

        <a
          href="https://wa.me/558192974213"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com especialista da Frilic pelo WhatsApp"
          className="
            inline-block bg-text-primary px-10 py-4
            text-[12px] font-medium uppercase
            tracking-[0.12em] text-background
            transition-colors duration-200
            hover:bg-white
            focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-4 focus-visible:outline-accent
          "
        >
          Falar com especialista via WhatsApp
        </a>

        <p
          className="
            mt-8 text-[12px] font-normal
            tracking-[0.06em] text-text-muted
          "
        >
          Conversa gratuita, sem pressão, sem compromisso
        </p>
      </div>
    </section>
  );
}
