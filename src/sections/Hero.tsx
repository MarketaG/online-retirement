import { HeroBackground } from "../components/hero/HeroBackground";
import { HeroContent } from "../components/hero/HeroContent";
import { HeroStats } from "../components/hero/HeroStats";

type Props = {
  onNavigate: (id: string) => void;
};

export default function Hero({ onNavigate }: Props) {
  return (
    <section
      id="home"
      className="relative bg-linear-to-br
 from-secondary via-secondary to-secondary/90 text-white overflow-hidden scroll-mt-16"
    >
      <HeroBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent onNavigate={onNavigate} />
          <HeroStats />
        </div>
      </div>
    </section>
  );
}
