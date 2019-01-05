import React from "react";
import { Link } from 'react-router-dom';

const Header = ({ header }) => {
  return (
    <header className="main-header ">
      <nav className="white">
        <div className="nav-wrapper ">
          <div className="container">
            <Link to="/" className="brand-logo">
              <img src="img/pp.png" alt="Logo" className="logo" />
            </Link>
            <a
              className="button-collapse right"
              data-activates="mobile-nav"
            >
              <i className="material-icons grey-text darken-2">menu</i>
            </a>
            <ul className="right hide-on-med-and-down grey-text">
              <li className="active">
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
                <a href="#article" className="grey-text">
                  Article
                  <span className="badge new">1</span>
                </a>
              </li>
              <li>
                <Link to="/about" className="grey-text">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <ul className="side-nav view" id="mobile-nav">
          <li className="active">
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
                <Link to="/article" className="grey-text">
                  Article
                </Link>
              </li>
              <li>
                <Link to="/about" className="grey-text">
                  About Us
                </Link>
              </li>
          </ul>
        </div>
      </nav>
      <div className="showcase container">
        <div className="row">
          <div className="col s12 main-text l6">
            <h2 className="font-header teal-text">Bantu &amp; Donasi</h2>
            <p>
              Jangan putus asa terhadap kemanusiaan. Kemanusiaan bagaikan
              samudera. Beberapa tetes air kotor tidak mampu mengotori seluruh
              samudera.
            </p>
            <br />
            <Link
              to="#about"
              className="btn btn-large white black-text waves-effect"
            >
              Donasi Sekarang
            </Link>
            <a
              href="#about"
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

export default Header;
