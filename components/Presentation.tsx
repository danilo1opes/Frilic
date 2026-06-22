import { presentationItems } from '@/data/presentation';

export default function Presentation() {
  return (
    <section
      id="presentation"
      data-section="presentation"
      aria-labelledby="presentation-title"
      className="border-b border-border bg-background py-20 lg:py-30"
    >
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[5fr_4fr] lg:items-center lg:gap-24">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted before:block before:h-px before:w-5 before:bg-text-muted before:content-['']">
              A solução
            </p>

            <h2
              id="presentation-title"
              className="font-heading text-4xl font-light leading-[1.05] text-white sm:text-5xl lg:text-[58px]"
            >
              A Frilic não vende post
              <br />
              nem anúncio avulso.
              <br />
              Constrói um <em className="text-accent">canal de clientes.</em>
            </h2>

            <div className="mt-8 space-y-6 font-body text-[17px] font-light leading-[1.8] text-text-secondary">
              <p>
                O Frilic Growth System monta, passo a passo, tudo que sua
                empresa precisa para{' '}
                <strong className="font-normal text-text-primary">
                  novos clientes chegarem todo mês
                </strong>
                , sem você precisar ligar para ninguém, depender de indicação ou
                torcer para o mês ser bom.
              </p>

              <p>
                Não é uma campanha. Não é um pacote mensal de posts. É um
                processo de 12 meses que constrói os canais certos, testa o que
                funciona para o seu mercado e vai escalando o que traz resultado
                de verdade.
              </p>

              <p>
                No final, sua empresa tem{' '}
                <strong className="font-normal text-text-primary">
                  um fluxo previsível de clientes novos
                </strong>
                , com dados mostrando de onde cada um veio e quanto custou para
                conquistar.
              </p>
            </div>
          </div>

          <aside
            aria-labelledby="presentation-aside-title"
            className="border border-border-light bg-surface p-10"
          >
            <h3
              id="presentation-aside-title"
              className="mb-7 text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted"
            >
              O que você vai ter ao final
            </h3>

            <ul className="space-y-5">
              {presentationItems.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center border border-accent"
                  >
                    <span className="h-1.5 w-1.5 bg-accent" />
                  </span>

                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
