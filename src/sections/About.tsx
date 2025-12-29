import { SectionHeader } from "../components/ui/SectionHeader";
import { AboutFeatures } from "../components/about/AboutFeatures";
import { AboutStory } from "../components/about/AboutStory";
import { Heart, Users, Award, Clock } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Patient & Supportive",
      description:
        "Our instructors understand your pace and create a comfortable, judgment-free learning environment.",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description:
        "Personalized attention with small groups ensuring everyone gets the help they need.",
    },
    {
      icon: Award,
      title: "Proven Methods",
      description:
        "Courses designed specifically for seniors with clear, simple explanations and practical examples.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description:
        "Learn at your own pace with flexible class times that fit your lifestyle and routine.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={
            <>
              Why Choose <span className="text-primary">Online Retirement</span>
              ?
            </>
          }
          description="We believe technology should be accessible to everyone, regardless of age."
        />

        <AboutFeatures features={features} />
        <AboutStory />
      </div>
    </section>
  );
}
