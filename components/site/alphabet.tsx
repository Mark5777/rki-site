"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";
import { extra } from "@/lib/content-extra";
import { container, h2, lead, section } from "@/lib/ui";

// Интерактивный алфавит: нажимаешь букву — видишь слово и можешь его послушать
export function Alphabet() {
  const a = extra.alphabet;
  const [index, setIndex] = useState(0);
  const current = a.letters[index];

  function speak() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(current.word);
    u.lang = "ru-RU";
    u.rate = 0.85;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  return (
    <section className={`${section} border-t border-rule`}>
      <div className={`${container} grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20`}>
        <div>
          <h2 className={h2}>{a.title}</h2>
          <p className={lead}>{a.intro}</p>

          {/* Карточка выбранной буквы */}
          <div className="relative mt-10 max-w-sm">
            <span className="washi -top-3 left-6 z-10 -rotate-6 w-24!" />
            <div
              aria-live="polite"
              className="notebook-grid relative rounded-2xl border border-rule p-8 shadow-[0_30px_60px_-30px_rgba(184,51,106,0.45)]"
            >
              <p lang="ru" className="font-display text-8xl font-semibold leading-none text-ink">
                {current.l}
              </p>
              <p lang="ru" className="mt-6 font-hand text-5xl text-pen">
                {current.word}
              </p>
              <p className="mt-1 text-lg text-pencil">{current.en}</p>
              {current.note && (
                <p className="mt-3 font-hand text-xl text-redpen">{current.note}</p>
              )}
              <button
                type="button"
                onClick={speak}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                <Volume2 className="size-4" />
                {a.listen}
              </button>
            </div>
          </div>
        </div>

        {/* Сетка букв */}
        <div className="grid grid-cols-5 gap-2 sm:grid-cols-7 lg:grid-cols-6 xl:grid-cols-7">
          {a.letters.map((item, i) => {
            const active = i === index;
            return (
              <button
                key={item.l}
                type="button"
                lang="ru"
                aria-pressed={active}
                aria-label={`${item.l}: ${item.word}`}
                onClick={() => setIndex(i)}
                className={`aspect-square rounded-2xl font-display text-2xl font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                  active
                    ? "-rotate-3 scale-105 bg-ink text-white shadow-lg shadow-ink/25"
                    : "border border-rule bg-white text-graphite hover:border-ink hover:bg-ink-tint"
                }`}
              >
                {item.l}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
