// Card component (reusable)
// Renders a simple branded card with optional icon, heading, body and a decorative accent.

import { isValidElement } from 'react'; // checks if a value is a React element (JSX)
import './card.css'; // component-specific styles

/*
 * Props:
 *  - icon        {string|ReactElement}  Image/SVG path or React SVG element
 *  - heading     {string}               Card title
 *  - body        {string}               Card description text
 *  - className   {string}               Extra class(es) appended to the root element
 */
const Card = ({ icon, heading, body, className = '' }) => {
  // Detect if `icon` is a JSX element (e.g. <MyIcon />). If so, render it directly.
  const iconIsElement = isValidElement(icon);

  // Root element: `card` plus optional `className` for small overrides.
  return (
    <div className={`card ${className}`.trim()}>
      {/* Icon wrapper: accepts a React element or an image path */}
      <div className="card-icon-wrapper">
        {iconIsElement ? (
          icon
        ) : (
          <img src={icon} alt="" className="card-icon" aria-hidden="true" />
        )}
      </div>

      {/* Content — title and body; keep markup minimal so typography is controlled globally */}
      <h3 className="card-heading">{heading}</h3>
      <p className="card-body">{body}</p>

      {/* Decorative accent bar at the bottom (purely visual) */}
      <span className="card-accent" aria-hidden="true" />
    </div>
  );
};

export default Card;