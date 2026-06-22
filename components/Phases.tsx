import { phases } from '@/data/phases';

export default function Phases() {
  return (
    <section
      id="phases"
      data-section="phases"
      aria-labelledby="phases-title"
      className="border-y border-border bg-surface py-20 lg:py-30"
    >
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[560px]">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted before:block before:h-px before:w-5 before:bg-text-muted before:content-['']">
              O método
            </p>

            <h2
              id="phases-title"
              className="font-heading text-4xl font-light leading-tight text-white sm:text-5xl lg:text-[58px]"
            >
              As <em className="text-accent">4 fases</em> do sistema
            </h2>

            <p className="mt-5 flex max-w-[520px] items-start gap-3 border-l border-accent pl-4 font-body text-sm font-light leading-[1.65] text-text-secondary">
              <span aria-hidden="true" className="mt-0.5 shrink-0 text-accent">
                →
              </span>
              Você não precisa esperar 12 meses para ver resultado. Cada fase
              entrega algo concreto, e já na Fase 1 sua empresa começa a
              aparecer para quem está procurando o que você oferece.
            </p>
          </div>

          <p
            aria-label="Duração total: 12 meses divididos em 4 fases"
            className="font-heading text-sm tracking-[0.1em] text-text-muted"
          >
            12 meses - 4 fases
          </p>
        </div>

        <ol className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-4">
          {phases.map((phase) => (
            <li key={phase.number} className="list-none">
              <article className="group relative h-full overflow-hidden bg-surface px-8 py-10 transition-colors duration-300 hover:bg-[#141414] lg:pb-12">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-0 w-px bg-accent transition-all duration-500 group-hover:h-full"
                />

                <p className="mb-12 flex items-center gap-3 font-heading text-[11px] uppercase tracking-[0.16em] text-text-muted after:h-px after:flex-1 after:bg-border-light after:content-['']">
                  {phase.number}
                </p>

                <p className="mb-4 text-[11px] font-normal uppercase tracking-[0.12em] text-accent">
                  {phase.period}
                </p>

                {phase.badge && (
                  <p className="mb-4 inline-block bg-accent px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-background">
                    {phase.badge}
                  </p>
                )}

                <h3 className="mb-5 font-heading text-2xl font-normal leading-tight text-white">
                  {phase.title}
                </h3>

                <p className="mb-7 font-body text-[13.5px] font-light leading-[1.7] text-text-secondary">
                  {phase.description}
                </p>

                <ul className="flex list-none flex-col gap-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="relative pl-4 text-[12.5px] leading-normal text-text-muted before:absolute before:left-0 before:text-accent-soft before:content-['—']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
