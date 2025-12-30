import { FooterBrand } from "../components/footer/FooterBrand";
import { FooterLinks } from "../components/footer/FooterLinks";
import { FooterCourses } from "../components/footer/FooterCourses";
import { FooterContact } from "../components/footer/FooterContact";
import { FooterBottom } from "../components/footer/FooterBottom";

type Props = {
  onNavigate: (id: string) => void;
};

export default function Footer({ onNavigate }: Props) {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <FooterBrand />
          <FooterLinks onNavigate={onNavigate} />
          <FooterCourses onNavigate={onNavigate} />
          <FooterContact />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
