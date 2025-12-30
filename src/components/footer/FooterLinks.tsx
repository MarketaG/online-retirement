type Props = {
  onNavigate: (id: string) => void;
};

const links = [
  ["about", "About Us"],
  ["courses", "Our Courses"],
  ["pricing", "Pricing"],
  ["contact", "Contact"],
];

export function FooterLinks({ onNavigate }: Props) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
      <ul className="space-y-3">
        {links.map(([id, label]) => (
          <li key={id}>
            <button
              onClick={() => onNavigate(id)}
              className="cursor-pointer text-gray-300 hover:text-primary transition-colors"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
