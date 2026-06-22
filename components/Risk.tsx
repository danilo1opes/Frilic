import { riskItems } from '@/data/risk';

export default function Risk() {
  return (
    <section
      id="risk"
      className="border-y border-border bg-surface py-20 lg:py-30"
      data-section="risk"
    >
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <p
              className="
                mb-5 flex items-center gap-3
                text-[10px] font-medium uppercase tracking-[0.2em]
                text-text-muted
                before:block before:h-px before:w-5
                before:bg-text-muted before:content-['']
              "
            >
              E se não der certo?
            </p>

            <h2
              className="
                font-heading text-4xl font-light leading-[1.05]
                text-white sm:text-5xl lg:text-[58px]
              "
            >
              Você não precisa
              <br />
              apostar tudo
              <br />
              de <em className="text-accent">uma vez.</em>
            </h2>

            <div
              className="
                mt-10 space-y-6 font-body text-[17px]
                font-light leading-[1.8] text-text-secondary
              "
            >
              <p>
                O maior medo de quem já gastou dinheiro com marketing sem
                resultado é simples:{' '}
                <strong className="font-normal text-text-primary">
                  “e se eu investir de novo e não funcionar?”
                </strong>
              </p>

              <p>
                Por isso o Growth System funciona em fases. Você começa pela
                Fase 1, vê o que foi entregue, aprova — e só então decide se
                avança.{' '}
                <strong className="font-normal text-text-primary">
                  Não tem contrato de 12 meses pra assinar no primeiro dia.
                </strong>
              </p>

              <p>
                Cada fase tem prazo, escopo e valor definidos antes de começar.{' '}
                <strong className="font-normal text-text-primary">
                  Você sabe exatamente o que vai receber e quando.
                </strong>
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-px bg-border">
            {riskItems.map((item) => (
              <article
                key={item.title}
                className="
                  group flex items-start gap-5
                  bg-surface px-7 py-6
                  transition-colors duration-200
                  hover:bg-[#141414]
                "
              >
                <div
                  className="
                    mt-1 h-10 w-px shrink-0 bg-accent
                    transition-all duration-300
                    group-hover:h-15
                  "
                />

                <div>
                  <h3 className="mb-1.5 text-[15px] font-medium text-text-primary">
                    {item.title}
                  </h3>

                  <p className="text-[13px] font-light leading-[1.6] text-text-secondary">
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
