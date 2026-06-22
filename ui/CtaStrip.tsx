import Link from 'next/link';

type CtaStripProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
};

export default function CtaStrip({
  title,
  description,
  buttonText,
  buttonHref = '#cta',
}: CtaStripProps) {
  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div
          className="
            flex flex-col gap-6
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <h3
              className="
                mb-2
                font-heading
                text-3xl
                font-light
                text-white
              "
            >
              {title}
            </h3>

            <p
              className="
                font-body
                text-sm
                font-light
                text-text-secondary
              "
            >
              {description}
            </p>
          </div>

          <Link
            href={buttonHref}
            className="
              inline-block
              w-fit
              bg-accent
              px-9
              py-4
              text-xs
              font-medium
              uppercase
              tracking-[0.12em]
              text-background

              transition-opacity
              duration-200

              hover:opacity-90
            "
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
