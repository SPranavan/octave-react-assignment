import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import '../../App.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="header-container">
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="header-nav-item nav-item">
                  <Link to="Home" className="header-nav-item-link nav-link fw-bold navLink">
                    Home
                  </Link>
                </li>
                <li className="header-nav-item nav-item">
                  <Link to="About" className="header-nav-item-link nav-link fw-bold navLink">
                    About Us
                  </Link>
                </li>
                <li className="header-nav-item nav-item">
                  <Link to="Contact" className="header-nav-item-link nav-link fw-bold navLink">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
}

export default Header;