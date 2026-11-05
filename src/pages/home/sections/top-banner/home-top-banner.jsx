import { motion } from 'motion/react';
import Button from '../../../../components/buttons/button.jsx';
import HandshakeImage from '../../../../assets/media/images/barista_cashier.jpg';
import { EASE, fadeUp, staggerParent } from '../../../../components/motion/variants.js';
import './home-top-banner.css';

function Stat({ name, value }) {
  return (
    <motion.div className="stat" variants={fadeUp}>
      <p>{name}</p>
      <h3>{value}</h3>
    </motion.div>
  );
}

export default function TopBanner() {
  return (
    <section className="top-banner banner-primary">
      <div className="section-inner">
        {/* Left Container — content enters in sequence on page load */}
        <motion.div
          className="left-container"
          variants={staggerParent(0.12, 0.15)}
          initial="hidden"
          animate="visible"
        >
          {/* Text */}
          <motion.h1 variants={fadeUp}>
            <span>Not just a hire.</span> A community investment.
          </motion.h1>
          <motion.p variants={fadeUp}>
            Work-ready graduates placed in your business — and 25% of every retainer funds your community.
          </motion.p>

          <motion.div className="buttons-container" variants={staggerParent(0.12)}>
            {/* Buttons */}
            <motion.div className="buttons-row" variants={fadeUp}>
              <Button link="/contact" variant="secondary">Become a Founding Client</Button>
              <Button link="/how-it-works" variant="secondary-ghost">Learn How it Works</Button>
            </motion.div>

            {/* Divider draws in from the left */}
            <motion.hr
              className="line"
              style={{ originX: 0 }}
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.9, ease: EASE } },
              }}
            />

            {/* Extra info */}
            <motion.div className="stats-container" variants={staggerParent(0.1)}>
              <Stat name="Placement Fee" value="≤ 8%" />
              <Stat name="To community" value="25%" />
              <Stat name="Guarantee" value="3 mo." />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Container */}
        <motion.div
          className="right-container"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
        >
          <img src={HandshakeImage} alt="Handshake" />
        </motion.div>
      </div>
    </section>
  );
}
