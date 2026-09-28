"use client";

import { useState } from "react";
import { site } from "@/lib/content";
import { container, h2, lead, section } from "@/lib/ui";

// Одна флип-карточка: клик переворачивает её с английского на русский
function FlipCard({ front, back }: { front: string; back: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      aria-pressed={flipped}
      aria-label={flipped ? back : front}
      className="group h-44 w-full text-left [perspective:1200px] focus-visible:outline-none"
    >
      <div
        className={`relative h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-ink ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Лицевая сторона — английский */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-rule bg-white p-6 [backface-visibility:hidden]">
          <p className="text-lg font-medium leading-snug text-graphite">{front}</p>
          <span className="text-sm text-pencil">Tap to see it in Russian →</span>
        </div>
        {/* Обратная сторона — русский */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-ink p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p lang="ru" className="font-hand text-3xl leading-tight">
            {back}
          </p>
          <span className="text-sm text-white/70">Tap to flip back</span>
        </div>
      </div>
    </button>
  );
}

export function Outcomes() {
  const o = site.outcomes;
  return (
    <section id="programme" className={`${section} bg-ink-tint`}>
      <div className={container}>
        <h2 className={h2}>{o.title}</h2>
        <p className={lead}>{o.intro}</p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {o.cards.map((card) => (
            <FlipCard key={card.front} front={card.front} back={card.back} />
          ))}
        </div>
      </div>
    </section>
  );
}
