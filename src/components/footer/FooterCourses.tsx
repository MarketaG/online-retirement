type Props = {
  onNavigate: (id: string) => void;
};

const courses = [
  "Smartphone Basics",
  "Email & Communication",
  "Internet Essentials",
  "Online Safety",
];

export function FooterCourses({ onNavigate }: Props) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4 text-primary">
        Popular Courses
      </h4>
      <ul className="space-y-3">
        {courses.map((course) => (
          <li key={course}>
            <button
              onClick={() => onNavigate("courses")}
              className="cursor-pointer text-gray-300 hover:text-primary transition-colors"
            >
              {course}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
