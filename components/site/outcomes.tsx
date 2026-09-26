import { site } from "@/lib/content";
import { container, h2, lead, section } from "@/lib/ui";

export function Outcomes() {
  const o = site.outcomes;
  return (
    <section id="programme" className={`${section} bg-ink-tint`}>
      <div className={container}>
        <h2 className={h2}>{o.title}</h2>
        <p className={lead}>{o.intro}</p>

        <ol className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {o.items.map((item, i) => (
            <li key={item.skill} className="border-t border-ink/15 py-6">
              <span className="text-sm font-medium text-pencil">Week {i + 1}</span>
              <p className="mt-1 text-lg font-medium leading-snug text-graphite">
                {item.skill}
              </p>
              <p lang="ru" className="mt-2 font-hand text-2xl leading-tight text-pen">
                {item.example}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
