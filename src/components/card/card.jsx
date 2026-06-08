import Icon from '../icon/icon';
import './card.css';

/*
 * Props:
 *  - icon        {string|ReactElement}  Image/SVG path or React SVG element (icon variant)
 *  - textIcon    {string}               Text label rendered as a styled accent (e.g. "01")
 *  - heading     {string}               Card title (omit to hide)
 *  - body        {string}               Card description (omit to hide)
 *  - className   {string}               Extra class(es) appended to the root element
 *  - color       {string}               Color variant passed to Icon component (default: 'primary')
 *
 * Variants:
 *  - default (icon):   icon prop → renders image or JSX in a boxed wrapper
 *  - text-icon:        textIcon prop → renders styled text label inline (no box)
 */
export default function Card ({ children, icon, textIcon, heading, body, className = '', color='primary', bgColor }) {
  const variant = textIcon ? 'text-icon' : 'icon';

  return (
    <div style={{backgroundColor: bgColor}} className={`card card--${variant} color-${color} ${className}`.trim()}>

      {/* Icon component handles both image icons and text icons */}
      {(icon || textIcon) && (
        <Icon icon={icon} textIcon={textIcon} color={color} />
      )}

      {/* Heading and body are both optional */}
      {heading && <h3 className="card-heading">{heading}</h3>}
      {body && <p className="card-body">{body}</p>}


      { children }

      
      <span className="card-accent" aria-hidden="true" />
    </div>
  );
};

