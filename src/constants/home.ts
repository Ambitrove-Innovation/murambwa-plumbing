/**
 * Home Page Data & Constants
 * SPDX-License-Identifier: Apache-2.0
 */

import { StatItem, FAQItem, GalleryItem } from "../types";

export const STATS_DATA: StatItem[] = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Projects Done", value: 500, suffix: "+" },
  { label: "Happy Clients", value: 450, suffix: "+" },
  { label: "Team Members", value: 15, suffix: "" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/images/murambwaPlumbing_bathroom_redesign.webp",
    title: "Bathroom Redesign",
  },
  {
    src: "/images/murambwaPlumbing_bathroom_remodel.webp",
    title: "Modern Remodel",
  },
  {
    src: "/images/murambwaPlumbing_outdoor_illing.webp",
    title: "Outdoor Tilling",
  },
  { src: "/images/murambwa_inhouse_celling_work.webp", title: "Ceiling Work" },
  { src: "/images/murambwa_modern_bathroom.webp", title: "Luxury Bathroom" },
  { src: "/images/murambwa_outdoor_geyser.webp", title: "Geyser Installation" },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What plumbing services do you offer?",
    answer:
      "We offer a full range of services including general maintenance, leak detection, geyser installations, borehole drilling, JoJo tank setups, and complete bathroom renovations.",
  },
  {
    question: "Are you available for emergencies?",
    answer:
      "Yes, we provide 24/7 emergency plumbing services. Whether it's a burst pipe or a major leak, our team is ready to respond at any time.",
  },
  {
    question: "How do you charge for your services?",
    answer:
      "Pricing depends on the scope of the project. We provide transparent, upfront quotes after an initial assessment. For emergency calls, we have a standard call-out fee.",
  },
  {
    question: "Do you work on commercial projects?",
    answer:
      "Absolutely. We handle both residential and commercial plumbing needs, from small home repairs to large-scale industrial water systems.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We are based in Lethlabile, Brits, and serve the surrounding areas within a 50km radius.",
  },
];

export const HERO_SECTION = {
  subtitle: "Professional 24/7 Services",
  title: "Reliable Water Solutions",
  description:
    "Expert plumbing, maintenance, borehole drilling, and pressure pump solutions. Fast response. Quality workmanship.",
  imageUrl:
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1920",
};

export const ABOUT_SECTION = {
  imageUrl: "/images/murambwa_pipe-fixing.webp",
  yearsText: "Years of Mastery",
  statement: "Committed to Excellence",
};

export const GALLERY_SECTION = {
  title: "Project Gallery",
  description: "A showcase of our recent plumbing and renovation work.",
};

export const CONTACT_SECTION = {
  headline: "Ready to Get Started?",
  description:
    "Don't let a plumbing issue disrupt your day. Contact us now for professional, reliable service that lasts.",
  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.0725028028387!2d27.840085478869476!3d-25.469254376504225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebe351638a286a3%3A0x156a7dae20c14efe!2sAdmire%20Murambwa%20Letlhabile%20Plumbing!5e0!3m2!1sen!2sza!4v1776163332303!5m2!1sen!2sza",
    title: "Find Our Office",
    description: "Visit us in Lethlabile for professional consultations.",
  },
};

export const WHATSAPP_MESSAGE =
  "Need help? Chat with us on WhatsApp for a fast response!";
export const SUPPORT_STATUS = "Support Online";
