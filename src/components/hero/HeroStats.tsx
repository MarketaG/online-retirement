export function HeroStats() {
  return (
    <div className="hidden lg:flex items-center justify-center">
      <div className="relative animate-fade-in-up motion-reduce:animate-none">
        <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl"></div>
        <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary/20 backdrop-blur-sm rounded-xl p-6 border border-primary/30">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-gray-300">Happy Students</div>
            </div>
            <div className="bg-primary/20 backdrop-blur-sm rounded-xl p-6 border border-primary/30">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-gray-300">Expert Tutors</div>
            </div>
            <div className="bg-primary/20 backdrop-blur-sm rounded-xl p-6 border border-primary/30">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-gray-300">Courses</div>
            </div>
            <div className="bg-primary/20 backdrop-blur-sm rounded-xl p-6 border border-primary/30">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-gray-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
