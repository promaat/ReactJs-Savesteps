import React from "react";

const Login = () => {
  return (
    <main>
      <section className="form-register">
        <div className="row">
          <div className="col s12 l6 ">
            <div className="slider form-register--full-height">
              <ul className="slides">
                <li>
                  <img src="./img/1.png" />
                  {/* CENTER ALIGN CAPTION */}
                  <div className="caption center-align">
                    <h3 className="black-text">Center Caption</h3>
                    <h5 className="light grey-text text-lighten-3">
                      Lorem ipsum dolor sit amet.
                    </h5>
                  </div>
                </li>
                <li>
                  <img src="./img/2.png" />
                  {/* LEFT ALIGN CAPTION */}
                  <div className="caption left-align">
                    <h3>Left Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </div>
                </li>
                <li>
                  <img src="./img/3.png" />
                  {/* RIGHT ALIGN CAPTION */}
                  <div className="caption right-align">
                    <h3>Left Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </div>
                </li>
                <li>
                  <img src="./img/4.png" />
                  {/* RIGHT ALIGN CAPTION */}
                  <div className="caption center -align">
                    <h3>Left Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col s12 l6">
            <img src="img/pp.png" className="logo-form" alt />
            <p className="flow-text center-align">
              <b>Welcome back</b> <span className="teal-text">#orangbaik</span>
            </p>
            <p
              className="grey-text center-align"
              style={{ marginTop: "-20px" }}
            >
              Ayo Login &amp; dan Donasi
            </p>
            <form action="submit" className="form-login">
              <div className="input-field">
                <input type="email" id="email" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input type="password" id="pass" />
                <label htmlFor="pass">Password</label>
              </div>
              <a href="#!" className="btn-form btn white-text">
                {" "}
                LOGIN{" "}
              </a>
            </form>
            <footer
              className="page-footer white center-align"
              style={{ backgroundColor: "#262626" }}
            >
              <p className="grey-text">COPYRIGHT © SAVESTEPS 2018</p>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
