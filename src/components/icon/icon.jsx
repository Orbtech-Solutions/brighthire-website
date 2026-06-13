/*
 * Icon component
 *
 * This component renders either a text icon or an image/icon element inside
 * a styled wrapper. It is intended for card-style icons where the icon has a
 * soft background and optional border.
 *
 * Props:
 *  - icon        {string|ReactElement}  URL/path to an image or a JSX icon element
 *  - textIcon    {string}               Text label rendered as a styled icon (e.g. "01")
 *  - color       {string}               Color variant used for wrapper styling; defaults to 'primary'
 *  - borderless  {boolean}              Remove the wrapper border when true
 *
 * Color behavior:
 *  - primary    = primary brand accent styling for the icon wrapper
 *  - secondary  = secondary accent styling for the icon wrapper
 *  - white      = neutral white/ghost wrapper styling
 *
 * Usage examples:
 *   <Icon icon="/icons/check.svg" />
 *   <Icon icon={<MySvgIcon />} color="secondary" />
 *   <Icon icon="/icons/check.svg" color="white" borderless />
 *   <Icon textIcon="01" color="primary" />
 *
 * Notes:
 *  - If `textIcon` is provided, the component renders a text label and ignores `icon`.
 *  - If `icon` is a React element, it is rendered directly inside the wrapper.
 */
import { isValidElement } from 'react';
import './icon.css';

export default function Icon({ className, icon, textIcon, color = 'primary', borderless = false, width, height, size }) {
  const iconIsElement = isValidElement(icon);
  const wrapperStyle = size ? { width: `${size}px`, height: `${size}px` } : { ...(width && { width: `${width}px` }), ...(height && { height: `${height}px` }) };

  // Text-icon variant: large styled label (e.g. "01")
  if (textIcon) {
    return (
      <span className={`icon-text color-${color}`} aria-hidden="true">{textIcon}</span>
    );
  }

  // Image icon variant: boxed image or JSX element
  return (
    <div className={`icon-wrapper ${className} color-${color} ${borderless ? 'icon-borderless' : ''}`.trim()} style={wrapperStyle}>
      {iconIsElement ? (
        icon
      ) : (
        <img src={icon} alt="" className="icon-img" aria-hidden="true" />
      )}
    </div>
  );
}
