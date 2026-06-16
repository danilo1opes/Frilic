import { consequences } from '@/data/consequence';

export default function Consequences() {
  return (
    <section
      id="consequences"
      className="border-y border-border bg-surface py-20 lg:py-30"
    >
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        {/* Subtitle */}
        <p
          className="
            mb-5 flex items-center gap-3
            text-[10px] font-medium uppercase tracking-[0.2em]
            text-text-muted
            before:block before:h-px before:w-5 before:bg-text-muted before:content-['']
          "
        >
          O que isso custa
        </p>

        {/* Title */}
        <h2 className="max-w-[680px] font-heading text-4xl font-light leading-wide text-white sm:text-5xl lg:text-[58px]">
          Continuar assim tem um
          <br />
          custo real, mesmo que
          <br />
          não apareça <em className="text-accent">na nota fiscal.</em>
        </h2>

        {/* Consequences */}
        <div className="mt-16 grid gap-px bg-border lg:grid-cols-3">
          {consequences.map((item) => (
            <article
              key={item.title}
              className="
                group bg-surface px-9 py-10
                transition-colors duration-300
                hover:bg-[#141414]
              "
            >
              <div
                className="
                  mb-7 h-px w-8 bg-accent
                  transition-all duration-300
                  group-hover:w-16
                "
              />

              <h3
                className="
                  mb-3 font-heading text-[22px] font-normal
                  leading-tight text-white
                "
              >
                {item.title}
              </h3>

              <p className="font-body text-[13.5px] font-light leading-[1.7] text-text-secondary">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
