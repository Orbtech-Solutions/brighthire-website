import Button from '../../../../components/buttons/button.jsx';
import HandshakeImage from '../../../../assets/media/images/handshake.jpg';
import './top-banner.css';

function Stat({ name, value }) {
  return (
    <div className="stat">
      <p>{name}</p>
      <h3>{value}</h3>
    </div>
  );
}

export default function TopBanner() {
  return (
    <section className="top-banner">
      <div className="section-inner">
        {/* Left Container */}
        <div className="left-container">
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
              <Button variant="secondary">Become a Founding Client</Button>
              <Button variant="secondary-ghost">Learn How it Works</Button>
            </div>
            <hr className="line" />

            {/* Extra info */}
            <div className="stats-container">
              <Stat name="Placement Fee" value="≤ 8%" />
              <Stat name="To community" value="25%" />
              <Stat name="Guarantee" value="3 mo." />
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="right-container">
          <img src={HandshakeImage} alt="Handshake" />
        </div>
      </div>
    </section>
  );
}
 