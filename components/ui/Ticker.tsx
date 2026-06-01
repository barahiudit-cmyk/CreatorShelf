import React from 'react';

const Ticker = () => {
  const items = [
    "AUTO REFRESHED",
    "INSTAGRAM READY",
    "SHAREABLE PORTFOLIO",
    "MOBILE FRIENDLY",
    "BRAND READY",
    "AUTO REFRESHED"
  ];

  return (
    <footer className="creatorshelf-ticker container-fluid">
      <div className="ticker-wrapper">
        <ul className="creatorshelf-ticker-list">
          {[...items, ...items].map((item, idx) => (
            <li key={idx}>
              {item}
              <span className="ticker-dot">•</span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Ticker;