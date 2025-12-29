export function AboutStory() {
  return (
    <div className="mt-20 bg-linear-to-r from-secondary to-secondary/90 rounded-3xl overflow-hidden shadow-2xl">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="p-8 sm:p-12 lg:p-16 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Our Story</h3>
          <p className="text-gray-200 leading-relaxed mb-4">
            Founded in 2020, Online Retirement was born from a simple
            observation: traditional tech courses weren't meeting the needs of
            older adults who wanted to learn.
          </p>
          <p className="text-gray-200 leading-relaxed mb-4">
            We created a learning environment where questions are welcomed,
            progress is celebrated, and every student feels valued. Our
            instructors are trained not just in technology, but in the art of
            patient, empathetic teaching.
          </p>
          <p className="text-gray-200 leading-relaxed">
            Today, we're proud to have helped thousands of retirees discover the
            joy and convenience that technology brings to their lives.
          </p>
        </div>
        <div className="bg-primary/20 backdrop-blur-sm p-8 sm:p-12 lg:p-16 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl sm:text-7xl font-bold text-primary mb-4">
              4+
            </div>
            <div className="text-xl text-white font-semibold mb-8">
              Years of Excellence
            </div>
            <div className="grid grid-cols-2 gap-6 text-white">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm">Graduates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">30+</div>
                <div className="text-sm">Courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
