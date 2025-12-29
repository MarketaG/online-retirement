import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CourseCard } from "./CourseCard";
import { COURSES } from "../../data/coursesData";

export function CoursesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => setCurrentSlide((v) => (v + 1) % COURSES.length);

  const prev = () =>
    setCurrentSlide((v) => (v - 1 + COURSES.length) % COURSES.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const visible = Array.from(
    { length: 3 },
    (_, i) => COURSES[(currentSlide + i) % COURSES.length]
  );

  return (
    <div className="relative">
      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        {visible.map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <CourseCard course={COURSES[currentSlide]} />
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 bg-white hover:bg-primary text-secondary hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border-2 border-gray-100"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 bg-white hover:bg-primary text-secondary hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border-2 border-gray-100"
        aria-lab
      >
        <ChevronRight />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {COURSES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`cursor-pointer h-2 rounded-full transition-all ${
              i === currentSlide ? "w-8 bg-primary" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
