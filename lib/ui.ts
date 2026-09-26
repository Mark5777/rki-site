// Общие стили, которые повторяются в разных блоках
export const container = "mx-auto w-full max-w-6xl px-5 md:px-8";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

export const btnPrimary = `inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-ink-deep ${focus}`;

export const btnOutline = `inline-flex items-center justify-center rounded-full border border-ink/30 px-7 py-3.5 text-base font-medium text-ink transition-colors hover:border-ink hover:bg-ink-tint ${focus}`;

export const btnLight = `inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-medium text-ink transition-colors hover:bg-ink-tint focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`;

export const h2 =
  "font-display text-4xl font-semibold leading-[1.1] tracking-tight text-graphite md:text-5xl";

export const lead = "mt-4 max-w-2xl text-lg leading-relaxed text-pencil";

export const section = "py-20 md:py-28";
