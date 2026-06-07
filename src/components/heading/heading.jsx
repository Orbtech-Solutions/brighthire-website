import './heading.css'

export default function Heading({ smallText, heading, subText }) {
    return (
        <div className="container">
            {/* Small top text */}
            <p className="small-text">{smallText}</p>

            {/* Heading */}
            <h2 className="heading">{heading}</h2>

            {/* Subtext */}
            <p className="subtext">{subText}</p>
        </div>
    )
}