type Props = {
  onContact: () => void;
};

export function PricingCTA({ onContact }: Props) {
  return (
    <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8 border border-primary/20">
      <h3 className="text-2xl font-bold text-secondary mb-3">
        Not sure which plan is right for you?
      </h3>
      <p className="text-gray-600 mb-6">
        Contact us for a free consultation. We'll help you choose the perfect
        learning path based on your goals and experience.
      </p>
      <button
        onClick={onContact}
        className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
      >
        Schedule a Free Consultation
      </button>
    </div>
  );
}
