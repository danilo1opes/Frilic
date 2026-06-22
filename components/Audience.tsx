import { audienceNo, audienceYes } from '@/data/audience';

export default function Audience() {
  return (
    <section
      id="audience"
      data-section="audience"
      aria-labelledby="audience-title"
      className="border-y border-border bg-background py-20 lg:py-30"
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
          Clareza de escopo
        </p>

        <h2
          id="audience-title"
          className="
            mb-10 font-heading text-4xl font-light
            leading-[1.05] text-white
            sm:text-5xl lg:text-[58px]
          "
        >
          Para quem é, e para
          <br />
          quem <em className="text-accent">não é.</em>
        </h2>

        <div className="grid gap-px bg-border lg:grid-cols-2">
          <div className="bg-surface px-8 py-10 lg:px-12 lg:py-14">
            <h3 className="mb-9 border-b border-border pb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
              Para quem é
            </h3>

            <ul className="flex flex-col gap-4">
              {audienceYes.map((item) => (
                <li
                  key={item}
                  className="
                    relative pl-5 text-[15px] font-normal leading-[1.5]
                    text-text-secondary transition-colors duration-200
                    before:absolute before:left-0 before:text-accent
                    before:content-['+']
                    hover:text-text-primary
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface px-8 py-10 lg:px-12 lg:py-14">
            <h3 className="mb-9 border-b border-border pb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
              Para quem não é
            </h3>

            <ul className="flex flex-col gap-4">
              {audienceNo.map((item) => (
                <li
                  key={item}
                  className="
                    relative pl-5 text-[15px] font-normal leading-[1.5]
                    text-text-secondary transition-colors duration-200
                    before:absolute before:left-0 before:text-text-muted
                    before:content-['×']
                    hover:text-text-primary
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
