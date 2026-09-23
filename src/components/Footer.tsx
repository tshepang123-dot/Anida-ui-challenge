import BenefitItem from './BenefitItem';


const HOURS = [
  { day: 'Mardyay', time: '17.00 cm x17' },
  { day: 'Tlaudey', time: '13.60 cm x17' },
  { day: 'Wendnesday', time: '19.00 km x11' },
  { day: 'Thaurey', time: '13.00 km x11' },
];

const QUICK_LINKS = ['About us', 'Our menu', 'Reservations', 'Contact us'];

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container footer__grid">
        <div className="footer__hello">
          <div className="footer__cherries" />
            <img
            src="/cherry.png"
            alt="Orange Juice"
            className="cherry__image"
          />
          
          <span className="footer__badge">Hello.</span>
        </div>

        <div className="footer__column">
          <h3>Our Menu Benefit</h3>
          <div className="footer__benefits">
            <BenefitItem icon="fresh" label="Fresh" description="Plays orand an inontaries." />
            <BenefitItem icon="vitamin" label="Vitamin" description="Nispen non procens." />
            <BenefitItem icon="organic" label="Ore anic" description="Towagoles wentuls." />
          </div>
        </div>
        

        <div className="footer__column">
          <h3>Opening Hours</h3>
          <ul className="footer__hours">
            {HOURS.map((slot) => (
              <li key={slot.day}>
                <span>{slot.day}</span>
                <span>{slot.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h3>Quick Links</h3>
          <ul className="footer__links">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a href="#home">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;