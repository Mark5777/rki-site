"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { btnPrimary, h2 } from "@/lib/ui";

const field =
  "mt-2 w-full rounded-xl border border-rule bg-white px-4 py-3 text-base text-graphite outline-none transition-colors placeholder:text-pencil/60 focus:border-ink focus:ring-2 focus:ring-ink/15";

export function Guide() {
  const g = site.guide;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: подключить отправку письма с методичкой (например, через сервис рассылок)
    setSent(true);
  }

  return (
    <section id="guide" className="notebook-grid py-20 md:py-28">
      <div className="mx-auto w-full max-w-xl px-5">
        <div className="rounded-3xl border border-rule bg-white p-8 shadow-[0_30px_60px_-30px_rgba(184,51,106,0.35)] md:p-12">
          <h2 className={`${h2} text-center`}>{g.title}</h2>
          <p className="mt-4 text-center text-lg text-pencil">{g.intro}</p>

          {sent ? (
            <p
              role="status"
              className="mt-10 rounded-2xl bg-ink-tint px-6 py-5 text-center text-lg text-ink"
            >
              {g.success}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <label htmlFor="g-name" className="text-sm font-medium text-graphite">
                  {g.nameLabel}
                </label>
                <input
                  id="g-name"
                  name="name"
                  required
                  autoComplete="given-name"
                  placeholder={g.namePlaceholder}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="g-email" className="text-sm font-medium text-graphite">
                  {g.emailLabel}
                </label>
                <input
                  id="g-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={g.emailPlaceholder}
                  className={field}
                />
              </div>
              <button type="submit" className={`${btnPrimary} w-full`}>
                {g.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
