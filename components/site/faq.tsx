import { Plus } from "lucide-react";
import { site } from "@/lib/content";
import { h2, section } from "@/lib/ui";

// Вопросы раскрываются по клику — это встроенная возможность HTML (<details>)
export function Faq() {
  const f = site.faq;
  return (
    <section id="faq" className={`${section} bg-ink-tint`}>
      <div className="mx-auto w-full max-w-3xl px-5 md:px-8">
        <h2 className={h2}>{f.title}</h2>

        <div className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
          {f.items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl font-semibold text-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                {item.q}
                <Plus
                  className="size-6 shrink-0 text-ink transition-transform duration-200 group-open:rotate-45"
                  strokeWidth={1.75}
                />
              </summary>
              <p className="-mt-1 pb-6 pr-12 leading-relaxed text-pencil">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
