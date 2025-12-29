type Props = {
  onClick: () => void;
  isOnHero: boolean;
};

export default function NavLogo({ onClick, isOnHero }: Props) {
  return (
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`text-2xl font-bold transition-colors
          ${isOnHero ? "text-white" : "text-secondary"}
        `}
    >
      Online
      <span className={isOnHero ? "text-primary" : "text-primary"}>
        Retirement
      </span>
    </a>
  );
}
