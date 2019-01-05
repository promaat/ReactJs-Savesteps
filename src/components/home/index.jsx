import React from "react";
import Header from "../header-main";
import Footer from '../footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="about" className=" about">
          <div className="container">
            <h4 className="center teal-text">How We Works</h4>
            <p className="center grey-text">
              Kita tidak hanya menyelamatkan orang tapi juga masa depan
            </p>
            <div className="row">
              <div className="col s12 m5 l5 about__img">
                <img src="img/victim1.png" alt="Child" width="80%" />
              </div>
              <div className="col s12 m7 l7 about__desc">
                <div className="col s6">
                  <i className="teal-text material-icons  large">
                    {" "}
                    announcement{" "}
                  </i>
                  <h6 className="grey-text"> Stay UpToDate</h6>
                  <p>
                    Artikel kami yang stay update mengikuti perkembangan teknologi saat ini
                  </p>
                </div>
                <div className="col s6">
                  <div className="scrollspy" id="about" />
                  <i className="material-icons teal-text large"> assessment </i>
                  <h6 className="grey-text"> Edukasi </h6>
                  <p>
                    Kami menyediakan artikel yang menarik dan mudah dimengerti sehingga pembaca
                    cepat mengerti apa yang perlu dipersiapkan dalam menghadapi pasca dan pra bencana.
                  </p>
                </div>
                <div className="col s6">
                  <i className="material-icons teal-text large"> lock_outline </i>
                  <h6 className="grey-text">Aman dan Terpercaya</h6>
                  <p>
                    Dana donasi aman dan terverifikasi, kami berkerjasama dengan pemerintah setempat dalam hal
                    penyaluran donasi.
                  </p>
                </div>
                <div className="col s6">
                  <i className="material-icons teal-text large"> alarm_on </i>
                  <h6 className="grey-text">Praktis</h6>
                  <p>
                    Mari jadi relawan, anda tidak perlu terjun langsung ke lapangan. 
                    Bantu dengan ikut berdonasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="donatur center-align">
          <h4 className="center teal-text">Donatur Yang Bergabung</h4>
          <p className="grey-text">
            Bantu saudaramu , Jarak tidak menghalangi untuk membantu
          </p>
          <div className="row">
            <div className="col s12 m6 l8">
              <div className="card-panel">
                <div
                  className
                  id="chartContainer"
                  style={{ height: "300px", width: "100%" }}
                />
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card-panel teal lighten-1 white-text center donatur__card">
                <i className="material-icons medium">people</i>
                <h5>Monthly Donature</h5>
                <small>Average</small>
                <h3 className="count">500</h3>
                <div className="progress grey lighten">
                  <div className="determinate white" style={{ width: "40%" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="article" className="community article center-align">
          <h4 className="teal-text center">Artikel Pra &amp; Pasca Bencana</h4>
          <p className="grey-text">Prepare now, Survive Tomorrow</p>
          <div className="row">
            <div className="col s12 l4">
              <div className="card article__card--wrapper">
                <div className="card-image ">
                  <img src="img/bg4.png" alt className="article__card1" />
                </div>
                <div className="card-content">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur quidem ullam, consectetur atque deleniti quod
                    quaerat incidunt amet soluta qui?
                  </p>
                </div>
                <div className="card-action">
                  <Link to="/article" className="teal-text waves-effect waves-light">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col s12 l4">
              <div className="card article__card--wrapper">
                <div className="card-image ">
                  <img src="img/bg5.png" alt className="article__card1" />
                </div>
                <div className="card-content">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur quidem ullam, consectetur atque deleniti quod
                    quaerat incidunt amet soluta qui?
                  </p>
                </div>
                <div className="card-action">
                  <Link to="#!" className="teal-text">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col s12 l4">
              <div className="card article__card--wrapper">
                <div className="card-image ">
                  <img src="img/bg6.png" alt className="article__card1" />
                </div>
                <div className="card-content">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur quidem ullam, consectetur atque deleniti quod
                    quaerat incidunt amet soluta qui?
                  </p>
                </div>
                <div className="card-action">
                  <Link to="#!" className="teal-text">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
