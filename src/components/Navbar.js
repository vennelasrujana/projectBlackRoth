import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header className="main-navbar">
        <div className="nav-left">
          <Link to="/">BlackRoth</Link>
        </div>

        <div className="nav-right">
          <button className="get-started">Get Started</button>
          <button className="search-toggle" onClick={toggleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="hamburger" onClick={toggleMenu}>&#9776;</button>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <div id="menuOverlay" className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <nav className="menu-links">
          <button onClick={closeMenu}>Platforms</button>
          <button onClick={closeMenu}>Industries</button>
          <button onClick={closeMenu}>Careers</button>
          <button onClick={closeMenu}>About</button>
        </nav>
      </div>

      {/* Search Overlay */}
      <div id="searchOverlay" className={`search-overlay ${isSearchOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={toggleSearch}>&times;</button>
        <input type="text" placeholder="Start typing to search" className="search-input" />
        <div className="popular-searches">
          <span>POPULAR SEARCHES</span>
          <button>Foundry</button>
          <button>Gotham</button>
          <button>Apollo</button>
          <button>Ontology</button>
          <button>Artificial Intelligence (AI)</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
