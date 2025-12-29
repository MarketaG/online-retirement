import { ArrowRight, MonitorPlay } from "lucide-react";

type Props = {
  onNavigate: (id: string) => void;
};

export function HeroContent({ onNavigate }: Props) {
  return (
    <div className="text-center lg:text-left animate-fade-in-up motion-reduce:animate-none">
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/30">
          <MonitorPlay className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Technology Made Simple
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Never Too Late to
          <span className="block text-primary mt-2">Learn Technology</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
          Embrace the digital world with confidence. Our courses are designed
          specifically for retirees, offering patient, step-by-step guidance in
          a comfortable learning environment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            onClick={() => onNavigate("courses")}
            className="cursor-pointer bg-primary hover:bg-primary/90 text-secondary px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
          >
            Explore Courses
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="cursor-pointer border-2 border-primary/50 hover:border-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-primary/10"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
