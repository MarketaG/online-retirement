import { SectionHeader } from "../components/ui/SectionHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactCards from "../components/contact/ContactCards";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={
            <>
              Get <span className="text-primary">In Touch</span>
            </>
          }
          description=" Have questions? We're here to help. Reach out to us and we'll respond as soon as possible."
        />
        <div className="mt-20">
          <ContactForm />
        </div>

        <div className="mt-24">
          <ContactCards />
        </div>
      </div>
    </section>
  );
}
