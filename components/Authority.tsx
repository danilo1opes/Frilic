import { authorityStats } from '@/data/authority';

export default function Authority() {
  return (
    <section
      id="authority"
      data-section="authority"
      aria-labelledby="authority-title"
      className="border-b border-border bg-background py-20 lg:py-30"
    >
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[5fr_4fr] lg:items-start lg:gap-20">
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
              Fundamento
            </p>

            <h2 id="authority-title" className="sr-only">
              Fundamento da Frilic
            </h2>

            <blockquote
              cite="https://frilic.com"
              className="
                mb-10 border-l border-accent pl-9
                font-heading text-[28px] font-light leading-[1.3]
                text-white sm:text-[36px] lg:text-[44px]
              "
            >
              &quot;Crescimento sustentável não é resultado de ações criativas.
              É resultado de sistemas bem construídos.&quot;
            </blockquote>

            <div className="space-y-5 font-body text-[15px] font-light leading-[1.8] text-text-secondary">
              <p>
                A Frilic é uma software house e empresa de serviços de TI com
                atuação em desenvolvimento, infraestrutura e crescimento digital
                para pequenas e médias empresas brasileiras.
              </p>

              <p>
                O Frilic Growth System nasceu da observação direta de como boas
                empresas perdem mercado por falta de estrutura de aquisição e de
                como a construção progressiva dessa estrutura transforma
                resultados de forma consistente.
              </p>

              <p>
                Nossa abordagem combina tecnologia, estratégia de marketing e
                análise de dados em um único sistema operado por profissionais
                com experiência prática, não por estagiários executando tarefas
                avulsas.
              </p>
            </div>
          </div>

          <dl className="flex flex-col gap-px bg-border">
            {authorityStats.map((stat) => (
              <div
                key={stat.value}
                className="
                  bg-surface px-8 py-7
                  transition-colors duration-200
                  hover:bg-[#141414]
                "
              >
                <dt className="mb-2 block font-heading text-[40px] font-light leading-none text-white">
                  {stat.value}
                </dt>

                <dd className="text-xs font-normal uppercase tracking-[0.08em] text-text-muted">
                  {stat.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
