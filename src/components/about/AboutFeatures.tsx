import type { LucideIcon } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Props = {
  features: Feature[];
};

export function AboutFeatures({ features }: Props) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
