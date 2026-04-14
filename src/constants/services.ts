import { Service, FeatureCard, BenefitItem } from "../types";
import { Wrench, Droplets, Drill, ShieldCheck, Clock } from "lucide-react";

export const SERVICE_CARDS: Omit<Service, "icon">[] = [
  {
    title: "Maintenance",
    desc: "General repairs, leak detection, and preventative maintenance.",
    img: "/images/murambwa_outdoor_pipefixing.webp",
  },
  {
    title: "Water Systems",
    desc: "JoJo tank installations and pressure pump system setups.",
    img: "/images/murambwa_jojoTank_fixing.webp",
  },
  {
    title: "Boreholes",
    desc: "Professional borehole drilling and water system upgrades.",
    img: "/images/murambwa_outdoorGeyser_installation.webp",
  },
  {
    title: "Installations",
    desc: "Full pipe installations for new builds and renovations.",
    img: "/images/murambwa_modern_showerDesign.webp",
  },
];

export const SERVICE_ICONS = {
  Maintenance: Wrench,
  "Water Systems": Droplets,
  Boreholes: Drill,
  Installations: ShieldCheck,
};

export const ABOUT_BENEFITS: BenefitItem[] = [
  { text: "Certified Professional Plumbers" },
  { text: "Advanced Leak Detection Technology" },
  { text: "Sustainable Water Management" },
  { text: "Emergency 24/7 Response Team" },
];

export const ABOUT_FEATURES: FeatureCard[] = [
  {
    icon: ShieldCheck,
    title: "Guaranteed",
    description: "Quality workmanship",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Emergency response",
  },
];

export const FOOTER_SERVICES = [
  "Maintenance & Repairs",
  "Water System Setup",
  "Borehole Drilling",
  "JoJo Tank Installation",
  "Pressure Pump Systems",
  "Bathroom Renovations",
];

export const SERVICE_RESPONSE_TIME = "15 minutes";
