export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Single Course",
    price: "149",
    period: "per course",
    description: "Perfect for trying out a specific topic",
    features: [
      "Access to one course",
      "4-6 week duration",
      "Small class sizes",
      "Course materials included",
      "Email support",
      "Certificate of completion",
    ],
  },
  {
    name: "Quarterly Pass",
    price: "399",
    period: "3 months",
    description: "Our most popular option for dedicated learners",
    popular: true,
    features: [
      "Access to 3 courses",
      "Choose any courses",
      "Small class sizes",
      "All course materials",
      "Priority email support",
      "Certificates for all courses",
      "10% discount included",
      "Flexible scheduling",
    ],
  },
  {
    name: "Annual Membership",
    price: "999",
    period: "per year",
    description: "Best value for continuous learning",
    features: [
      "Unlimited course access",
      "All courses included",
      "Priority enrollment",
      "All course materials",
      "Phone & email support",
      "Certificates for all courses",
      "Free course updates",
      "Community forum access",
      "30% savings",
    ],
  },
];
