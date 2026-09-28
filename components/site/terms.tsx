import { Ban, CalendarClock, Clock } from "lucide-react";
import { site } from "@/lib/content";
import { container, h2, section } from "@/lib/ui";

const icons = { clock: Clock, calendar: CalendarClock, ban: Ban };

export function Terms() {
  const t = site.terms;
  return (
    <section className={`${section} border-t border-rule`}>
      <div className={container}>
        <h2 className={h2}>{t.title}</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {t.items.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? Clock;
            return (
              <div key={item.title}>
                <span className="flex size-12 items-center justify-center rounded-full bg-ink-tint text-ink">
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-graphite">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-pencil">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
