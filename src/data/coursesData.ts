import {
  Smartphone,
  Mail,
  Globe,
  Camera,
  Shield,
  MessageSquare,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Course = {
  icon: LucideIcon;
  title: string;
  level: string;
  duration: string;
  description: string;
  topics: string[];
};

export const COURSES: Course[] = [
  {
    icon: Smartphone,
    title: "Smartphone Basics",
    level: "Beginner",
    duration: "4 weeks",
    description:
      "Master your smartphone with confidence. Learn to make calls, send texts, take photos, and use essential apps.",
    topics: [
      "Making calls & texting",
      "Taking & sharing photos",
      "App store basics",
      "Settings & customization",
    ],
  },
  {
    icon: Mail,
    title: "Email & Communication",
    level: "Beginner",
    duration: "3 weeks",
    description:
      "Stay connected with family and friends. Learn email, video calls, and modern communication tools.",
    topics: [
      "Setting up email",
      "Video calls (Zoom, Skype)",
      "Attachments & photos",
      "Managing contacts",
    ],
  },
  {
    icon: Globe,
    title: "Internet Essentials",
    level: "Beginner",
    duration: "4 weeks",
    description:
      "Navigate the web safely and effectively. Browse websites, shop online, and find information.",
    topics: [
      "Web browsing",
      "Search engines",
      "Online shopping",
      "Bookmarks & favorites",
    ],
  },
  {
    icon: Camera,
    title: "Digital Photography",
    level: "Intermediate",
    duration: "5 weeks",
    description:
      "Capture and share your memories. Learn photography, editing, and organizing your photo collection.",
    topics: [
      "Camera techniques",
      "Photo editing",
      "Cloud storage",
      "Sharing with family",
    ],
  },
  {
    icon: Shield,
    title: "Online Safety & Security",
    level: "Beginner",
    duration: "3 weeks",
    description:
      "Protect yourself online. Learn about passwords, scams, privacy, and safe browsing practices.",
    topics: [
      "Password management",
      "Identifying scams",
      "Privacy settings",
      "Safe banking",
    ],
  },
  {
    icon: MessageSquare,
    title: "Social Media Made Simple",
    level: "Intermediate",
    duration: "4 weeks",
    description:
      "Connect with loved ones on social platforms. Learn Facebook, WhatsApp, and other social tools.",
    topics: [
      "Creating profiles",
      "Posting & sharing",
      "Privacy controls",
      "Groups & communities",
    ],
  },
];
