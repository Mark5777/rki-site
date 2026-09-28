import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { WordMarquee } from "@/components/site/word-marquee";
import { About } from "@/components/site/about";
import { Problems } from "@/components/site/problems";
import { Alphabet } from "@/components/site/alphabet";
import { Outcomes } from "@/components/site/outcomes";
import { Pricing } from "@/components/site/pricing";
import { Terms } from "@/components/site/terms";
import { Boosty } from "@/components/site/boosty";
import { Guide } from "@/components/site/guide";
import { Faq } from "@/components/site/faq";
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
        <About />
        <Problems />
        <Alphabet />
        <Outcomes />
        <Pricing />
        <Terms />
        <Boosty />
        <Guide />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
