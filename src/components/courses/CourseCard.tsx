import type { Course } from "../../data/coursesData";

type Props = {
  course: Course;
};

export function CourseCard({ course }: Props) {
  const Icon = course.icon;

  return (
    <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-primary" />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span className="bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full">
          {course.level}
        </span>
        <span className="text-sm text-gray-500">{course.duration}</span>
      </div>

      <h3 className="text-2xl font-bold text-secondary mb-3">{course.title}</h3>

      <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>

      <div className="space-y-2">
        <div className="text-sm font-semibold text-secondary mb-2">
          What you'll learn:
        </div>
        {course.topics.map((topic, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
            <span>{topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
