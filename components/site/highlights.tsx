import { site } from "@/lib/content";
import { container } from "@/lib/ui";

export function Highlights() {
  return (
    <section className="border-y border-rule bg-ink-tint">
      <div
        className={`${container} grid gap-x-10 gap-y-8 py-14 sm:grid-cols-2 lg:grid-cols-4`}
      >
        {site.highlights.map((item) => (
          <div key={item.title}>
            <h3 className="font-display text-lg font-semibold text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-pencil">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
