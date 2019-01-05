import React from "react";
import { Link } from "react-router-dom";
const headerTeritiary = () => {
  return (
    <header className="teritiary-header">
      <div className>
        <nav className="transparent z-depth-2">
          <div className="nav-wrapper">
            <div className="container">
              <Link to="/" className="brand-logo">
                <img className="logo" src="img/pp.png" alt />
              </Link>
              <a
                className="button-collapse right"
                data-activates="mobile-nav"
              >
                <i className="material-icons white-text">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/" className="white-text">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/donasi" className="white-text">
                    Donasi
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="white-text">
                    {" "}
                    About Us{" "}
                  </Link>
                </li>
              </ul>
              <ul className="side-nav" id="mobile-nav">
                <li>
                  <Link to="/" className="grey-text">
                    Home
                  </Link>
                </li>
                <li>
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
      <div className="teritiary-header--news">
        <div className="row">
          <div className="col s12 l6 offset-l3 center-align">
            <h5 className="white-text">News</h5>
            <h2 className="white-text">4 Tips Hadapi Banjir</h2>
            <a
              href="#article"
              className="teal grey-text text-lighten-1 btn-floating pulse scroll-icon center-align"
            >
              <i className="material-icons large">arrow_drop_down_circle</i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default headerTeritiary;
