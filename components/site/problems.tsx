import { site } from "@/lib/content";
import { container, h2, lead, section } from "@/lib/ui";

export function Problems() {
  const p = site.problems;
  return (
    <section className={section}>
      <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20`}>
        {/* Заголовок слева «прилипает» при прокрутке на больших экранах */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className={h2}>{p.title}</h2>
          <p className={lead}>{p.intro}</p>
        </div>

        <div className="divide-y divide-rule border-y border-rule">
          {p.items.map((item) => (
            <div key={item.title} className="py-8">
              <h3 className="font-display text-2xl font-semibold text-graphite">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-pencil">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
