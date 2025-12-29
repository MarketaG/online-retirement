import { useEffect, useState } from "react";

import NavigationWrapper from "./NavigattionWrapper";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  return (
    <>
      <NavigationWrapper
        isScrolled={isScrolled}
        topBar={
          <>
            <NavLogo
              onClick={() => scrollToSection("home")}
              isOnHero={!isScrolled}
            />

            <NavLinks
              onNavigate={scrollToSection}
              isOnHero={!isScrolled}
              activeSection={activeSection}
            />

            <MobileMenuButton
              isOpen={isMobileOpen}
              onToggle={() => setIsMobileOpen((v) => !v)}
              isOnHero={!isScrolled}
            />
          </>
        }
        mobileMenu={
          isMobileOpen && (
            <MobileMenu
              onNavigate={scrollToSection}
              activeSection={activeSection}
            />
          )
        }
      />
    </>
  );
}
