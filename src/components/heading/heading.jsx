import { motion } from 'motion/react';
import { fadeUp, staggerParent, VIEWPORT } from '../motion/variants.js';
import './heading.css'

// Small text, heading and subtext reveal one after another when scrolled into view.
export default function Heading({
    smallText,
    heading,
    subText ,
    spanColor="white", className}) {
    return (
        <motion.div
            className={`container ${className}`}
            variants={staggerParent(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
        >
            {/* Small top text */}
            <motion.p variants={fadeUp} className={`small-text ${spanColor}`}>{smallText}</motion.p>

            {/* Heading */}
            <motion.h1 variants={fadeUp} className={`heading ${spanColor}`}>{heading}</motion.h1>

            {/* Subtext */}
            <motion.p variants={fadeUp} className={`subtext ${spanColor}`}>{subText}</motion.p>
        </motion.div>
    )
}
