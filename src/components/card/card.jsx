import { isValidElement } from 'react';
import './card.css';

/**
 * Generic branded card component.
 *
 * Props:
 *  - icon        {string|ReactElement}  Image/SVG path or React SVG element
 *  - heading     {string}               Card title
 *  - body        {string}               Card description text
 *  - className   {string}               Extra class(es) appended to the root element
 */
const Card = ({ icon, heading, body, className = '' }) => {
  const iconIsElement = isValidElement(icon);

  return (
    <div className={`card ${className}`.trim()}>
      <div className="card-icon-wrapper">
        {iconIsElement ? (
          icon
        ) : (
          <img src={icon} alt="" className="card-icon" aria-hidden="true" />
        )}
      </div>
      <h3 className="card-heading">{heading}</h3>
      <p className="card-body">{body}</p>
      <span className="card-accent" aria-hidden="true" />
    </div>
  );
};

export default Card;