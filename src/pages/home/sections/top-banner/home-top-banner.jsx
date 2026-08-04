import Button from '../../../../components/buttons/button.jsx';
import HandshakeImage from '../../../../assets/media/images/barista_cashier.jpg';
import './home-top-banner.css';

import { motion } from "motion/react";

function Stat({ name, value }) {
  return (
    <motion.div
      className="stat"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p>{name}</p>
      <h3>{value}</h3>
    </motion.div>
  );
}

export default function TopBanner() {
  return (
    <section className="top-banner banner-primary">
      <div className="section-inner">

        {/* Left Container */}
        <motion.div
          className="left-container"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            staggerChildren: 0.12
          }}
        >

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span>Not just a hire.</span> A community investment.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Work-ready graduates placed in your business — and 25% of every retainer funds your community.
          </motion.p>

          <motion.div
            className="buttons-container"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >

            <div className="buttons-row">
              <Button link="/contact" variant="secondary">
                Become a Founding Client
              </Button>

              <Button link="/how-it-works" variant="secondary-ghost">
                Learn How it Works
              </Button>
            </div>

            <hr className="line" />

            <motion.div
              className="stats-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Stat name="Placement Fee" value="≤ 8%" />
              <Stat name="To community" value="25%" />
              <Stat name="Guarantee" value="3 mo." />
            </motion.div>

          </motion.div>

        </motion.div>

        {/* Right Container */}
        <motion.div
          className="right-container"
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: 0.25,
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <img src={HandshakeImage} alt="Handshake" />
        </motion.div>

      </div>
    </section>
  );
}