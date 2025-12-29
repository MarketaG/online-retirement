import { Menu, X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
  isOnHero: boolean;
};

export default function MobileMenuButton({
  isOpen,
  onToggle,
  isOnHero,
}: Props) {
  const iconColor = isOnHero
    ? "text-white hover:text-primary"
    : "text-secondary hover:text-primary";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`cursor-pointer md:hidden transition-colors ${iconColor}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <span
        className={`block w-6 h-6 transform transition-transform duration-300 ${
          isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" aria-hidden />
        ) : (
          <Menu className="w-6 h-6" aria-hidden />
        )}
      </span>
    </button>
  );
}
