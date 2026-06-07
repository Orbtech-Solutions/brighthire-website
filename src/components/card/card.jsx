import { isValidElement } from 'react';
import './card.css';

/*
 * Props:
 *  - icon        {string|ReactElement}  Image/SVG path or React SVG element (icon variant)
 *  - textIcon    {string}               Text label rendered as a styled accent (e.g. "01")
 *  - heading     {string}               Card title (omit to hide)
 *  - body        {string}               Card description (omit to hide)
 *  - className   {string}               Extra class(es) appended to the root element
 *
 * Variants:
 *  - default (icon):   icon prop → renders image or JSX in a boxed wrapper
 *  - text-icon:        textIcon prop → renders styled text label inline (no box)
 */
export default function Card ({ icon, textIcon, heading, body, className = '', color='primary' }) {
  const iconIsElement = isValidElement(icon);
  const variant = textIcon ? 'text-icon' : 'icon';

  return (
    <div className={`card card--${variant} color-${color} ${className}`.trim()}>

      {/* Text-icon variant: large styled label (e.g. "01") */}
      {textIcon && (
        <span className="card-text-icon" aria-hidden="true">{textIcon}</span>
      )}

      {/* Icon variant: boxed image or JSX element */}
      {!textIcon && (
        <div className="card-icon-wrapper">
          {iconIsElement ? (
            icon
          ) : (
            <img src={icon} alt="" className="card-icon" aria-hidden="true" />
          )}
        </div>
      )}

      {/* Heading and body are both optional */}
      {heading && <h3 className="card-heading">{heading}</h3>}
      {body && <p className="card-body">{body}</p>}

      <span className="card-accent" aria-hidden="true" />
    </div>
  );
};