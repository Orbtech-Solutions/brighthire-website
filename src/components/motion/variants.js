/*
 * Shared Motion settings
 *  - EASE            Cubic-bezier used for all entrance animations
 *  - VIEWPORT        Default whileInView viewport settings (animate once)
 *  - fadeUp          Variants: fade in while rising slightly (accepts a delay via `custom`)
 *  - staggerParent   Variants for a container that staggers its children
 */
export const EASE = [0.22, 1, 0.36, 1];

export const VIEWPORT = { once: true, amount: 0.2 };

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

export const staggerParent = (stagger = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});
