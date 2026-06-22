import { clients } from '@/data/company';

export default function Company() {
  return (
    <section
      id="clients"
      className="overflow-hidden border-y border-border bg-background py-12"
      data-section="clients"
    >
      {/* Subtext */}
      <div className="mb-8 text-center">
        <p className="flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
          <span className="h-px w-10 bg-border-light" />
          Empresas que confiam na Frilic
          <span className="h-px w-10 bg-border-light" />
        </p>
      </div>

      {/* Company */}
      <div className="relative overflow-hidden">
        {/* Borders */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        {/* Clients */}
        <div className="animate-flow hover:[animation-play-state:paused] flex w-max">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex h-20 min-w-[220px] flex-col items-center justify-center border-r border-border px-14"
            >
              {/* Name */}
              <span className="font-heading text-lg tracking-[0.04em] text-text-secondary transition-colors duration-200 hover:text-accent">
                {client.name}
              </span>

              {/* Sector */}
              <span className="mt-1 text-[10px] uppercase tracking-[0.14em] text-text-muted">
                {client.sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
