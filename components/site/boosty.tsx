import { Check } from "lucide-react";
import { site } from "@/lib/content";
import { btnPrimary, container, h2, section } from "@/lib/ui";

export function Boosty() {
  const b = site.boosty;
  return (
    <section className={`${section} bg-ink-tint`}>
      <div className={`${container} grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center`}>
        <div>
          <h2 className={h2}>{b.title}</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-pencil">{b.intro}</p>

          <ul className="mt-8 space-y-3.5">
            {b.benefits.map((item) => (
              <li key={item} className="flex gap-3 leading-snug">
                <Check className="mt-0.5 size-5 shrink-0 text-ink" strokeWidth={2.5} />
                <span className="text-graphite">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Выделенное предупреждение */}
        <div className="relative rounded-3xl border-2 border-ink bg-white p-8 shadow-[0_30px_60px_-30px_rgba(184,51,106,0.4)] md:p-10">
          <span className="washi -top-3 left-8 z-10 -rotate-6" />
          <p className="font-display text-2xl font-semibold leading-snug text-graphite">
            {b.highlight}
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnPrimary} mt-8 w-full`}
          >
            {b.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
