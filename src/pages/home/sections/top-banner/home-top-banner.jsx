import Button from '../../../../components/buttons/button.jsx';
import HandshakeImage from '../../../../assets/media/images/handshake.jpg';
import './home-top-banner.css';

function Stat({ name, value, className = '' }) {
  return (
    <div className={`stat animate-pop-in in-view ${className}`}>
      <p>{name}</p>
      <h3>{value}</h3>
    </div>
  );
}

export default function TopBanner() {
  return (
    <section className="top-banner banner-primary">
      <div className="section-inner">
        {/* Left Container — slides in from the left on load */}
        <div className="left-container animate-slide-left in-view">
          {/* Text */}
          <h1>
            <span>Not just a hire.</span> A community investment.
          </h1>
          <p>
            Work-ready graduates placed in your business — and 25% of every retainer funds your community.
          </p>

          <div className="buttons-container">
            {/* Buttons */}
            <div className="buttons-row">
              <Button link="/contact" variant="secondary">Become a Founding Client</Button>
              <Button link="/how-it-works" variant="secondary-ghost">Learn How it Works</Button>
            </div>
            <hr className="line" />

            {/* Stats — staggered pop-in after the slide */}
            <div className="stats-container">
              <Stat name="Placement Fee" value="≤ 8%" className="delay-300" />
              <Stat name="To community" value="25%"  className="delay-500" />
              <Stat name="Guarantee"    value="3 mo." className="delay-700" />
            </div>
          </div>
        </div>

        {/* Right Container — slides in from the right on load */}
        <div className="right-container animate-slide-right in-view delay-200">
          <img src={HandshakeImage} alt="Handshake" className="float-bob" />
        </div>
      </div>
    </section>
  );
}
 