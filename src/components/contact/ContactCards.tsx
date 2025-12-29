import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactCards() {
  return (
    <div className="grid sm:grid-cols-3 gap-8 sm:gap-6">
      {/* Call */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-300 sm:hover:-translate-y-2">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
          <Phone className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-secondary mb-2">Call Us</h3>
        <p className="text-gray-600 mb-2">Monday - Friday, 9am - 5pm</p>
        <a href="tel:+15551234567" className="text-primary font-semibold">
          +1 (555) 123-4567
        </a>
      </div>

      {/* Email */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 sm:translate-y-8 transition-all duration-300 sm:hover:-translate-y-2">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
          <Mail className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-secondary mb-2">Email Us</h3>
        <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
        <a
          href="mailto:info@onlineretirement.com"
          className="text-primary font-semibold"
        >
          info@onlineretirement.com
        </a>
      </div>

      {/* Address */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-300 sm:hover:-translate-y-2">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
          <MapPin className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-secondary mb-2">Visit Us</h3>
        <p className="text-gray-600">
          123 Learning Lane
          <br />
          Suite 200
          <br />
          San Francisco, CA 94105
        </p>
      </div>
    </div>
  );
}
