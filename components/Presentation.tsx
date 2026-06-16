import { presentationItems } from '@/data/presentation';

export default function Presentation() {
  return (
    <section
      id="presentation"
      className="border-b border-border py-20 lg:py-30 bg-background"
    >
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[5fr_4fr] lg:items-center lg:gap-24">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted before:block before:h-px before:w-5 before:bg-text-muted before:content-['']">
              A solução
            </p>

            <h2 className="font-heading text-4xl font-light leading-wide text-white sm:text-5xl lg:text-[58px]">
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

          <aside className="border border-border-light bg-surface p-10">
            <p className="mb-7 text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted">
              O que você vai ter ao final
            </p>

            <div className="space-y-5">
              {presentationItems.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center border border-accent">
                    <div className="h-1.5 w-1.5 bg-accent" />
                  </div>

                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
