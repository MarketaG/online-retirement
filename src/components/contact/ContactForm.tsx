import { useState } from "react";
import { Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
      {status === "success" ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-secondary mb-3">Thank You!</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            We've received your message and will get back to you within 24
            hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-secondary mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-secondary mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-secondary mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label
                htmlFor="course"
                className="block text-sm font-semibold text-secondary mb-2"
              >
                Interested Course
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Select a course</option>
                <option value="smartphone">Smartphone Basics</option>
                <option value="email">Email & Communication</option>
                <option value="internet">Internet Essentials</option>
                <option value="photography">Digital Photography</option>
                <option value="security">Online Safety & Security</option>
                <option value="social">Social Media Made Simple</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-secondary mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your technology learning goals..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-secondary py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Send Message
            <Send className="w-5 h-5" />
          </button>
        </form>
      )}
    </div>
  );
}
