import { site } from "@/lib/content";
import { extra } from "@/lib/content-extra";
import { btnOutline, btnPrimary, container } from "@/lib/ui";

// Тетрадная страница — главный визуальный элемент первого экрана
function NotebookPage() {
  const n = site.hero.notebook;
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      {/* Розовый круг за тетрадью */}
      <div className="absolute -right-10 -top-10 size-72 rounded-full bg-ink-tint md:size-96" />
      <div className="absolute -bottom-6 -left-8 size-28 rounded-full bg-blush/70" />

      <div className="relative rotate-1 md:rotate-2">
        {/* Скотч, которым «приклеен» лист */}
        <span className="washi -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-3" />

        <div className="notebook-grid relative overflow-hidden rounded-sm border border-rule px-8 pb-10 pt-9 shadow-[0_30px_60px_-30px_rgba(184,51,106,0.5)] sm:px-10">
          {/* Красная линия полей, как в российской школьной тетради — справа */}
          <div className="absolute inset-y-0 right-10 w-px bg-redpen/60" />

          <div className="pr-8 font-hand text-pen">
            <p className="text-center text-2xl leading-[44px]">{n.date}</p>
            <p className="text-center text-2xl leading-[44px]">{n.heading}</p>
            <div className="mt-[22px]">
              {n.lines.map((line) => (
                <p key={line} className="text-[30px] leading-[44px]">
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Пометка учителя красной ручкой */}
          <div className="mt-6 flex items-center justify-end gap-3 pr-12 font-hand text-redpen">
            <span className="text-3xl">{n.praise}</span>
            <span className="flex size-14 -rotate-6 items-center justify-center rounded-full border-2 border-redpen text-4xl">
              {n.grade}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Нарисованная от руки стрелка
function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 60"
      fill="none"
      className="h-12 w-16 shrink-0 text-ink"
    >
      <path
        d="M72 52C52 54 26 48 16 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M7 26L15 14L25 23"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  const h = site.hero;
  return (
    <section id="top" className="overflow-hidden">
      <div
        className={`${container} grid items-center gap-16 pb-20 pt-14 md:grid-cols-[1.15fr_1fr] md:pb-28 md:pt-24`}
      >
        <div>
          <p className="font-hand text-3xl text-ink">{h.greeting}</p>
          <h1 className="mt-2 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-graphite sm:text-6xl lg:text-7xl">
            {h.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pencil md:text-xl">
            {h.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={h.primaryCta.href}
              target={h.primaryCta.external ? "_blank" : undefined}
              rel={h.primaryCta.external ? "noopener noreferrer" : undefined}
              className={btnPrimary}
            >
              {h.primaryCta.label}
            </a>
            <a href={h.secondaryCta.href} className={btnOutline}>
              {h.secondaryCta.label}
            </a>
          </div>

          {/* Рукописная подсказка со стрелкой */}
          <div className="ml-6 mt-3 flex items-end gap-2">
            <Arrow />
            <span className="font-hand text-2xl text-ink">{extra.heroDoodle}</span>
          </div>

          {/* Заметка про бесплатную методичку */}
          <a
            href={h.secondaryCta.href}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink-tint px-4 py-2 text-sm text-ink transition-colors hover:bg-blush/60"
          >
            📘 {h.freeGuideNote}
          </a>

          <p className="mt-6 text-sm text-pencil">{h.note}</p>
        </div>

        <NotebookPage />
      </div>
    </section>
  );
}
