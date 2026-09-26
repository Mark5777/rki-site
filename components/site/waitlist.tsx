"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { btnPrimary, h2 } from "@/lib/ui";

const field =
  "mt-2 w-full rounded-xl border border-rule bg-white px-4 py-3 text-base text-graphite outline-none transition-colors placeholder:text-pencil/60 focus:border-ink focus:ring-2 focus:ring-ink/15";

export function Waitlist() {
  const w = site.waitlist;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: позже здесь будет отправка заявки (например, в Telegram)
    setSent(true);
  }

  return (
    <section id="waitlist" className="notebook-grid py-20 md:py-28">
      <div className="mx-auto w-full max-w-xl px-5">
        <div className="rounded-3xl border border-rule bg-white p-8 shadow-[0_30px_60px_-30px_rgba(184,51,106,0.35)] md:p-12">
          <h2 className={`${h2} text-center`}>{w.title}</h2>
          <p className="mt-4 text-center text-lg text-pencil">{w.intro}</p>

          {sent ? (
            <p
              role="status"
              className="mt-10 rounded-2xl bg-ink-tint px-6 py-5 text-center text-lg text-ink"
            >
              {w.success}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <label htmlFor="wl-name" className="text-sm font-medium text-graphite">
                  {w.nameLabel}
                </label>
                <input
                  id="wl-name"
                  name="name"
                  required
                  autoComplete="given-name"
                  placeholder={w.namePlaceholder}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="wl-email" className="text-sm font-medium text-graphite">
                  {w.emailLabel}
                </label>
                <input
                  id="wl-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={w.emailPlaceholder}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="wl-plan" className="text-sm font-medium text-graphite">
                  {w.planLabel}
                </label>
                <select id="wl-plan" name="plan" required defaultValue="" className={field}>
                  <option value="" disabled>
                    {w.planPlaceholder}
                  </option>
                  {site.plans.items.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name} — {p.price}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className={`${btnPrimary} w-full`}>
                {w.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
