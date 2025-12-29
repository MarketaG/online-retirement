import { navLinks } from "./navLinks";

type Props = {
  onNavigate: (id: string) => void;
  isOnHero: boolean;
  activeSection: string;
};

export default function NavLinks({
  onNavigate,
  isOnHero,
  activeSection,
}: Props) {
  return (
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => {
        const isActive = activeSection === link.id;

        return (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(link.id);
            }}
            aria-current={isActive ? "page" : undefined}
            className={`
              font-medium text-sm relative transition-colors
              ${
                isActive
                  ? "text-primary"
                  : isOnHero
                  ? "text-white hover:text-primary"
                  : "text-secondary hover:text-primary"
              }
            `}
          >
            {link.label}

            <span
              className={`
          absolute bottom-0 left-0 h-0.5 transition-all duration-300
          ${isActive ? "w-full bg-primary" : "w-0 bg-primary"}
        `}
            />
          </a>
        );
      })}

      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          onNavigate("contact");
        }}
        className="bg-primary hover:bg-primary/90 text-secondary px-6 py-2 rounded-lg font-semibold transition-all duration-300"
      >
        Get Started
      </a>
    </div>
  );
}
