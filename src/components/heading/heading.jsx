import './heading.css'
import { useInView } from '../../hooks/useInView';

export default function Heading({ 
    smallText, 
    heading, 
    subText , 
    spanColor="white", 
    className,
    disableAnimation = false
}) {
    const [ref, inView] = useInView({ threshold: 0.2 });

    return (
        <div 
            ref={ref} 
            className={`container ${className} ${!disableAnimation ? 'animate-fade-up' : ''} ${inView ? 'in-view' : ''}`}
        >
            {/* Small top text */}
            {smallText && <p className={`small-text ${spanColor}`}>{smallText}</p>}

            {/* Heading */}
            <h1 className={`heading ${spanColor}`}>{heading}</h1>

            {/* Subtext */}
            {subText && <p className={`subtext ${spanColor}`}>{subText}</p>}
        </div>
    )
}