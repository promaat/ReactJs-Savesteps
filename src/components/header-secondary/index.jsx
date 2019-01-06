import React from "react";
import { Link } from "react-router-dom";
import SideNav from '../sidenav';
const headerSecondary = () => {
  return (
    <div className="white">
      <header className="secondary-header">
        <div className>
          <nav className="white">
            <div className="nav-wrapper">
              <div className="container">
                <Link to="/" className="brand-logo">
                  <img className="logo" src="img/pp.png" alt />
                </Link>
                <SideNav color="grey-text"/>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <Link to="/" className="grey-text">
                      Home
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="/donasi" className="grey-text">
                      Donasi
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="grey-text">
                      {" "}
                      About Us{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default headerSecondary;
