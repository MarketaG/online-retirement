import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  description?: string;
};

export function SectionHeader({ title, description }: Props) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
        {title}
      </h2>

      {description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
