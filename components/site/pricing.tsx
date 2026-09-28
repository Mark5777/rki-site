import { Check } from "lucide-react";
import { site } from "@/lib/content";
import { btnLight, btnOutline, btnPrimary, container, h2, lead, section } from "@/lib/ui";

export function Pricing() {
  const p = site.pricing;
  const t = site.trial;

  return (
    <section id="plans" className={section}>
      <div className={container}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={h2}>{p.title}</h2>
          <p className={`${lead} mx-auto`}>{p.intro}</p>
        </div>

        {/* Три карточки тарифов */}
        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {p.cards.map((plan) => {
            const f = plan.featured;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-8 md:p-10 ${
                  f
                    ? "bg-ink text-white shadow-[0_30px_60px_-30px_rgba(184,51,106,0.6)] lg:-my-4 lg:py-14"
                    : "border border-rule bg-white"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-8 rounded-full border-2 border-ink bg-white px-4 py-1 font-hand text-xl leading-none text-ink md:left-10">
                    {plan.badge}
                  </span>
                )}

                <h3 className={`text-lg font-medium ${f ? "text-white/80" : "text-pencil"}`}>
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-3">
                  <p className="font-display text-5xl font-semibold tracking-tight">
                    {plan.price}
                  </p>
                  {plan.compare && (
                    <span className={`text-lg line-through ${f ? "text-white/50" : "text-pencil/60"}`}>
                      {plan.compare}
                    </span>
                  )}
                </div>
                {plan.savings && (
                  <p className={`mt-1 text-sm font-medium ${f ? "text-blush" : "text-ink"}`}>
                    {plan.savings}
                  </p>
                )}
                <p className={`mt-2 text-sm ${f ? "text-white/70" : "text-pencil"}`}>
                  {plan.note}
                </p>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 leading-snug">
                      <Check
                        className={`mt-0.5 size-5 shrink-0 ${f ? "text-white" : "text-ink"}`}
                        strokeWidth={2.5}
                      />
                      <span className={f ? "text-white/90" : "text-graphite"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-10 w-full ${f ? btnLight : btnOutline}`}
                >
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Большая карточка пробного урока */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border-2 border-ink bg-ink-tint p-8 md:p-10">
          <span className="washi -top-3 left-10 z-10 -rotate-6" />
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <p className="font-hand text-2xl text-ink">{t.tag}</p>
              <h3 className="mt-1 font-display text-3xl font-semibold text-graphite">
                {t.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-3">
                <p className="font-display text-5xl font-semibold tracking-tight text-ink">
                  {t.price}
                </p>
                <span className="text-lg text-pencil/60 line-through">{t.compare}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-ink">{t.savings}</p>
              <p className="mt-4 max-w-sm text-pencil">{t.text}</p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnPrimary} mt-6`}
              >
                {t.cta}
              </a>
            </div>

            <ul className="space-y-3.5">
              {t.benefits.map((b) => (
                <li key={b} className="flex gap-3 leading-snug">
                  <Check className="mt-0.5 size-5 shrink-0 text-ink" strokeWidth={2.5} />
                  <span className="text-graphite">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
