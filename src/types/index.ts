import React from "react";

import { LucideIcon } from "lucide-react";

export type FeatureCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export interface NavLink {
  name: string;
  href: string;
}

// Statistics
export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

// Services
export interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  img: string;
}

// Gallery
export interface GalleryItem {
  src: string;
  title: string;
}

// FAQ
export interface FAQItem {
  question: string;
  answer: string;
}

// Features/Benefits
export interface BenefitItem {
  text: string;
}

// Company Info
export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  location: string;
  hours: string;
}

export interface CompanyInfo {
  name: string;
  brandName: string;
  tagline: string;
  description: string;
  yearsInBusiness: number;
  contact: ContactInfo;
}

// Feature Cards (for about section)

// Motion Variants
export interface AnimationVariants {
  initial: Record<string, unknown>;
  whileInView?: Record<string, unknown>;
  viewport?: Record<string, unknown>;
  transition?: Record<string, unknown>;
  exit?: Record<string, unknown>;
}

export interface StaggerContainerVariants extends AnimationVariants {
  whileInView: {
    transition: {
      staggerChildren: number;
    };
  };
}

// Generic section data
export interface SectionProps {
  id?: string;
  className?: string;
}
