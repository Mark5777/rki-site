import { site } from "@/lib/content";
import { extra } from "@/lib/content-extra";
import { container } from "@/lib/ui";

export function FinalCta() {
  const f = site.final;
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      {/* Большие полупрозрачные буквы на фоне */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 -top-10 select-none font-display text-[16rem] font-semibold leading-none text-white/[0.07]"
      >
        Ж
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-4 select-none font-display text-[18rem] font-semibold leading-none text-white/[0.07]"
      >
        Я
      </span>

      <div className={`${container} relative text-center`}>
        <p lang="ru" className="-rotate-2 font-hand text-4xl text-blush">
          {extra.finalHand}
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          {f.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85">
          {f.text}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {site.plans.items.map((p) => (
            <a
              key={p.name}
              href="#plans"
              className="rounded-full bg-white px-6 py-3 font-medium text-graphite transition-colors hover:bg-ink-tint focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="text-ink">{p.price}</span> {p.name}
            </a>
          ))}
        </div>

        <p className="mt-10 font-hand text-2xl text-white/90">{f.note}</p>
      </div>
    </section>
  );
}
