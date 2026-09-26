import { site } from "@/lib/content";
import { container } from "@/lib/ui";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-deep py-12 text-white/70">
      <div
        className={`${container} flex flex-col items-center gap-4 text-center text-sm`}
      >
        <p className="font-display text-xl font-semibold text-white">{site.name}</p>
        <p>
          {site.footer.tagline} © {year} {site.name}
        </p>
        <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
          {site.email}
        </a>
        <nav className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {site.footer.legal.map((l) => (
            <a key={l.label} href={l.href} className="underline underline-offset-4 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
