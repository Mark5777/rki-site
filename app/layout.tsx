import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Literata, Onest, Caveat } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

// Шрифты с поддержкой кириллицы
const display = Literata({
  subsets: ["latin", "cyrillic"],
  variable: "--ff-display",
  display: "swap",
});

const body = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--ff-body",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin", "cyrillic"],
  variable: "--ff-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${hand.variable}`}
    >
      <body className="bg-paper font-body text-graphite antialiased">
        {children}
      </body>
    </html>
  );
}
