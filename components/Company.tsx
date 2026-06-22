import { clients } from '@/data/company';

export default function Company() {
  return (
    <section
      id="clients"
      data-section="clients"
      aria-labelledby="clients-title"
      className="overflow-hidden border-y border-border bg-background py-12"
    >
      <div className="mb-8 text-center">
        <h2
          id="clients-title"
          className="
            flex items-center justify-center gap-3
            text-[10px] font-medium uppercase
            tracking-[0.2em] text-text-muted
          "
        >
          <span aria-hidden="true" className="h-px w-10 bg-border-light" />
          Empresas que confiam na Frilic
          <span aria-hidden="true" className="h-px w-10 bg-border-light" />
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-y-0 left-0 z-10 w-24
            bg-gradient-to-r from-background to-transparent
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-y-0 right-0 z-10 w-24
            bg-gradient-to-l from-background to-transparent
          "
        />

        <ul
          aria-label="Empresas atendidas pela Frilic"
          className="
            animate-flow flex w-max
            hover:[animation-play-state:paused]
            focus-within:[animation-play-state:paused]
          "
        >
          {[...clients, ...clients].map((client, index) => (
            <li
              key={`${client.name}-${index}`}
              className="
                flex h-20 min-w-[220px]
                flex-col items-center justify-center
                border-r border-border px-14
              "
            >
              <span
                className="
                  font-heading text-lg tracking-[0.04em]
                  text-text-secondary
                  transition-colors duration-200
                  hover:text-accent
                "
              >
                {client.name}
              </span>

              <span
                className="
                  mt-1 text-[10px]
                  uppercase tracking-[0.14em]
                  text-text-muted
                "
              >
                {client.sector}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
