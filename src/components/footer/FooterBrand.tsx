import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export function FooterBrand() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 text-primary">
        Online Retirement
      </h3>
      <p className="text-gray-300 leading-relaxed mb-6">
        Empowering retirees with technology skills through patient, personalized
        instruction.
      </p>

      <div className="flex gap-4">
        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map(
          (Icon, index) => (
            <a
              key={index}
              href="#"
              className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          )
        )}
      </div>
    </div>
  );
}
