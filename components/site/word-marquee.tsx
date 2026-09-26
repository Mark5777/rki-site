import { extra } from "@/lib/content-extra";

// Бегущая строка с русскими словами и переводом
export function WordMarquee() {
  // Список повторяется дважды, чтобы лента шла бесконечно без разрыва
  const words = [...extra.marquee, ...extra.marquee];
  return (
    <div className="overflow-hidden bg-ink py-5 text-white">
      <ul className="marquee-track flex w-max animate-marquee items-center motion-reduce:w-auto motion-reduce:flex-wrap">
        {words.map((w, i) => (
          <li
            key={i}
            aria-hidden={i >= extra.marquee.length ? true : undefined}
            className="flex items-center gap-3 px-6"
          >
            <span lang="ru" className="font-hand text-3xl">
              {w.ru}
            </span>
            <span className="text-sm text-white/75">{w.en}</span>
            <span aria-hidden="true" className="ml-6 text-blush">
              ✿
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
