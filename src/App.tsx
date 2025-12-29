import Navigation from "./components/navigation/Navigation";
import Hero from "./sections/Hero";

export default function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-screen">
        <Navigation onNavigate={scrollToSection} />
        <div id="home">
          <Hero onNavigate={scrollToSection} />
        </div>
      </div>
    </>
  );
}
