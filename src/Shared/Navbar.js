

import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiTimes} from 'react-icons/ti';
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link  to="/home#top" className="nav-logo">
            S<span className="coloredtext">A</span>RV
            <i className="fas fa-code"></i>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                
                to="/home#top"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/home#about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/home#project"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/home#contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
             {click ?<TiTimes /> : <GiHamburgerMenu className= "fa-bars"/> }

          </div>
        </div>
      </nav>
    </>
  );
}

export default  Navbar;