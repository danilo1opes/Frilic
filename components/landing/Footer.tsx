export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div
        className="
          mx-auto flex max-w-[1160px]
          flex-col items-center justify-between
          gap-4 px-6 py-8
          text-center

          md:flex-row md:text-left
          lg:px-10
        "
      >
        <p
          className="
            text-[12px]
            font-normal
            tracking-[0.06em]
            text-text-muted
          "
        >
          © {new Date().getFullYear()} Frilic — Software House & IT Services
        </p>

        <p
          className="
            text-[12px]
            font-normal
            tracking-[0.06em]
            text-text-muted
          "
        >
          frilic.digital
        </p>
      </div>
    </footer>
  );
}
