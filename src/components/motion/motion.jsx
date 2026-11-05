/*
 * Shared Motion primitives
 *
 * One easing curve and one set of variants keep every animation on the site
 * feeling consistent: calm, quick and professional — no bounce on content.
 *
 * Shared easing/variants live in ./variants.js.
 *
 * Exports:
 *  - Reveal          Wrapper that fades its content up when scrolled into view
 *  - RevealGroup     Container that staggers RevealItem children into view
 *  - RevealItem      Child of RevealGroup
 *
 * Usage:
 *   <Reveal><p>Text</p></Reveal>
 *   <Reveal as="p" className="body" delay={0.1}>Text</Reveal>
 *   <RevealGroup className="list">
 *     <RevealItem as="p">One</RevealItem>
 *     <RevealItem as="p">Two</RevealItem>
 *   </RevealGroup>
 */
import { motion } from 'motion/react';
import { fadeUp, staggerParent, VIEWPORT } from './variants.js';

export function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function RevealGroup({ as = 'div', stagger = 0.1, delay = 0, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={staggerParent(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({ as = 'div', className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={fadeUp} {...rest}>
      {children}
    </Tag>
  );
}
