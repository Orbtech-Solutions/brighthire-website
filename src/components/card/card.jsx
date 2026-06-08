import Icon from '../icon/icon';
import './card.css';

/*
 * Props:
 *  - icon        {string|ReactElement}  Image/SVG path or React SVG element (icon variant)
 *  - textIcon    {string}               Text label rendered as a styled accent (e.g. "01")
 *  - heading     {string}               Card title (omit to hide)
 *  - body        {string}               Card description (omit to hide)
 *  - className   {string}               Extra class(es) appended to the root element
 *  - color       {string}               Preset color variant or any CSS color string
 *  - width       {string|number}         Optional width for the card container
 *  - style       {object}               Inline styles merged onto the card wrapper
 *
 * Variants:
 *  - default (icon):   icon prop → renders image or JSX in a boxed wrapper
 *  - text-icon:        textIcon prop → renders styled text label inline (no box)
 */
export default function Card ({ children, icon, textIcon, heading, body, className = '', color = 'primary', width, style = {} }) {
  const presetColors = ['primary', 'secondary', 'white'];
  const isPresetColor = presetColors.includes(color);
  const colorClass = isPresetColor ? `color-${color}` : '';
  const widthValue = width !== undefined ? (typeof width === 'number' ? `${width}px` : width) : undefined;
  const cardStyle = {
    ...style,
    ...(widthValue ? { width: widthValue } : {}),
    ...(!isPresetColor ? { '--card-color': color, '--card-heading-color': color } : {}),
  };

  return (
    <div className={`card ${colorClass} ${className}`.trim()} style={cardStyle}>

      {children}

      {/*** Old structure - still works ***/}
      {/* Icon component handles both image icons and text icons */}
      {(icon || textIcon) && (
        <Icon icon={icon} textIcon={textIcon} {...(isPresetColor ? { color } : {})} />
      )}

      {/* Heading and body are both optional */}
      {heading && <h3 className="card-heading">{heading}</h3>}
      {body && <p className="card-body">{body}</p>}

      <span className="card-accent" aria-hidden="true" />
    </div>
  );
};

