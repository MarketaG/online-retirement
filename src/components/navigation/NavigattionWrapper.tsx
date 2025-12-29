type Props = {
  isScrolled: boolean;
  topBar: React.ReactNode;
  mobileMenu?: React.ReactNode;
};

export default function NavigationWrapper({
  isScrolled,
  topBar,
  mobileMenu,
}: Props) {
  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">{topBar}</div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu}
    </nav>
  );
}
