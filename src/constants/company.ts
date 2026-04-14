/**
 * Company Information & Constants
 * SPDX-License-Identifier: Apache-2.0
 */

import { CompanyInfo, ContactInfo } from "../types";

export const CONTACT_INFO: ContactInfo = {
  phone: "0713184718",
  email: "info@letlhabileplumbing.co.za",
  whatsapp: "27713184718",
  location: "Block C Lethlabile, Brits, 0264",
  hours: "24/7 Emergency Response",
};

export const COMPANY_INFO: CompanyInfo = {
  name: "Admire Murambwa Letlhabile Plumbing",
  brandName: "LETLHABILE PLUMBING",
  tagline: "Reliable Water Solutions",
  description:
    "Admire Murambwa Letlhabile Plumbing provides reliable and efficient plumbing services across Lethlabile and surrounding areas. We specialize in modern infrastructure maintenance and sustainable water solutions.",
  yearsInBusiness: 10,
  contact: CONTACT_INFO,
};

export const SERVICE_AREAS = [
  "Lethlabile",
  "Brits",
  "Surrounding areas within 50km radius",
];

export const COMPANY_SOCIALS = {
  instagram: {
    name: "Instagram",
    url: "#",
  },
  facebook: {
    name: "Facebook",
    url: "#",
  },
};

export const PRIVACY_LINKS = {
  privacy: "#",
  terms: "#",
};
