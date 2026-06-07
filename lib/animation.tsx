"use client";

export const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  // transition: { duration: 0.4 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3 },
};

export const zoomIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 },
};

export const slideUp = {
  initial: { y: 40 },
  animate: { y: 0 },
  transition: { duration: 0.4 },
};

export const slideDown = {
  initial: { y: -40 },
  animate: { y: 0 },
  transition: { duration: 0.4 },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  animate: { opacity: 1, rotate: 0 },
  transition: { duration: 0.4 },
};

export const cardHover = {
  whileHover: {
    y: -5,
    scale: 1.02,
  },
  transition: {
    duration: 0.2,
  },
};

export const buttonHover = {
  whileHover: {
    scale: 1.05,
  },
  whileTap: {
    scale: 0.95,
  },
};

export const iconHover = {
  whileHover: {
    rotate: 10,
    scale: 1.1,
  },
};

export const floating = {
  animate: {
    y: [0, -6, 0],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
  },
};