import { howStartSteps } from '@/data/howStart';

export default function HowStart() {
  return (
    <section
      id="how-start"
      className="border-b border-border py-20 lg:py-30 bg-background"
    >
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="mb-20">
          {/* Subtitle */}
          <p
            className="
              mb-5 flex items-center gap-3
              text-[10px] font-medium uppercase tracking-[0.2em]
              text-text-muted
              before:block before:h-px before:w-5 before:bg-text-muted before:content-['']
            "
          >
            Como começar
          </p>

          {/* Title */}
          <h2
            className="
              max-w-[700px]
              font-heading
              text-4xl
              font-light
              leading-wide
              text-white

              sm:text-5xl
              lg:text-[58px]
            "
          >
            Processo Simples
            <br />
            do primeiro contato à
            <br />
            <em className="text-accent">implementação.</em>
          </h2>
        </div>
        {/* 
        HowStartStep */}
        <div className="grid gap-px bg-border lg:grid-cols-3">
          {howStartSteps.map((step) => (
            <article
              key={step.step}
              className="
                group
                bg-background
                px-8
                py-10
                text-border
                transition-colors
                duration-300
                hover:text-accent
                hover:bg-surface
              "
            >
              <span
                className="
                  mb-8
                  block
                  font-heading
                  text-5xl
                  font-light
                "
              >
                {step.step}
              </span>

              <h3
                className="
                  mb-4
                  font-body
                  text-[16px]
                  font-medium
                  text-white
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  text-sm
                  leading-relaxed
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
