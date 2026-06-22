export default function Footer() {
  return (
    <footer
      aria-label="Rodapé do site"
      className="border-t border-border bg-background"
    >
      <div
        className="
          mx-auto flex max-w-[1160px]
          flex-col items-center justify-between
          gap-4 px-6 py-8 text-center
          md:flex-row md:text-left
          lg:px-10
        "
      >
        <p
          className="
            text-[12px] font-normal
            tracking-[0.06em] text-text-muted
          "
        >
          © {new Date().getFullYear()} Frilic — Software House &amp; IT Services
        </p>

        <a
          href="https://frilic.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Acessar o site da Frilic"
          className="
            text-[12px] font-normal
            tracking-[0.06em] text-text-muted
            transition-colors duration-200
            hover:text-text-primary
            focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-4 focus-visible:outline-accent
          "
        >
          frilic.com
        </a>
      </div>
    </footer>
  );
}
