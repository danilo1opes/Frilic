import { problemItems } from '@/data/problems';

export default function Problem() {
  return (
    <section
      id="problem"
      data-section="problem"
      aria-labelledby="problem-title"
      className="border-b border-border bg-background py-20 lg:py-30"
    >
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <p
          className="
            mb-5 flex items-center gap-3
            text-[10px] font-medium uppercase tracking-[0.2em]
            text-text-muted
            before:block before:h-px before:w-5
            before:bg-text-muted before:content-['']
          "
        >
          Reconhece essa situação?
        </p>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2
              id="problem-title"
              className="
                font-heading text-4xl font-light
                leading-[1.05] text-white
                sm:text-5xl lg:text-[58px]
              "
            >
              Sua empresa é boa no que faz.
              <br />
              Mas <em className="text-accent">novos clientes</em>
              <br />
              não chegam todo mês.
            </h2>

            <div className="mt-8 space-y-6 font-body text-[17px] font-light leading-[1.8] text-text-secondary">
              <p>
                Tem meses que o telefone toca bastante. Tem meses que
                praticamente não vem ninguém novo. E você nunca sabe direito{' '}
                <strong className="font-normal text-text-primary">
                  por que um mês foi melhor que o outro.
                </strong>
              </p>

              <p>
                A maioria dos clientes chegou por indicação de alguém. Isso é
                ótimo, mas significa que{' '}
                <strong className="font-normal text-text-primary">
                  quando as indicações param, o caixa sente.
                </strong>
              </p>

              <p>
                Já tentou agência, já fez post no Instagram, talvez até anúncio,
                mas nada virou um fluxo constante.{' '}
                <strong className="font-normal text-text-primary">
                  O problema não é falta de tentativa. É falta de método.
                </strong>
              </p>
            </div>
          </div>

          <div
            className="flex flex-col gap-px bg-border"
            role="list"
            aria-label="Principais problemas enfrentados pelas empresas"
          >
            {problemItems.map((item) => (
              <article
                key={item.number}
                role="listitem"
                className="
                  group relative flex gap-5 overflow-hidden
                  bg-surface px-8 py-7
                  transition-all duration-300
                  hover:translate-x-1.5 hover:bg-[#141414]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute left-0 top-0 h-full w-0.5
                    origin-bottom scale-y-0 bg-accent
                    transition-transform duration-300
                    group-hover:scale-y-100
                  "
                />

                <span
                  aria-label={`Problema ${item.number}`}
                  className="
                    min-w-6 pt-0.5
                    font-heading text-sm font-light
                    text-text-muted
                  "
                >
                  {item.number}
                </span>

                <div>
                  <h3 className="mb-1 text-[15px] font-medium text-text-primary">
                    {item.title}
                  </h3>

                  <p className="text-sm font-normal leading-[1.6] text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
