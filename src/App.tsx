import Navigation from "./components/navigation/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Courses from "./sections/Courses";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

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
        <About />
        <Courses />
        <Pricing />
        <Contact />
        <Footer onNavigate={scrollToSection} />
      </div>
    </>
  );
}
