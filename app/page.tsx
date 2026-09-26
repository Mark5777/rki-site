import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { WordMarquee } from "@/components/site/word-marquee";
import { Highlights } from "@/components/site/highlights";
import { Problems } from "@/components/site/problems";
import { Alphabet } from "@/components/site/alphabet";
import { Method } from "@/components/site/method";
import { Outcomes } from "@/components/site/outcomes";
import { Plans } from "@/components/site/plans";
import { About } from "@/components/site/about";
import { Faq } from "@/components/site/faq";
import { Waitlist } from "@/components/site/waitlist";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

// Главная страница собирается из блоков, как из кубиков.
// Поменять порядок блоков = поменять порядок строк ниже.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WordMarquee />
        <Highlights />
        <Problems />
        <Alphabet />
        <Method />
        <Outcomes />
        <Plans />
        <About />
        <Faq />
        <Waitlist />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
