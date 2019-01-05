import React from "react";
import Header from "../navbar";
import Footer from "../footer";

const About = () => {
  return (
    <div>
      <Header d="active"/>
      <main>
        <section className="explanation">
          <div className="container">
            <div className="title-wrapper">
              <h3 className="center-align font-header">
                Apa itu <span className="teal-text">Savesteps</span> ?
              </h3>
            </div>
            <div className="desc">
              <p className="center-align" style={{ fontSize: "1.1em" }}>
                Savesteps adalah website untuk menggalang dana dan berdonasi
                untuk membantu korban bencana alam. Website ini juga memberikan
                edukasi tentang cara pencegahan dan mengatasi bencana alam.
              </p>
            </div>
          </div>
        </section>
        <section className="team" style={{ textAlign: "center" }}>
          <div className="container">
            <p className="team-name">Tap to style title bujank</p>
            <div className="row">
              <div className="col s12 l4">
                <img
                  src="./img/18556542_1890187391205068_1526875521162203573_o.jpg"
                  alt
                  className="teritiary-header--profile-photo"
                />
                <p className="text-black">Bagus Ridho Samodra</p>
                <p className="text-blue">This is email addr</p>
              </div>
              <div className="col s12 l4">
                <img
                  src="./img/p-min.jpg"
                  alt
                  className="teritiary-header--profile-photo"
                />
                <p className="text-black">Rachmat Kurniawan</p>
                <p className="text-blue">This is email addr</p>
              </div>
              <div className="col s12 l4">
                <img
                  src="img/bg4.png"
                  alt
                  className="teritiary-header--profile-photo"
                />
                <p className="text-black">Rakandhiya Daanii Rachmanto</p>
                <p className="text-blue">This is email addr</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default About;
