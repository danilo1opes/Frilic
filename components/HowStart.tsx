import { howStartSteps } from '@/data/howStart';

export default function HowStart() {
  return (
    <section
      id="how-start"
      data-section="process"
      aria-labelledby="how-start-title"
      className="border-b border-border bg-background py-20 lg:py-30"
    >
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="mb-20">
          <p
            className="
              mb-5 flex items-center gap-3
              text-[10px] font-medium uppercase tracking-[0.2em]
              text-text-muted
              before:block before:h-px before:w-5
              before:bg-text-muted before:content-['']
            "
          >
            Como começar
          </p>

          <h2
            id="how-start-title"
            className="
              max-w-[700px]
              font-heading text-4xl font-light
              leading-[1.05] text-white
              sm:text-5xl lg:text-[58px]
            "
          >
            Processo Simples
            <br />
            do primeiro contato à
            <br />
            <em className="text-accent">implementação.</em>
          </h2>
        </div>

        <div
          className="grid gap-px bg-border lg:grid-cols-3"
          role="list"
          aria-label="Etapas para começar o Frilic Growth System"
        >
          {howStartSteps.map((step) => (
            <article
              key={step.step}
              role="listitem"
              className="
                group
                bg-background
                px-8 py-10
                text-border
                transition-colors duration-300
                hover:bg-surface
                hover:text-accent
              "
            >
              <span
                aria-label={`Etapa ${step.step}`}
                className="
                  mb-8 block
                  font-heading text-5xl
                  font-light
                "
              >
                {step.step}
              </span>

              <h3
                className="
                  mb-4
                  font-body text-[16px]
                  font-medium text-white
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  text-sm leading-relaxed
                  text-text-secondary
                "
              >
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
