"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/content";
import { btnPrimary, container } from "@/lib/ui";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <div className={`${container} flex h-16 items-center justify-between`}>
        <a href="#top" className="font-display text-xl font-semibold text-ink">
          {site.name}
        </a>

        {/* Меню для компьютера */}
        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] text-graphite transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a href="#plans" className={`${btnPrimary} px-5! py-2.5! text-sm!`}>
            {site.hero.primaryCta}
          </a>
        </nav>

        {/* Кнопка меню для телефона */}
        <button
          type="button"
          className="rounded-md p-2 text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Меню для телефона */}
      {open && (
        <nav className="border-t border-rule bg-paper md:hidden">
          <div className={`${container} flex flex-col py-4`}>
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-lg text-graphite"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#plans"
              onClick={() => setOpen(false)}
              className={`${btnPrimary} mt-3`}
            >
              {site.hero.primaryCta}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
