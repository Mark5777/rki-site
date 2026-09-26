import { Brain, MessagesSquare, Route } from "lucide-react";
import { site } from "@/lib/content";
import { container, h2, lead, section } from "@/lib/ui";

const icons = {
  path: Route,
  chat: MessagesSquare,
  memory: Brain,
};

export function Method() {
  const m = site.method;
  return (
    <section id="method" className={`${section} border-t border-rule`}>
      <div className={container}>
        <h2 className={h2}>{m.title}</h2>
        <p className={lead}>{m.intro}</p>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {m.items.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? Route;
            return (
              <div key={item.title}>
                <span className="flex size-12 items-center justify-center rounded-full bg-ink-tint text-ink">
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-graphite">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-pencil">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
