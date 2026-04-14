/**
 * Animation Variants & Motion Utilities
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimationVariants, StaggerContainerVariants } from "../types";

export const fadeIn: AnimationVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export const staggerContainer: StaggerContainerVariants = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

export const slideInFromLeft: AnimationVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

export const slideInFromRight: AnimationVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

export const slideInFromBottom: AnimationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.6 },
};

export const scaleIn: AnimationVariants = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export const blurReveal: AnimationVariants = {
  initial: { filter: "blur(10px)", opacity: 0, y: 10 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

// Reusable animation presets
export const animationPresets = {
  fadeIn,
  staggerContainer,
  slideInFromLeft,
  slideInFromRight,
  slideInFromBottom,
  scaleIn,
  blurReveal,
};
