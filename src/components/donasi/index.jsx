import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
const Donasi = () => {
  return (
    <div>
      <Navbar b="active" />
      <main>
        <section className="ajakan main-text">
          <div className="row">
            <div className="col l10 offset-l1">
              <div className="card horizontal anggota__card">
                <div className="card-image ">
                  <img
                    className="ajakan__img--responsive"
                    src="img/bg3.jpg"
                    alt
                    style={{ borderRadius: "4px" }}
                  />
                </div>
                <div className="card-content">
                  <div className="chip">
                    <img src="img/bg1.jpg" alt /> #JadiDonatur
                  </div>
                  <h4 className="grey-text text-darken-2">
                    Yuk join jadi donatur, selamatkan masa depan mereka
                  </h4>
                  <h6 className="grey-text">
                    Mari jadi donatur dan bantu saudara anda, selamatkan masa
                    depan mereka dengan menjadi donatur, sekecil apapun donasi
                    anda pasti bermanfaat bagi mereka
                  </h6>
                  <br />
                  <a
                    href="#!"
                    className="btn waves-effect waves-light teal white-text"
                  >
                    Kuy Jadi Donatur
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="jumlah-anggota">
          <div className="container">
            <div className="row">
              <div className="col s12 l4">
                <h5 className="white-text">Donatur Aktif</h5>
                <h3 className="count white-text">500</h3>
                <p className="white-text">500 Donatur aktif telah bergabung</p>
              </div>
              <div className="col s12 l4">
                <h5 className="white-text">Jumlah Orang Terbantu</h5>
                <h3 className="count white-text">1000</h3>
                <p className="white-text">1000 orang bahagia</p>
              </div>
              <div className="col s12 l4">
                <h5 className="white-text">Jumlah Donatur</h5>
                <h3 className="count white-text">2000</h3>
                <p className="white-text">2000 Orang telah jadi donatur</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bencana">
          <h4 className="teal-text text-darken-2 center">Pilih Donasi</h4>
          <p className="grey-text center-align">
            Pilih Campaign Yang ingin anda bantu
          </p>
          <br />
          <div className="container">
            <div className="row">
              <div className="col s12 l4">
                <div className="card article__card--wrapper">
                  <div className="card-image ">
                    <img src="img/bg4.png" alt className="article__card1" />
                  </div>
                  <div className="card-content">
                    <div className="card-title">
                      <p className="text-flow">Tsunami Selat Sunda</p>
                    </div>
                    <a href="#!">
                      Terverifikasi
                      <i className="material-icons right chip-size ">
                        check_circle
                      </i>
                    </a>
                    <div className="progress grey lighten-2">
                      <div
                        className="determinate blue lighten-2"
                        style={{ width: "40%" }}
                      />
                    </div>
                    <div className="left">
                      <small className="grey-text"> Terkumpul </small> <br />
                      <small className="grey-text">Rp.</small>
                      <small className="grey-text count"> 200000 </small>
                    </div>
                    <div className="right">
                      <small className="grey-text"> Sisa Hari </small> <br />
                      <small className="grey-text count">100</small>
                      <small className="grey-text"> Hari </small>
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="col s12 l4">
                <div className="card article__card--wrapper">
                  <div className="card-image ">
                    <img src="img/bg5.png" alt className="article__card1" />
                  </div>
                  <div className="card-content">
                    <div className="card-title">
                      <p className="text-flow">Anak Krakatau</p>
                    </div>
                    <a href="#!">
                      Terverifikasi
                      <i className="material-icons right chip-size ">
                        check_circle
                      </i>
                    </a>
                    <div className="progress grey lighten-2">
                      <div
                        className="determinate red lighten-2"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="left">
                      <small className="grey-text"> Terkumpul </small> <br />
                      <small className="grey-text">Rp.</small>
                      <small className="grey-text count"> 1000000 </small>
                    </div>
                    <div className="right">
                    <small className="grey-text"> Sisa Hari </small> <br />
                      <small className="grey-text count">10</small>
                      <small className="grey-text"> Hari </small>
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="col s12 l4">
                <div className="card article__card--wrapper">
                  <div className="card-image ">
                    <img src="img/bg6.png" alt className="article__card1" />
                  </div>
                  <div className="card-content">
                    <div className="card-title">
                      <p className="text-flow">Banjir Jakarta</p>
                    </div>
                    <a href="#!">
                      Terverifikasi
                      <i className="material-icons right chip-size ">
                        check_circle
                      </i>
                    </a>
                    <div className="progress grey lighten-2">
                      <div
                        className="determinate blue lighten-2"
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div className="left">
                      <small className="grey-text"> Terkumpul </small> <br />
                      <small className="grey-text">Rp.</small>
                      <small className="grey-text count"> 10000 </small>
                    </div>
                    <div className="right">
                    <small className="grey-text"> Sisa Hari </small> <br />
                      <small className="grey-text count">50</small>
                      <small className="grey-text"> Hari </small>
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            
              
            
            </div>
            <div className="col l6 offset-l5 center-align">
              <a href="#!" className=" btn white-text waves-effect waves-light">
                LOAD MORE
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donasi;
