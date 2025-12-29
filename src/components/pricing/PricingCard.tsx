import { Check, Star } from "lucide-react";
import type { PricingPlan } from "../../data/pricingData";

type Props = {
  plan: PricingPlan;
  onSelect: () => void;
};

export function PricingCard({ plan, onSelect }: Props) {
  return (
    <div
      className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl ${
        plan.popular
          ? "border-primary shadow-xl lg:-translate-y-4"
          : "border-gray-200 hover:border-primary/50"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-primary text-secondary px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
            <Star className="w-4 h-4 fill-current" />
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-secondary mb-2">{plan.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-bold text-secondary">
            ${plan.price}
          </span>
          <span className="text-gray-500">/{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                plan.popular ? "bg-primary" : "bg-primary/10"
              }`}
            >
              <Check
                className={`w-3 h-3 ${
                  plan.popular ? "text-white" : "text-primary"
                }`}
              />
            </div>
            <span className="text-gray-600 text-sm leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
          plan.popular
            ? "bg-primary hover:bg-primary/90 text-secondary shadow-lg hover:-translate-y-1"
            : "bg-secondary hover:bg-secondary/90 text-white"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}
