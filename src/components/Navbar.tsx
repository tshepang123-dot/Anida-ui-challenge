import { useState } from 'react';


const NAV_LINKS = ['Home', 'Menu', 'Pages', 'Blog', 'Contact us'];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2C7 2 3 6 3 11c0 5 4 9 9 11 5-2 9-6 9-11 0-5-4-9-9-9z"
              stroke="var(--color-orange)"
              strokeWidth="1.5"
            />
            <path d="M12 6v10M8 10c2 0 4 1 4 4M16 10c-2 0-4 1-4 4" stroke="var(--color-orange)" strokeWidth="1.2" />
          </svg>
          <span>
            Anida <em>Dedelay</em>
          </span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'is-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#home">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button className="navbar__icon-btn" aria-label="Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
          </button>
          <button className="navbar__icon-btn" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.5 3h2l2.6 12.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
            </svg>
          </button>

          <button
            className="navbar__toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;