import { isValidElement } from 'react';
import './icon.css';

export default function Icon({ icon, textIcon, color = 'primary' }) {
  const iconIsElement = isValidElement(icon);

  // Text-icon variant: large styled label (e.g. "01")
  if (textIcon) {
    return (
      <span className="icon-text" aria-hidden="true">{textIcon}</span>
    );
  }

  // Image icon variant: boxed image or JSX element
  return (
    <div className={`icon-wrapper color-${color}`}>
      {iconIsElement ? (
        icon
      ) : (
        <img src={icon} alt="" className="icon-img" aria-hidden="true" />
      )}
    </div>
  );
}
