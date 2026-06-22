export default function Header() {
  return (
    <header
      id="hero"
      data-section="hero"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden border-b border-border bg-background px-6 pb-24 pt-36 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="
          absolute inset-0 opacity-[0.22]
          [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-20 -top-24
          h-[500px] w-[500px] rounded-full
          bg-accent opacity-[0.07] blur-[80px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-16 bottom-16
          h-[380px] w-[380px] rounded-full
          bg-accent opacity-[0.07] blur-[80px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[1]
          bg-[radial-gradient(ellipse_at_50%_100%,transparent_30%,var(--color-background)_80%)]
        "
      />

      <div className="relative z-2 mx-auto w-full max-w-[1160px]">
        <p
          className="
            mb-9 flex items-center gap-4
            text-xs font-normal uppercase tracking-[0.12em]
            text-text-muted
            before:block before:h-px before:w-8 before:bg-text-muted before:content-['']
          "
        >
          Frilic Growth System: Sistema de Aquisição
        </p>

        <h1 className="font-heading text-5xl font-light leading-[1.05] tracking-[-0.02em] text-white sm:text-[72px] lg:max-w-[900px] lg:text-[108px]">
          Clientes previsíveis <br />
          não acontecem <br />
          <em className="text-accent">por acaso.</em>
        </h1>

        <p className="mt-10 max-w-[520px] font-body text-lg font-light leading-[1.7] text-text-secondary">
          O Frilic Growth System é um sistema de 12 meses que coloca novos
          clientes entrando na sua empresa todo mês, de forma previsível,
          mensurável e sem depender de indicação.
        </p>

        <div className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-start sm:gap-8">
          <a
            href="#cta"
            aria-label="Ir para a seção Próximo passo"
            className="
              inline-block bg-text-primary px-10 py-4
              text-center text-xs font-medium uppercase tracking-[0.12em]
              text-background transition-colors duration-200
              hover:bg-white
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-4 focus-visible:outline-accent
            "
          >
            Quero conhecer o sistema
          </a>

          <a
            href="#phases"
            aria-label="Ir para a seção das 4 fases"
            className="
              border-b border-border-light pb-0.5
              text-xs font-normal uppercase tracking-[0.1em]
              text-text-secondary transition-colors duration-200
              hover:text-text-primary
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-4 focus-visible:outline-accent
            "
          >
            Ver as 4 fases
          </a>
        </div>

        <dl className="mt-20 flex flex-wrap gap-8 border-t border-border pt-8 lg:gap-16">
          <div>
            <dt className="block font-heading text-4xl font-light text-white">
              4
            </dt>
            <dd className="mt-1 block text-[11px] uppercase tracking-[0.12em] text-text-muted">
              Fases de implementação
            </dd>
          </div>

          <div>
            <dt className="block font-heading text-4xl font-light text-white">
              12
            </dt>
            <dd className="mt-1 block text-[11px] uppercase tracking-[0.12em] text-text-muted">
              Meses de sistema completo
            </dd>
          </div>

          <div>
            <dt className="block font-heading text-4xl font-light text-white">
              1
            </dt>
            <dd className="mt-1 block text-[11px] uppercase tracking-[0.12em] text-text-muted">
              Sistema integrado, não serviços isolados
            </dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
