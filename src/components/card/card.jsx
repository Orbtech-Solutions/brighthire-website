import { motion } from 'motion/react';
import Icon from '../icon/icon.jsx';
import { fadeUp, VIEWPORT } from '../motion/variants.js';
import './card.css';

/*
 * Props:
 *  - icon        {string|ReactElement}  Image/SVG path or React SVG element (icon variant)
 *  - textIcon    {string}               Text label rendered as a styled accent (e.g. "01")
 *  - heading     {string}               Card title (omit to hide)
 *  - body        {string}               Card description (omit to hide)
 *  - className   {string}               Extra class(es) appended to the root element
 *  - color       {string}               Color variant passed to Icon component (default: 'primary')
 *  - index       {number}               Position in a list — staggers the scroll reveal (default: 0)
 *  - reveal      {boolean}              Fade the card up when scrolled into view (default: true)
 *
 * Variants:
 *  - default (icon):   icon prop → renders image or JSX in a boxed wrapper
 *  - text-icon:        textIcon prop → renders styled text label inline (no box)
 */
export default function Card ({ children, icon, textIcon, heading, body, className = '', color='primary', bgColor, index = 0, reveal = true }) {
  const variant = textIcon ? 'text-icon' : 'icon';

  // Reveal uses `transform`; the hover lift (.hover-float) uses the separate CSS
  // `translate` property so the two never fight each other.
  const revealProps = reveal
    ? {
        variants: fadeUp,
        custom: Math.min(index, 8) * 0.08,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: VIEWPORT,
      }
    : {};

  return (
    <motion.div
      style={{backgroundColor: bgColor}}
      className={`card card--${variant} color-${color} ${className}`.trim()}
      {...revealProps}>

      {/* Icon component handles both image icons and text icons */}
      {(icon || textIcon) && (
        <Icon icon={icon} textIcon={textIcon} color={color} />
      )}

      {/* Heading and body are both optional */}
      {heading && <h3 className="card-heading">{heading}</h3>}
      {body && <p className="card-body">{body}</p>}


      { children }


      <span className="card-accent" aria-hidden="true" />
    </motion.div>
  );
};
