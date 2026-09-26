import { Check } from "lucide-react";
import { site } from "@/lib/content";
import { btnLight, btnOutline, container, h2, lead, section } from "@/lib/ui";

export function Plans() {
  const p = site.plans;
  return (
    <section id="plans" className={section}>
      <div className={container}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={h2}>{p.title}</h2>
          <p className={`${lead} mx-auto`}>{p.intro}</p>
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {p.items.map((plan) => {
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
                <p className="mt-3 font-display text-6xl font-semibold tracking-tight">
                  {plan.price}
                </p>
                <p className={`mt-2 text-sm ${f ? "text-white/70" : "text-pencil"}`}>
                  {plan.perMonth}
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
                  href="#waitlist"
                  className={`mt-10 w-full ${f ? btnLight : btnOutline}`}
                >
                  {plan.cta}
                </a>
                <p
                  className={`mt-4 text-center font-hand text-xl ${
                    f ? "text-white/80" : "text-ink"
                  }`}
                >
                  {plan.note}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
