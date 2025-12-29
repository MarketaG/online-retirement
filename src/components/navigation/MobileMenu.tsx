import { navLinks } from "../../data/navLinks";

type Props = {
  onNavigate: (id: string) => void;
  activeSection: string;
};

export default function MobileMenu({ onNavigate, activeSection }: Props) {
  return (
    <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
      <div className="px-4 py-4 space-y-3">
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
                block w-full px-4 py-2 rounded-lg font-medium transition-colors
                ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-secondary hover:text-primary hover:bg-primary/10"
                }
              `}
            >
              {link.label}
            </a>
          );
        })}

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("contact");
          }}
          className="block w-full text-center bg-primary hover:bg-primary/90 text-secondary px-4 py-2 rounded-lg font-semibold transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
