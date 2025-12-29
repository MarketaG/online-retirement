import { SectionHeader } from "../components/ui/SectionHeader";
import { PricingCard } from "../components/pricing/PricingCard";
import { PricingCTA } from "../components/pricing/PricingCTA";
import { PRICING_PLANS } from "../data/pricingData";

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 bg-linear-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={
            <>
              Simple, <span className="text-primary">Transparent Pricing</span>
            </>
          }
          description="Choose the plan that fits your learning goals."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              onSelect={scrollToContact}
            />
          ))}
        </div>

        <PricingCTA onContact={scrollToContact} />
      </div>
    </section>
  );
}
