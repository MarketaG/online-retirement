import { Mail, Phone, MapPin } from "lucide-react";

export function FooterContact() {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4 text-primary">Contact Info</h4>

      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-primary mt-1" />
          <div>
            <p className="text-gray-300">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-400">Mon–Fri, 9am–5pm</p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-primary mt-1" />
          <a
            href="mailto:info@onlineretirement.com"
            className="text-gray-300 hover:text-primary"
          >
            info@onlineretirement.com
          </a>
        </li>

        <li className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary mt-1" />
          <p className="text-gray-300">
            123 Learning Lane
            <br />
            San Francisco, CA 94105
          </p>
        </li>
      </ul>
    </div>
  );
}
