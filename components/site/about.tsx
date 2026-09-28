import Image from "next/image";
import { site } from "@/lib/content";
import { extra } from "@/lib/content-extra";
import { btnOutline, container, h2, section } from "@/lib/ui";

export function About() {
  const a = site.about;
  return (
    <section id="about" className={`${section} overflow-hidden border-t border-rule`}>
      <div
        className={`${container} grid items-center gap-16 md:grid-cols-[1fr_1.25fr] lg:gap-24`}
      >
        {/* Фото в виде карточки-полароида, приклеенной скотчем */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-8 -top-8 size-40 rounded-full bg-ink-tint" />

          <figure className="relative -rotate-2 bg-white p-3 pb-4 shadow-[0_30px_60px_-30px_rgba(110,29,67,0.45)]">
            <span className="washi -top-3 left-4 z-10 -rotate-12" />
            <span className="washi -top-3 right-4 z-10 rotate-12" />
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-tint">
              {a.photo ? (
                <Image
                  src={a.photo}
                  alt={a.caption}
                  fill
                  sizes="(min-width: 768px) 384px, 90vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center font-hand text-3xl text-ink">
                  Photo here
                </div>
              )}
            </div>
            <figcaption className="mt-3 text-center font-hand text-2xl text-ink">
              {a.caption}
            </figcaption>
          </figure>

          <p className="absolute -bottom-10 -right-4 w-44 rotate-6 bg-blush p-4 font-hand text-xl leading-snug text-ink-deep shadow-[0_12px_24px_-12px_rgba(110,29,67,0.5)] sm:-right-10">
            {extra.aboutSticky}
          </p>
        </div>

        <div>
          <h2 className={h2}>{a.title}</h2>
          <div className="mt-8 space-y-5">
            {a.paragraphs.map((p) => (
              <p key={p.lead} className="max-w-xl leading-relaxed text-pencil">
                <strong className="font-semibold text-graphite">{p.lead}</strong>{" "}
                {p.text}
              </p>
            ))}
          </div>

          <p className="mt-10 font-hand text-2xl text-ink">{a.contactsTitle}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {a.contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`${btnOutline} px-5! py-2.5! text-sm!`}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
