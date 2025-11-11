import { cn } from "@/lib/utils";

const footerLinks = [
  { label: "Reading", href: "https://reading.warrenchang.dev" },
  { label: "LinkedIn", href: "https://linkedin.com/in/warrenchang" },
  { label: "Instagram", href: "https://instagram.com/warren" },
  { label: "Twitter", href: "https://twitter.com/warrenchang" },
];

export function Footer() {
  const version = "v4.3.0";
  const lastUpdated = "2025-10-13";

  return (
    <footer
      className={cn(
        "flex w-full items-center justify-center bg-background text-text-primary",
        "fixed inset-x-0 bottom-0 -z-10"
      )}
    >
      <section className="w-full grid grid-cols-12 gap-y-8 px-3 pb-16 pt-6 text-sm md:max-w-6xl md:pb-12 md:pt-8">
        <div className="flex flex-col space-y-2 col-span-12 md:col-span-6">
          <div className="flex flex-row items-center space-x-2">
            <span className="rounded-full border border-text-primary px-3 py-1 text-xs uppercase tracking-[0.35em] text-text-primary">
              {version}
            </span>
            <span className="text-xs uppercase tracking-[0.35em] text-text-muted">
              Last updated {lastUpdated}
            </span>
          </div>
          <p className="text-xs uppercase tracking-[0.35em] text-text-subtle">
            Currently iterating on expressive ops tools, cinematic workflows, and co-building playful experiments.
          </p>
        </div>

        <div className="flex flex-col space-y-2 col-span-12 md:col-span-3">
          {footerLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-dotted border-b border-transparent pb-1 text-lg text-text-primary transition hover:border-text-primary/60"
            >
              <span className="underline decoration-dotted underline-offset-[6px]">
                {link.label}
              </span>
              <sup className="font-mono text-xs text-text-muted">{index + 1}</sup>
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-2 col-span-12 md:col-span-3 text-right md:text-left">
          <p className="text-lg text-text-primary">Let&apos;s build something together.</p>
          <a
            href="mailto:warren@wdbuilds.com"
            className="text-lg text-text-primary underline decoration-dotted decoration-text-primary underline-offset-8"
          >
            warren@wdbuilds.com
          </a>
          <p className="text-xs uppercase tracking-[0.35em] text-text-subtle">
            © {new Date().getFullYear()} Warren Chang
          </p>
        </div>
      </section>
    </footer>
  );
}
