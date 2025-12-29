import { SectionHeader } from "../components/ui/SectionHeader";
import { CoursesCarousel } from "../components/courses/CoursesCarousel";

export default function Courses() {
  return (
    <section id="courses" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={
            <>
              Our <span className="text-primary">Popular Courses</span>
            </>
          }
          description="From complete beginners to those looking to expand their skills, we have the perfect course for your technology journey."
        />

        <CoursesCarousel />
      </div>
    </section>
  );
}
