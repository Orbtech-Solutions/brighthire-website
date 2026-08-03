import './heading.css'

export default function Heading({ 
    smallText, 
    heading, 
    subText , 
    spanColor="white", className}) {
    return (
        <div className={`container ${className}`}>
            {/* Small top text */}
            <p className={`small-text ${spanColor}`}>{smallText}</p>

            {/* Heading */}
            <h1 className={`heading ${spanColor}`}>{heading}</h1>

            {/* Subtext */}
            <p className={`subtext ${spanColor}`}>{subText}</p>
        </div>
    )
}