import React from 'react';


const DownloadAndMenu = () => {
  return (
    <div className="download-menu-container">
      {/* Download Our Apps Section */}
      <div className="download-section">
        <h2>Download Our Apps</h2>
        <p>You can reach us & place Online Orders much easier than ever before! Download our apps using one of the links below.</p>
        <div className="app-links">
          <a href="#" className="app-link">App Store</a>
          <a href="#" className="app-link">Google Play</a>
        </div>
      </div>

      {/* Our Menu Section */}
      <div className="menu-section">
        <h2>Our Menu</h2>
        <div className="menu-items">
          <div className="menu-item">BROAST</div>
          <div className="menu-item">PIZZA</div>
          <div className="menu-item">PASTA</div>
          <div className="menu-item">BURGERS</div>
          <div className="menu-item">FISH</div>
          <div className="menu-item">MANDI</div>
        </div>
      </div>
    </div>
  );
}

export default DownloadAndMenu;
