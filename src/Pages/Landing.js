import React, { useState } from 'react';
import Home from '../Components/Home';
import Aboutus from '../Components/Aboutus';
import Blogs from '../Components/Blogs';
import Contact from '../Components/Contact';
import Coureer from '../Components/Coureer';
import TieUp from '../Components/TieUp';
import { useMediaQuery } from 'react-responsive';

const Landing = () => {
  const [selectedItem, setSelectedItem] = useState('Dashboard');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsMenuOpen(false); // Close menu when an item is clicked
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case 'Fleet':
        return <Aboutus />;
      case 'Processing':
        return <Blogs />;
      case 'Insight':
        return <Contact />;
      case 'Settings':
        return <Coureer />;
      case 'Team':
        return <TieUp />;
      default:
        return <Home />; // Default to Home
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        {isMobile ? (
          <div>
            <div className="mobile-navbar">
              <img src="Logo.png" alt="logo" className="logo" />
              <button
  className="menu-toggle"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  style={{
    fontSize: '1.5rem', // Adjust size as needed
    padding: '10px', // Optional: Add padding for a larger clickable area
  }}
>
  ☰
</button>

            </div>
            {isMenuOpen && (
              <ul className="menu-overlay">
                <li
                  className={`nav-item ${selectedItem === 'Dashboard' ? 'active' : ''}`}
                  onClick={() => handleItemClick('Dashboard')}
                >
                  Home
                </li>
                <li
                  className={`nav-item ${selectedItem === 'Fleet' ? 'active' : ''}`}
                  onClick={() => handleItemClick('Fleet')}
                >
                  About Us
                </li>
                <li
                  className={`nav-item ${selectedItem === 'Settings' ? 'active' : ''}`}
                  onClick={() => handleItemClick('Settings')}
                >
                  Careers
                </li>
                <li
                  className={`nav-item ${selectedItem === 'Team' ? 'active' : ''}`}
                  onClick={() => handleItemClick('Team')}
                >
                  Tie-up
                </li>
                <li
                  className={`nav-item ${selectedItem === 'Processing' ? 'active' : ''}`}
                  onClick={() => handleItemClick('Processing')}
                >
                  Blog
                </li>
                <li
                  className={`nav-item ${selectedItem === 'Insight' ? 'active' : ''}`}
                  onClick={() => handleItemClick('Insight')}
                >
                  Contact
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className="desktop-navbar">
            <ul className="navbar-links">
              <li className="nav-items">
                <img src="Logo.png" alt="logo" className="logo" />
              </li>
              <li
                className={`nav-item ${selectedItem === 'Dashboard' ? 'active' : ''}`}
                onClick={() => handleItemClick('Dashboard')}
              >
                Home
              </li>
              <li
                className={`nav-item ${selectedItem === 'Fleet' ? 'active' : ''}`}
                onClick={() => handleItemClick('Fleet')}
              >
                About Us
              </li>
              <li
                className={`nav-item ${selectedItem === 'Settings' ? 'active' : ''}`}
                onClick={() => handleItemClick('Settings')}
              >
                Careers
              </li>
              <li
                className={`nav-item ${selectedItem === 'Team' ? 'active' : ''}`}
                onClick={() => handleItemClick('Team')}
              >
                Tie-up
              </li>
              <li
                className={`nav-item ${selectedItem === 'Processing' ? 'active' : ''}`}
                onClick={() => handleItemClick('Processing')}
              >
                Blog
              </li>
              <li
                className={`nav-item ${selectedItem === 'Insight' ? 'active' : ''}`}
                onClick={() => handleItemClick('Insight')}
              >
                Contact
              </li>
            </ul>
          </div>
        )}
         <ul className="navbar-link">
              <li className="nav-items">
                <img src="/profile.png" alt="profile" className="svg" />
              </li>
              <li className="nav-items">
                <img src="/like.png" alt="like" className="svg" />
              </li>
              <li className="nav-items" style={{ paddingRight: '15px' }}>
                <img src="/cart.png" alt="shop" className="svg" />
              </li>
            </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">{renderComponent()}</div>
    </div>
  );
};

export default Landing;
